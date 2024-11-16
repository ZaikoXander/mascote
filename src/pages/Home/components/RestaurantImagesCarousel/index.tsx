import {
  Carousel, CarouselContent, CarouselNext, CarouselPrevious
} from "@/components/ui/carousel"

import image1 from '../../assets/restaurantImages/1.jpeg'
import image2 from '../../assets/restaurantImages/2.jpeg'
import image3 from '../../assets/restaurantImages/3.jpeg'
import image4 from '../../assets/restaurantImages/4.jpeg'
import image5 from '../../assets/restaurantImages/5.jpeg'
import image6 from '../../assets/restaurantImages/6.jpeg'
import image7 from '../../assets/restaurantImages/7.jpeg'

import Map from "@zaikoxander/react-map-render"

import Autoplay from 'embla-carousel-autoplay'

import CarouselImageItem from "./CarouselImageItem"

const restaurantImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
]

export default function RestaurantImagesCarousel() {
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
