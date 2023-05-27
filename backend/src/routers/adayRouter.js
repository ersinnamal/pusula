const express = require("express");
const { createAday, getAdays } = require("../controllers/adayController");

const adayRouter = express.Router();

adayRouter.route("/").post(createAday).get(getAdays);

module.exports = adayRouter;
