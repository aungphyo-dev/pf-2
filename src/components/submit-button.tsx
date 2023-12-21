"use client"
import { useFormStatus } from 'react-dom'
import {Loader2} from "lucide-react";
const SubmitButton = () => {
    const {pending} = useFormStatus();
    return (
        <button disabled={pending}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 flex justify-center items-center">
            {pending ? <Loader2 className="animate-spin"/> : "Send Message"}
        </button>
    );
};

export default SubmitButton;