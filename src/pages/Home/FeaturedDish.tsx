import type IFeaturedDish from "@/types/FeaturedDish"

export default function FeaturedDish({ name, image }: IFeaturedDish) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      </div>
    </div>
  )
}