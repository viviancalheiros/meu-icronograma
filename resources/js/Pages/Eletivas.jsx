import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplinaBox from '@/Components/DisciplinaBox';


const electivesData = [
    { nome: 'Cálculo 4', status: 'sim', tipo: 'eletiva' },
    { nome: 'Cálculo Numérico', status: 'sim', tipo: 'eletiva' },
    { nome: 'Circuitos Digitais', status: 'sim', tipo: 'eletiva' },
    { nome: 'Fundamentos de Libras', status: 'sim', tipo: 'eletiva' },
    { nome: 'Geometria Computacional', status: 'sim', tipo: 'eletiva' },
    { nome: 'Pesquisa Operacional', status: 'sim', tipo: 'eletiva' },
    { nome: 'Programação para Sistemas Embarcados', status: 'sim', tipo: 'eletiva' },
    { nome: 'Projeto de Sistemas Embarcados', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Banco de Dados', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Arquitetura de Computadores', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Computação Científica', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Computação Paralela', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Computação Visual', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Comunicação de Dados', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Desenvolvimento de Sistemas', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Engenharia de Software', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Humanidades', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Informática na Educação', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Inteligência Artificial', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Linguagens de Programação', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Programação', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Redes de Computadores', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Sistemas de Computação', status: 'sim', tipo: 'eletiva' },
    { nome: 'Tópicos em Sistemas de Informação', status: 'sim', tipo: 'eletiva' },
];


export default function ElectivesPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col font-roboto">
            <Header />
            <main className="flex-grow p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-center text-3xl font-bold text-purple-dark mb-20">
                        ELETIVAS
                    </h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {electivesData.map((disciplina, index) => (
                            <DisciplinaBox
                                key={index}
                                nome={disciplina.nome}
                                status={disciplina.status}
                                tipo={disciplina.tipo}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
