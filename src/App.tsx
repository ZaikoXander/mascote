import { useState } from "react"

import { Button } from "@/components/ui/button"
import { MapPin, Phone, Facebook, Instagram, Menu, X } from "lucide-react"

import { Link, Route, Routes, useLocation } from "react-router-dom"

import Home from "./pages/Home"
import Reservation from "./pages/Reservation"

import { cn } from "./lib/utils"

function App() {
  const location = useLocation()
  const isOnReservationsPage = location.pathname === '/reservas'

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mascote</h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-800">Início</Link>
            <Link to="/cardapio" className="text-gray-600 hover:text-gray-800">Cardápio</Link>
            <Link to="/reservas" className="text-gray-600 hover:text-gray-800">Reservas</Link>
            <Link to="/sobre" className="text-gray-600 hover:text-gray-800">Sobre</Link>
            <Link to="/contatos" className="text-gray-600 hover:text-gray-800">Contato</Link>
          </nav>
          <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abra o menu</span>
          </Button>
            {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <div
              className="fixed top-0 left-0 w-64 bg-white h-full shadow-md z-50 p-4"
              onClick={(e) => e.stopPropagation()}
              >
              <Button
                variant="outline" size="icon"
                className="absolute top-4 right-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-5 w-5" />
              </Button>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMenuOpen(false)}>Início</Link>
                <Link to="/cardapio" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMenuOpen(false)}>Cardápio</Link>
                <Link to="/reservas" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMenuOpen(false)}>Reservas</Link>
                <Link to="/sobre" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMenuOpen(false)}>Sobre</Link>
                <Link to="/contatos" className="text-gray-600 hover:text-gray-800" onClick={() => setIsMenuOpen(false)}>Contato</Link>
              </nav>
              </div>
            </div>
            )}
        </div>
      </header>

      <main className={cn('flex-grow', { 'bg-gray-100 py-20': isOnReservationsPage })}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<Reservation />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contate-nos</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Av. Pres. Kennedy, 18738 - Vila Caiçara, Praia Grande - SP, 11709-000</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>(13) 3493-1715</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Horário de funcionamento</h3>
              <ul className="space-y-2">
                <li>Segunda não abre</li>
                <li>Ter - Dom das 11:30 as 23:30</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Mascote. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.facebook.com/restaurantemascotepg" className="hover:text-orange-500" target="_blank" rel="noopener noreferrer"><Facebook className="h-6 w-6" /></a>
              <a href="https://www.instagram.com/restaurantemascote" className="hover:text-orange-500" target="_blank" rel="noopener noreferrer"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
