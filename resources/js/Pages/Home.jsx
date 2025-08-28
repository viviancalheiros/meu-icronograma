import React from "react";

export default function Home () {
    return (
        <>
            <div className="w-screen h-screen flex flex-col items-center font-roboto">
                <div className="w-3/4 flex flex-col items-center">
                    <h1 className="text-purple-dark text-2xl font-bold m-8">PAINEL DE ACOMPANHAMENTO</h1>
                    <div className="w-full flex flex-row justify-between">
                        <div className="w-1/2 flex flex-col items-center">
                            <h2 className="text-purple-dark text-xl font-semibold">DISCIPLINAS DO SEMESTRE ATUAL</h2>
                        </div>
                        <div className="w-1/2 flex flex-col items-center">
                            <h2 className="text-purple-dark text-xl font-semibold">PROGRESSO TOTAL NO CURSO</h2>
                        </div>
                    </div>
                    <h2 className="text-purple-dark text-xl font-bold">PROGRESSO DO ALUNO</h2>
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h2 className="text-purple-dark text-xl font-semibold">Matérias Obrigatórias</h2>
                        </div>
                        <div>
                            <h2 className="text-purple-dark text-xl font-semibold">Matérias eletivas</h2>
                        </div>
                        <div>
                            <h2 className="text-purple-dark text-xl font-semibold">Horas complementares</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}