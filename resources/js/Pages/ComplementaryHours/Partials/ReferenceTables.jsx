import React from 'react';

const referenceData = [
    {
        title: 'Atividades de Ensino',
        code: 'FLX01',
        items: [
            { id: 1, description: 'Monitoria em disciplinas de graduação.', hours: '72/150h' },
            { id: 2, description: 'Desenvolvimento ou participação no desenvolvimento de material informacional (divulgação científica) ou didático (livros, CD-ROM, Vídeos, exposições)', hours: '20/80h' },
        ],
    },
    {
        title: 'Atividades de Extensão',
        code: 'FLX02',
        items: [
            { id: 1, description: 'Disciplina eletiva, cursada e com aprovação, na UFAL.', hours: '0/180h' },
            { id: 2, description: 'Participação em Jornadas, Simpósios, Congressos, Seminários, Encontros, Palestras, Conferências, Debates, Mesas Redondas e outros.', hours: '0/180h' },
            { id: 3, description: 'Outras Atividades de Extensão', hours: '0/180h' },
            { id: 4, description: 'Participação como ouvinte, em minicursos, cursos de extensão, oficinas, seminários, entre outros', hours: '0/60h' },
        ],
    },
    {
        title: 'Atividades de Pesquisa',
        code: 'FLX03',
        items: [
            { id: 1, description: 'Atividades de pesquisa com bolsa ou sem bolsa (Instituições fomentadoras de pesquisa científica).', hours: '0/180h' },
            { id: 2, description: 'Atividades de pesquisa com bolsa ou sem bolsa em um grupo de pesquisa do IC', hours: '0/180h' },
            { id: 3, description: 'Apresentação de comunicações ou posters em eventos científicos', hours: '0/180h' },
            { id: 4, description: 'Publicação de trabalhos completos em anais de eventos científicos', hours: '0/80h' },
            { id: 5, description: 'Publicação de resumos em anais de eventos científicos.', hours: '0/20h' },
            { id: 6, description: 'Publicação de artigos em periódicos de divulgação científica ou de caráter não científico', hours: '0/60h' },
            { id: 7, description: 'Publicação de artigos em periódicos de divulgação científica com ISSN e Conselho Editorial', hours: '0/60h' },
            { id: 8, description: 'Desenvolvimento ou participação na elaboração de instrumentos de pesquisa, guias ou catálogos de acervo de memória e/ou exposições', hours: '0/80h' },
            { id: 9, description: 'Organização ou participação na organização de eventos científicos', hours: '0/40h' },
        ],
    },
    {
        title: 'Atividades de Ensino',
        code: 'FLX04',
        items: [
            { id: 1, description: 'Representação estudantil- Colegiado da Graduação, CA, DCE e UNE', hours: '0/120h' },
        ],
    },
];

const ActivityTable = ({ title, code, items }) => (
    <div className="bg-white rounded-xl shadow-lg mb-8">
        <div className="bg-gray-50 px-6 py-3 rounded-t-xl flex justify-between items-center border-b">
            <h3 className="text-lg font-bold text-purple-dark">{title}</h3>
            <span className="font-semibold text-gray-600">Código: {code}</span>
        </div>
        <div>
            {items.map((item, index) => (
                <div key={item.id} className={`grid grid-cols-12 gap-4 px-6 py-4 ${index < items.length - 1 ? 'border-b' : ''}`}>
                    <div className="col-span-1 flex items-start justify-center">
                        <span className="font-bold text-gray-500">{item.id}</span>
                        <div className="h-full border-l-2 border-gray-300 ml-4"></div>
                    </div>
                    <div className="col-span-8">
                        <p className="text-gray-700">{item.description}</p>
                    </div>
                    <div className="col-span-3 flex justify-end items-center">
                        <div className="h-full border-l-2 border-gray-300 mr-4"></div>
                        <span className="font-semibold text-gray-600">{item.hours}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function ReferenceTables() {
    return (
        <div className="mt-12">
            {referenceData.map(table => (
                <ActivityTable key={table.code} {...table} />
            ))}
        </div>
    );
}