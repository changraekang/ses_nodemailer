const nodemailer = require("nodemailer");
const AWS = require("aws-sdk");
AWS.config.loadFromPath(__dirname + "/aws_config.json");

const transporter = nodemailer.createTransport({
  SES: new AWS.SES({
    apiVersion: "2010-12-01",
  }),
});
console.log("안녕");
transporter.sendMail(
  {
    from: "no-reply@moviequizrae.fun",
    to: "storkcr@gmail.com",
    subject: "AWS SES TEST",
    text: "안녕하세요",
  },
  (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log(info);
  }
);
