import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import DisciplineModal from "./DisciplineModal";
import { usePage, router } from "@inertiajs/react";
import axios from "axios";

export default function DisciplinaBox ({nome, status, tipo, pago, disciplina, usuarioDisciplina, disciplinasConcluidas}) {
    const props = usePage();

    const statusCores = {
        sim: "text-green-500",
        nao: "text-red",
        talvez: "text-yellow-500",
    };

    const tipoCores  = {
        eletiva: "bg-purple-light",
        disciplina: "bg-purple-dark",
        obrigatoria: "bg-purple-dark"
    }

    const foiPago = {
        true: "bg-green-600",
        false: "bg-purple-dark",
    }

    // Estado interno para controlar o status visual
    const [internalStatus, setInternalStatus] = useState(status);
    const [internalPago, setInternalPago] = useState(pago);

    // Calcular status baseado em pré-requisitos para o FaCircle
    const getPrerequisiteStatus = () => {
        if (!disciplina?.pre_requisitos || disciplina.pre_requisitos.length === 0) {
            return 'sim'; // Verde - sem pré-requisitos
        }

        const totalPreReqs = disciplina.pre_requisitos.length;
        const concluidosPreReqs = disciplina.pre_requisitos.filter(preReq => 
            disciplinasConcluidas?.includes(preReq.id)
        ).length;
        
        const percentualConcluido = (concluidosPreReqs / totalPreReqs) * 100;
        
        if (percentualConcluido === 100) {
            return 'sim'; // Verde - todos os pré-requisitos concluídos
        } else if (percentualConcluido >= 50) {
            return 'talvez'; // Amarelo - faltam menos de 50% dos pré-requisitos
        } else {
            return 'nao'; // Vermelho - faltam mais de 50% dos pré-requisitos
        }
    };

    const prerequisiteStatus = getPrerequisiteStatus();
    const corTexto = statusCores[prerequisiteStatus] || "text-gray-400";
    const corTipo = tipoCores[tipo] || "bg-purple-dark";
    const corBg = foiPago[internalPago] || "bg-purple-dark";

    const [ openDiscipline, setOpenDiscipline ] = useState(false);
    const [ openElective, setOpenElective ] = useState(false);
    const [ disciplinaData, setDisciplinaData ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    // Carregar dados da disciplina do usuário quando o modal abrir
    useEffect(() => {
        if (openDiscipline && disciplina?.id) {
            carregarDadosDisciplina();
        }
    }, [openDiscipline, disciplina?.id]);

    const carregarDadosDisciplina = async () => {
        if (!disciplina?.id) return;
        
        try {
            setLoading(true);
            const response = await axios.get(`/disciplina-usuario/${disciplina.id}`);
            setDisciplinaData(response.data.data);
        } catch (error) {
            console.error('Erro ao carregar dados da disciplina:', error);
            setDisciplinaData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveDisciplina = async (data) => {
        try {
            setLoading(true);
            const payload = {
                id_disciplina: disciplina.id,
                cod_disciplina: data.code || '',
                professor: data.professor || '',
                bloco: data.room || '',
                media: data.finalGrade ? parseFloat(data.finalGrade) : null,
                anotacao: data.notes || '',
                concluida: data.status === 'concluida',
                pagando_atualmente: data.status === 'pagando',
                equivalencia_aceita: data.equivalenciaAceita || false,
                periodo_pago: data.periodoPago || '',
            };

            const response = await axios.post('/disciplina-usuario/salvar', payload);
            
            // Atualizar os dados locais com a resposta do servidor
            setDisciplinaData(response.data.data);
            
            // Atualizar o estado visual baseado no status salvo
            const isConcluida = response.data.data.concluida;
            
            if (isConcluida) {
                setInternalStatus('sim');
                setInternalPago(true);
            } else {
                setInternalStatus('nao');
                setInternalPago(false);
            }
            
            // Fechar o modal
            setOpenDiscipline(false);
            
            // Recarregar a página para atualizar pré-requisitos
            router.reload();
            
        } catch (error) {
            console.error('Erro ao salvar disciplina:', error);
            
            let errorMessage = 'Erro ao salvar os dados da disciplina. Tente novamente.';
            
            if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.response?.data?.errors) {
                // Se há erros de validação, mostrar o primeiro
                const firstError = Object.values(error.response.data.errors)[0];
                errorMessage = Array.isArray(firstError) ? firstError[0] : firstError;
            }
            
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Preparar dados padrão para o modal
    const getDefaultData = () => {
        // Usar disciplinaData se disponível, senão usar usuarioDisciplina como fallback
        const dataSource = disciplinaData || usuarioDisciplina;
        
        if (!dataSource) return {};
        
        // Determinar o status baseado nos dados salvos
        let status = null; // Padrão: nenhum status selecionado
        
        if (dataSource.concluida) {
            status = 'concluida';
        } else if (dataSource.pagando_atualmente) {
            status = 'pagando';
        }
        
        return {
            code: dataSource.cod_disciplina || '',
            professor: dataSource.professor || '',
            room: dataSource.bloco || '',
            finalGrade: dataSource.media ? dataSource.media.toString() : '',
            notes: dataSource.anotacao || '',
            status: status,
            periodoPago: dataSource.periodo_pago || '',
            equivalenciaAceita: dataSource.equivalencia_aceita || false,
        };
    };

    // Preparar pré-requisitos para o modal
    const getPrerequisites = () => {
        if (!disciplina?.pre_requisitos) return [];
        
        return disciplina.pre_requisitos.map(preReq => ({
            id: preReq.id,
            name: preReq.nome,
            done: disciplinasConcluidas?.includes(preReq.id) || false
        }));
    };
    
    return (
        <div className={`w-full h-28 drop-shadow-lg ${internalPago === true ? corBg : corTipo} p-4 rounded-2xl flex flex-col items-center justify-center`}>
            <div className="w-full h-1/3 mb-3 flex flex-row justify-between items-center">
                {internalPago === true ?
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
                onClick={tipo === "obrigatoria" ? () => setOpenDiscipline(true) : () => setOpenElective(true)}
                />
                {tipo === "obrigatoria" ?
                    <DisciplineModal
                    open={openDiscipline}
                    onClose={() => setOpenDiscipline(false)}
                    variant="disciplina"
                    courseName={nome}
                    prerequisites={getPrerequisites()}
                    defaults={getDefaultData()}
                    onSave={handleSaveDisciplina}
                    loading={loading}
                    />
                    :<DisciplineModal
                        open={openElective}
                        onClose={() => setOpenElective(false)}
                        variant="disciplina"
                        courseName={nome}
                        prerequisites={getPrerequisites()}
                        defaults={getDefaultData()}
                        onSave={handleSaveDisciplina}
                        loading={loading}
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