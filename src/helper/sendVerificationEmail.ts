import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/apiResponce";
import { promises } from "dns";


export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse> {
    try {
        
await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: email,
    subject: 'real-feedback | verification code',
    react: VerificationEmail({username,otp:verifyCode}),});
  
        return{ success:true,message:"verification mail send successfully"}
        
    } catch (error) {
        console.error("error sending verification email")
        return{ success:false,message:"failed to send verification mail"}
    }
    
}