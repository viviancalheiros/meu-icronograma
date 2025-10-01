import DisciplinaBox from "./DisciplinaBox";

export default function PeriodoSection ({periodo, disciplinas}) {
    return (
        <div className="w-full flex lg:flex-row flex-col lg:items-center mt-8 justify-start">
            <h2 className="text-purple-dark font-bold text-xl lg:mb-0 mb-4 mr-8">
                {periodo}
                <span className="lg:hidden">º período</span>
            </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 w-full">
                {disciplinas
                    .filter((disciplina) => disciplina.periodo === periodo)
                    .map((disciplina) => (
                        <DisciplinaBox 
                        key={disciplina.id}
                        nome={disciplina.nome}
                        periodo={disciplina.periodo}
                        tipo={disciplina.tipo}
                        status={disciplina.status}
                        pago={disciplina.pago}
                        />
                    ))}
            </div>
        </div>
    )
}