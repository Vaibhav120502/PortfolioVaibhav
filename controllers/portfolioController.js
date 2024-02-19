const nodemailer = require("nodemailer");

const mailSender = async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    });

    let info = await transporter.sendMail({
      from: `<${process.env.MAIL_USER}>`,
      to: `${process.env.MAIL_USER}`,
      subject: "Regarding Mern Portfolio App",
      html: `
      <h5>Detail Information</h5>
      <ul>
        <li><p>Name : ${name}</p></li>
        <li><p>Email : ${email}</p></li>
        <li><p>Message : ${msg}</p></li>
      </ul>
    `,
    });
    console.log(info.response);
    return res.status(200).send({
      success: true,
      message: "Your Message Send Successfully",
    });
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
module.exports = { mailSender };
