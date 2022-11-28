const nodemailer = require("nodemailer");

export function sendConfirmationEmail(link) {
  console.log(link);
  /* const transporter = nodemailer.createTransport({
    service: "Yahoo",
    auth: {
      user: "nodemailer_reactors@yahoo.com",
      pass: 'hello1234!"',
    },
  });

  const options = {
    from: "nodemailer_reactors@yahoo.com",
    to: "imretoth1990@gmail.com",
    subject: "Confirm your registration",
    text: `Click on the link below to confirm your registration. \n \n ${link}`,
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Sent: " + info.response);
  }); */
}
