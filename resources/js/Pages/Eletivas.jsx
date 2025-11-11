import React, { useState } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplinaBox from '@/Components/DisciplinaBox';
import Legenda from '@/Components/Legenda';
import { usePage } from '@inertiajs/react';
import { IoMdSearch } from "react-icons/io";

export default function ElectivesPage() {
    const { eletivas, disciplinasConcluidas } = usePage().props;

    const [ pesquisa, setPesquisa ] = useState('');

    const handlePesquisaChange = (e) => {
        setPesquisa(e.target.value.toLowerCase());
    }

    const pesquisaFiltrada = eletivas.filter((eletiva) => {
        if (pesquisa === '') {
            return true;
        }
        return eletiva.nome.toLowerCase().includes(pesquisa);
    })

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col font-roboto">
            <Header />
            <main className="flex-grow p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-center text-3xl font-bold text-purple-dark mb-8">
                        ELETIVAS
                    </h1>
                    <div className='relative mt-8'>
                        <IoMdSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-dark h-6 w-6' />
                        
                        <input 
                            type='text'
                            placeholder='Pesquisar eletiva'
                            value={pesquisa}
                            onChange={handlePesquisaChange}
                            className='w-full bg-gray-100 border rounded-2xl border-purple-dark shadow-xl pl-12 pr-4 py-4 text-purple-dark placeholder focus:ring-purple-dark focus:border-purple-dark'
                        />
                    </div>
                    <Legenda />
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {pesquisaFiltrada.map((eletiva) => {
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
                    {pesquisaFiltrada.length === 0 && pesquisa != "" && (
                        <p className="text-center text-gray-500 mt-6">
                            Nenhuma disciplina eletiva encontrada.
                        </p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
