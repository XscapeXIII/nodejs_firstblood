const express = require("express");
const router = express.Router();

const newController = require("../app/controllers/NewsController");

//Lưu ý: tuyến đường nó match từ trên xuống
router.get("/:slug", newController.show);
router.get("/", newController.index);

module.exports = router;
