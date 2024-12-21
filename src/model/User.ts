import mongoose, { Schema, Document } from "mongoose";


export interface Message extends Document{
    content : string
    createdAt:Date
}


const MessageSchema: Schema<Message> = new Schema({

    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }

})


export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isVerified:boolean,
    isAcceptingMessage:Boolean,
    messages:Message[]
}


const UserSchema :Schema<User> = new Schema({
     
    username:{
        type:String,
        required:[true,"username is requied"],
        trim:true,
        unique:true,
        match:[/.+\@.+\..+/,'please use a valid email address']

    },
    email:{
        type:String,
        required:[true,"email is requied"],
        unique:true,
        match:[/.+\@.+\..+/,'please use a valid email address']

    },
    password:{
        type:String,
        required:[true,"password is requied"],

    },
    verifyCode:{
        type:String,
        required:[true,"verifyCode is requied"],

    },
    isVerified:{
        type:Boolean,
        default:false
    }
    ,
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verifyCodeExpiery is requied"],

    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    }
    ,
    messages:[MessageSchema]



})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User> ("User",UserSchema)

export default UserModel;