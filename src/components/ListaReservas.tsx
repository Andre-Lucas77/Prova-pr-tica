import { useState } from 'react'
import type { Reserva } from '../types/Reserva'
import ReservaCard from './ReservaCard'

interface ListaReservasProps {
  reservas: Reserva[];
}

function ListaReservas({ reservas }: ListaReservasProps) {
  const [filtro, setFiltro] = useState('')
  const reservasFiltradas = reservas.filter((reserva) =>
  reserva.cliente.toLowerCase().includes(filtro.toLowerCase())
)
const reservasOrdenadas = [...reservasFiltradas].sort((a, b) =>
  a.cliente.localeCompare(b.cliente)
)
    return (
    <section>
      <h2>Reservas cadastradas</h2>
      <input
        type="text"
        placeholder="Filtrar por cliente..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}/>

      <div className="lista-reservas">
        {reservasOrdenadas.map((reserva) => (
          <ReservaCard
            key={reserva.id}
            reserva={reserva}
          />
        ))}
      </div>
    </section>
  )
}

export default ListaReservas