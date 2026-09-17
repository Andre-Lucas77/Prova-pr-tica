import { useState } from 'react'
import type { Reserva } from './types/Reserva'
import ListaReservas from './components/ListaReservas'
import FormReserva from './components/FormReserva'
import './App.css'

function App() {

  const [reservas, setReservas] = useState<Reserva[]>([
    {
      id: 1,
      cliente: "Ana Souza",
      sala: "Estúdio A",
      capacidade: 5,
      equipamentos: "Iluminação",
      data: "2026-09-17",
      horario: "09:00",
      duracao: 2,
      status: "Confirmada"
    },
    {
      id: 2,
      cliente: "Bruno Lima",
      sala: "Estúdio B",
      capacidade: 8,
      equipamentos: "Tripé",
      data: "2026-09-17",
      horario: "13:00",
      duracao: 3,
      status: "Confirmada"
    },
    {
      id: 3,
      cliente: "Carla Mendes",
      sala: "Estúdio A",
      capacidade: 5,
      equipamentos: "Flash",
      data: "2026-09-18",
      horario: "10:00",
      duracao: 2,
      status: "Pendente"
    },
    {
      id: 4,
      cliente: "Daniel Rocha",
      sala: "Estúdio C",
      capacidade: 10,
      equipamentos: "Iluminação e Tripé",
      data: "2026-09-18",
      horario: "15:00",
      duracao: 4,
      status: "Confirmada"
    },
    {
      id: 5,
      cliente: "Eduarda Alves",
      sala: "Estúdio B",
      capacidade: 8,
      equipamentos: "Flash e Tripé",
      data: "2026-09-19",
      horario: "11:00",
      duracao: 2,
      status: "Pendente"
    }
  ])

function adicionarReserva(novaReserva: Reserva) {

  const existeConflito = reservas.some((reserva) =>
    reserva.sala === novaReserva.sala &&
    reserva.data === novaReserva.data &&
    reserva.horario === novaReserva.horario
  )

  if (existeConflito) {
    alert('Já existe uma reserva para essa sala nesse horário!')
    return
  }

  setReservas([...reservas, novaReserva])
}

  return (
    <div className="app">

      <header>
        <h1>Reserva de Estúdio Fotográfico</h1>
        <p>Código: PP-16F6FAK-13L0YNC</p>
      </header>

      <main>
        <h2>Gerenciamento de Reservas</h2>

        <FormReserva adicionarReserva={adicionarReserva} />

        <ListaReservas reservas={reservas} />
      </main>

    </div>
  )
}

export default App