import nodemailer from 'nodemailer'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, subject, message } = req.body || {}
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true' || false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  })

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL || 'wilmerpolanco13@gmail.com',
    subject: `[Portfolio Contact] ${subject || 'New message'}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${message}</p>`
  }

  try{
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ ok: true })
  }catch(err){
    console.error('Mail error', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
