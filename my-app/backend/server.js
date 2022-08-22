const express = require("express");
const app = express();

const mongoose = require("mongoose");

const signUrl = require("./routes/SignUpRoute");
const loginUrl = require("./routes/LoginRoute");


const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log("DB connected !")
});


app.use(express.json());
app.use(cors());

app.use("/app", signUrl);
app.use("/app", loginUrl);


app.listen(4000, () => console.log("Server is running !"));
