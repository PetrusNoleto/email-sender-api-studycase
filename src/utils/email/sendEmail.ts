import { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function sendEmail(connection: Transporter<SMTPTransport.SentMessageInfo>,senderEmail:string,receiverEmail:string,subject:string,text:string,html:string) {
    try {
      const info = await connection.sendMail({
        from: senderEmail,
        to: receiverEmail,
        subject: subject,
        text: text,
        html: html,
      });
      return info.messageId
    } catch (error) {
      return(error);
    }
  }