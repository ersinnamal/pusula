const Aday = require("../models/adayModel");
const Pusula = require("../models/pusulaModel");

let prev = [];
const pusula = { adays: [], votes: [] };
let adays = [];

const setAdays = async () => {
  adays = await Aday.find();
};

const setPusula = async () => {
  pusula.expireTime = Date.now() + process.env.INTERVAL_SECS * 1000;

  if (pusula.adays.length === 0) {
    pusula.adays.push(adays[0], adays[1]);
    pusula.votes.push(0, 0);
    return;
  }

  if (process.env.NODE_ENV === "dev") {
    const votePercRand = Math.trunc(Math.random() * 100);
    pusula.votes[0] += votePercRand;
    pusula.votes[1] += 100 - votePercRand;
  }

  // TEMP FOR TIED
  if (pusula.votes[0] === pusula.votes[1]) {
    pusula.votes[0] += 1;
  }

  const totalVotes = pusula.votes.reduce((sum, v) => v + sum, 0);
  prev = {
    adays: [...pusula.adays],
    votes: pusula.votes.map((v) => v / totalVotes),
  };

  Pusula.create({
    adays: pusula.adays.map((aday) => aday._id),
    votes: pusula.votes,
  });

  let newAday;
  do {
    const randomIndex = Math.trunc(Math.random() * adays.length);
    newAday = adays[randomIndex];
  } while (pusula.adays.find((aday) => newAday.image === aday.image));

  pusula.votes[0] > pusula.votes[1]
    ? (pusula.adays[1] = newAday)
    : (pusula.adays[0] = newAday);

  pusula.votes = [0, 0];
};

setAdays()
  .then(() => setPusula())
  .then(() => setInterval(setPusula, process.env.INTERVAL_SECS * 1000));

exports.getPusula = (req, res) => {
  res.json({
    prev,
    adays: pusula.adays,
    remainingTime: pusula.expireTime - Date.now(),
  });
};

exports.getLatestPusulas = async (req, res) => {
  const lastFivePusulas = await Pusula.find()
    .sort({ _id: -1 })
    .limit(5)
    .populate("adays");
  res.json({ status: "success", body: lastFivePusulas });
};

exports.getVote = (req, res) => {
  pusula.votes[req.body.vote] += 1;
  res.json({ status: "success" });
};
