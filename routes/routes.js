var express= require('express')
var router = express.Router();

router.use('/blog',require("./blog.route"));
router.use('/auth',require('./auth.route'));

module.exports = router