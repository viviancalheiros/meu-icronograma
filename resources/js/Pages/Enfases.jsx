import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplinaBox from '@/Components/DisciplinaBox';
import ProgressBar from '@/Components/ProgressBar';
import { FaCircle } from "react-icons/fa";
import { usePage } from '@inertiajs/react';
import Legenda from '@/Components/Legenda';

export default function Enfases() {
    const { enfases, disciplinasConcluidas } = usePage().props;
    
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-center text-3xl font-bold text-purple-dark mb-20">
                        PROGRESSO DAS ÊNFASES
                    </h1>
                    <Legenda />
                    {enfases.map((enfase) => {
                        const disciplinas = enfase.disciplinas;
                        return (
                            <div key={enfase.id} className="mt-12 mb-6">
                                <div className="flex flex-row justify-between items-center mb-4">
                                    <h2 className="text-xl font-semibold text-purple-dark">
                                        {enfase.nome}
                                    </h2>
                                    <div className="flex items-center space-x-2 w-64">
                                        <ProgressBar progress={enfase.progress} />
                                        <span className="text-purple-dark font-bold text-lg">{enfase.progress}%</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {disciplinas.map((disciplina) => {
                                        return (
                                            <DisciplinaBox 
                                            key={disciplina.id}
                                            nome={disciplina.nome}
                                            periodo={disciplina.periodo}
                                            tipo={disciplina.type}
                                            status={disciplina.status}
                                            pago={disciplina.pago}
                                            disciplina={disciplina.disciplina}
                                            usuarioDisciplina={disciplina.usuarioDisciplina}
                                            disciplinasConcluidas={disciplinasConcluidas}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })};
                </div>
            </main>
            <Footer />
        </div>
    );
}