const mongoose = require("mongoose");
const cron = require("node-cron");
const sendMail = require("../utils/sendMail");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    preference: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

module.exports = User;
