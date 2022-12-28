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
    from: "no-reply@lckfantasy.com",
    to: "stork_kcr@naver.com",
    subject: "메일 테스트",
    text: "https://www.lckfantasy.com/signin?token=c91e6379-36e8-46e2-aa70-1a8f2966035b&email=h@naver.com",
  },
  (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log("성공");
    console.log(info);
  }
);
