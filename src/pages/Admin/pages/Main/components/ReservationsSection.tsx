import { Link } from "react-router-dom"

import useReservationsStore from "@/pages/Admin/store/useReservationStore"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import Map from "@zaikoxander/react-map-render"

import { formatDate } from "../../../helper"

export default function ReservationsSection() {
  const { reservations } = useReservationsStore()

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Reservas</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Horário</TableHead>
              <TableHead>Convidados</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Map
              array={reservations}
              render={({ id, name, date, time, number_of_guests }) => (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{formatDate(date)}</TableCell>
                  <TableCell>{time}</TableCell>
                  <TableCell>{number_of_guests}</TableCell>
                  <TableCell>
                    <Link to={`/admin/reservations/${id}`}>
                      <Button variant="outline" size="sm">Ver</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              )}
            />
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
