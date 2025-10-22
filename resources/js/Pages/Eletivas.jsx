import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplinaBox from '@/Components/DisciplinaBox';
import Legenda from '@/Components/Legenda';
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
                    <Legenda />
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
