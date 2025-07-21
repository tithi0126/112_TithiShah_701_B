const fs = require('fs');
const util = require('util');

console.log('File path:', __filename);
console.log('Directory path:', __dirname);

console.log('\n=== Process Information ===');
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Current working directory:', process.cwd());
console.log('Environment variables:', Object.keys(process.env).length, 'variables found');

const buf = Buffer.from('Hello Global Objects', 'utf8');
console.log('\nBuffer content:', buf);
console.log('Buffer to string:', buf.toString());

console.log('\nTimers demonstration:');
setTimeout(() => {
    console.log('This executes after 1 second');
}, 1000);

const interval = setInterval(() => {
    console.log('This executes every 2 seconds');
}, 2000);

setTimeout(() => {
    clearInterval(interval);
    console.log('Stopped the interval');
}, 6000);

console.error('This is an error message');
console.warn('This is a warning');
console.table([{ a: 1, b: 2 }, { a: 3, b: 4 }]);

const myURL = new URL('https://example.com/path?name=Tithi&age=21');
console.log('\nURL parts:');
console.log('Hostname:', myURL.hostname);
console.log('Path:', myURL.pathname);
console.log('Query params:', myURL.searchParams.get('name'));

console.log('\nUtility globals:');
console.log('Current directory files:', fs.readdirSync('.'));
console.log('Is 10 > 5?', util.format('%d > %d is %s', 10, 5, 10 > 5));

module.exports = {
    showGlobals: () => {
        console.log('\nGlobals available in Node.js:', Object.keys(global));
    }
};

require('./globalsHelper')();