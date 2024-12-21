import {z}  from 'zod'

export const usernameValidation = z
     .string()
     .min(3,'username  atleast have 3 character')
     .max(20,'username   must have less than 20 character')
     .regex(/^[a-zA-z0-9_]+$/,'username must not contain special charcter except underscore(_)')



export const signUpValidation = z.object({
  username: usernameValidation,
  email: z.string().email({message:"Invalid email address"}),
  password:z.string().min(6,{message:'password must be atleast have 6 character'})




})