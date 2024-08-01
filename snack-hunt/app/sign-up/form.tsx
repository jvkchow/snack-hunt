"use client"
import { 
    Button,
    Input
} from "@nextui-org/react";
import React, { useState } from "react";

export const SignupForm = () => {
    
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        event.preventDefault();
        const { name, value } = event.target
        setInputs((prevState) => ({...prevState, [name]: value}));
        console.log("Signing up...")
    }

    return (
        <form onSubmit = { handleSubmit }>
        <div className="pt-6 w-96 flex flex-col items-center justify-center gap-4">
            <Input isRequired type="username" variant="bordered" label="Username" className="w-96"/>
            <br/>
            <Input isRequired type="email" variant="bordered" label="Email" className="w-96"/>
            <br/>
            <Input isRequired type="password" variant="bordered" label="Password" className="w-96"/>
            <br/>
            <Button className="bg-white text-black font-semibold text-lg w-40" type="submit">Sign Up</Button>
        </div>
        </form>
    )

}