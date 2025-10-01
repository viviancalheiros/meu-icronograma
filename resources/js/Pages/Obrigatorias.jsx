import Header from "@/Components/Header";
import { FaCircle } from "react-icons/fa";
import PeriodoSection from "@/Components/PeriodoSection";
import Footer from "@/Components/Footer";

export default function Obrigatorias () {
    const obrigatorias = [
        { id: 1, nome: 'Matemática Discreta', periodo: 1, tipo: 'disciplina', pago: true },
        { id: 1, nome: 'Cálculo Diferencial e Integral', periodo: 1, tipo: 'obrigatoria', pago: true},
        { id: 1, nome: 'Programação 1', periodo: 1, tipo: 'obrigatoria', pago: true},
        { id: 1, nome: 'Computação, Sociedade e Ética', periodo: 1, tipo: 'obrigatoria', pago: true},
        { id: 1, nome: 'Lógica para Computação', periodo: 1, tipo: 'obrigatoria', pago: true},
        
        { id: 3, nome: 'Estrutura de Dados', periodo: 2, tipo: 'obrigatoria', pago: true},
        { id: 3, nome: 'Organização e Arquitetura de Computadores', periodo: 2, tipo: 'obrigatoria', pago: true},
        { id: 3, nome: 'Geometria Analítica', periodo: 2, tipo: 'obrigatoria', pago: true},
        { id: 3, nome: 'Banco de Dados', periodo: 2, tipo: 'obrigatoria', pago: true},
        
        { id: 9, nome: 'Teoria dos Grafos', periodo: 3, tipo: 'obrigatoria', pago: false, status: "sim"},
        { id: 6, nome: 'Probabilidade e Estatística', periodo: 3, tipo: 'obrigatoria', pago: false, status: "sim"},
        { id: 5, nome: 'Redes de Computadores', periodo: 3, tipo: 'obrigatoria', pago: false, status: "sim"},
        { id: 6, nome: 'Álgebra Linear', periodo: 3, tipo: 'obrigatoria', pago: false, status: "sim"},
        
        { id: 5, nome: 'Projeto e Análise de Algoritmos', periodo: 4, tipo: 'obrigatoria', pago: false, status: "talvez"},
        { id: 5, nome: 'Programação 2', periodo: 4, tipo: 'obrigatoria', pago: false, status: "talvez"},
        { id: 6, nome: 'Programação 3', periodo: 4, tipo: 'obrigatoria', pago: false, status: "talvez"},
        { id: 6, nome: 'Teoria da Computação', periodo: 4, tipo: 'obrigatoria', pago: false, status: "talvez"},
        { id: 9, nome: 'ACE 1', periodo: 4, tipo: 'obrigatoria', pago: false, status: "sim"},
        
        { id: 6, nome: 'Compiladores', periodo: 5, tipo: 'obrigatoria', pago: false, status: "talvez"},
        { id: 6, nome: 'Sistemas Operacionais', periodo: 5, tipo: 'obrigatoria', pago: false, status: "sim"},
        { id: 6, nome: 'Inteligência Artificial', periodo: 5, tipo: 'obrigatoria', pago: false, status: "sim"},
        { id: 6, nome: 'Computação Gráfica', periodo: 5, tipo: 'obrigatoria', pago: false, status: "nao"},
        { id: 6, nome: 'ACE 2', periodo: 5, tipo: 'obrigatoria', pago: false, status: "talvez"},
        
        { id: 8, nome: 'Projeto e Desenvolvimento de Sistemas', periodo: 6, tipo: 'obrigatoria', pago: false, status: "talvez"},
        { id: 9, nome: 'ACE 3', periodo: 6, tipo: 'obrigatoria', pago: false, status: "sim"},
        
        { id: 6, nome: 'Noções de Direito', periodo: 7, tipo: 'obrigatoria', pago: false, status: "talvez"},
        { id: 10, nome: 'Metodologia de Pesquisa e Trabalho Individual', periodo: 7, tipo: 'obrigatoria', pago: false, status: "talvez"},
        { id: 10, nome: 'ACE 4', periodo: 7, tipo: 'obrigatoria', pago: false, status: "sim"},
        
        { id: 6, nome: 'ACE 5', periodo: 8, tipo: 'obrigatoria', pago: false, status: "sim"},
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
                        disciplinas={obrigatorias}
                        />
                    ))}
                </div>
                <Footer />
            </div>
            
        </>        
    )
}