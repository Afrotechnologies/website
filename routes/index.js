var express = require('express'),
    path = require('path'),
    router = express.Router();

router.get('*', function (req, res) {
  //res.setHeader("Content-Type", "application/octet-stream",);
  //res.sendFile(path.join(__dirname, '../', 'build/es6-unbundled/index.html'));
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

module.exports = router;