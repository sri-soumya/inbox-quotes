require("dotenv").config();

const nodemailer = require("nodemailer");
const generateQuote = require("./generateQuote");
const quoteTemplate = require("./quoteTemplate");

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  secureConnection: false,
  auth: {
    user: "inboxquotes1@gmail.com",
    pass: process.env.APP_PASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

async function sendMail(user) {
  try {
    const quote = await generateQuote();
    const html = quoteTemplate(user.name, quote[0].content, quote[0].author);
    // console.log(quote[0].content);
    const info = await transporter.sendMail({
      from: "Inbox Quotes <inboxquotes1@gmail.com>",
      to: user.email,
      subject: "Quote in your inbox",
      html: html,
    });

    // console.log("Message sent: %s", info.messageId, user.name);
  } catch (error) {
    // console.log(error);
  }
}

module.exports = sendMail;
