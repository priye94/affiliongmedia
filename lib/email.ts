import nodemailer from "nodemailer";

export async function sendEmail(data: any) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: data.email,
    to: process.env.EMAIL,
    subject: `New Lead from Affilion G Media`,
    html: `
      <h3>New Client Inquiry</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Message:</b> ${data.message}</p>
    `,
  });
}