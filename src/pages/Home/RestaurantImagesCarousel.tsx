import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

import restaurantInterior from '@/assets/restaurant-interior.jpeg'

import Map from "@/components/helpers/Map"

import Autoplay from 'embla-carousel-autoplay'

export default function RestaurantImagesCarousel() {
  const restaurantImages = [
    restaurantInterior,
    restaurantInterior,
    restaurantInterior,
  ]

  return (
    <Carousel className="w-full" opts={{ loop: true }} plugins={[Autoplay()]}>
      <CarouselContent>
        <Map
          array={restaurantImages}
          render={(image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <img
                      src={image}
                      alt={`Restaurant image ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}
        />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}