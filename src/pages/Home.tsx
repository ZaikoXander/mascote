import type IFeaturedDish from "@/types/FeaturedDish"

import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"

import FeaturedDish from "@/components/FeaturedDish"

import abadejoAModa from '../assets/abadejo-a-moda.jpeg'
import fileMingnonAparmegiana from '../assets/file-mingnon-aparmegiana.jpeg'
import portuguesaPizza from '../assets/portuguesa-pizza.jpeg'
import mussarelaPizza from '../assets/mussarela-pizza.jpeg'
import calabresaPizza from '../assets/calabresa-pizza.jpeg'

export default function Home() {
  const navigate = useNavigate()

  const featuredDishes: IFeaturedDish[] = [
    { name: "Abadejo a moda", image: abadejoAModa },
    { name: "Abadejo abellemuniere", image: "/placeholder.svg?height=200&width=400" },
    { name: "File mingnon aparmegiana", image: fileMingnonAparmegiana },
    { name: "Pizza Portuguesa", image: portuguesaPizza },
    { name: "Pizza Mussarela", image: mussarelaPizza },
    { name: "Pizza Calabresa", image: calabresaPizza }
  ]

  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Bem vindo ao Mascote</h2>
              <p className="text-xl text-gray-600 mb-6">Experimente a excelência culinária no coração da cidade.</p>
              <Button onClick={() => navigate('/reservas')} className="bg-orange-500 hover:bg-orange-600 text-white">Faça uma Reserva</Button>
            </div>
            <div className="md:w-1/2">
              <img src="/placeholder.svg?height=400&width=600" alt="Interior do restaurante" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mais pedidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map(({ name, image }, index) => (
              <FeaturedDish key={index} name={name} image={image} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}