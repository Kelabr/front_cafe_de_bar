"use client"

import { useEffect, useState } from "react"
import Cupom from "./Cupom"

export default function CupomList(){

    const [cupons, setCupons] = useState([])

    useEffect(()=>{
        async function fetchCupom(){
            try{
                const response = await fetch("http://localhost:3333/api/cupons") //Pegar pela url o nome da coleção e pegar os cupons com o prefixo escolhido
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
                        <Cupom key={cupons._id.toString()} porcent={cupons.porcentagem} name={cupons.nome} description={cupons.descricao} _id={cupons._id.toString()}/>
                    ))}
                </div>
            )}
        </div>
    )
}