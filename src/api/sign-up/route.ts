import { sendVerificationEmail } from "@/helper/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";


export async function POST(request:Request) {
    await dbConnect()

   try {
    const{ username,email,password}=await request.json()

    const existingUserVerifiedByUsername = await UserModel.findOne({
        username,
        isVerified:true
    })
    
    if (existingUserVerifiedByUsername){
        return Response.json({
            success:false,
            message:"username is already taken"
        },{status:400})
    }
    
   } catch (error) {
    console.error("errror registering user",error)
    return Response.json({
        success:false,
        message:"Error in  registering user"

    },{
        status:500
    })
   }
    
}