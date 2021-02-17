// require("dotenv").config();

// const nodemailer = require("nodemailer");
// const log = console.log;

// // Step 1
// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL || "shelbyrobison14@gmail.com", // TODO: your gmail account
//     pass: process.env.PASSWORD || "Riley912!", // TODO: your gmail password
//   },
// });

// // Step 2
// let mailOptions = {
//   from: "shelbyrobison14@gmail.com", // TODO: email sender
//   to: "shelbyrobison14@gmail.com", // TODO: email receiver
//   subject: "Nodemailer - Test",
//   text: "Wooohooo it works!!",
// };

// // Step 3
// transporter.sendMail(mailOptions, (err, data) => {
//   if (err) {
//     return log("Error occurs");
//   }
//   return log("Email sent!!!");
// });

const nodemailer = require("nodemailer");
require("dotenv").config();

//node mailer
// app.post("/api/send", (req, res) => {
// create reusable transporter object using the default SMTP transport
//   console.log("email sent");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL || "shelbyrobison14@gmail.com", // TODO: your gmail account
    pass: process.env.PASSWORD || "Riley912!", // TODO: your gmail password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// setup email data with unicode symbols
let mailOptions = {
  from: "shelbyrobison14@gmail.com", // TODO: email sender
  to: "shelbyrobison14@gmail.com", // TODO: email receiver
  subject: "Nodemailer - Test",
  text: "Wooohooo it works!!",
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.render("contact", { msg: "Email has been sent" });
});
// });
