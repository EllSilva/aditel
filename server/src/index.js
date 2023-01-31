const nodemailer = require("nodemailer");

const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_CONFIG.user, // generated ethereal user
    pass: SMTP_CONFIG.pass, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  }
});

 async function run(){

  const mailSend = transporter.sendMail({ 
    from: '"Fred Foo 👻" <kirsten63@ethereal.email>', // sender address
    to: `l67@ethereal.email`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  })
console.log(mailSend)
 }

 
run();
