import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import axios from "axios"
import { LogOut } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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

export default function Admin() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    async function fetchReservations() {
      const { data }: { data: Reservation[] } =
        await axios.get('http://localhost:3000/reservations')
      setReservations(data)
    }

    async function fetchMessages() {
      const { data }: { data: Message[] } =
        await axios.get('http://localhost:3000/messages')
      setMessages(data)
    }

    fetchReservations()
    fetchMessages()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/admin">
            <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600">
              Mascote
            </h1>
          </Link>
          {/* <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Reservations</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Messages</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Menu Editor</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Settings</a>
          </nav> */}
          <div className="flex items-center space-x-4">
            {/* <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button> */}
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className="container mx-auto space-y-8">
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
                        <Button variant="outline" size="sm">Ver</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Mascote. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}