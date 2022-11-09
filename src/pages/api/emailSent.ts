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
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_KEY,
    },
  };

  const transporter = nodemailer.createTransport(smtpConfig);

  const mailData1 = {
    from: "portaldev@portaldev.digital",
    to: `vop1234@hotmail.com; biacamille2019@gmail.com;`,
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

  const mailData2 = {
    from: "portaldev@portaldev.digital",
    to: `${email}`,
    subject: `MENTORIA PDEV | DE: ${name}`,
    text: message,
    html: [
      `<div style="background-color: #f5f5f5; padding: 20px;">`,
      `<h1>Olá ${name},</h1>`,
      `<p>O portal dev agradece o seu contato!</p>`,
      `<p>Estaremos analisando o seu Repositório (${repository}) e te enviaremos um feedback respondendo este e-mail ou fazendo um vídeo no Youtube.</p>`,
      `<p>Caso seu feedback seja dado pelo Youtube, fica tranquilo que não iremos revelar sua identidade.</p>`,
      `<p>
      Agradecemos seu contato.<br>
      Equipe portal dev.
      </p>`,
      `<span styles="font-size: 10px;">Este e-mail foi enviado por ${email} através do site: portaldev.digital</span>`,
      `</div>`,
    ].join("\n"),
  };

  await transporter.sendMail(mailData1, function (err, info) {
    if (err) {
      console.log("err");
      console.log(err);
      return res.status(401).json({ message: "Email1 não enviado!" });
    } else {
      console.log("info");
      console.log(info);
      return res.status(401).json({ message: "Email1 não enviado!" });
    }
  });

  await transporter.sendMail(mailData2, function (err, info) {
    if (err) {
      console.log("err");
      console.log(err);
      return res.status(401).json({ message: "Email2 não enviado!" });
    } else {
      console.log("info");
      console.log(info);
    }
  });

  return res.status(200).json({ message: "Email enviado com sucesso!" });
}
