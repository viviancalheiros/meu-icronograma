import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import DisciplineModal from "./DisciplineModal";
import { usePage } from "@inertiajs/react";

export default function DisciplinaBox ({nome, status, tipo, pago}) {
    const props = usePage();

    const statusCores = {
        sim: "text-green-500",
        nao: "text-red",
        talvez: "text-yellow-500",
    };

    const tipoCores  = {
        eletiva: "bg-purple-light",
        disciplina: "bg-purple-dark"
    }

    const foiPago = {
        true: "bg-green-600",
        false: "bg-purple-dark",
    }

    const corTexto = statusCores[status] || "text-gray-400";
    const corTipo = tipoCores[tipo] || "bg-purple-dark";
    const corBg = foiPago[pago] || "bg-purple-dark";

    const [ openDiscipline, setOpenDiscipline ] = useState(false);
    const [ openElective, setOpenElective ] = useState(false);
    
    return (
        <div className={`w-full h-28 ${pago === true ? corBg : corTipo} p-4 rounded-2xl flex flex-col items-center justify-center`}>
            <div className="w-full h-1/3 mb-3 flex flex-row justify-between items-center">
                {pago === true ?
                    <div className="flex flex-row items-center gap-1">
                        <label className="text-sm text-white">PAGO</label>
                        <FaRegCircleCheck
                        className="text-white" 
                        />
                    </div>
                    :
                    <FaCircle 
                    className={`${corTexto} text-sm`} 
                    />
                }
                
                <FiEdit className="text-white cursor-pointer" 
                onClick={tipo == "obrigatoria"?() => setOpenDiscipline(true)
                    :() => setOpenElective(true)
                }
                />
                {tipo === "obrigatoria"?
                    <DisciplineModal
                    open={openDiscipline}
                    onClose={() => setOpenDiscipline(false)}
                    variant={tipo}
                    courseName="XXXX"
                    prerequisites={[
                        { id: 1, name: 'Matéria 1' },
                        { id: 2, name: 'Matéria 2', done: true },
                        { id: 3, name: 'Matéria 3' },
                    ]}
                    onSave={(data) => console.log('Salvar disciplina:', data)}
                    />
                    :<DisciplineModal
                        open={openElective}
                        onClose={() => setOpenElective(false)}
                        variant="eletiva"
                        options={[
                            { id: 'a', label: 'Matéria 1' },
                            { id: 'b', label: 'Matéria 2' },
                            { id: 'c', label: 'Matéria 3' },
                        ]}
                        prerequisites={[
                            { name: 'Matéria 1' },
                            { name: 'Matéria 2' },
                            { name: 'Matéria 3' },
                        ]}
                        onSave={(data) => console.log('Salvar eletiva:', data)}
                        />
                    }
            </div>
            <h3 className=
            "w-full h-2/3 text-white font-medium text-sm text-center">
                {nome}
            </h3>
        </div>
    )
};