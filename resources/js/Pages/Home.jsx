import React, { useState } from "react";
import ProgressBar from "@/Components/ProgressBar";
import DisciplineBox from "@/Components/DisciplineBox";
import Header from "@/Components/Header";
import { usePage, Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Home () {
    const { total =67, compulsory=50, electives=40, hours=80 } = usePage().props;
    const disciplines = [
        { id: 1, name: "Microcontroladores", status: "no", type: "eletiva" },
        { id: 2, name: "Programação 3", status: "no", type: "disciplina" },
        { id: 3, name: "Redes de Computadores", status: "yes", type: "disciplina" },
        { id: 4, name: "Teoria dos Grafos", status: "maybe", type: "disciplina" },
        { id: 5, name: "Estrutura de Dados", status: "yes", type: "disciplina" }
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
                    <div className="lg:w-3/4 bg-gray-100 h-full flex flex-col items-center border rounded-2xl border-purple-dark shadow-xl p-4">
                        <h2 className="text-purple-dark text-xl font-semibold mb-4">DISCIPLINAS DO SEMESTRE ATUAL</h2>
                        <div className="w-full h-[300px] lg:h-full overflow-y-auto grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
                            {disciplines.map((discipline) => (
                                <DisciplineBox
                                key={discipline.id} 
                                name={discipline.name}
                                status={discipline.status}
                                type={discipline.type}
                                />
                            ))}
                        </div>
                    </div>
                    <h2 className="text-purple-dark text-2xl font-bold mt-12 mb-8">PROGRESSO DO ALUNO</h2>
                    <div className="w-full flex lg:flex-row flex-col items-center lg:mb-12">
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:mr-4 mb-8 p-4">
                            <Link href={"/disciplines"}>
                            <h2 className="text-purple-dark text-xl font-semibold mb-4 cursor-pointer">Matérias Obrigatórias</h2>
                            </Link>
                            <label className="text-purple-dark self-end mr-12">{compulsory}%</label>
                            <ProgressBar progress={compulsory} />
                        </div>
                        <div className="hidden lg:block w-0.5 h-2/3 bg-purple-dark mb-8"></div>
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:mr-4 lg:ml-4 mb-8 p-4">
                            <h2 className="text-purple-dark text-xl font-semibold mb-4">Matérias eletivas</h2>
                           
                            <label className="text-purple-dark self-end mr-12">{electives}%</label>
                            <ProgressBar progress={electives} />
                        </div>
                        <div className="hidden lg:block w-0.5 h-2/3 bg-purple-dark mb-8"></div>
                        <div className="lg:w-1/3 bg-gray-100 w-full h-full border border-purple-dark rounded-2xl flex flex-col items-center justify-center shadow-xl lg:ml-4 mb-8 p-4">
                            <h2 className="text-purple-dark text-xl font-semibold mb-4">Horas complementares</h2>
                            <label className="text-purple-dark self-end mr-12">{hours}%</label>
                            <ProgressBar progress={hours} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}