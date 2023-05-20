const Aday = require("../models/adayModel");

exports.createAday = async (req, res) => {
  const aday = await Aday.create(req.body);
  res.json(aday);
};
