import Form from "@/components/Form"
import Image from "next/image"
import Link from "next/link"

export default function Login(){
    return(
        <main className="h-screen">
            <div className="flex flex-col items-center px-5 pt-28">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                        <div className="relative h-12 w-12">
                            <Image
                            src="/logo.svg"
                            alt="Logo"
                            layout="fill"
                            />
                        </div>

                        <h1 className="text-3xl font-bold">Café de bar</h1>
                    </div>
                   
                    <p className="text-gray-400">Rsgatou, apresentou... Economizou</p>
                </div>
                <div className="w-full max-w-[500px]">
                    <Form/>
                </div>
                <div className=" w-full max-w-[500px]">
                    <Link href="#" className="font-medium">Cadastre-se</Link>
                </div>
            </div>
        </main>
    )
}