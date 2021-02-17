var express = require("express");
var router = express.Router();
var blog_controller = require("../controllers/blog.controller");

router.get("/list", function (req, res, next) {
  blog_controller.listBlog(req, res, next);
});

router.post("/create", function (req, res, next) {
  blog_controller.insertBlog(req, res, next);
});

router.delete("/:id", function (req, res, next) {
  blog_controller.deleteBlog(req, res, next);
});

module.exports = router;
