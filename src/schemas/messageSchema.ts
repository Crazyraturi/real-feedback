import {boolean, z} from  "zod"

export const messageSchema = z.object({
    
    content: z.
    string()
    .min(10,{message:"content must be atleast of ten character"})
    .max(300,{message:"content must be no longer  than 300 character"})

})

