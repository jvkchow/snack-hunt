import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        <div>
          <Link href="/sign-in">
            <Button className="bg-white text-black font-semibold text-lg w-40">Sign In</Button>
          </Link>
          <p className="py-4 m-0 max-w-40 text-sm opacity-50">
            Already have an account? Click here.
          </p>
        </div>

        <div>
          <Link href="/sign-up">
            <Button className="bg-white text-black font-semibold text-lg w-40">Sign Up</Button>
          </Link>
          <p className="py-4 m-0 max-w-40 text-sm opacity-50">
            Don't have an account? Click here.
          </p>
        </div>
      </div>
    </main>
  );
}
