const { Router } = require("express");
const User = require("../models/user");
const { startCron, stopCron } = require("../utils/cron.js");
const router = Router();

router.post("/", async (req, res) => {
  const { name, email, preference } = req.body;
  try {
    const user = await User.create({ name, email, preference });
    startCron(user);
  } catch (error) {}
  return res.redirect("/");
});

router.post("/unsubscribe", async (req, res) => {
  const email = req.body.email;
  const user = await User.find({ email });
  if (!user) return res.redirect("/");
  stopCron(user);
  await User.deleteMany({ email });
  return res.redirect("/");
});

module.exports = router;
