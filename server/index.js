const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => { res.send('heelo kim Worde') })

const SMTP_CONFIG = require("./config/smtp");


app.post('/sedmail', async (req, res) => {

  const { 
    email } = req.body;
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: true, // true for 465, false for other ports
    auth: {
      user: SMTP_CONFIG.user, // generated ethereal user
      pass: SMTP_CONFIG.pass, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    }
  });


  const msg = {
    // to: `${email}`,  list of receivers 
    from: 'atavira@aditel.us',// sender address
    to: 'atavira@aditel.us', //"atavira@aditel.us" list of receivers
    replyTo: `${email}`, //" responder para 
    subject: "Coding Day?", // Subject line
    text: "Coding Day?", // plain text body
    html: `	<div> 
         📧 ${email},
        <br>  
    </div>`, // html body
  }

  // send mail with defined transport object
  const info = await transporter.sendMail(msg).then(info => {
    res.send(info);
    console.log("Message sent: %s", info);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log("recebido" + res.message);
 
  }).catch(error => {
    res.send(error)  
    console.log('erro')
  });
  
 

})

// async..await is not allowed in global scope, must use a wrapper

app.listen(port, () => console.log(`Running on port ${port}!`))