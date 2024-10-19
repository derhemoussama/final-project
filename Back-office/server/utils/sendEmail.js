//sendEmail.js

const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, verificationUrl, username) => {
  try {
    // Create transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // Define email options with HTML content
    let mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: to,
      subject: subject,
     
        html : `<div style='height: 150px; width: 100%;'>
              <h3>Hi dear, ${username}</h3>
              <p>
                <div>
                  welcome to <span style='font-weight: bold;'>Jewel Junction</span>,
                  Click the button below to Verify your email
                  <br>
                  <a href="${verificationUrl}" style="background-color: #0072bb; border: none; color: white; padding: 10px 15px; margin-top: 10px; border-radius: 6px; text-align: center; text-decoration: none;display: inline-block;">
                    Verify
                  </a>
                </div>
              </p>
            </div>`,

    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendEmail;