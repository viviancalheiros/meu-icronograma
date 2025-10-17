import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplineBox from '@/Components/DisciplinaBox';
import ProgressBar from '@/Components/ProgressBar';
import Legenda from '@/Components/Legenda';
import { usePage } from '@inertiajs/react';


export default function EmphasisPage() {
    const { emphases: emphasesData = [] } = usePage().props;

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col font-roboto">
            <Header />
            <main className="flex-grow p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-center text-4xl font-bold text-purple-dark mt-8 mb-16">
                        PROGRESSO DAS ÊNFASES
                    </h1>
                    <Legenda />
                    {emphasesData.map((emphasis) => (
                        <div key={emphasis.id} className="mb-6 mt-12">
                            <div className="flex flex-row justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-purple-dark">
                                    {emphasis.name}
                                </h2>
                                <div className="flex items-center space-x-2 w-64">
                                    <ProgressBar progress={emphasis.progress} />
                                    <span className="text-purple-dark font-bold text-lg">{emphasis.progress}%</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 mb-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {emphasis.disciplines.map((discipline, discIndex) => (
                                    <DisciplineBox
                                        key={discIndex}
                                        nome={discipline.name}
                                        status={discipline.status}  
                                        tipo={discipline.type}      
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