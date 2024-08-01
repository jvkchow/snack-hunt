import { redirect } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        <div>
          <Button className="bg-white text-black font-semibold text-lg">Sign In</Button>
          <p className="py-4 m-0 max-w-[13ch] text-sm opacity-50">
            Already have an account? Click here.
          </p>
        </div>

        <div>
          <Button className="bg-white text-black font-semibold text-lg">Sign Up</Button>
          <p className="py-4 m-0 max-w-[13ch] text-sm opacity-50">
            Don't have an account? Click here.
          </p>
        </div>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </main>
  );
}
