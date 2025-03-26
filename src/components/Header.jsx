import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return(
        <header className=" flex justify-between p-2 shadow sticky top-0 bg-white w-full ">
            <Link href="/" className="relative h-12 w-12">
                <Image
                src="/logo.svg"
                alt="Logo"
                layout="fill"
                />
            </Link>
            <Sheet>
                <SheetTrigger><AlignJustify/></SheetTrigger>
                    <SheetContent side={"top"}>
                        <SheetHeader>
                        <SheetTitle>Escolha seu modo de agora</SheetTitle>
                            <SheetDescription>
                                Cada modo representa a categoria dos cupons, indicamos que escolha de acordo com o periodo do dia
                            </SheetDescription>
                    </SheetHeader>
                    <div className=" flex flex-col w-full px-4 gap-2 mb-3">
                        <Link href="/cafe" className="w-full"><button className="bg-black p-2 rounded-lg text-white font-medium w-full">Café</button></Link>
                        <Link href="/bar" className="w-full"><button className="bg-black p-2 rounded-lg  text-white font-medium w-full">Bar</button></Link>
                    </div>
                </SheetContent>
            </Sheet>            

        </header>
    )
}