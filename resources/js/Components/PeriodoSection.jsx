import DisciplineBox from "./DisciplineBox";

export default function PeriodoSection ({periodo, disciplines}) {
    return (
        <div className="w-full flex lg:flex-row flex-col lg:items-center mt-8 justify-start">
            <h2 className="text-purple-dark font-bold text-xl lg:mb-0 mb-4 mr-8">
                {periodo}
                <span className="lg:hidden">º período</span>
            </h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 w-full">
                {disciplines
                    .filter((discipline) => discipline.periodo === periodo)
                    .map((discipline) => (
                        <DisciplineBox 
                        key={discipline.id}
                        name={discipline.name}
                        periodo={discipline.periodo}
                        type={discipline.type}
                        status={discipline.status}
                        pago={discipline.pago}
                        />
                    ))}
            </div>
        </div>
    )
}