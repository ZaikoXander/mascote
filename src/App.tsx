import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Menu } from "lucide-react"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Mascote</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Menu</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Reservations</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Mascote</h2>
                <p className="text-xl text-gray-600 mb-6">Experience culinary excellence in the heart of the city.</p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Make a Reservation</Button>
              </div>
              <div className="md:w-1/2">
                <img src="/placeholder.svg?height=400&width=600" alt="Restaurant interior" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Grilled Salmon", description: "Fresh Atlantic salmon with lemon butter sauce" },
                { name: "Truffle Risotto", description: "Creamy Arborio rice with black truffle shavings" },
                { name: "Chocolate Lava Cake", description: "Decadent chocolate cake with a molten center" }
              ].map((dish, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`/placeholder.svg?height=200&width=400`} alt={dish.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{dish.name}</h3>
                    <p className="text-gray-600">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Gourmet Street, Foodville, FC 12345</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@gourmethaven.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
                <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for special offers and updates.</p>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Mascote. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-orange-500"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-orange-500"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
