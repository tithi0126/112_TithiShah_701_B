// fsOperations.js
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

async function fsFunctions() {
    const testDir = path.join(__dirname, 'testDir');
    const newDir = path.join(testDir, 'newDir');
    const filePath = path.join(testDir, 'example.txt');
    const newFilePath = path.join(testDir, 'renamed.txt');

    try {
        if (!fs.existsSync(testDir)) {
            await fsPromises.mkdir(testDir, { recursive: true });
            console.log('Created test directory');
        }

        await fsPromises.mkdir(newDir);
        console.log('Created subdirectory');

        await fsPromises.writeFile(filePath, 'Hello FS Module!');
        console.log('File written successfully');

        const data = await fsPromises.readFile(filePath, 'utf8');
        console.log('File content:', data);

        await fsPromises.appendFile(filePath, '\nAdditional content');
        console.log('Content appended');

        await fsPromises.rename(filePath, newFilePath);
        console.log('File renamed');

        const files = await fsPromises.readdir(testDir);
        console.log('Directory contents:', files);

        const stats = await fsPromises.stat(newFilePath);
        console.log('File stats:', {
            size: stats.size,
            modified: stats.mtime,
            isFile: stats.isFile()
        });

        await fsPromises.copyFile(newFilePath, path.join(testDir, 'copy.txt'));
        console.log('File copied');

        fs.watch(newFilePath, (eventType, filename) => {
            console.log(`File ${filename} changed: ${eventType}`);
        });
        console.log('Watching for file changes...');

        // await fsPromises.rm(testDir, { recursive: true });
        // console.log('Test directory removed');

    } catch (err) {
        console.error('FS operation failed:', err);
    }
}

fsFunctions();