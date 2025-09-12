"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Home() {

  const router = useRouter();
  console.log(router)

  return (
    <div>
      <h1>Home page</h1>
      <div>
        <Link href={'/Login'}>Go to Login</Link> <br />
        <button onClick={() => router.push("/Login/loginadmin")} className=" text-center px-5 py-2 rounded-2xl my-10 bg-neutral-900 text-white">Click to navigate</button>
      </div>
    </div>
  );
}
