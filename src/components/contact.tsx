"use client"
import {ChangeEvent, useEffect, useState} from "react";
import {SubmitButton} from "@/components/index";
import {useFormState} from "react-dom";
import {sendMail} from "@/actions";
const Contact = () => {
    const [state,action] = useFormState(sendMail,"")
    const [contactForm, setContactForm] = useState({name:"", email:"", question:"", message:""})
    console.log(state)
    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactForm(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    useEffect(() => {
        if (state === "Successfully send your"){
            setContactForm({name:"", email:"", question:"", message:""})
        }
    }, [state]);
    return(
                <div className="w-full pt-[5rem]">
                    <div className="sticky top-0 z-20 mb-4 w-full bg-slate-950/75 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact Me</h2></div>
                    <form action={action} className='p-lg:p-5 w-full'>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={contactForm.name} onChange={handleChange} type="text" name="name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Name</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={contactForm.email} onChange={handleChange} type="eamil" name="email" id="floating_eamil" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_eamil" className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <input value={contactForm.question} onChange={handleChange} type="text" name="question" id="floating_question" className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_question" className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Question</label>
                        </div>
                        <div
                            className="relative z-0 w-full mb-6 group">
                            <textarea value={contactForm.message}  onChange={handleChange} rows={5} name="message"  className="resize-none block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required ></textarea>
                            <label  className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                        </div>
                        <SubmitButton/>
                    </form>
                </div>
    )
}
export default Contact