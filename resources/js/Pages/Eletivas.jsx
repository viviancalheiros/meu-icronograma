import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplineBox from '@/Components/DisciplineBox';


const electivesData = [
    { name: 'Cálculo 4', status: 'yes', type: 'eletiva' },
    { name: 'Cálculo Numérico', status: 'yes', type: 'eletiva' },
    { name: 'Circuitos Digitais', status: 'yes', type: 'eletiva' },
    { name: 'Fundamentos de Libras', status: 'yes', type: 'eletiva' },
    { name: 'Geometria Computacional', status: 'yes', type: 'eletiva' },
    { name: 'Pesquisa Operacional', status: 'yes', type: 'eletiva' },
    { name: 'Programação para Sistemas Embarcados', status: 'yes', type: 'eletiva' },
    { name: 'Projeto de Sistemas Embarcados', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Banco de Dados', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Arquitetura de Computadores', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Computação Científica', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Computação Paralela', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Computação Visual', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Comunicação de Dados', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Desenvolvimento de Sistemas', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Engenharia de Software', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Humanidades', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Informática na Educação', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Inteligência Artificial', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Linguagens de Programação', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Programação', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Redes de Computadores', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Sistemas de Computação', status: 'yes', type: 'eletiva' },
    { name: 'Tópicos em Sistemas de Informação', status: 'yes', type: 'eletiva' },
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
                        {electivesData.map((discipline, index) => (
                            <DisciplineBox
                                key={index}
                                name={discipline.name}
                                status={discipline.status}
                                type={discipline.type}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
