import { Search } from "lucide-react"

export default function SearchBar(){
    return(
        <form className="flex w-full border-2 rounded-lg p-1 mt-2">
            <input type="text" className=" w-full outline-0 pl-1" placeholder="Pesquise pela cidade desejada"/>
            <button type="submit"><Search color="#bfbfbf"/></button>
        </form>
    )
}