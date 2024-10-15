import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface FeaturedDish {
  name: string
  // description: string
  image: string
}

export default function Home() {
  const navigate = useNavigate()

  const featuredDishes: FeaturedDish[] = [
    { name: "Abadejo a moda"/* , description: "Fresh Atlantic salmon with lemon butter sauce" */, image: "/placeholder.svg?height=200&width=400" },
    { name: "Abadejo abellemuniere"/* , description: "Creamy Arborio rice with black truffle shavings" */, image: "/placeholder.svg?height=200&width=400" },
    { name: "File mingnon aparmegiana"/* , description: "Decadent chocolate cake with a molten center" */, image: "/placeholder.svg?height=200&width=400" },
    { name: "Pizza Portuguesa"/* , description: "Decadent chocolate cake with a molten center" */, image: "/placeholder.svg?height=200&width=400" },
    { name: "Pizza Mussarela"/* , description: "Decadent chocolate cake with a molten center" */, image: "/placeholder.svg?height=200&width=400" },
    { name: "Pizza Calabresa"/* , description: "Decadent chocolate cake with a molten center" */, image: "/placeholder.svg?height=200&width=400" }
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
              <img src="/placeholder.svg?height=400&width=600" alt="Restaurant interior" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Mais pedidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{dish.name}</h3>
                  {/* <p className="text-gray-600">{dish.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}