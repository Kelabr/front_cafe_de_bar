import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function HeaderContentCupom(){
    return(
        <header className=" flex justify-between py-2 shadow sticky top-0 w-full ">
            <Link href="/" className="relative h-12 w-12">
                <ChevronLeft color="white" size={40}/>
            </Link>
        </header>
    )
}