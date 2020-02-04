const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWecomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'yanhao-gong@hotmail.com',
    subject: 'Congratulations & Thanks for joining in!',
    text:
      'Welcome to the app, ${name}, Let me know if you have any further advice.'
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'yanhao-gong@hotmail.com',
    subject: 'Thanks for using our app!',
    text: 'Goodbye, ${name}, Hoping you had fun with us.'
  });
};

module.exports = {
  sendWecomeEmail,
  sendCancelEmail
};
