import { Navigate, Route, Routes, useLocation } from "react-router-dom"

import Home from "@/pages/Home"
import ReservationForm from "@/pages/ReservationForm"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import Menu from "@/pages/Menu"

import { cn } from "@/lib/utils"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  const location = useLocation()
  const isNotOnHomePage = location.pathname !== '/'

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className={cn('flex-grow', { 'bg-gray-100 py-20': isNotOnHomePage })}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservas" element={<ReservationForm />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/cardapio" element={<Menu />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all route */}
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
