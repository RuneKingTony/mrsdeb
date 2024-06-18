const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const gmailUsername = 'anthonynkwa92@gmail.com';
const gmailPassword = 'Werewolf$090';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUsername,
    pass: gmailPassword,
  },
});

function sendEmail({ email, subject, message }) {
  const mailOptions = {
    from: gmailUsername,
    to: email,
    subject: subject,
    html: `
      <p>${message}</p>
      <p>Best Regards</p>
    `,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject('An error has occurred');
      } else {
        console.log('Email sent: ' + info.response);
        resolve('Email sent successfully');
      }
    });
  });
}

app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;
  try {
    const result = await sendEmail({ email, subject, message });
    res.send(result);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send('An error occurred while sending the email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
