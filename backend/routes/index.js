const axios = require("axios");
var express = require("express");
const APIController = require("../controllers/APIController");
const IndexController = require("../controllers/IndexController");
var router = express.Router();

/* GET home page. */
router.get("/", IndexController.home);
router.get("/getAPI", APIController.getAPI);
router.get("/showAPI", APIController.showAPI);


module.exports = router;
