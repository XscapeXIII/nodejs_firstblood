const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

//Lưu ý: tuyến đường nó match từ trên xuống
router.use("/search", siteController.search);
router.use("/", siteController.index);

module.exports = router;
