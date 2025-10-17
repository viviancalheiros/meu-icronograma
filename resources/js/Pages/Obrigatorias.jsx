import Header from "@/Components/Header";
import PeriodoSection from "@/Components/PeriodoSection";
import Footer from "@/Components/Footer";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Legenda from "@/Components/Legenda";
import axios from "axios";

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
                <div className="lg:max-w-6xl w-3/4 flex flex-col items-center">
                    <Legenda />
                </div>
                <div className="lg:max-w-6xl w-3/4 flex flex-col mb-8">
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