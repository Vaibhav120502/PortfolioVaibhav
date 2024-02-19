const express = require("express");
const { mailSender } = require("../controllers/portfolioController");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", mailSender);

// /export
module.exports = router;
