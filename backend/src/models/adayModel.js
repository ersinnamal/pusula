const { default: mongoose } = require("mongoose");

const adaySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Aday = mongoose.model("Aday", adaySchema);

module.exports = Aday;
