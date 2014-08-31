var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
   res.json({data : req.body.options});
    console.log(req.body.options);
});

module.exports = router;
