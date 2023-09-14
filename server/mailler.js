const nodemailer = require("nodemailer")
let date = new Date().toLocaleString();


let saccountNumber;
let sName;


const useraccountNumber = (accountNumber) => {
  saccountNumber = accountNumber;
}

const userName = (FullName) => {
  sName = FullName;
}

const customermail = async (emails) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.email',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAIL_PASSWORD
    }
  })

  let inform = await transporter.sendMail({
    from: process.env.EMAIL,
    to: emails,
    subject: "Interswitch group",
    html: `<div
          style="
            background: #f0f0f0;
            transition: 0.5s;
            font-family: Courier New monospace;
            padding: 20px;
          ">
          <h2 style="text-align: center">
          Dear ${sName}. <br /> welcome to Interswitch group.<br />
            THANKS FOR CREATING AN ACCOUNT WITH US.
          </h2>
          <h3 style="text-align: center">
            Welcome to our site. <br />
            Your account was successfully created at <span>${date}</span>.
          </h3>
          <h4 style="text-align: center">
            Contact 07032437182 or Email: bakareoluwatobi22@gmail.com <br />
            for WEB SITE DEVELOPMENT
          </h4>
        </div>`,
  })
  console.log(inform);
}
const adminmail = async (emails) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.email",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.MAIL_PASSWORD
    }
  })
}

module.exports = { customermail, useraccountNumber, userName, adminmail }