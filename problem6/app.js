const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filePath) {
    try {
        await unlinkAsync(filePath);
        console.log(`Successfully deleted ${filePath}`);
    } catch (err) {
        console.error(`Error deleting file ${filePath}:`, err.message);
    }
}

const fileToDelete = './testFile.txt';
deleteFile(fileToDelete);