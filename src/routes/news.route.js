const express = require("express");
const router = express.Router();

const newController = require("../app/controllers/NewsController");

//Lưu ý: tuyến đường nó match từ trên xuống
router.use("/:slug", newController.show);
router.use("/", newController.index);

module.exports = router;
