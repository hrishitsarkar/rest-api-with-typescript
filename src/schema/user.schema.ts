import { object,string } from "zod";

export const createUserSchema = object({
    body:object({
        name:string(
        )
       
    })
})