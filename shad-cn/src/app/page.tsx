import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from '@/components/Header';
import Theme from '@/components/Theme';
import { MacbookScroll } from "@/components/ui/macbook-scroll";
export default function Home() {
  return (
   <div className="relative container mx-auto flex flex-col p-4">
    <Header />
    <div className=" absolute right-10">
        <Theme />
      </div>
    <main className="flex flex-col items-center justify-center w-full">
      <MacbookScroll />
    </main>
  </div>
  );
}
