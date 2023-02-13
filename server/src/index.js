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
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.aditel.us",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'atavira@aditel.us', // your cPanel email address
      pass: 'Satfrotas@', // your cPanel email password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Farhan from Coding Day - Testing" <atavira@aditel.us>', // sender address
    to: "yourreceiveremail1@gmail.com,yourreceiveremail2@domain.com", // list of receivers
    subject: "This is Coding Day Send Email Example", // Subject line
    text: "Coding Day?", // plain text body
    html: "<h1>Coding Day</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);