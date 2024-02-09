const fs = require('fs');
const path = require('path');

const directoryPaths = [
  {
    directory: './src/example-screens/dashboard',
    targetFile: './src/example-screens/dashboard/sharableCode.tsx',
  },
  {
    directory: './src/example-screens/cards',
    targetFile: './src/example-screens/cards/sharableCode.tsx',
  },
  {
    directory: './src/example-screens/chats',
    targetFile: './src/example-screens/chats/sharableCode.tsx',
  },
];

// function to remove all the imports from the file
async function filterImports(file) {
  const data = await fs.promises.readFile(file, 'utf8');
  const imports = data.match(
    /import\s+((?:\*\s+as\s+[\w]+|{[^{}]*}|[\w\s,*]+))\s+(?:as\s+\w+\s+)?from\s+['"]([^'"]+)['"];/gm
  );
  const result = data.replace(
    /import\s+((?:\*\s+as\s+[\w]+|{[^{}]*}|[\w\s,*]+))\s+(?:as\s+\w+\s+)?from\s+['"]([^'"]+)['"];/gm,
    ''
  );
  return { result, imports };
}

async function getCodeFromFiles(directoryPath, targetFile) {
  try {
    const files = await fs.promises.readdir(directoryPath);

    const allowedExtensions = ['.tsx', '.jsx', '.ts', '.js'];
    const filteredFiles = files.filter((file) => {
      const extension = path.extname(file);
      const baseName = path.basename(file, extension);
      return (
        allowedExtensions.includes(extension) &&
        baseName !== 'shareable-code' &&
        !file.endsWith('.stories.tsx')
      );
    });
    // Create a writable stream for the target file
    const writableStream = fs.createWriteStream(targetFile, { flags: 'a' });

    // Iterate over filtered files
    let fileImports = [];
    for (const file of filteredFiles) {
      const filePath = path.join(directoryPath, file);
      const { result, imports } = await filterImports(filePath);
      fileImports = [...fileImports, ...imports];

      writableStream.write(`/*** ${file} ***/\n`);
      writableStream.write(result + '\n');
    }
    // Close the writable stream
    writableStream.end();
  } catch (error) {
    console.error('Error:', error);
  }
}

Promise.all(
  directoryPaths.map((item) => {
    return getCodeFromFiles(item.directory, item.targetFile);
  })
)
  .then(() => {
    // console.log('All files are copied successfully.');
  })
  .catch((err) => {
    console.error('Error copying files:', err);
  });
