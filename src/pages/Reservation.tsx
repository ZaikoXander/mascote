import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";

export default function Reservation() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [tableNumber, setTableNumber] = useState<number | null>(null);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [guests, setGuests] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTableNumber = Math.floor(Math.random() * 20) + 1; // Random table number between 1 and 20
    setTableNumber(randomTableNumber);
    setFeedbackMessage('Sua reserva está confirmada!');

    // Reset form values
    setName('');
    setEmail('');
    setPhone('');
    setGuests('');
    setDate('');
    setTime('');
    setSpecialRequests('');
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
            <Input id="phone" type="tel" placeholder="Seu número de telefone" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Número de Convidados</Label>
            <Select value={guests} onValueChange={(value) => setGuests(value)}>
              <SelectTrigger id="guests">
                <SelectValue placeholder="Selecione o número de convidados" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'convidado' : 'convidados'}
                  </SelectItem>
                ))}
                <SelectItem value="9+">9+ convidados</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Data</Label>
            <Input id="date" type="date" required ref={dateInputRef} value={date} onChange={(e) => setDate(e.target.value)} />
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
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
            ></textarea>
          </div>
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            Fazer Reserva
          </Button>
        </form>
        {feedbackMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
            {feedbackMessage}<br />
            Seu número de mesa é <strong>{tableNumber}</strong>.
          </div>
        )}
      </div>
    </div>
  )
}