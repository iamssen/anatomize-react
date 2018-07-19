const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'react': path.resolve(__dirname, 'src/react'),
      'shared': path.resolve(__dirname, 'src/shared'),
      'test': path.resolve(__dirname, 'src/test'),
    }
  }
}