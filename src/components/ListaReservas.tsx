import type { Reserva } from '../types/Reserva'
import ReservaCard from './ReservaCard'

interface ListaReservasProps {
  reservas: Reserva[];
}

function ListaReservas({ reservas }: ListaReservasProps) {
  return (
    <section>
      <h2>Reservas cadastradas</h2>

      <div className="lista-reservas">
        {reservas.map((reserva) => (
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