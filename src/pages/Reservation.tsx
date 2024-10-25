import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

import axios, { AxiosError } from "axios";

export default function Reservation() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [table, setTable] = useState<number | null>(null);

  const [name, setName] = useState<string>('John Doe');
  const [email, setEmail] = useState<string>('john_doe@example.com');
  const [phoneNumber, setPhoneNumber] = useState<string>('11999999998');
  const [numberOfGuests, setNumberOfGuests] = useState<string>('8');
  const [date, setDate] = useState<string>('2024-12-03');
  const [time, setTime] = useState<string>('17:00');
  const [observations, setObservations] = useState<string>('Ola mundo');

  useEffect(() => {
    const dateInput = dateInputRef.current;
    if (dateInput) {
      dateInput.addEventListener('input', handleDateChange);
    }

    return () => {
      if (dateInput) {
        dateInput.removeEventListener('input', handleDateChange);
      }
    };
  }, []);

  const handleDateChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const date = new Date(input.value);
    const isMonday = date.getUTCDay() === 1;

    if (isMonday) { // Monday
      alert('Segundas-feiras não estão disponíveis para reservas.');
      input.value = ''; // Clear the input
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '')

      const { data } = await axios.post('http://localhost:3000/reservations', {
        name,
        email,
        phone_number: cleanedPhoneNumber,
        number_of_guests: numberOfGuests,
        date,
        time,
        observations
      })

      setTable(data.table);
      setFeedbackMessage('Sua reserva está confirmada!');

      // Reset form values
      setName('');
      setEmail('');
      setPhoneNumber('');
      setNumberOfGuests('');
      setDate('');
      setTime('');
      setObservations('');
    } catch (error) {
      console.error(error);

      const axiosError = error as AxiosError;
      const tableNotAvailableError = (axiosError?.response?.data as { table: Array<string> }).table.includes('No available tables for the selected date and time')

      if (tableNotAvailableError) {
        setFeedbackMessage('Não há mesas disponíveis para a data e horário selecionados.')
      } else {
        setFeedbackMessage('Ocorreu um erro ao fazer a reserva. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Fazer uma Reserva</h2>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Seu nome completo" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Seu endereço de email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" type="tel" placeholder="Seu número de telefone" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Número de Convidados</Label>
            <Select value={numberOfGuests} onValueChange={(value) => setNumberOfGuests(value)}>
              <SelectTrigger id="guests">
                <SelectValue placeholder="Selecione o número de convidados" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}{num === 9 && '+'} {num === 1 ? 'convidado' : 'convidados'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Data</Label>
            <Input
              id="date"
              type="date"
              required
              ref={dateInputRef}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Horário</Label>
            <Select value={time} onValueChange={(value) => setTime(value)}>
              <SelectTrigger id="time">
              <SelectValue placeholder="Selecione o horário da reserva" />
              </SelectTrigger>
              <SelectContent>
              {Array.from({ length: 13 }, (_, index) => {
                const hour = index + 11;
                return (
                <>
                  {hour !== 11 && (
                  <SelectItem key={`${hour}:00`} value={`${hour}:00`}>
                    {`${hour}:00`}
                  </SelectItem>)}
                  {hour < 23 && (
                  <SelectItem key={`${hour}:30`} value={`${hour}:30`}>
                    {`${hour}:30`}
                  </SelectItem>)}
                </>
                );
              })}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="special-requests">Observações (Opcional)</Label>
            <textarea
              id="special-requests"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              rows={4}
              placeholder="Alguma observação especial ou restrição alimentar?"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
            ></textarea>
          </div>
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Fazer Reserva
          </Button>
        </form>
        {feedbackMessage && (
          [
            'Não há mesas disponíveis para a data e horário selecionados.',
            'Ocorreu um erro ao fazer a reserva. Por favor, tente novamente.'
          ].includes(feedbackMessage) ? (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {feedbackMessage}<br />
            </div>
          ) : (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
              {feedbackMessage}<br />
              Seu número de mesa é <strong>{table}</strong>.
            </div>
          )
        )}
      </div>
    </div>
  )
}