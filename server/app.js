const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

 
 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    host: "mail.aditel.us",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'atavira@aditel.us', // generated ethereal user
      pass: 'Satfrotas@', // generated ethereal password
    },
  });

  transporter.sendMail({
    from: '"Farhan from Coding Day - Testing" < geral.jlsystem@gmail.com>', // sender address
    to: "atavira@aditel.us", // list of receivers
    subject: "This is Coding Day Send Email Example", // Subject line
    text: "Coding Day?", // plain text body
    html: "<h1>Coding Day</h1>", // html body
  }).then(message => {
   console.log(message);
  }).catch(err => {
    console.log(err);
  })