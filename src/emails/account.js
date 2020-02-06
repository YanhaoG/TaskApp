const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'yanhaogong@gmail.com',
    subject: 'Congratulations & Thanks for joining in!',
    text: `Welcome to the app, ${name}, Let me know if you have any further advice.`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'yanhaogong@gmail.com',
    subject: 'Thanks for using our app!',
    text: `Goodbye, ${name}, Hoping you had fun with us.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
