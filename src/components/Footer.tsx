import { MapPin, Phone, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contate-nos</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Av. Pres. Kennedy, 18.738 - Balneario Flórida, Praia Grande - SP, 11708-206</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(13) 3493-1715</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Horário de funcionamento
            </h3>
            <ul className="space-y-2">
              <li>Segunda não abre</li>
              <li>Ter - Dom das 11:30 as 23:30</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Mascote. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/restaurantemascotepg"
              className="hover:text-[#DDBB5B]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/restaurantemascote"
              className="hover:text-[#DDBB5B]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}