import { CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import { X } from "lucide-react"

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
