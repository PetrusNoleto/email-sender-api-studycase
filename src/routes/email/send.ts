import { Router,Request,Response } from "express";
import { Email } from "../../controllers/emailController";

export const routeSendNewEmail =Router()


routeSendNewEmail.post('/email/send/gmail/',async(req:Request,res:Response)=>{
    const {smtpUser,smtpPassword,receiverEmail} = req.body
    
    if(!smtpUser && !smtpPassword && !receiverEmail){
        res.status(400).json({code:5616,message:"dados da requisição incorretas", data:null})
    }else{
        const email =  new Email()
        const sendEmail =  await email.gmail(smtpUser,smtpPassword,receiverEmail)
        return res.status(200).json({code:2201,message:"email send", data:sendEmail})  
    }
})