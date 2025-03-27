import Image from "next/image";
import Link from "next/link";

export default function Cupom({porcent,name, description, _id, tipo}){
    return(
        <Link href={`/${tipo}/${_id}`}>
            <div className="flex flex-col bg-black p-5 rounded-xl gap-3 mb-4 cursor-pointer">
                <div className="flex items-center justify-between">
                    <h1 className="text-white font-medium text-xl">{`${porcent}%  ${name}`}</h1>
                    <div className="relative h-7 w-7">
                        <Image
                        src="/porcent.svg"
                        alt="porcentagem"
                        layout="fill"
                        />
                    </div>
                </div>
                <div>
                    <p className="text-gray-500 rounded-lg line-clamp-2 peer">{description}</p>
                </div>
            </div>       
        </Link>
       
    )
}