import ContentCupom from "@/components/ContentCupom";
import HeaderContentCupom from "@/components/HeaderContentCupom";

export default function CupomOpen(){
    return(
        <main className="h-screen bg-black px-6">
            <HeaderContentCupom/>
            <ContentCupom/>
        </main>
    )
}