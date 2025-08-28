import { useState } from 'react'
import DisciplineModal from '@/Components/DisciplineModal'

export default function TestComponent() {
  const [openDisciplina, setOpenDisciplina] = useState(false)
  const [openEletiva, setOpenEletiva] = useState(false)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Componentes de Teste</h1>

      <div className="flex gap-4">
        <button
          className="mt-4 rounded px-4 py-2 text-white bg-purple-light"
          onClick={() => setOpenDisciplina(true)}
        >
          Abrir modal disciplinas
        </button>

        <button
          className="mt-4 rounded px-4 py-2 text-white bg-purple-light"
          onClick={() => setOpenEletiva(true)}
        >
          Abrir modal eletivas
        </button>
      </div>

      {/* Modal Disciplina */}
      <DisciplineModal
        open={openDisciplina}
        onClose={() => setOpenDisciplina(false)}
        variant="disciplina"
        courseName="XXXX"
        prerequisites={[
          { id: 1, name: 'Matéria 1' },
          { id: 2, name: 'Matéria 2', done: true },
          { id: 3, name: 'Matéria 3' },
        ]}
        onSave={(data) => console.log('Salvar disciplina:', data)}
      />

      {/* Modal Eletiva */}
      <DisciplineModal
        open={openEletiva}
        onClose={() => setOpenEletiva(false)}
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
    </div>
  )
}
