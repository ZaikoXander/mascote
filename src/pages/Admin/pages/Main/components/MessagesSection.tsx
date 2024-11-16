import { Link } from "react-router-dom"

import useMessagesStore from "@/pages/Admin/store/useMessagesStore"

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

import { formatDateTime } from "../../../helper"

export default function MessagesSection() {
  const { messages } = useMessagesStore()

  return (
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
            <Map
              array={messages}
              render={({ id, name, email, subject, created_at }) => (
                <TableRow key={id}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{subject}</TableCell>
                  <TableCell>{formatDateTime(created_at)}</TableCell>
                  <TableCell>
                    <Link to={`/admin/messages/${id}`}>
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
