var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
  router.get('/api/health', function(req, res, next) {
    res.json({
      app: "project-3",
      health: 200
    });
});

router.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;
