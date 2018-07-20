const path = require('path');
const fs = require('fs');

module.exports = {
  resolve: {
    alias: fs.readdirSync('./packages').reduce((alias, name) => {
      alias[name] = path.resolve(__dirname, './packages/' + name);
      return alias;
    }, {}),
  },
};