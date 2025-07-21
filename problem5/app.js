const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const zipFilePath = path.join(__dirname, 'compressedFolder.zip');
const outputPath = path.join(__dirname, 'extractedFiles');

if (!fs.existsSync(zipFilePath)) {
    console.error('Error: ZIP file not found at', zipFilePath);
    process.exit(1);
}

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
}

const zip = new AdmZip(zipFilePath);

zip.extractAllTo(outputPath, true);

console.log(`Successfully extracted to ${outputPath}`);

const extractedFiles = zip.getEntries().map(entry => entry.entryName);
console.log('Extracted files:', extractedFiles);