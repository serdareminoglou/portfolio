import { createTransport } from 'nodemailer';

const transporter = createTransport({
    host: 'smtp.office365.com', // Outlook SMTP server
    port: 587, // Port for TLS/STARTTLS
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'maksimovic.i@outlook.com', // Your Outlook email address
        pass: 'your-email-password-or-app-password', // Your Outlook email password or app password
    },
});

const mailOptions = {
    from: 'Your Name <your-email@example.com>',
    to: 'recipient@example.com',
    subject: 'Subject of your email',
    text: 'Plain text body',
    html: '<p>HTML body</p>',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
