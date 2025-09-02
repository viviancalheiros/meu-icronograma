import React, { useState, useMemo } from 'react';
import { Head } from '@inertiajs/react';
import { PlusIcon, PencilSquareIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import AddActivityModal from './Partials/AddActivityModal';

const Footer = () => {
    const developers = [
        { name: 'Jacqueline Barbosa', email: 'jbsf@ic.ufal.br', linkedin: 'jacqueline' },
        { name: 'José Wender Ferreira Duarte', email: 'jwfd@ic.ufal.br', linkedin: 'josewender' },
        { name: 'Leila Maria Biggi de Souza Cavalcante', email: 'lmbsc@ic.ufal.br', linkedin: 'leilabiggi' },
        { name: 'Vivian Gabriele Calheiros Esmeraldo', email: 'vgce@ic.ufal.br', linkedin: 'vivian' },
        { name: 'Yuck Arthur Ferreira Silva', email: 'yafs@ic.ufal.br', linkedin: 'yuck-ferreira-86833837a' },
    ];
    
    return (
        <footer className="w-full bg-purple-dark text-white p-8 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex-shrink-0">
                    <h3 className="text-2xl font-bold mb-2">Meu ICronograma</h3>
                    <p className="text-sm text-gray-300">
                        Sistema feito como projeto da disciplina Programação 3
                        <br />
                        Professor: Ranilson Paiva
                    </p>
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2">Desenvolvedores:</h3>
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-start gap-x-8 gap-y-4 text-sm">
                        {developers.map(dev => (
                            <div key={dev.name}>
                                <p className="font-semibold">{dev.name}</p>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <EnvelopeIcon className="h-4 w-4" />
                                    <a href={`mailto:${dev.email}`} className="hover:underline truncate">{dev.email}</a>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-300">
                                    <img 
                                        src="/images/linkedin-logo.png" 
                                        alt="LinkedIn Icon" 
                                        className="h-4 w-4" 
                                    />                                 
                                    <a href={`https://linkedin.com/in/${dev.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">/in/{dev.linkedin}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

const GOAL_HOURS = 240;

const referenceData = [
    {
        title: 'Atividades de Ensino', code: 'FLX01', items: [
            { id: 1, description: 'Monitoria em disciplinas de graduação.', maxHours: 150 },
            { id: 2, description: 'Desenvolvimento ou participação em material informacional (divulgação científica) ou didático (livros, CD-ROM, Vídeos, exposições)', maxHours: 80 },
        ],
    },
    {
        title: 'Atividades de Extensão', code: 'FLX02', items: [
            { id: 1, description: 'Disciplina eletiva, cursada e com aprovação, na UFAL.', maxHours: 180 },
            { id: 2, description: 'Participação em Jornadas, Simpósios, Congressos, Seminários, Encontros, Palestras, Conferências, Debates, Mesas Redondas e outros.', maxHours: 180 },
            { id: 3, description: 'Outras Atividades de Extensão', maxHours: 180 },
            { id: 4, description: 'Participação como ouvinte, em minicursos, cursos de extensão, oficinas, seminários, entre outros', maxHours: 60 },
        ],
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
            { id: 9, description: 'Organização ou participação na organização de eventos científicos', maxHours: 40 },
        ],
    },
    {
        title: 'Atividades de Ensino', code: 'FLX04', items: [
            { id: 1, description: 'Representação estudantil- Colegiado da Graduação, CA, DCE e UNE', maxHours: 120 },
        ],
    },
];

const HoursSummaryTable = ({ title, code, items, userHours }) => (
    <div className="bg-white rounded-xl shadow-lg mb-8 border border-purple-dark">
        <div className="bg-dark-purple px-6 py-3 rounded-t-xl flex justify-between items-center border-b border-purple-dark">
            <h3 className="text-lg font-bold text-purple-dark">{title}</h3>
            <span className="font-semibold text-purple-dark">Código: {code}</span>
        </div>
        <div>
            {items.map((item, index) => (
                <div key={item.id} className={`grid grid-cols-12 gap-4 px-6 py-4 ${index < items.length - 1 ? 'border-b border-purple-dark' : ''}`}>
                    <div className="col-span-1 flex items-start justify-center">
                        <span className="font-bold text-purple-dark">{item.id}</span>
                        <div className="h-full border-l-2 border-purple-dark ml-4"></div>
                    </div>
                    <div className="col-span-8">
                        <p className="text-purple-dark">{item.description}</p>
                    </div>
                    <div className="col-span-3 flex justify-end items-center">
                        <div className="h-full border-l-2 border-purple-dark mr-4"></div>
                        <span className="font-semibold text-purple-dark">
                            {userHours[`${code}_${item.id}`] || 0}/{item.maxHours}h
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function Index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activities, setActivities] = useState([]);
    const [editingActivity, setEditingActivity] = useState(null);
    const totalHours = useMemo(() => {
        return activities.reduce((sum, activity) => sum + Number(activity.hours || 0), 0);
    }, [activities]);
    const progressPercentage = useMemo(() => {
        if (GOAL_HOURS === 0) return 0;
        return Math.min((totalHours / GOAL_HOURS) * 100, 100);
    }, [totalHours]);
    const hoursByCode = useMemo(() => {
        const summary = {};
        referenceData.forEach(category => {
            category.items.forEach(item => {
                const fullCode = `${category.code}_${item.id}`;
                summary[fullCode] = activities
                    .filter(activity => activity.type_code === fullCode)
                    .reduce((sum, activity) => sum + Number(activity.hours || 0), 0);
            });
        });
        return summary;
    }, [activities, referenceData]);
    const handleOpenAddModal = () => { setEditingActivity(null); setIsModalOpen(true); };
    const handleOpenEditModal = (activity) => { setEditingActivity(activity); setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); setEditingActivity(null); };
    const handleSaveActivity = (formData) => {
        if (editingActivity) {
            setActivities(activities.map(act => act.id === editingActivity.id ? { ...act, ...formData } : act));
        } else {
            setActivities(currentActivities => [{ ...formData, id: Date.now() }, ...currentActivities]);
        }
    };
    return (
        <div className="min-h-screen bg-dark-purple font-sans flex flex-col">
            <Head title="Horas Complementares" />
            <AddActivityModal
                show={isModalOpen}
                onClose={closeModal}
                onSave={handleSaveActivity}
                activityToEdit={editingActivity}
                referenceData={referenceData}/>
            <header className="bg-purple-dark shadow-md sticky top-0 z-10">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-10 w-10" src="/images/logo-ic.png" alt="Logo" />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#" className="text-white hover:bg-purple-hover px-3 py-2 rounded-md text-sm font-medium">HOME</a>
                                    <a href="#" className="text-white hover:bg-purple-hover px-3 py-2 rounded-md text-sm font-medium">DISCIPLINAS</a>
                                    <a href="#" className="text-white hover:bg-purple-hover px-3 py-2 rounded-md text-sm font-medium">ÊNFASES</a>

                                    <div className="flex flex-col">
                                        <a href="#" className="text-white px-3 py-5 text-sm font-medium">
                                            HORAS COMPLEMENTARES</a>
                                        <div className="w-full h-1 bg-blue"></div>
                                    </div>
                                    <a href="#" className="text-white hover:bg-purple-hover px-3 py-2 rounded-md text-sm font-medium">DÚVIDAS</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6 space-x-4">
                                <button className="p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">Configurações</span>
                                    <img src="/images/icon.png" alt="User Icon" className="h-7 w-7" />
                                </button>
                                <button className="p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                    <span className="sr-only">Sair</span>
                                    <img src="/images/exit.png" alt="Logout Icon" className="h-7 w-7" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 w-full flex-grow">
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-2xl font-bold text-purple-dark'>Atividades Complementares</h2>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-5">
                        <div className="hidden md:grid md:grid-cols-12 md:p-5 md:items-center">
                            <div className="col-span-1 border-r-2 border-gray-200"></div>
                            <div className="col-span-5 pl-4 text-xl text-purple-dark font-bold uppercase tracking-wider">Atividade</div>
                            <div className="col-span-2 text-center text-xl border-l-2 border-r-2 border-gray-200 text-purple-dark font-bold uppercase tracking-wider">Código</div>
                            <div className="col-span-2 text-center text-xl border-r-2 border-gray-200 text-purple-dark font-bold uppercase tracking-wider">Horas</div>
                            <div className="col-span-2 flex justify-center">
                                <button
                                    onClick={handleOpenAddModal}
                                    className="bg-white border-4 border-purple-dark text-purple-dark p-2 rounded-full hover:bg-purple-dark hover:text-white transition duration-300">
                                    <PlusIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {activities.length > 0 ? (
                                activities.map((activity) => (
                                    <div key={activity.id} className="border-2 border-purple-dark rounded-lg p-3 md:grid md:grid-cols-12 md:gap-4 items-center transition">
                                        <div className="md:col-span-6">
                                            <p className="font-semibold text-gray-700 pr-4">{activity.name}</p>
                                            <div className="flex space-x-4 text-sm mt-1 md:hidden">
                                                <p>
                                                    <span className="font-bold text-gray-500">CÓDIGO:</span>
                                                    <span className="text-gray-600 ml-1">{activity.type_code}</span>
                                                </p>
                                                <p>
                                                    <span className="font-bold text-gray-500">HORAS:</span>
                                                    <span className="text-gray-600 font-bold ml-1">{activity.hours}h</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hidden md:block md:col-span-2 text-center text-gray-600">
                                            {activity.type_code}
                                        </div>
                                        <div className="hidden md:block md:col-span-2 text-center text-gray-600 font-bold">
                                            {activity.hours}h
                                        </div>
                                        <div className="md:col-span-2 flex justify-end md:justify-center">
                                            <button onClick={() => handleOpenEditModal(activity)} className="text-gray-400 hover:text-purple-dark transition">
                                                <PencilSquareIcon className="h-6 w-6" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 py-10">Nenhuma atividade cadastrada. Clique no '+' para começar.</p>
                            )}
                        </div>
                         <div className="md:hidden flex justify-center mt-4">
                            <button
                                onClick={handleOpenAddModal}
                                className="bg-purple-dark border-4 border-purple-dark text-white p-3 rounded-full hover:bg-purple-hover transition duration-300"
                            >
                                <PlusIcon className="h-8 w-8" />
                            </button>
                        </div>

                    </div>
                </div>
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-purple-dark mb-4">Resumo de Horas por Categoria</h2>
                    {referenceData.map(category => (
                        <HoursSummaryTable
                            key={category.code}
                            title={category.title}
                            code={category.code}
                            items={category.items}
                            userHours={hoursByCode}/>))}
                </div>
            </main>
            <Footer />
        </div>
    );
}