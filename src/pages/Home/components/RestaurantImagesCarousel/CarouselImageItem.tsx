import { CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

interface CarouselImageItemProps {
  image: string
  index: number
}

export default function CarouselImageItem({ image, index }: CarouselImageItemProps) {
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
