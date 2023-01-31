const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/send', (req, res) => { res.send('heelo kim Worde') })

app.post('/', async (req, res) => { 
 
const { email } = req.body;
 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'carmel67@ethereal.email', // generated ethereal user
      pass: 'JMxdJn5aZws3bSeN4z', // generated ethereal password
    },
  });

  const msg = { 
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }
  // send mail with defined transport object
  const info = await transporter.sendMail(msg);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.send('email enviada')
 })

app.listen(port, () => console.log(`Running on port ${port}!`))
