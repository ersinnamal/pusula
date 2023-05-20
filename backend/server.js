const { default: mongoose } = require("mongoose");
const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGODB_STRING, () =>
  console.log("DB connection established...")
);

app.listen(
  process.env.DEVELOPMENT_MODE ? process.env.PORT_DEV : process.env.PORT_PROD,
  () => console.log("Server is running...")
);
