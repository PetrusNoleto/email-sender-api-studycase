import nodemailer from 'nodemailer';


interface createConnectionProps{
    smtpHost:string,
    smtpPort:number,
    smtpSecureConnection:boolean,
    smtpUser:string,
    smtpPassword:string
}




export async function createConnection({smtpHost,smtpPort,smtpSecureConnection,smtpUser,smtpPassword}:createConnectionProps){
    const connection = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecureConnection,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      });  
      return connection 
}

export async function createGmailConnection(smtpUser:string,smtpPassword:string){
    const connection = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      });  
      return connection 
}