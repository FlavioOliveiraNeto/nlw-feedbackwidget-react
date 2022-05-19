import { MailAdapter, SendMailData } from "../mail-adaptert";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "19c2602aef74f8",
    pass: "1a8140206b79b8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Flavio de Oliveira Neto <flaviniska1@gmail.com>',
      subject,
      html: body,
    });
  };
}