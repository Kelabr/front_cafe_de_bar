"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"
import Link from "next/link"

export default function ContentCupom(){

    const [cupom, setCupom] = useState([])
    const pathName = usePathname()

    const partsTipoCupom = pathName.split("/").filter(Boolean);
    const tipoCupons = partsTipoCupom.slice(-2, -1)[0];

    const id = pathName.split("/").filter(Boolean).pop()

    useEffect(()=>{
        async function fetchContentCupom(){
            try{
                const response = await fetch(`http://localhost:3333/api/cupons/${tipoCupons}/${id}`)
                const data = await response.json()
                setCupom(data)
                console.log(data)
            }catch(error){
                console.error("Erro ao buscar cupom")
            }
        }

        fetchContentCupom()
    },[])

    if (!cupom.length) {
        return <div>Carregando...</div> // Mostra um loading enquanto os dados não chegam
    }

    return(
        <div>
            <h1 className="text-white font-bold text-5xl">{cupom[0].porcentagem}% {cupom[0].nome}</h1>
            <p className="text-white text-lg pl-2">{cupom[0].descricao}</p>
            <div className="flex gap-2 mt-6">
                <MapPin color="white"/>
                <p className="text-white">Rua bla bla, 555, blabla - Santos</p>
            </div>
            <div>
                QRCODE
            </div>
            
        </div>
    )
}