"use client"

import { useEffect, useState } from "react"
import Cupom from "./Cupom"

export default function CupomList(){

    const [cupons, setCupons] = useState([])

    useEffect(()=>{
        async function fetchCupom(){
            try{
                const response = await fetch("http://localhost:3333/api/cupons")
                const data = await response.json()
    
                setCupons(data)
            }catch(error){
                console.error ("Erro ao buscar cupons", error)
            }

        }

        fetchCupom()
        
    },[])

    return(
        <div className="">
            {cupons.length === 0 ? (
                <p className="text-center font-medium">Nenhum cupom encontrado... :(</p>
            ):(
                <div>
                    {cupons.map((cupons)=>(
                        <Cupom porcent={cupons.porcentagem} name={cupons.nome} description={cupons.description}/>
                    ))}
                </div>
            )}
        </div>
    )
}