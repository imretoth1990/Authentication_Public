const nodemailer = require("nodemailer");

export async function sendConfirmationEmail(email, code, username) {
  const link = `http://localhost:3000/confirm?code=${code}&user=${username}`;

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "emmie.larkin36@ethereal.email",
      pass: "kFUXdRaZNNYzn8JB7m",
    },
  });

  /* const info = await transporter.sendMail({
    from: "emmie.larkin36@ethereal.email",
    to: email,
    subject: "Confirm registration",
    html: `<h2>Hello ${username}, </h2> <br /> <p>Click the link below to confirm your registration.</p> <br /> <a href=${link}>Link</a> <br /> <p>The link expires in 5 minutes.</p> <p>Regards, <br /> The ReactorS</p>`,
  }); */
}
