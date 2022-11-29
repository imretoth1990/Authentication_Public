const nodemailer = require('nodemailer')

export async function sendConfirmationEmail(value) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'emmie.larkin36@ethereal.email',
      pass: 'kFUXdRaZNNYzn8JB7m',
    },
  })

  const info = await transporter.sendMail({
    from: 'emmie.larkin36@ethereal.email',
    to: value.email,
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: `<b>Hello world? ${value.username}</b>`,
  })

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
