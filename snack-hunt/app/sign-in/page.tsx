import { 
    Button,
    Input
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { LoginForm } from "./form";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold">Sign In Page</h1>
            <LoginForm></LoginForm>
        </main>
    );
}
