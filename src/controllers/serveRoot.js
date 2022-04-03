const { join } = require('path');

const serveRoot = (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'bulid', 'index.html'));
};

module.exports = {
  serveRoot,
};
