var nodemailer = require("nodemailer");
const APP_URL = process.env.APP_URL;

const fonts = `<link href="https://fonts.googleapis.com/css?family=EB+Garamond|Source+Serif+Pro&display=swap" rel="stylesheet">`;
const header = `<html> <head> ${fonts} </head> <body>`;
const footer = `</body></html>`;
const greeting = `${header} Greetings from <span style="font-weight: bold; font-size:18px ;color: #1973E8">Note-App</span>,<br />`;
var message = `Click on <a href="${APP_URL}/auth/activate?identity=<identity>&info=<info>">this</a> link to activate user.<br /><br />`;
const thank = `<address style="color: #bbbbbb; font-size: 16px">
Thanks,<br/>
Web App
</address>
${footer}`;

var sender = null;
var mail = null;

/*
RESPONSE :

{ accepted: [ 'devdatt747@gmail.com' ],
  rejected: [],
  envelopeTime: 724,
  messageTime: 610,
  messageSize: 316,
  response: '250 2.0.0 OK  1567231296 g12sm2278116pfq.151 - gsmtp',
  envelope:
   { from: 'debadattameher747@gmail.com',
     to: [ 'devdatt747@gmail.com' ] },
  messageId: '<91624be7-2307-b043-d20c-7873e6e36702@gmail.com>' }
*/

module.exports.createInstance = function() {
  sender = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "webapplication747@gmail.com",
      pass: "programming747"
    }
  });
};

module.exports.buildEmail = function(
  recipient = "devdatt747@gmail.com",
  userId,
  token
) {
  message = message.replace("<identity>", userId).replace("<info>", token);
  mail = {
    from: "webapplication747@gmail.com",
    // to: `${recipient}`,
    to: `devdatt747@gmail.com`,
    subject: "Web App: Activation Link",
    html: `${greeting} ${message} ${thank}`
  };
};

module.exports.send = function() {
  sender
    .sendMail(mail)
    .then(info => {
      console.log("Mail Sent successfully");
    })
    .catch(err => {
      console.error("Failed.");
      console.error(err);
    });
};
