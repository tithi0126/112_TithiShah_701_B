const fs = require('fs');
console.log('Custom Script 3: Directory Contents');
fs.readdirSync(__dirname).forEach(file => {
  console.log('-', file);
});