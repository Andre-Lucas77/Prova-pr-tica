import { useState } from 'react'
import type { FormEvent } from 'react'
import type { Reserva } from '../types/Reserva'

interface FormReservaProps {
  adicionarReserva: (reserva: Reserva) => void;
}

function FormReserva({ adicionarReserva }: FormReservaProps) {

  const [cliente, setCliente] = useState('')
  const [sala, setSala] = useState('')
  const [capacidade, setCapacidade] = useState(1)
  const [equipamentos, setEquipamentos] = useState('')
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')
  const [duracao, setDuracao] = useState(2)
  const [status, setStatus] = useState('Pendente')

  function cadastrarReserva(e: FormEvent) {
    e.preventDefault()

    if (
      cliente === '' ||
      sala === '' ||
      data === '' ||
      horario === ''
    ) {
      alert('Preencha todos os campos obrigatórios!')
      return
    }

    if (duracao < 2) {
      alert('A duração mínima da reserva é de 2 horas!')
      return
    }

    const novaReserva: Reserva = {
      id: Date.now(),
      cliente,
      sala,
      capacidade,
      equipamentos,
      data,
      horario,
      duracao,
      status
    }

    adicionarReserva(novaReserva)

    // Limpa o formulário depois do cadastro
    setCliente('')
    setSala('')
    setCapacidade(1)
    setEquipamentos('')
    setData('')
    setHorario('')
    setDuracao(2)
    setStatus('Pendente')
  }

  return (
    <section>
      <h2>Nova Reserva</h2>

      <form onSubmit={cadastrarReserva}>

        <label>Cliente:</label>
        <input
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />

        <label>Sala:</label>
        <select
          value={sala}
          onChange={(e) => setSala(e.target.value)}
          required
        >
          <option value="">Selecione uma sala</option>
          <option value="Estúdio A">Estúdio A</option>
          <option value="Estúdio B">Estúdio B</option>
          <option value="Estúdio C">Estúdio C</option>
        </select>

        <label>Capacidade:</label>
        <input
          type="number"
          value={capacidade}
          onChange={(e) => setCapacidade(Number(e.target.value))}
          min="1"
          required
        />

        <label>Equipamentos:</label>
        <input
          type="text"
          value={equipamentos}
          onChange={(e) => setEquipamentos(e.target.value)}
        />

        <label>Data:</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />

        <label>Horário:</label>
        <input
          type="time"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />

        <label>Duração (horas):</label>
        <input
          type="number"
          value={duracao}
          onChange={(e) => setDuracao(Number(e.target.value))}
          min="2"
          required
        />

        <label>Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pendente">Pendente</option>
          <option value="Confirmada">Confirmada</option>
        </select>

        <button type="submit">
          Cadastrar Reserva
        </button>

      </form>
    </section>
  )
}

export default FormReserva