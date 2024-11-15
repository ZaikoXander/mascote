import { Button } from "@/components/ui/button";

import { X } from "lucide-react";

import { Link } from "react-router-dom";

interface MobileMenuProps {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({ setIsMobileMenuOpen }: MobileMenuProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className="fixed top-0 left-0 w-64 bg-white h-full shadow-md z-50 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="outline" size="icon"
          className="absolute top-4 right-4"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="sr-only">Fechar menu</span>
          <X className="h-5 w-5" />
        </Button>
        <nav className="flex flex-col space-y-4 mt-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            to="/cardapio"
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cardápio
          </Link>
          <Link
            to="/reservas"
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reservas
          </Link>
          <Link
            to="/sobre"
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="text-gray-600 hover:text-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </Link>
        </nav>
      </div>
    </div>
  )
}