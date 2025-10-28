import React, { useState, useMemo } from 'react';
import { router } from '@inertiajs/react';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import AddActivityModal from './Partials/AddActivityModal';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const GOAL_HOURS = 240;

const referenceData = [
    {
        title: 'Atividades de Ensino', code: 'FLX01', items: [
            { id: 1, description: 'Monitoria em disciplinas de graduação.', maxHours: 150 },
            { id: 2, description: 'Desenvolvimento ou participação em material informacional (divulgação científica) ou didático (livros, CD-ROM, Vídeos, exposições)', maxHours: 80 }
        ]
    },
    {
        title: 'Atividades de Extensão', code: 'FLX02', items: [
            { id: 1, description: 'Disciplina eletiva, cursada e com aprovação, na UFAL.', maxHours: 180 },
            { id: 2, description: 'Participação em Jornadas, Simpósios, Congressos, Seminários, Encontros, Palestras, Conferências, Debates, Mesas Redondas e outros.', maxHours: 180 },
            { id: 3, description: 'Outras Atividades de Extensão', maxHours: 180 },
            { id: 4, description: 'Participação como ouvinte, em minicursos, cursos de extensão, oficinas, seminários, entre outros', maxHours: 60 }
        ]
    },
    {
        title: 'Atividades de Pesquisa', code: 'FLX03', items: [
            { id: 1, description: 'Atividades de pesquisa com bolsa ou sem bolsa (Instituições fomentadoras de pesquisa científica).', maxHours: 180 },
            { id: 2, description: 'Atividades de pesquisa com bolsa ou sem bolsa em um grupo de pesquisa do IC', maxHours: 180 },
            { id: 3, description: 'Apresentação de comunicações ou posters em eventos científicos', maxHours: 180 },
            { id: 4, description: 'Publicação de trabalhos completos em anais de eventos científicos', maxHours: 80 },
            { id: 5, description: 'Publicação de resumos em anais de eventos científicos.', maxHours: 20 },
            { id: 6, description: 'Publicação de artigos em periódicos de divulgação científica ou de caráter não científico', maxHours: 60 },
            { id: 7, description: 'Publicação de artigos em periódicos de divulgação científica com ISSN e Conselho Editorial', maxHours: 60 },
            { id: 8, description: 'Desenvolvimento ou participação na elaboração de instrumentos de pesquisa, guias ou catálogos de acervo de memória e/ou exposições', maxHours: 80 },
            { id: 9, description: 'Organização ou participação na organização de eventos científicos', maxHours: 40 }
        ]
    },
    {
        title: 'Atividades de Ensino', code: 'FLX04', items: [
            { id: 1, description: 'Representação estudantil- Colegiado da Graduação, CA, DCE e UNE', maxHours: 120 }
        ]
    },
];

const HoursSummaryTable = ({ title, code, items, userHours }) => (
    <div className="mb-8 rounded-xl border border-purple-dark bg-white shadow-lg">
        <div className="flex items-center justify-between rounded-t-xl border-b border-purple-dark bg-gray-50 px-6 py-3">
            <h3 className="text-lg font-bold text-purple-dark">{title}</h3>
            <span className="font-semibold text-purple-dark">Código: {code}</span>
        </div>
        <div>
            {items.map((item, index) => (
                <div key={item.id} className={`grid grid-cols-12 gap-4 px-6 py-4 ${index < items.length - 1 ? 'border-b border-purple-dark' : ''}`}>
                    <div className="col-span-1 flex items-start justify-center">
                        <span className="font-bold text-purple-dark">{item.id}</span>
                        <div className="ml-4 h-full border-l-2 border-purple-dark"></div>
                    </div>
                    <div className="col-span-8">
                        <p className="text-purple-dark">{item.description}</p>
                    </div>
                    <div className="col-span-3 flex items-center justify-end">
                        <div className="mr-4 h-full border-l-2 border-purple-dark"></div>
                        <span className="font-semibold text-purple-dark">
                            {userHours[`${code}_${item.id}`] || 0}/{item.maxHours}h
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function Index({ activities, totalHours }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingActivity, setEditingActivity] = useState(null);

    const progressPercentage = useMemo(() => {
        if (GOAL_HOURS === 0 || !totalHours) return 0;
        return Math.min((totalHours / GOAL_HOURS) * 100, 100);
    }, [totalHours]);

    const hoursByCode = useMemo(() => {
        const summary = {};
        if(!activities) return summary;
        referenceData.forEach(category => {
            category.items.forEach(item => {
                const fullCode = `${category.code}_${item.id}`;
                summary[fullCode] = activities
                    .filter(activity => activity.type_code === fullCode)
                    .reduce((sum, activity) => sum + Number(activity.hours || 0), 0);
            });
        });
        return summary;
    }, [activities]);

    const handleOpenAddModal = () => { setEditingActivity(null); setIsModalOpen(true); };
    const handleOpenEditModal = (activity) => { setEditingActivity(activity); setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); setEditingActivity(null); };

    const handleDeleteActivity = (activity) => {
        if(confirm('Tem certeza que deseja excluir esta atividade?')) {
            router.delete(route('complementary-activities.destroy', activity.id), {
                preserveScroll: true,
            });
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-gray-100 font-sans">

            <AddActivityModal
                show={isModalOpen}
                onClose={closeModal}
                activityToEdit={editingActivity}
                referenceData={referenceData}
            />

            <Header />

            <main className="mx-auto w-full max-w-7xl flex-grow py-10 px-4 font-roboto sm:px-6 lg:px-8">
                <div className='mb-8 flex w-full flex-col items-center justify-between lg:flex-row'>
                    <h2 className='mb-6 text-2xl font-bold text-purple-dark lg:mb-0'>ATIVIDADES COMPLEMENTARES</h2>
                    <div className='relative w-3/4 max-w-md pb-5 pt-6 lg:full'>
                        <span className="absolute top-0 right-0 text-sm font-bold text-purple-dark">{progressPercentage.toFixed(0)}%</span>
                        <div className='h-3 w-full rounded-full border border-gray-300 bg-gray-200'>
                            <div className='h-full rounded-full bg-purple-dark' style={{ width: `${progressPercentage}%` }}></div>
                        </div>
                        <span className="absolute bottom-0 right-0 text-xs font-semibold text-gray-500">({totalHours || 0}h/{GOAL_HOURS}h)</span>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl">
                    <div className="rounded-xl bg-white shadow-lg">
                        <div className="hidden items-center p-5 md:grid md:grid-cols-12">
                            <div className="col-span-1 border-r-2 border-gray-200"></div>
                            <div className="col-span-5 pl-4 text-xl font-bold uppercase tracking-wider text-purple-dark">Atividade</div>
                            <div className="col-span-2 border-l-2 border-r-2 border-gray-200 text-center text-xl font-bold uppercase tracking-wider text-purple-dark">Código</div>
                            <div className="col-span-2 border-r-2 border-gray-200 text-center text-xl font-bold uppercase tracking-wider text-purple-dark">Horas</div>
                            <div className="col-span-2 flex justify-center">
                                <button onClick={handleOpenAddModal} className="rounded-full border-4 border-purple-dark bg-white p-1.5 text-purple-dark transition duration-300 hover:bg-purple-dark hover:text-white">
                                    <PlusIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                        <div className="space-y-3 px-5 pb-5 pt-5">
                            {activities && activities.length > 0 ? (
                                activities.map((activity) => (
                                    <div key={activity.id} className="items-center rounded-lg border-2 border-purple-dark p-3 transition md:grid md:grid-cols-12 md:gap-4">
                                        <div className="md:col-span-6">
                                            <p className="pr-4 font-semibold text-gray-700">{activity.name}</p>
                                            <div className="mt-1 flex space-x-4 text-sm md:hidden">
                                                <p><span className="font-bold text-gray-500">CÓDIGO:</span> <span className="ml-1 text-gray-600">{activity.type_code}</span></p>
                                                <p><span className="font-bold text-gray-500">HORAS:</span> <span className="ml-1 font-bold text-gray-600">{activity.hours}h</span></p>
                                            </div>
                                        </div>
                                        <div className="hidden text-center text-gray-600 md:block md:col-span-2">{activity.type_code}</div>
                                        <div className="hidden text-center font-bold text-gray-600 md:block md:col-span-2">{activity.hours}h</div>
                                        <div className="flex justify-end space-x-2 md:col-span-2 md:justify-center">
                                            <button onClick={() => handleOpenEditModal(activity)} className="text-gray-400 transition hover:text-purple-dark">
                                                <PencilSquareIcon className="h-6 w-6" />
                                            </button>
                                            <button onClick={() => handleDeleteActivity(activity)} className="text-gray-400 transition hover:text-red-600">
                                                <TrashIcon className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="py-10 text-center text-gray-500">Nenhuma atividade cadastrada. Clique no '+' para começar.</p>
                            )}
                        </div>
                        <div className="mt-4 flex justify-center md:hidden">
                            <button onClick={handleOpenAddModal} className="mb-4 rounded-full border-4 border-purple-dark bg-purple-dark p-3 text-white transition duration-300 hover:bg-purple-light">
                                <PlusIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="mb-4 text-2xl font-bold text-purple-dark">Resumo de Horas por Categoria</h2>
                    {referenceData.map(category => (
                        <HoursSummaryTable key={category.code} {...category} userHours={hoursByCode} />
                    ))}
                </div>
            </main>
            
            <Footer />
        </div>
    );
}