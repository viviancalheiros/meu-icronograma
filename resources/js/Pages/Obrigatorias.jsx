import Header from "@/Components/Header";
import { FaCircle } from "react-icons/fa";
import PeriodoSection from "@/Components/PeriodoSection";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";

export default function Obrigatorias () {
    const { disciplinas } = usePage().props;
    const qtdPeriodos = 8;
    const periodos = [...Array(qtdPeriodos)].map((_, i) => i+1);

    return (
        <>
            <Header />
            <div className="w-full h-screen flex flex-col items-center">
                <h1 className="text-4xl text-purple-dark font-bold mt-8">FLUXOGRAMA</h1>
                <h3 className="text-purple-dark mb-4">por período</h3>
                <div className="w-4/5 text-purple-dark mt-8 pb-8 flex flex-col items-center lg:items-start">
                    <p className="text-lg font-semibold mb-2">Legenda:</p>
                    <div className="flex flex-row lg:ml-4 mr-3.5 items-center">
                        <FaCircle
                        className="text-green-500 mr-4"
                        />
                        <p>0 pré-requisitos restantes</p>
                    </div>
                    <div className="flex flex-row lg:ml-4 items-center">
                        <FaCircle
                        className="text-yellow-500 mr-4"
                        />
                        <p>Faltam {"<"} 50% pré-requisitos</p>
                    </div>
                    <div className="flex flex-row lg:ml-4 items-center">
                        <FaCircle
                        className="text-red mr-4"
                        />
                        <p>Faltam {">"} 50% pré-requisitos</p>
                    </div>
                </div>
                <div className="lg:w-4/5 w-5/6 flex flex-col mb-8">
                    {periodos.map ((numero) =>
                        <PeriodoSection 
                        key={numero}
                        periodo={numero}
                        disciplinas={disciplinas[numero] || []}
                        />
                    )}
                </div>
                <Footer />
            </div>
            
        </>        
    )
}