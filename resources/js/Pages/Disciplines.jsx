import Header from "@/Components/Header";
import { FaCircle } from "react-icons/fa";
import PeriodoSection from "@/Components/PeriodoSection";
import Footer from "@/Components/Footer";

export default function Disciplines () {
    const disciplines = [
        { id: 1, name: 'Matemática Discreta', periodo: 1, type: 'disciplina', pago: "yes" },
        { id: 1, name: 'Cálculo Diferencial e Integral', periodo: 1, type: 'disciplina', pago: "yes"},
        { id: 1, name: 'Programação 1', periodo: 1, type: 'disciplina', pago: "yes"},
        { id: 1, name: 'Computação, Sociedade e Ética', periodo: 1, type: 'disciplina', pago: "yes"},
        { id: 1, name: 'Lógica para Computação', periodo: 1, type: 'disciplina', pago: "yes"},
        
        { id: 3, name: 'Estrutura de Dados', periodo: 2, type: 'disciplina', pago: 'yes'},
        { id: 3, name: 'Organização e Arquitetura de Computadores', periodo: 2, type: 'disciplina', pago: 'yes'},
        { id: 3, name: 'Geometria Analítica', periodo: 2, type: 'disciplina', pago: 'yes'},
        { id: 3, name: 'Banco de Dados', periodo: 2, type: 'disciplina', pago: 'yes'},
        
        { id: 9, name: 'Teoria dos Grafos', periodo: 3, type: 'disciplina', pago: 'no', status: "yes"},
        { id: 6, name: 'Probabilidade e Estatística', periodo: 3, type: 'disciplina', pago: "no", status: "yes"},
        { id: 5, name: 'Redes de Computadores', periodo: 3, type: 'disciplina', pago: 'no', status: "yes"},
        { id: 6, name: 'Álgebra Linear', periodo: 3, type: 'disciplina', pago: "no", status: "yes"},
        
        { id: 5, name: 'Projeto e Análise de Algoritmos', periodo: 4, type: 'disciplina', pago: 'no', status: "yes"},
        { id: 5, name: 'Programação 2', periodo: 4, type: 'disciplina', pago: 'no', status: "maybe"},
        { id: 6, name: 'Programação 3', periodo: 4, type: 'disciplina', pago: 'no', status: "maybe"},
        { id: 6, name: 'Teoria da Computação', periodo: 4, type: 'disciplina', pago: 'no', status: "maybe"},
        { id: 9, name: 'ACE 1', periodo: 4, type: 'disciplina', pago: 'no', status: "yes"},
        
        { id: 6, name: 'Compiladores', periodo: 5, type: 'disciplina', pago: "no", status: "maybe"},
        { id: 6, name: 'Sistemas Operacionais', periodo: 5, type: 'disciplina', pago: "no", status: "no"},
        { id: 6, name: 'Inteligência Artificial', periodo: 5, type: 'disciplina', pago: "no", status: "no"},
        { id: 6, name: 'Computação Gráfica', periodo: 5, type: 'disciplina', pago: "no", status: "no"},
        { id: 6, name: 'ACE 2', periodo: 5, type: 'disciplina', pago: "no", status: "maybe"},
        
        { id: 8, name: 'Projeto e Desenvolvimento de Sistemas', periodo: 6, type: 'disciplina', pago: "no", status: "maybe"},
        { id: 9, name: 'ACE 3', periodo: 6, type: 'disciplina', pago: "no", status: "maybe"},
        
        { id: 6, name: 'Noções de Direito', periodo: 7, type: 'disciplina', pago: "no", status: "maybe"},
        { id: 10, name: 'Metodologia de Pesquisa e Trabalho Individual', periodo: 7, type: 'disciplina', pago: "no", status: "maybe"},
        { id: 10, name: 'ACE 4', periodo: 7, type: 'disciplina', pago: "no", status: "maybe"},
        
        { id: 6, name: 'ACE 5', periodo: 8, type: 'disciplina', pago: "no", status: "maybe"},
    ]

    return (
        <>
            <Header />
            <div className="w-full h-screen flex flex-col items-center">
                <h1 className="text-4xl text-purple-dark font-bold mt-8">FLUXOGRAMA</h1>
                <h3 className="text-purple-dark mb-4">por período</h3>
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
                <div className="lg:w-4/5 w-5/6 flex flex-col mb-8">
                    {[...Array(8)].map((_,i) => (
                        <PeriodoSection 
                        key={i}
                        periodo={i+1}
                        disciplines={disciplines}
                        />
                    ))}
                </div>
                <Footer />
            </div>
            
        </>        
    )
}