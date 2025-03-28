"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Form(){

    const router = useRouter()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email:"",
        nome:""
    })

    function handleChange(e){
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()

        if(password != confirmPassword){
            setError("*Senhas não compatíveis")
        }

        setError("")

        try{
            const response = await fetch("http://localhost:3333/api/register", {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials: "include",
                body:JSON.stringify({...formData, password})
            })

            if(!response.ok){
                setError("*Erro ao enviar o formulário")
                return
            }

        }catch(error){
            setError("*Erro no formulário")
        }

        router.push("thanks")
    }


    return(
        <form className="flex flex-col items-center mt-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 w-full mb-4">
                <label className=" font-medium" htmlFor="">Nome</label>
                <input className=" border-2 rounded-lg p-1" type="text" name="nome" onChange={handleChange}/>
            </div>
            <div className="flex flex-col gap-2 mb-4 w-full">
                <label className=" font-medium " htmlFor="">Email</label>
                <input className=" border-2 rounded-lg p-1"  type="email" name="email" onChange={handleChange}/>
            </div>
            <div className="flex flex-col gap-2 mb-4 w-full">
                <label className=" font-medium " htmlFor="">Senha</label>
                <input className=" border-2 rounded-lg p-1"  type="password" value={password} onChange={value => setPassword(value.target.value)}/>
            </div>
            <div className="flex flex-col gap-2 mb-4 w-full">
                <label className=" font-medium " htmlFor="">Confirmar Senha</label>
                <input className=" border-2 rounded-lg p-1"  type="password" value={confirmPassword} onChange={value => setConfirmPassword(value.target.value)} />
            </div>            
            <button className="bg-black text-white w-full p-2 text-lg font-bold rounded-lg cursor-pointer mb-5">Enviar</button>
            <p className="text-lg font-medium text-red-500">{error}</p>
        </form>
    )
}