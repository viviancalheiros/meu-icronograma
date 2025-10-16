import React, { useState } from "react";
import ProgressBar from "@/Components/ProgressBar";
import DisciplinaBox from "@/Components/DisciplinaBox";
import Header from "@/Components/Header";
import { usePage, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import { FaCircle } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";

export default function Home () {
    const { disciplinasPagando, disciplinasConcluidas, horasCalculadas } = usePage().props;
    
    // Usar dados dinâmicos do servidor ou valores padrão
    const horas = {
        total: horasCalculadas?.total?.curso || 0,
        obrigatorias: horasCalculadas?.obrigatorias?.curso || 0,
        eletivas: horasCalculadas?.eletivas?.curso || 0,
        complementares: horasCalculadas?.complementares?.curso || 0
    };
    
    const porcentagem = {
        total: horasCalculadas?.total?.porcentagem || 0,
        obrigatorias: horasCalculadas?.obrigatorias?.porcentagem || 0,
        eletivas: horasCalculadas?.eletivas?.porcentagem || 0,
        complementares: horasCalculadas?.complementares?.porcentagem || 0
    };
    
    const integralizado = {
        total: horasCalculadas?.total?.concluidas || 0,
        obrigatorias: horasCalculadas?.obrigatorias?.concluidas || 0,
        eletivas: horasCalculadas?.eletivas?.concluidas || 0,
        complementares: horasCalculadas?.complementares?.concluidas || 0
    };

    return (
        <>
            <Header />
            <div className="w-full h-screen flex flex-col items-center font-roboto">
                <div className="w-3/4 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-12 mt-12">
                        <div className="w-1/2 h-1 bg-purple-dark mb-2 self-end scale-y-50"></div>
                        <h1 className="text-purple-dark text-3xl font-bold">PAINEL DE ACOMPANHAMENTO</h1>
                        <div className="w-1/2 h-1 bg-purple-dark mt-2 self-start scale-y-50"></div>
                    </div>
                    <div className="lg:w-1/2 bg-gray-100 w-full h-full flex flex-col text-center items-center border rounded-2xl border-purple-dark shadow-xl p-4 mb-12">
                        <h2 className="text-purple-dark text-xl font-semibold mb-4">PROGRESSO TOTAL NO CURSO</h2>
                        <label className="text-purple-dark self-end lg:mr-12 md:mr-16 mr-12">{porcentagem.total}%</label>
                        <ProgressBar progress={porcentagem.total} />
                        <label className="text-purple-dark self-end lg:mr-12 md:mr-16 mr-12">{integralizado.total}h/{horas.total}h</label>
                    </div>
                    <div className="lg:w-1/2 bg-gray-100 w-full h-full flex flex-col items-center border rounded-2xl border-purple-dark shadow-xl p-4">
                        <h2 className="text-purple-dark text-xl font-semibold mb-4">DISCIPLINAS DO SEMESTRE ATUAL</h2>
                       <div className="w-full flex flex-col justify-between text-purple-dark mb-4">
                            <Link 
                                className="flex flex-row items-center gap-2"
                                href={route('eletivas')}
                            >
                                <GoPlusCircle size={20} />
                                <p className="text-lg">Eletiva</p>
                            </Link>
                            <Link 
                                className="flex flex-row items-center gap-2"
                                href={route('obrigatorias')}
                            >
                                <GoPlusCircle size={20} />
                                <p className="text-lg">Obrigatória</p>
                            </Link>
                        </div>
                        <div className="w-full h-[300px] lg:h-full overflow-y-auto grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
                            {disciplinasPagando && disciplinasPagando.length > 0 ? (
                                disciplinasPagando.map((disciplina) => {
                                    // Determinar status baseado nos dados do usuário
                                    const usuarioDisciplina = disciplina.usuario_disciplinas?.[0];
                                    const pago = usuarioDisciplina?.concluida || false;
                                    
                                    return (
                                        <DisciplinaBox
                                            key={disciplina.id}
                                            nome={disciplina.nome}
                                            periodo={disciplina.periodo}
                                            tipo={disciplina.tipo_disciplina ? "obrigatoria" : "eletiva"}
                                            status="nao" // Status será calculado internamente baseado em pré-requisitos
                                            pago={pago}
                                            disciplina={disciplina}
                                            usuarioDisciplina={usuarioDisciplina}
                                            disciplinasConcluidas={disciplinasConcluidas}
                                        />
                                    );
                                })
                            ) : (
                                <div className="col-span-full flex items-center justify-center h-32">
                                    <p className="text-purple-dark text-lg">Nenhuma disciplina sendo cursada atualmente</p>
                                </div>
                            )}
                        </div>
                        
                    </div>
                    <div className="w-2/3 text-purple-dark mt-8 flex flex-col">
                        <div className="w-full self-start">
                            <p className="text-lg font-bold mb-2 text-shadow-sm">Legenda:</p>
                        </div>
                        <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between">
                            <div className="flex flex-row lg:ml-4 mr-3.5 items-center">
                                <FaCircle
                                className="text-green-500 mr-4"
                                />
                                <p className="font-semibold">0 pré-requisitos restantes</p>
                            </div>
                            <div className="flex flex-row lg:ml-4 items-center">
                                <FaCircle
                                className="text-yellow-500 mr-4"
                                />
                                <p className="font-semibold">Faltam {"<"} 50% pré-requisitos</p>
                            </div>
                            <div className="flex flex-row lg:ml-4 items-center">
                                <FaCircle
                                className="text-red mr-4"
                                />
                                <p className="font-semibold">Faltam {">"} 50% pré-requisitos</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-purple-dark text-2xl font-bold mt-12 mb-8">PROGRESSO DO ALUNO</h2>
                    <div className="w-full flex lg:flex-row flex-col items-center lg:mb-12">
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:mr-4 mb-8 p-4">
                            <Link href={"/obrigatorias"}>
                            <h2 className="text-purple-dark text-xl font-semibold mb-4 cursor-pointer">Matérias Obrigatórias</h2>
                            </Link>
                            <label className="text-purple-dark self-end lg:mr-12 md:mr-16 mr-12">{porcentagem.obrigatorias}%</label>
                            <ProgressBar progress={porcentagem.obrigatorias} />
                            <label className="text-purple-dark self-end lg:mr-12 md:mr-16 mr-12">{integralizado.obrigatorias}h/{horas.obrigatorias}h</label>
                        </div>
                        <div className="hidden lg:block w-0.5 h-2/3 bg-purple-dark mb-8"></div>
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:mr-4 lg:ml-4 mb-8 p-4">
                            <Link href={"/eletivas"}>
                            <h2 className="text-purple-dark text-xl font-semibold mb-4">Matérias eletivas</h2>
                            </Link>
                            <label className="text-purple-dark self-end lg:mr-12 md:mr-16 mr-12">{porcentagem.eletivas}%</label>
                            <ProgressBar progress={porcentagem.eletivas} />
                            <label className="text-purple-dark self-end lg:mr-12 md:mr-16 mr-12">{integralizado.eletivas}h/{horas.eletivas}h</label>
                        </div>
                        <div className="hidden lg:block w-0.5 h-2/3 bg-purple-dark mb-8"></div>
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:ml-4 mb-8 p-4">
                            <Link href={"/horas-complementares"}>
                            <h2 className="text-purple-dark text-xl font-semibold mb-4">Horas complementares</h2>
                            </Link>
                            <label className="text-purple-dark self-end lg:mr-12 md:mr-16 mr-12">{porcentagem.complementares}%</label>
                            <ProgressBar progress={porcentagem.complementares} />
                            <label className="text-purple-dark self-end lg:mr-12 md:mr-16 mr-12">{integralizado.complementares}h/{horas.complementares}h</label>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}