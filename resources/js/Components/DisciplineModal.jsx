import { useEffect, useMemo, useState } from 'react'
import Modal from '@/Components/Modal'
import Button from '@/Components/Button'

export default function DisciplineModal({
  open,
  onClose,
  onSave,
  variant,
  courseName,
  prerequisites = [],
  options = [],
  defaults = {},
  loading = false,
}) {
  const [code, setCode] = useState(defaults.code ?? '')
  const [professor, setProfessor] = useState(defaults.professor ?? '')
  const [room, setRoom] = useState(defaults.room ?? '')
  const [finalGrade, setFinalGrade] = useState(defaults.finalGrade ?? '')
  const [notes, setNotes] = useState(defaults.notes ?? '')
  const [status, setStatus] = useState(defaults.status ?? null)
  const [selectedOptionId, setSelectedOptionId] = useState(defaults.selectedOptionId)
  const [periodoPago, setPeriodoPago] = useState(defaults.periodoPago ?? '')
  const [equivalenciaAceita, setEquivalenciaAceita] = useState(defaults.equivalenciaAceita ?? false)

  useEffect(() => {
    if (!open) return
    setCode(defaults.code ?? '')
    setProfessor(defaults.professor ?? '')
    setRoom(defaults.room ?? '')
    setFinalGrade(defaults.finalGrade ?? '')
    setNotes(defaults.notes ?? '')
    setStatus(defaults.status ?? null)
    setSelectedOptionId(defaults.selectedOptionId)
    setPeriodoPago(defaults.periodoPago ?? '')
    setEquivalenciaAceita(defaults.equivalenciaAceita ?? false)
  }, [open])

  const title = useMemo(
    () => (variant === 'disciplina'
      ? `Dados da disciplina - ${courseName ?? '—'}`
      : 'Dados da eletiva'),
    [variant, courseName]
  )

  function handleSave() {
    onSave?.({
      variant,
      selectedOptionId,
      courseName,
      code,
      professor,
      room,
      finalGrade,
      notes,
      status,
      periodoPago,
      equivalenciaAceita,
      prerequisites,
    })
    onClose()
  }

    return (
    <Modal
      show={open}
      onClose={onClose}
      maxWidth="2xl"
      className="rounded-[20px] sm:rounded-[28px]"
    >
      {/* Header */}
      <div className="shrink-0 flex items-center gap-3 bg-white px-4 py-3 sm:px-6 sm:py-4">
        <h1 className="flex-1 text-lg sm:text-2xl font-bold text-purple-dark">{title}</h1>
        <button
          aria-label="Fechar"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full shrink-0"
        >
          <svg width="28" height="28" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0097 23.5454C19.0334 22.5691 19.0334 20.9862 20.0097 20.0099C20.986 19.0336 22.5689 19.0336 23.5452 20.0099L30.0143 26.479L36.4768 20.0164C37.4533 19.0401 39.0361 19.0401 40.0123 20.0164C40.9888 20.9928 40.9888 22.5757 40.0123 23.552L33.5498 30.0145L40.0098 36.4743C40.9861 37.4508 40.9861 39.0335 40.0098 40.0098C39.0333 40.9863 37.4506 40.9863 36.4741 40.0098L30.0143 33.55L23.5525 40.012C22.5762 40.9883 20.9932 40.9883 20.0169 40.012C19.0406 39.0355 19.0406 37.4528 20.0169 36.4763L26.4788 30.0145L20.0097 23.5454Z" fill="#373F75"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M57.5 30C57.5 45.1877 45.1877 57.5 30 57.5C14.8122 57.5 2.5 45.1877 2.5 30C2.5 14.8122 14.8122 2.5 30 2.5C45.1877 2.5 57.5 14.8122 57.5 30ZM7.51707 30C7.51707 42.417 17.583 52.483 30 52.483C42.417 52.483 52.483 42.417 52.483 30C52.483 17.583 42.417 7.51707 30 7.51707C17.583 7.51707 7.51707 17.583 7.51707 30Z" fill="#373F75"/>
          </svg>
        </button>
      </div>

      <div className="grow overflow-y-auto px-4 pt-4 sm:px-6">
        {variant === 'eletiva' && (
          <div className="mb-6">
            <label className="mb-2 block font-semibold text-purple-dark">Escolha uma disciplina</label>
            <div className="relative">
              <select
                value={selectedOptionId ?? ''}
                onChange={(e) => setSelectedOptionId(e.target.value)}
                className="w-full rounded-lg border border-purple-dark px-3 py-2 sm:px-4 sm:py-2 outline-none"
              >
                <option value="" disabled>Matéria escolhida</option>
                {options.map(opt => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Field label="Código">
              <input
                value={code}
                onChange={(e)=>setCode(e.target.value.toUpperCase())}
                className="w-full rounded-lg border border-purple-dark px-3 py-2 outline-none"
                placeholder="Ex: MAT001"
              />
            </Field>

            <Field label="Professor" className="sm:col-span-2 lg:col-span-2">
              <input
                value={professor}
                onChange={(e)=>setProfessor(e.target.value)}
                className="w-full rounded-lg border border-purple-dark px-3 py-2 outline-none"
                placeholder="Nome do professor"
              />
            </Field>

            <Field label="Bloco/Sala">
              <input
                value={room}
                onChange={(e)=>setRoom(e.target.value)}
                className="w-full rounded-lg border border-purple-dark px-3 py-2 outline-none"
                placeholder="Ex: A-101"
              />
            </Field>
          </div>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <Field label="Média Final">
              <input
                value={finalGrade}
                onChange={(e)=>setFinalGrade(e.target.value)}
                className="w-full rounded-lg border border-purple-dark px-3 py-2 outline-none"
                placeholder="Ex: 8.5"
              />
            </Field>

            <Field label="Período que pagou">
              <input
                value={periodoPago}
                onChange={(e)=>setPeriodoPago(e.target.value)}
                disabled={!status}
                className={`w-full rounded-lg border border-purple-dark px-3 py-2 outline-none ${!status ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                placeholder={!status ? 'Selecione um status' : 'Ex: 2023.1'}
              />
            </Field>
          </div>

          <div className="space-y-3 text-purple-dark">
            <label className="block font-semibold">Status da disciplina:</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={status === 'concluida'} 
                  onChange={()=>{
                    if (status === 'concluida') {
                      setStatus(null); // Desmarcar
                      setPeriodoPago(''); // Resetar período quando desmarcar
                    } else {
                      setStatus('concluida'); // Marcar e desmarcar outros
                    }
                  }}
                  className="w-4 h-4 text-purple-dark rounded"
                />
                <span>Disciplina concluída</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={status === 'pagando'} 
                  onChange={()=>{
                    if (status === 'pagando') {
                      setStatus(null); // Desmarcar
                      setPeriodoPago(''); // Resetar período quando desmarcar
                    } else {
                      setStatus('pagando'); // Marcar e desmarcar outros
                    }
                  }}
                  className="w-4 h-4 text-purple-dark rounded"
                />
                <span>Pagando atualmente</span>
              </label>
              <label className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={equivalenciaAceita} 
                  onChange={(e)=>setEquivalenciaAceita(e.target.checked)}
                  className="w-4 h-4 text-purple-dark rounded"
                />
                <span>Equivalência aceita</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <textarea
            value={notes}
            onChange={(e)=>setNotes(e.target.value)}
            className="min-h-[120px] w-full resize-y rounded-lg border border-purple-dark px-3 py-2 outline-none"
            placeholder="Adicione observações sobre a disciplina..."
          />
        </div>

        <div className="mb-2 sm:mb-8">
          <h2 className="mb-2 text-lg sm:text-xl font-semibold text-purple-dark">Pré requisitos:</h2>
          {prerequisites.length > 0 ? (
            <ul className="list-disc space-y-1 pl-6 text-purple-dark">
              {prerequisites.map((p) => (
                <li key={p.id ?? p.name} className={p.done ? 'line-through opacity-70' : ''}>
                  {p.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700 font-medium">
                  Esta disciplina não possui pré-requisitos!
                </span>
              </div>
              <p className="text-green-600 text-sm mt-1 ml-7">
                Você pode cursar esta matéria a qualquer momento.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 bg-white px-4 py-3 sm:px-6 sm:py-2">
        <div className="flex justify-end">
          <Button
            className="bg-purple-light rounded-xl px-6 py-3 text-white hover:bg-purple-dark disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'SALVANDO...' : 'SALVAR'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

function Field({ label, className = '', children }) {
  return (
    <div className={className}>
      <label className="mb-1 sm:mb-1 block text-sm sm:text-base font-semibold text-purple-dark">{label}</label>
      {children}
    </div>
  )
}