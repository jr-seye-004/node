const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seyeyoussoupha4@gmail.com',
        pass: 'JUNI0RS3Y3'
    }
});

let mailOptions = {
    from: 'seyeyoussoupha4@gmail.com',
    to: 'juniorseye39@gmail.com',
    subject: 'Test Email from Node.js',
    text: 'Hello, this is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
