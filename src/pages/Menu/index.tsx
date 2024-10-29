import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import menuCategories from "./menuCategories"

export default function Menu() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nosso Cardápio</h2>
      <Tabs defaultValue={menuCategories[0].name} className="w-full">
        <TabsList className="w-full justify-start mb-8 flex-wrap overflow-x-auto h-full">
          {menuCategories.map((category) => (
            <TabsTrigger key={category.name} value={category.name} className="px-4 py-2">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {menuCategories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="text-orange-500 font-semibold">R$ {item.price}</span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}