const express = require("express");
const {
  getPusula,
  getVote,
  getLatestPusulas,
} = require("../controllers/pusulaController");

const pusulaRouter = express.Router();

pusulaRouter.route("/").get(getPusula).post(getVote);
pusulaRouter.route("/latest").get(getLatestPusulas);

module.exports = pusulaRouter;
