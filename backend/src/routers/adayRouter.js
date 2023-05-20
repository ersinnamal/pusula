const express = require("express");
const { createAday } = require("../controllers/adayController");

const adayRouter = express.Router();

adayRouter.route("/").post(createAday);

module.exports = adayRouter;
