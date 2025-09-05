import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplineBox from '@/Components/DisciplineBox';
import ProgressBar from '@/Components/ProgressBar';


const emphasesData = [
    {
        name: 'Computação visual',
        progress: 20,
        disciplines: [
            { name: 'Cálculo 3', status: 'yes', type: 'eletiva', pago: 'yes' },
            { name: 'Aprendizagem de Máquina', status: 'no', type: 'eletiva' },
            { name: 'Redes neurais e aprendizado profundo', status: 'no', type: 'eletiva' },
            { name: 'Processamento digital de imagens', status: 'no', type: 'eletiva' },
            { name: 'Visão computacional', status: 'no', type: 'eletiva' },
        ]
    },
    {
        name: 'Sistemas inteligentes',
        progress: 80,
        disciplines: [
            { name: 'Cálculo 3', status: 'yes', type: 'eletiva', pago: 'yes' },
            { name: 'Aprendizagem de Máquina', status: 'yes', type: 'eletiva' },
            { name: 'Redes neurais e aprendizado profundo', status: 'yes', type: 'eletiva' },
            { name: 'Computação evolucionária', status: 'no', type: 'eletiva' },
            { name: 'Ciência de dados', status: 'yes', type: 'eletiva' },
        ]
    },
    {
        name: 'Sistemas de computação',
        progress: 20,
        disciplines: [
            { name: 'Cálculo 3', status: 'yes', type: 'eletiva',pago: 'yes' },
            { name: 'Sistemas digitais', status: 'no', type: 'eletiva' },
            { name: 'FPGA', status: 'no', type: 'eletiva' },
            { name: 'Sistemas embarcados', status: 'no', type: 'eletiva' },
            { name: 'Microcontroladores e aplicações', status: 'no', type: 'eletiva' },
        ]
    },
    {
        name: 'Sistemas de informação',
        progress: 0,
        disciplines: [
            { name: 'Conceitos de linguagem de programação', status: 'no', type: 'eletiva' },
            { name: 'Sistemas distribuidos', status: 'no', type: 'eletiva' },
            { name: 'Interação homem-máquina', status: 'no', type: 'eletiva' },
            { name: 'Gerência de projeto', status: 'no', type: 'eletiva' },
            { name: 'Segurança de sistemas computacionais', status: 'no', type: 'eletiva' },
        ]
    }
];


export default function EmphasisPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-center text-3xl font-bold text-purple-dark mb-20">
                        PROGRESSO DAS ÊNFASES
                    </h1>
                    {emphasesData.map((emphasis, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex flex-row justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-purple-dark">
                                    {emphasis.name}
                                </h2>
                                <div className="flex items-center space-x-2 w-64">
                                    <ProgressBar progress={emphasis.progress} />
                                    <span className="text-purple-dark font-bold text-lg">{emphasis.progress}%</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {emphasis.disciplines.map((discipline, discIndex) => (
                                    <DisciplineBox
                                        key={discIndex}
                                        name={discipline.name}
                                        status={discipline.status}
                                        type={discipline.type}
                                        pago={discipline.pago}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
