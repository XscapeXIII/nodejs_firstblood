const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

//Lưu ý: tuyến đường nó match từ trên xuống
router.get("/search", siteController.search);
router.get("/", siteController.index);

module.exports = router;
