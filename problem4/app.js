const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const folderToZip = path.join(__dirname, 'folderToZip');
const outputZipFile = path.join(__dirname, 'compressedFolder.zip');

const output = fs.createWriteStream(outputZipFile);

const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`ZIP created successfully!`);
  console.log(`Total size: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

archive.directory(folderToZip, false);

archive.finalize();