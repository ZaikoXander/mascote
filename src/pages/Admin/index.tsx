import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { Link, Route, Routes } from "react-router-dom"

import Main from "./Main"
import Message from "./Message"

import api from "@/lib/api"

import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)

  async function handleLogout() {
    try {
      const authToken = localStorage.getItem('auth-token')

      await api.delete('/auth/sign_out', {
        headers: {
          'Authorization': authToken
        }
      });

      localStorage.removeItem('auth-token')
      navigate('/');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  }

  useEffect(() => {
    async function validateToken() {
      const authToken = localStorage.getItem('auth-token')
  
      try {
        await api.get('/auth/validate_token', {
          headers: {
            'Authorization': authToken
          } 
        })

        setIsUserAuthenticated(true)
      } catch (error) {
        console.error(error)
        localStorage.removeItem('auth-token')
        navigate('/admin/login')
      }
    }

    validateToken()
  }, [navigate])

  if (!isUserAuthenticated) return null

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
            <Button variant="ghost" size="icon" onClick={handleLogout}>
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