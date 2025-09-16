import Image from "next/image";
import { Button } from "@/components/ui/button"
import Header from '@/components/Header';
import Theme from '@/components/Theme';
export default function Home() {
  return (
   <div className="relative container mx-auto flex p-4">
    <Header />
    <div className=" absolute right-10">
        <Theme />
      </div>
  </div>
  );
}
