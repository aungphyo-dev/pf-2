"use server"

import supabase from "@/services/supabase";
import {MailSchema, MailType, ProjectsSchema} from "@/types";

export const getProjectByLimit = async (limit : number = 4 )=>{
    const {data} = await supabase.from('projects').select("*").order('id', { ascending: false }).limit(limit);
    const validateFields = ProjectsSchema.safeParse(data)
    if (!validateFields.success){
        throw new Error("Something went wrong!")
    }
    return validateFields.data;
}

export  const sendMail =async (prevstate : null | string,formData : FormData) : Promise<string> => {
    const validateFields = MailSchema.safeParse({
        name : formData.get("name"),
        email : formData.get("email"),
        message : formData.get("message"),
        question : formData.get("question")
    })
    if (!validateFields.success) {
        throw  new Error("Something went wrong")
    }
    const res = await fetch("https://formspree.io/f/mrgvybye",{
        method : "POST",
        body : JSON.stringify({...validateFields.data}),
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/json",
        },
        cache : "no-cache"
    })
    if(!res.ok){
        throw new Error("Something went wrong")
    }
    return "Successfully sent your"
}