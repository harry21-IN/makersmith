const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {  // Changed endpoint to /send-email
    const { name, email, phone, details } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  // Using env variables
            pass: process.env.EMAIL_PASS   // Using env variables
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'mail.makeitlabs@gmail.com',
        subject: 'User Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDetails: ${details}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Log the error details
            return res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
