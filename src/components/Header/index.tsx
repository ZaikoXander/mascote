import { useState } from "react"

import { Button } from "@/components/ui/button"

import { Menu as MenuIcon } from "lucide-react"

import { Link } from "react-router-dom"

import MobileMenu from "./MobileMenu"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600">
            Mascote
          </h1>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Início
          </Link>
          <Link to="/cardapio" className="text-gray-600 hover:text-gray-800">
            Cardápio
          </Link>
          <Link to="/reservas" className="text-gray-600 hover:text-gray-800">
            Reservas
          </Link>
          <Link to="/sobre" className="text-gray-600 hover:text-gray-800">
            Sobre
          </Link>
          <Link to="/contato" className="text-gray-600 hover:text-gray-800">
            Contato
          </Link>
        </nav>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Abra o menu</span>
        </Button>
        {
          isMobileMenuOpen ?
            <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} /> :
            null
        }
      </div>
    </header>
  )
}