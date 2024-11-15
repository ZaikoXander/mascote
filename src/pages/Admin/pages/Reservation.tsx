import { useNavigate, useParams } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Calendar, Clipboard, Clock, Mail, MapPin, Phone, User, Users } from "lucide-react";


import useReservationsStore from "../store/useReservationStore";

import { formatDate } from "../helper";

import DashboardLink from "../components/DashboardLink";

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

  const {
    date, time, name, email, phone_number, number_of_guests: numberOfGuests,
    table, observations
  } = reservation

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
              <p>{formatDate(date)}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Horário
              </Label>
              <p>{time}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <User className="h-4 w-4 mr-2" />
                Nome
              </Label>
              <p>{name}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Label>
              <p>{email}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Número de Telefone
              </Label>
              <p>{phone_number}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Número de Convidados
              </Label>
              <p>{numberOfGuests}</p>
            </div>
            <div className="space-y-2">
              <Label className="font-semibold flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Mesa
              </Label>
              <p>{table}</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="font-semibold flex items-center">
              <Clipboard className="h-4 w-4 mr-2" />
              Observações
            </Label>
            <p className="whitespace-pre-wrap">{observations}</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
