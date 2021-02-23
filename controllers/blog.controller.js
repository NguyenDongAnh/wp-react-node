const mongoose = require("mongoose");
const Blog = mongoose.model("Blog");

exports.insertBlog = function (req, res, next) {
  var blog = new Blog();
  blog.author = req.body.author;
  blog.title = req.body.title;
  console.log(req.body)
  // console.log(req);
  blog.save((err, doc) => {
    if (err) {
      console.log(err);
      return res.json({ message: "Fail!" });
    } else {
      return res.status(200).json({ message: "Success!" });
    }
  });
};

exports.listBlog = function (req, res, next) {
  Blog.find({}, (err, doc) => {
    return res.json(doc);
  });
};

exports.deleteBlog = function (req, res, next) {
  console.log(req.body.id);
  Blog.findByIdAndRemove({ _id: req.body.id }, function (err, doc) {
    if (err) {
      console.log(err);
      return res.json({ message: "Fail!" });
    } else if (doc) {
      return res.status(200).json({ message: "Success!" });
    }
    return res.json({ message: "Fail!" });
  });
};
