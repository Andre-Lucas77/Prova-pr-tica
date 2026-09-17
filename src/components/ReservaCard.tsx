import type { Reserva } from '../types/Reserva'

interface ReservaCardProps {
  reserva: Reserva;
}

function ReservaCard({ reserva }: ReservaCardProps) {
  return (
    <div className="reserva-card">
      <h3>{reserva.cliente}</h3>

      <p><strong>Sala:</strong> {reserva.sala}</p>
      <p><strong>Capacidade:</strong> {reserva.capacidade} pessoas</p>
      <p><strong>Equipamentos:</strong> {reserva.equipamentos}</p>
      <p><strong>Data:</strong> {reserva.data}</p>
      <p><strong>Horário:</strong> {reserva.horario}</p>
      <p><strong>Duração:</strong> {reserva.duracao} horas</p>
      <p><strong>Status:</strong> {reserva.status}</p>
    </div>
  )
}

export default ReservaCard