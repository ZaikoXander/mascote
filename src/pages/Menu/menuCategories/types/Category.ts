interface Item {
  name: string
  price: string
  description?: string
}

export default interface Category {
  name: string
  items: Item[]
}