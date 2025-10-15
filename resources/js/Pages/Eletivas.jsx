import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplinaBox from '@/Components/DisciplinaBox';
import { FaCircle } from 'react-icons/fa';
import { usePage } from '@inertiajs/react';

export default function ElectivesPage() {
    const { eletivas, disciplinasConcluidas } = usePage().props;

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col font-roboto">
            <Header />
            <main className="flex-grow p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-center text-3xl font-bold text-purple-dark mb-8">
                        ELETIVAS
                    </h1>
                    <div className="w-4/5 text-purple-dark mb-8 flex flex-col items-center lg:items-start">
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
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {eletivas.map((eletiva) => {
                            // Determinar status baseado nos dados do usuário
                            const usuarioDisciplina = eletiva.usuario_disciplinas?.[0];
                            const pago = usuarioDisciplina?.concluida || false;
                            
                            return (
                                <DisciplinaBox
                                    key={eletiva.id}
                                    nome={eletiva.nome}
                                    periodo={eletiva.periodo}
                                    tipo="eletiva"
                                    status="nao" // Status será calculado internamente baseado em pré-requisitos
                                    pago={pago}
                                    disciplina={eletiva}
                                    usuarioDisciplina={usuarioDisciplina}
                                    disciplinasConcluidas={disciplinasConcluidas}
                                />
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
