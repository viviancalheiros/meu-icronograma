import React, { useState } from 'react';
import AppLayout from './Testheader';

const faqs = [
  {
    q: 'O que é “Meu ICronograma”?',
    a: (
      <p className="text-gray-700">
        O Meu ICronograma é uma plataforma para alunos de Ciência da Computação da UFAL organizarem o cronograma
        semestral, visualizando matérias obrigatórias e seus pré-requisitos e planejando as eletivas por período.
      </p>
    ),
  },
  {
    q: 'A plataforma “Meu ICronograma” serve para me matricular nas matérias?',
    a: (
      <p className="text-gray-700">
        Não. Ela é apenas para organização dos alunos e <span className="font-semibold">não</span> possui vínculo com o SIGAA.
      </p>
    ),
  },
  {
    q: 'Qual período é indicado para utilizar a plataforma?',
    a: (
      <p className="text-gray-700">
        Qualquer período do curso — desde calouros que não sabem em que disciplina se matricular até alunos próximos de concluir
        e que querem ver o que falta.
      </p>
    ),
  },
  {
    q: 'O que são matérias eletivas?',
    a: (
      <p className="text-gray-700">
        Disciplinas que o estudante escolhe de acordo com seus interesses e necessidades para complementar a formação. Elas
        integram a grade curricular e são essenciais para a integralização do curso.
      </p>
    ),
  },
  {
    q: 'O que são horas complementares?',
    a: (
      <p className="text-gray-700">
        Atividades acadêmicas realizadas fora da carga horária obrigatória, mas essenciais para a formação. Servem para enriquecer
        o aprendizado com experiências que complementam os conhecimentos de sala de aula.
      </p>
    ),
  },
  {
    q: 'Como registrar horas complementares?',
    a: (
      <div className="text-gray-700 space-y-2">
        <p>No SIGAA: <span className="whitespace-nowrap">Ensino → Registro de atividade autônoma → Cadastrar novo registro</span>.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Envie o documento comprobatório (ex.: certificado).</li>
          <li>Em “Tipo de atividade”, selecione a opção que mais combina com a atividade realizada (o tempo mostrado é o máximo; as horas serão analisadas).</li>
          <li>Em “Descrição”, insira o nome da atividade (ex.: “Secomp 2024”).</li>
        </ul>
      </div>
    ),
  },
  {
    q: 'O que são ênfases?',
    a: (
      <p className="text-gray-700">
        Especificações de conteúdo que permitem aprofundar a formação em subáreas. No curso de Ciência da Computação, por exemplo:
        computação visual, sistemas de informação, sistemas inteligentes e sistemas de computação.
      </p>
    ),
  },
  {
    q: 'O que são matérias pré-requisitos?',
    a: (
      <p className="text-gray-700">
        Disciplinas que precisam ser concluídas antes de se matricular em uma disciplina futura.
      </p>
    ),
  },
  {
    q: 'Como funcionam os códigos de horário do SIGAA?',
    a: (
      <div className="text-gray-700 space-y-2">
        <p>
          Exemplo: <span className="font-mono">24M34</span>
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-mono">24</span>: dias da semana (2 = segunda, 4 = quarta).</li>
          <li><span className="font-mono">M</span>: turno (Manhã).</li>
          <li><span className="font-mono">34</span>: horários/aulas (3ª e 4ª aulas).</li>
        </ul>
        <p className="italic">Resumo: segunda e quarta pela manhã, 3ª e 4ª aulas.</p>
      </div>
    ),
  },
  {
    q: 'Como funciona o nível de prioridade de uma matéria?',
    a: (
      <ol className="text-gray-700 list-decimal pl-5 space-y-1">
        <li>Alunos do curso para quem a disciplina é obrigatória.</li>
        <li>Estudantes que precisam “nivelar” a formação (pré-requisito/fundamental).</li>
        <li>Quem precisa da disciplina para se formar (alta prioridade).</li>
        <li>Reprovados que precisam cursar novamente.</li>
        <li>Quem pretende cursar antes do período previsto no PPC.</li>
        <li>Demais estudantes (eletiva/sem encaixe nas categorias anteriores).</li>
      </ol>
    ),
  },
  {
    q: 'Como funciona o sistema de aprovação?',
    a: (
      <div className="text-gray-700 space-y-3">
        <p><span className="font-semibold">Aprovação direta:</span> média ≥ 7,0.</p>
        <p>
          <span className="font-semibold">Reavaliação de bimestre:</span> substitui a <em>menor</em> nota do bimestre, se a nova for maior.
        </p>
        <div>
          <p className="font-semibold">Reavaliação final (RF):</p>
          <p>Direito se a média ficar entre 5,0 e 6,9. A aprovação ocorre se:</p>
          <div className="overflow-x-auto">
            <pre className="bg-white border rounded-lg p-3 text-sm">
{`((6 * Média_AB1_e_AB2) + 4 * Nota_RF) / 10 ≥ 5,50`}
            </pre>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Duvidas() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AppLayout>
      <div className="w-full min-h-screen flex flex-col items-center font-roboto">
        <div className="w-full max-w-5xl px-4 md:px-6 flex flex-col items-center">
          <div className="w-full flex flex-col items-center mb-12 mt-12">
            <div className="w-1/2 h-1 bg-purple-dark mb-2 self-end scale-y-50"></div>
            <h1 className="text-purple-dark text-3xl font-bold text-center">DÚVIDAS FREQUENTES</h1>
            <div className="w-1/2 h-1 bg-purple-dark mt-2 self-start scale-y-50"></div>
          </div>

          <div className="w-full max-w-4xl space-y-6">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-gray-100 border rounded-2xl border-purple-dark shadow-xl"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <h3 className="text-purple-dark font-semibold md:text-lg">
                      {item.q}
                    </h3>
                    <span
                      className={
                        'transition-transform duration-200 select-none text-purple-dark text-2xl leading-none ' +
                        (isOpen ? 'rotate-45' : '')
                      }
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${idx}`}
                    className={
                      'overflow-hidden transition-[max-height] duration-300 ' +
                      (isOpen ? 'max-h-[1000px]' : 'max-h-0')
                    }
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6">
                      <div className="border-l-4 border-purple-dark pl-4">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-16" />
        </div>
      </div>
    </AppLayout>
  );
}
