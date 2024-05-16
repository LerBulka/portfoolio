import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Настройка Nodemailer транспорта (SMTP)
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465, // Порт для SSL
    secure: true,
    auth: {
      user: 'lera02@mail.ru', 
      pass: '3rieQKJhGyKUyQVpTtKV'
    }
  });

  // Опции для отправки электронного письма
  const mailOptions = {
    from: 'lera02@mail.ru',
    to: 'lera02@mail.ru', 
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Отправка электронного письма
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

export default router;
