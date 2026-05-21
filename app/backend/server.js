const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, email, company, interest, message } = req.body;

  if (!name || !email || !interest || !message) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  const msg = {
    to: process.env.RECEIVER_EMAIL, // Your receiving email address
    from: {
      email: process.env.SENDER_EMAIL,
      name: "SA'DA Holding"
    },
    subject: `New Partnership Request from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company || 'N/A'}
      Interest: ${interest}
      
      Message:
      ${message}
    `,
    html: `
      <h3>New Partnership Request</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Company:</strong> ${company || 'N/A'}</li>
        <li><strong>Interest:</strong> ${interest}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
