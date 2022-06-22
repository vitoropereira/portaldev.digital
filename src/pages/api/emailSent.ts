import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface SubmitRequest {
  name: string;
  email: string;
  message: string;
  repository: string;
}

export default async function (req, res) {
  const { name, email, message, repository } = req.body as SubmitRequest;

  const smtpConfig: SMTPTransport.Options = {
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
      user: process.env.SENDINBLUE_USER,
      pass: process.env.SENDINBLUE_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(smtpConfig);

  const mailData = {
    from: "portaldev@portaldev.digital",
    to: "vop1234@hotmail.com; biacamille2019@gmail.com",
    subject: `MENTORIA PDEV | DE: ${name}`,
    text: message,
    html: [
      `<div style="background-color: #f5f5f5; padding: 20px;">`,
      `<h1>Nova Mentoria:</h1>`,
      `<p>Nome do solicitante: ${name}</p>`,
      `<p>Email do solicitante: ${email}</p>`,
      `<p>Repositório: ${repository}</p>`,
      `<p>Mensagem: ${message}</p>`,
      `</div>`,
    ].join("\n"),
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log("err");
      console.log(err);
    } else {
      console.log("info");
      console.log(info);
    }
  });

  return res.status(200).json({ message: "Email enviado com sucesso!" });
}
