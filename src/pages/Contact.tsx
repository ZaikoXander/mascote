import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"

import api from "@/lib/api"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function resetFormValues() {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  async function handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault()

      await api.post('/messages', {
        name,
        email,
        subject,
        content: message,
      })
  
      resetFormValues()
      setSuccess(true)
      setError('')
    } catch (error) {
      console.error(error)
      setError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.')
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Contate-Nos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 mr-2 text-orange-500 flex-shrink-0" />
                <span>Av. Pres. Kennedy, 18.738 - Balneario Flórida, Praia Grande - SP, 11708-206</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 mr-2 text-orange-500" />
                <span>(13) 3493-1715</span>
              </li>
              {/* <li className="flex items-center">
                <Mail className="h-6 w-6 mr-2 text-orange-500" />
                <span>info@gourmethaven.com</span>
              </li> */}
              <li className="flex items-start">
                <Clock className="h-6 w-6 mr-2 text-orange-500 flex-shrink-0" />
                <div>
                  <p>Segunda não abre</p>
                  <p>Ter - Dom das 11:30 as 23:30</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/restaurantemascotepg"
                className="text-gray-600 hover:text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/restaurantemascote"
                className="text-gray-600 hover:text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Envie-nos uma Mensagem</h3>
          {success && (
            <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
              Sua mensagem foi enviada com sucesso!
            </div>
          )}
          {error && (
            <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu endereço de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Assunto</Label>
              <Input
                id="subject"
                placeholder="Assunto da mensagem"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                placeholder="Sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Encontre-nos</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.8276633242676!2d-46.58178172361141!3d-24.072372680566737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce20c4aecfbd6f%3A0x7ef8a6ef57a0808f!2sAv.%20Pres.%20Kennedy%2C%2018.738%20-%20Balneario%20Fl%C3%B3rida%2C%20Praia%20Grande%20-%20SP%2C%2011708-206!5e0!3m2!1spt-BR!2sbr!4v1729820616631!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            className="border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}