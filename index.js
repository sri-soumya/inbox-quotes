require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");
const app = express();
const userRoute = require("./routes/user");
const { reRunTasks } = require("./utils/cron");

const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI, {
    autoIndex: true,
  })
  .then(() => console.log("MongoDB connected"));

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
reRunTasks();

app.get("/", (req, res) => {
  res.render("subscribe");
});
app.get("/unsubscribe", (req, res) => {
  res.render("unsubscribe");
});
app.use("/user", userRoute);
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
