import Header from "@/components/Header";
import Cupom from "@/components/Cupom";
import Banner from "@/components/Banner";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-col items-center">
        <Header/>
        <div className="px-6 pt-14">
          <h1 className="text-5xl font-bold">Achou</h1>
          <h1 className="text-5xl font-bold">Apresentou</h1>
          <h1 className="text-5xl font-bold">Economizou</h1>
        </div>
        <div className="px-1 flex flex-col items-center mb-5">
          <Banner/>
          <Link href="#" className=""><button className="bg-black cursor-pointer text-white p-3 text-2xl font-medium rounded-lg w-64">Retire cupons</button></Link>
        </div>
        <div className="px-2 mt-2 pb-2 w-full max-w-[500px]">
          <Cupom porcent="10" name="Chopp" description="esse é um cupom comum para que os consumidores possam estar aproveitando da melhor forma as igrarias dos estabelecimentos" />
          <Cupom porcent="5" name="Porção" description="aproveite da melhor forma as iguarias do estabelecimento" />
        </div>
      
      </div>
     
    </main>
  );
}
