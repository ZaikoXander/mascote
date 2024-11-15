import { useEffect } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import api from "@/lib/api"

import { Link } from "react-router-dom"

import useReservationsStore from "./store/useReservationStore"
import useMessagesStore from "./store/useMessagesStore"

import { formatDate, formatDateTime } from "../helper"

import type Message from "./types/Message"
import type Reservation from "./types/Reservation"

export default function Main() {
  const { reservations, setReservations } = useReservationsStore()
  const { messages, setMessages } = useMessagesStore()

  useEffect(() => {
    async function fetchReservations(): Promise<Reservation[]> {
      const authToken = localStorage.getItem('auth-token')

      try {
        const { data }: { data: Reservation[] } =
          await api.get('/reservations', {
            headers: {
              'Authorization': authToken
            }
          })

        return data
      } catch (error) {
        console.error(error)
        return []
      }
    }

    async function fetchMessages(): Promise<Message[]> {
      const authToken = localStorage.getItem('auth-token')

      try {
        const { data }: { data: Message[] } = await api.get('/messages', {
          headers: {
            'Authorization': authToken
          }
        })

        return data
      } catch (error) {
        console.error(error)
        return []
      }
    }

    async function fetchData() {
      const [reservationsData, messagesData] =
        await Promise.all([fetchReservations(), fetchMessages()])

      setReservations(reservationsData)
      setMessages(messagesData)
    }

    fetchData()
  }, [setMessages, setReservations])

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
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.map((reservation) => (
                <TableRow key={reservation.id}>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{formatDate(reservation.date)}</TableCell>
                  <TableCell>{reservation.time}</TableCell>
                  <TableCell>{reservation.number_of_guests}</TableCell>
                  <TableCell>
                    <Link to={`/admin/reservations/${reservation.id}`}>
                      <Button variant="outline" size="sm">Ver</Button>
                    </Link>
                  </TableCell>
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
