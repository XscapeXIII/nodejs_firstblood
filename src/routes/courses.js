const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

//Lưu ý: tuyến đường nó match từ trên xuống
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show);

module.exports = router;
