import React, { useState, useEffect } from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import DisciplineBox from '@/Components/DisciplinaBox';
import ProgressBar from '@/Components/ProgressBar';
import { FaCircle } from "react-icons/fa";
import axios from 'axios';


export default function EmphasisPage() {
    const [emphasesData, setEmphasesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchEmphasesData();
    }, []);

    const fetchEmphasesData = async () => {
    try {
        const response = await axios.get('/user/emphases-progress');
        setEmphasesData(response.data);
    } catch (err) {
        setError('Erro ao carregar dados das ênfases');
        console.error('Error fetching emphases data:', err);
    } finally {
        setLoading(false);
    }
};

    if (loading) {
        return (
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow p-8 flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-dark mx-auto"></div>
                        <p className="mt-4 text-purple-dark">Carregando ênfases...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow p-8 flex items-center justify-center">
                    <div className="text-center text-red-600">
                        <p>{error}</p>
                        <button 
                            onClick={fetchEmphasesData}
                            className="mt-4 px-4 py-2 bg-purple-dark text-white rounded hover:bg-purple-700"
                        >
                            Tentar Novamente
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col font-roboto">
            <Header />
            <main className="flex-grow p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-center text-4xl font-bold text-purple-dark mt-8 mb-16">
                        PROGRESSO DAS ÊNFASES
                    </h1>
                    <div className="w-2/3 text-purple-dark mt-8 mb-12 flex flex-col mx-auto">
                        <div className="w-full self-start">
                            <p className="text-lg text-center lg:text-start font-bold mb-2 text-shadow-sm">Legenda:</p>
                        </div>
                        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between">
                            <div className="flex flex-row lg:ml-4 mr-3.5 items-center">
                                <FaCircle className="text-green-500 mr-4" />
                                <p className="font-semibold">0 pré-requisitos restantes</p>
                            </div>
                            <div className="flex flex-row lg:ml-4 items-center">
                                <FaCircle className="text-yellow-500 mr-4" />
                                <p className="font-semibold">Faltam {"<"} 50% pré-requisitos</p>
                            </div>
                            <div className="flex flex-row lg:ml-4 items-center">
                                <FaCircle className="text-red mr-4" />
                                <p className="font-semibold">Faltam {">"} 50% pré-requisitos</p>
                            </div>
                        </div>
                    </div>
                    {emphasesData.map((emphasis, index) => (
                        <div key={emphasis.id} className="mb-6">
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