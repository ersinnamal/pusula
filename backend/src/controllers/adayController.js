const Aday = require("../models/adayModel");

exports.createAday = async (req, res) => {
  try {
    const aday = await Aday.create(req.body);
    res.json(aday);
  } catch {
    res.json({ status: "error" });
  }
};

exports.getAdays = async (req, res) => {
  const adays = await Aday.find();
  res.json(adays);
};
