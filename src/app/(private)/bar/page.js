import CupomList from "@/components/CupomList";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Bar(){
    return(
        <main className="h-screen">
                <Header/>
                <div className="px-10">
                    <SearchBar/>
                </div>
        </main>
    )
}