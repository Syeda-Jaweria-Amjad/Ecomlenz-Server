const express = require("express");
const app = express();
const AuthRouter = require("./Routes/AuthRouter");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
require("./Modals/db");

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, // Allows cookies to be sent
  })
);
app.use(cookieParser());
app.use("/auth", AuthRouter);

app.get("/ok", (req, res) => {
  res.send("Welcome to nodeJs app");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
