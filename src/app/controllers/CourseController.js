const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  //GET /course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  //GET /course/create
  create(req, res, next) {
    res.render("courses/create");
  }

  //Post /course/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDw3xwN1J6I3m4tX8TdIJSkOUh2Vg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});

    res.send("ADD SUCCESS");
  }
}

module.exports = new CourseController();