var express= require('express')
var router = express.Router();

router.use('/blog',require("./blog.route"));

module.exports = router