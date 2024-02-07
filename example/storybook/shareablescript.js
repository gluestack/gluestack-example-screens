const fs = require('fs');
const { Transform } = require('stream');

const transformer = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    let take;
    let obj;
    try {
      obj = chunk.toString();
    } catch (e) {}
    try {
      take = filterCondition(obj);
    } catch (e) {
      return callback(e);
    }
    return callback(null, take ? take : chunk);
  },
});
const filterCondition = (elem) => {
  if (elem) {
    return elem.replace(/export\s+const/g, 'const');
  }
  return false;
};

const getFiles = (dir, files = []) => {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (file !== 'shareable-code.tsx' && file.includes('stories') === false) {
        files.push(name);
      }
    }
  }
  return files;
};

const filesData = [
  {
    files: getFiles('./src/example-screens/dashboard'),
    dest: './src/example-screens/dashboard/shareable-code.tsx',
  },
  {
    files: getFiles('./src/example-screens/cards'),
    dest: './src/example-screens/cards/shareable-code.tsx',
  },
  {
    files: getFiles('./src/example-screens/chats'),
    dest: './src/example-screens/chats/shareable-code.tsx',
  },
];

function copyFiles(files, destinationFile) {
  const destStream = fs.createWriteStream(destinationFile, { flags: 'a' });
  files.forEach((file) => {
    const srcStream = fs.createReadStream(file);
    srcStream.pipe(destStream, { end: false });
    /* eslint-disable */
    srcStream.on('end', () => {
      console.log(`File ${file} copied successfully.`);
    });
    /* eslint-disable */
    srcStream.on('error', (err) => {
      console.error(`Error reading ${file}:`, err);
    });
  });
  /* eslint-disable*/
  destStream.on('finish', () => {
    console.log('All files are copied successfully.');
  });
  destStream.on('error', (err) => {
    console.error('Error writing to the destination file:', err);
  });
}

Promise.all(
  filesData.map((item) => {
    return copyFiles(item.files, item.dest);
  })
)
  .then(console.log('ALL FILES ARE COPIED'))
  .catch((error) => console.log(error, 'final error'));
