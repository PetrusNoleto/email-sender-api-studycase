import { createConnection, createGmailConnection } from '../utils/email/createConnection';
import { sendEmail } from '../utils/email/sendEmail';


export class CreateEmail{
    
    private user:string;
    private password:string;
    private receiverEmail:string;
    constructor(defaultUser = "", defaultpPassowrd = "",defaultReceiverEmail=""){
        this.user= defaultUser
        this.password = defaultpPassowrd
        this.receiverEmail = defaultReceiverEmail
    }
    public async hotmailInsecure(smtpUser:string,smptPassoword:string,receiverEmail:string){  
        this.user= smtpUser
        this.password = smptPassoword
        this.receiverEmail = receiverEmail
        try{
            const connect = await createConnection({smtpHost:"smtp.office365.com",smtpPort:587,smtpSecureConnection:false,smtpUser:this.user,smtpPassword:this.password})
            const connectData = connect
            if(connect !== undefined && connect !== null){
                const send = sendEmail(connectData,this.user,this.receiverEmail,"teste","ola mundo", `teste2232`)
            }else{
                throw new Error("smtp connection failed");
            }   
        }catch(error){
            console.log(error)
        }
    }
    public async hotmailSecure(smtpUser:string,smptPassoword:string,receiverEmail:string){
        this.user= smtpUser
        this.password = smptPassoword
        this.receiverEmail = receiverEmail
        try{
            const connect = await createConnection({smtpHost:"smtp.office365.com",smtpPort:465,smtpSecureConnection:true,smtpUser:this.user,smtpPassword:this.password})
            const connectData = connect
            if(connect !== undefined && connect !== null){
                const send = sendEmail(connectData,this.user,this.receiverEmail,"teste","ola mundo", `teste2232`)
            }else{
                throw new Error("smtp connection failed");
            }   
        }catch(error){
            console.log(error)
        }
    }
    public async gmail(smtpUser:string,smptPassoword:string,receiverEmail:string){  
        this.user= smtpUser
        this.password = smptPassoword
        this.receiverEmail = receiverEmail
        console.log(this.user,this.password,this.receiverEmail)

        try{
            const connect = await createGmailConnection(this.user,this.password)
            const connectData = connect
            if(connect !== undefined && connect !== null){
                const send = await sendEmail(connectData,this.user,this.receiverEmail,"teste","ola mundo", `teste2232`)
                return(send)
            }else{
                throw new Error("smtp connection failed");
            }   
        }catch(error){
           return(error)
        }
    }
}