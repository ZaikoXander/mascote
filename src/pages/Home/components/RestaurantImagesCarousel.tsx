import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

import image1 from '../assets/restaurantImages/1.jpeg'
import image2 from '../assets/restaurantImages/2.jpeg'
import image3 from '../assets/restaurantImages/3.jpeg'
import image4 from '../assets/restaurantImages/4.jpeg'
import image5 from '../assets/restaurantImages/5.jpeg'
import image6 from '../assets/restaurantImages/6.jpeg'
import image7 from '../assets/restaurantImages/7.jpeg'

import Map from "@zaikoxander/react-map-render"

import Autoplay from 'embla-carousel-autoplay'

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
            <img
              src={image}
              alt={`Imagem do restaurante ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
