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

function mergeImports(importStatements) {
  const namedImports = {};
  const namespaceImports = new Set();
  const defaultImports = new Set();

  // Regex to match different types of imports
  const regex =
    /import\s+(?:(\{\s*([^}]*)\s*\})|\*\s+as\s+(\w+)|(\w+))\s+from\s+'([^']*)';/;

  importStatements.forEach((statement) => {
    const match = statement.match(regex);
    if (match) {
      const [, named, namedGroup, namespace, defaultImport, source] = match;
      // Skip imports from the same directory
      if (source.startsWith('./') && !source.startsWith('../')) {
        return;
      }
      if (named) {
        // Split named imports and remove whitespace
        const names = namedGroup.split(',').map((name) => name.trim());
        if (!namedImports[source]) {
          namedImports[source] = new Set();
        }
        names.forEach((name) => namedImports[source].add(name));
      } else if (namespace) {
        namespaceImports.add(`import * as ${namespace} from '${source}';`);
      } else if (defaultImport) {
        defaultImports.add(`import ${defaultImport} from '${source}';`);
      }
    }
  });

  // Merge named imports
  const mergedNamedImports = Object.entries(namedImports).map(
    ([source, names]) => {
      return `import { ${Array.from(names)
        .filter((n) => n.trim().length > 0)
        .join(', ')} } from '${source}';`;
    }
  );

  // Convert Sets to Arrays
  const mergedNamespaceImports = Array.from(namespaceImports);
  const mergedDefaultImports = Array.from(defaultImports);

  // Combine all imports into a single array
  return [
    ...mergedDefaultImports,
    ...mergedNamespaceImports,
    ...mergedNamedImports,
  ];
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

    let fileImports = [];
    let fileContent = '';
    for (const file of filteredFiles) {
      const filePath = path.join(directoryPath, file);
      const { result, imports } = await filterImports(filePath);
      if (imports) fileImports.push(...imports);
      fileContent += result + '\n';
    }

    const cleanedImports = mergeImports(fileImports);

    writeFileContent(fileContent, targetFile, cleanedImports);
  } catch (error) {
    console.error('Error:', error);
  }
}

function writeFileContent(sourceFile, targetFile, imports) {
  const writableStream = fs.createWriteStream(targetFile, { flags: 'a' });
  writableStream.write(imports.join('\n') + '\n');
  writableStream.write(sourceFile + '\n');
  writableStream.end();
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
