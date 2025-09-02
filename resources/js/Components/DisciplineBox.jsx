import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import DisciplineModal from "./DisciplineModal";
import { usePage } from "@inertiajs/react";

export default function DisciplineBox ({name, status, type}) {
    const props = usePage();

    const statusColors = {
        yes: "text-green-500",
        no: "text-red",
        maybe: "text-yellow-500",
    };

    const [ variant, setVariant ] = useState('');

    

    const color = statusColors[status] || "text-gray-400";

    const [ openDiscipline, setOpenDiscipline ] = useState(false);
    const [ openElective, setOpenElective ] = useState(false);
    
    return (
        <div className="w-full h-28 bg-purple-dark p-4 rounded-2xl flex flex-col items-center justify-center">
            <div className="w-full h-1/3 mb-3 flex flex-row justify-between items-center">
                <FaCircle className={`${color} text-sm`} />
                <FiEdit className="text-white cursor-pointer" 
                onClick={type == 'disciplina'?() => setOpenDiscipline(true)
                    :() => setOpenElective(true)
                }
                />
                {type == "disciplina"?
                    <DisciplineModal
                    open={openDiscipline}
                    onClose={() => setOpenDiscipline(false)}
                    variant={type}
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
                {name}
            </h3>
        </div>
    )
};