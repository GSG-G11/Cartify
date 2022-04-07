const { join } = require('path');

const serveRoot = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'));
};

module.exports = {
  serveRoot,
};
