import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { Link, Route, Routes } from "react-router-dom"

import Main from "./Main"
import Message from "./Message"

import api from "@/lib/api"

import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();

  function getLocalStorageItems() {
    const accessToken = localStorage.getItem('access-token')
    const client = localStorage.getItem('client')
    const uid = localStorage.getItem('uid')

    return { accessToken, client, uid }
  }

  function resetLocalStorageItems() {
    localStorage.removeItem('access-token')
    localStorage.removeItem('client')
    localStorage.removeItem('uid')
  }

  useEffect(() => {
    async function validateToken() {
      const { accessToken, client, uid }  = getLocalStorageItems()
  
      try {
        await api.get('/auth/validate_token', {
          headers: {
            'access-token': accessToken,
            'client': client,
            'uid': uid
          } 
        })
      } catch {
        navigate('/admin/login')
        resetLocalStorageItems()
      }
    }

    validateToken()
  }, [navigate])

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/admin">
            <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600">
              Mascote
            </h1>
          </Link>
          {/* <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Reservations</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Messages</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Menu Editor</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Settings</a>
          </nav> */}
          <div className="flex items-center space-x-4">
            {/* <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button> */}
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow p-6">
        <div className="container mx-auto space-y-8">
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path="/messages/:id" element={<Message />} />
          </Routes>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Mascote. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}