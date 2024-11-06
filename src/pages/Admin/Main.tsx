import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import api from "@/lib/api"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface Reservation {
  created_at: string
  date: string
  email: string
  id: number
  name: string
  number_of_guests: number
  observations: string
  phone_number: string
  table: number
  time: string
  updated_at: string
}

interface Message {
  content: string
  created_at: string
  email: string
  id: number
  name: string
  subject: string
  updated_at: string
}

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

function formatDateTime(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

export default function Main() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    async function fetchReservations() {
      const { data }: { data: Reservation[] } = await api.get('/reservations')
      setReservations(data)
    }

    async function fetchMessages() {
      const { data }: { data: Message[] } = await api.get('/messages')
      setMessages(data)
    }

    fetchReservations()
    fetchMessages()
  }, [])

  return (
    <>
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
                {/* <TableHead>Actions</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{formatDate(reservation.date)}</TableCell>
                  <TableCell>{reservation.time}</TableCell>
                  <TableCell>{reservation.number_of_guests}</TableCell>
                  {/* <TableCell>
                    <Button variant="outline" size="sm">Edit</Button>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Mensagens de Contato</h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Assunto</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                  <TableCell>{formatDateTime(message.created_at)}</TableCell>
                  <TableCell>
                    <Link to={`/admin/messages/${message.id}`}>
                      <Button variant="outline" size="sm">Ver</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </>
  )
}
