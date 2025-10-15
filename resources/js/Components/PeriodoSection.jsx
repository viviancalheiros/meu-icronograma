import DisciplinaBox from "./DisciplinaBox";
import { usePage } from "@inertiajs/react";

export default function PeriodoSection ({periodo, disciplinas}) {
    const { disciplinasConcluidas } = usePage().props;
    
    return (
        <div className="w-full flex lg:flex-row flex-col lg:items-center mt-8 justify-start">
            <h2 className="text-purple-dark font-bold text-xl lg:mb-0 mb-4 mr-8">
                {periodo}
                <span className="lg:hidden">º período</span>
            </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 w-full">
                {disciplinas.map((disciplina) => {
                    // Determinar status baseado nos dados do usuário
                    const usuarioDisciplina = disciplina.usuario_disciplinas?.[0];
                    const pago = usuarioDisciplina?.concluida || false;
                    
                    return (
                        <DisciplinaBox 
                        key={disciplina.id}
                        nome={disciplina.nome}
                        periodo={disciplina.periodo}
                        tipo="obrigatoria"
                        status="nao" // Status será calculado internamente baseado em pré-requisitos
                        pago={pago}
                        disciplina={disciplina}
                        usuarioDisciplina={usuarioDisciplina}
                        disciplinasConcluidas={disciplinasConcluidas}
                        />
                    );
                })}
            </div>
        </div>
    )
}