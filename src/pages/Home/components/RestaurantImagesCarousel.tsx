import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import image1 from '../assets/restaurantImages/1.jpeg'
import image2 from '../assets/restaurantImages/2.jpeg'
import image3 from '../assets/restaurantImages/3.jpeg'
import image4 from '../assets/restaurantImages/4.jpeg'
import image5 from '../assets/restaurantImages/5.jpeg'
import image6 from '../assets/restaurantImages/6.jpeg'
import image7 from '../assets/restaurantImages/7.jpeg'

import Map from "@zaikoxander/react-map-render"

import Autoplay from 'embla-carousel-autoplay'

import { X } from "lucide-react"

interface CarouselImageItemProps {
  image: string
  index: number
}

function CarouselImageItem({ image, index }: CarouselImageItemProps) {
  return (
    <CarouselItem>
      <div className="p-1">
        <Card>
          <CardContent className="flex items-center justify-center p-6">
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src={image}
                  alt={`Imagem do restaurante ${index + 1}`}
                  className="w-full h-full object-cover rounded-md cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent
                className="max-w-[95vw] w-full max-h-[95vh] p-0 overflow-hidden"
                withoutCloseButton
              >
                <DialogHeader className="absolute top-2 right-2 z-10">
                  <DialogTitle className="sr-only">
                    Imagem do restaurante {index + 1}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Clique fora ou aperte ESC para fechar.
                  </DialogDescription>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary" className="px-3 py-3 h-auto">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </DialogClose>
                </DialogHeader>
                <div className="w-full h-full flex items-center justify-center bg-black/50">
                  <img
                    src={image}
                    alt={`Imagem do restaurante ${index + 1}`}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  )
}

export default function RestaurantImagesCarousel() {
  const restaurantImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ]

  return (
    <Carousel className="w-full" opts={{ loop: true }} plugins={[Autoplay()]}>
      <CarouselContent>
        <Map
          array={restaurantImages}
          render={(image, index) => (
            <CarouselImageItem key={index} image={image} index={index} />
          )}
        />
      </CarouselContent>
      <CarouselPrevious className="hidden lg:inline-flex" />
      <CarouselNext className="hidden lg:inline-flex" />
    </Carousel>
  )
}
