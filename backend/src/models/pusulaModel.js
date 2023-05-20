const { default: mongoose } = require("mongoose");

const pusulaSchema = new mongoose.Schema({
  adays: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Aday",
  },
  votes: {
    type: [Number],
  },
});

const Pusula = mongoose.model("Pusula", pusulaSchema);

module.exports = Pusula;
