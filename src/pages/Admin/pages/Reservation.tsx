import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { ArrowLeft, Calendar, Clipboard, Clock, Mail, MapPin, Phone, User, Users } from "lucide-react";

import { Link, useNavigate, useParams } from "react-router-dom";

import useReservationsStore from "./store/useReservationStore";

import { formatDateTime } from "../helper";

function DashboardLink() {
  return (
    <Link to="/admin" className="flex items-center text-gray-600 hover:text-gray-800 mb-6">
      <ArrowLeft className="h-4 w-4 mr-2" />
      Voltar para o Dashboard
    </Link>
  )
}

export default function Reservation() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { getReservationById } = useReservationsStore();
  
  const reservation = getReservationById(Number(id));

  if (!reservation) {
    setTimeout(() => { navigate('/admin') }, 2000)

    return (
      <>
        <DashboardLink />
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Reserva não encontrada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Redirecionando para a página do Dashboard...</p>
          </CardContent>
        </Card>
      </>
    )
  }

  return (
    <>
      <DashboardLink />
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Detalhes da Reserva
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Data
              </Label>
              <p>{formatDateTime(reservation.date)}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Horário
              </Label>
              <p>{reservation.time}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <User className="h-4 w-4 mr-2" />
                Nome
              </Label>
              <p>{reservation.name}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Label>
              <p>{reservation.email}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Número de Telefone
              </Label>
              <p>{reservation.phone_number}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Número de Convidados
              </Label>
              <p>{reservation.number_of_guests}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Mesa
              </Label>
              <p>{reservation.table}</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="font-semibold flex items-center">
              <Clipboard className="h-4 w-4 mr-2" />
              Observações
            </Label>
            <p className="whitespace-pre-wrap">{reservation.observations}</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
