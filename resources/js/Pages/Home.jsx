import React, { useState } from "react";
import ProgressBar from "@/Components/ProgressBar";
import DisciplinaBox from "@/Components/DisciplinaBox";
import Header from "@/Components/Header";
import { usePage, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import { FaCircle } from "react-icons/fa";

export default function Home () {
    const { total=67, obrigatorias=50, eletivas=40, horas=80 } = usePage().props;
    const disciplinas = [
        { id: 1, nome: "Microcontroladores", status: "sim", tipo: "eletiva" },
        { id: 2, nome: "Programação 3", status: "sim", tipo: "obrigatoria" },
        { id: 3, nome: "Redes de Computadores", status: "nao", tipo: "obrigatoria" },
        { id: 4, nome: "Teoria dos Grafos", status: "talvez", tipo: "obrigatoria" },
        { id: 5, nome: "Estrutura de Dados", status: "talvez", tipo: "obrigatoria" }
    ]

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
                        <label className="text-purple-dark self-end mr-16">{total}%</label>
                        <ProgressBar progress={total} />
                    </div>
                    <div className="w-4/5 text-purple-dark mt-8 pb-8 flex flex-col items-center lg:items-start">
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
                    <div className="lg:w-3/4 bg-gray-100 h-full flex flex-col items-center border rounded-2xl border-purple-dark shadow-xl p-4">
                        <h2 className="text-purple-dark text-xl font-semibold mb-4">DISCIPLINAS DO SEMESTRE ATUAL</h2>
                        <div className="w-full h-[300px] lg:h-full overflow-y-auto grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
                            {disciplinas.map((disciplina) => (
                                <DisciplinaBox
                                key={disciplina.id} 
                                nome={disciplina.nome}
                                status={disciplina.status}
                                tipo={disciplina.tipo}
                                />
                            ))}
                        </div>
                    </div>
                    <h2 className="text-purple-dark text-2xl font-bold mt-12 mb-8">PROGRESSO DO ALUNO</h2>
                    <div className="w-full flex lg:flex-row flex-col items-center lg:mb-12">
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:mr-4 mb-8 p-4">
                            <Link href={"/obrigatorias"}>
                            <h2 className="text-purple-dark text-xl font-semibold mb-4 cursor-pointer">Matérias Obrigatórias</h2>
                            </Link>
                            <label className="text-purple-dark self-end mr-12">{obrigatorias}%</label>
                            <ProgressBar progress={obrigatorias} />
                        </div>
                        <div className="hidden lg:block w-0.5 h-2/3 bg-purple-dark mb-8"></div>
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:mr-4 lg:ml-4 mb-8 p-4">
                            <Link href={"/eletivas"}>
                            <h2 className="text-purple-dark text-xl font-semibold mb-4">Matérias eletivas</h2>
                             </Link>
                            <label className="text-purple-dark self-end mr-12">{eletivas}%</label>
                            <ProgressBar progress={eletivas} />
                        </div>
                        <div className="hidden lg:block w-0.5 h-2/3 bg-purple-dark mb-8"></div>
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:ml-4 mb-8 p-4">
                            <Link href={"/horas-complementares"}>
                            <h2 className="text-purple-dark text-xl font-semibold mb-4">Horas complementares</h2>
                            </Link>
                            <label className="text-purple-dark self-end mr-12">{horas}%</label>
                            <ProgressBar progress={horas} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}