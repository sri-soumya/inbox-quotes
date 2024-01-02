const cron = require("node-cron");
const User = require("../models/user");
const sendMail = require("./sendMail");
const mp = new Map();

async function startCron(user) {
  const job = cron.schedule(
    user.preference,
    async function () {
      sendMail(user);
    },
    {
      timezone: "Asia/Kolkata",
    }
  );

  job.start();
  mp[this._id] = job;
  //   console.log(user._id, user.preference);
}

async function stopCron() {
  mp[this._id].stop();
}

async function reRunTasks() {
  const users = await User.find({});
  users.forEach((user) => {
    startCron(user);
  });
}

module.exports = { startCron, stopCron, reRunTasks };
