import type Category from "./types/Category"

import dishes from "./dishes"

const pizzaCategory: Category = {
  name: "Pizzas",
  items: [
    {
      name: "À Moda Do Chefe",
      price: "85,00",
      description: "Frango, Milho, Ervilha, Calabresa, Presunto, Catupiry, Parmesão E Azeitona"
    },
    {
      name: "Alho",
      price: "80,00",
      description: "Molho De Tomate, Orégano, Alho Frito, Parmesão E Azeitona"
    },
    {
      name: "Aliche",
      price: "80,00",
      description: "Mussarela E Aliche Importado"
    },
    {
      name: "À Marinheira",
      price: "107,00",
      description: "Mussarela Com Frutos Do Mar"
    },
    {
      name: "À Moda",
      price: "77,00",
      description: "Presunto, Palmito, Ovo, Ervilha, Mussarela, Bacon E Azeitona"
    },
    {
      name: "À Moda Do Pizzaiolo",
      price: "85,00",
      description: "Presunto, Palmito, Catupiry, Bacon, Orégano E Azeitona"
    },
    {
      name: "Atum",
      price: "77,00",
      description: "Atum E Cebola"
    },
    {
      name: "Atum Com Catupiry",
      price: "80,00",
      description: "Atum, Catupiry, Molho De Tomate, Orégano E Azeitona"
    },
    {
      name: "Atum Especial",
      price: "80,00",
      description: "Mussarela, Atum E Cebola"
    },
    {
      name: "Bacon",
      price: "75,00",
      description: "Mussarela E Bacon"
    },
    {
      name: "Baiana",
      price: "75,00",
      description: "Mussarela, Calabresa Apimentada Moída E Cebola"
    },
    {
      name: "Bauru",
      price: "75,00",
      description: "Mussarela, Presunto, Tomate Em Rodelas E Orégano"
    },
    {
      name: "Beira Mar",
      price: "75,00",
      description: "Mussarela, Tomate, Cebola, Parmesão E Azeitona"
    },
    {
      name: "Boa Noite",
      price: "80,00",
      description: "Catupiry Com Milho Verde, Ervilha E Azeitona"
    },
    {
      name: "Brasileira",
      price: "80,00",
      description: "Palmito E Catupiry"
    },
    {
      name: "Brócolis",
      price: "80,00",
      description: "Brócolis Com Bacon Coberto Com Mussarela"
    },
    {
      name: "Picanha Defumada",
      price: "95,00",
      description: "Mussarela De Búfala E Catupiry"
    },
    {
      name: "Filé Mignon",
      price: "95,00",
      description: "Mussarela Coberta Com Gorgonzola"
    },
    {
      name: "Caipira",
      price: "80,00",
      description: "Frango, Milho, Cebola E Catupiry"
    },
    {
      name: "Calabresa",
      price: "48,00",
      description: "Calabresa, Cebola E Azeitona"
    },
    {
      name: "Calzone Fechado",
      price: "75,00",
      description: "Mussarela, Ricota, Presunto, Molho De Tomate, Parmesão Gratinado"
    },
    {
      name: "Camarão 1",
      price: "107,00",
      description: "Camarão E Mussarela"
    },
    {
      name: "Camarão 2",
      price: "109,00",
      description: "Camarão E Catupiry"
    },
    {
      name: "Camarão Rosa 1",
      price: "211,00",
      description: "Camarão Rosa Médio E Mussarela"
    },
    {
      name: "Camarão Rosa 2",
      price: "221,00",
      description: "Camarão Rosa Médio E Catupiry"
    }
  ]
}

const portionsCategory: Category = {
  name: "Porções",
  items: [
    {
      name: "Camarão Rosa Médio Descascado",
      description: "À Milanesa Com Molho Tártaro",
      price: "102,00"
    },
    {
      name: "Camarão Rosa Médio",
      description: "No Bafo , Alho E Óleo Com Molho Tártaro Loza",
      price: "102,00"
    },
    {
      name: "Camarão Sete Barbas",
      description: "Com Casca , À Milanesa Loza",
      price: "102,00"
    },
    {
      name: "Camarão Rosa Médio",
      description: "Inteiro À Paulista , Com Casa , Alho E Óleo",
      price: "102,00"
    },
    {
      name: "Casquinha De Siri",
      description: "Unidade",
      price: "27,00"
    },
    {
      name: "Alcaparra",
      price: "30,00"
    },
    {
      name: "Arroz Branco",
      price: "25,00"
    },
    {
      name: "Arroz À Grega",
      price: "29,00"
    },
    {
      name: "Azeitonas",
      price: "35,00"
    },
    {
      name: "Banana À Milanesa",
      description: "06 Unidades",
      price: "31,00"
    },
    {
      name: "Calabresa",
      price: "56,00"
    },
    {
      name: "Frutos Do Mar",
      price: "95,00"
    },
    {
      name: "Filé Mignon Ou Contra Filé Aperitivo",
      price: "120,00"
    },
    {
      name: "Filé Mignon Com Gorgonzola",
      price: "139,00"
    },
    {
      name: "Isca De Peixe Linguado Com Molho Tártaro",
      price: "90,00"
    },
    {
      name: "Isca De Filé De Pescada Com Molho Tártaro",
      price: "82,00"
    },
    {
      name: "Lula Á Doré",
      price: "87,00"
    },
    {
      name: "Legumes",
      description: "Brócolis, Couve Flor E Vagem",
      price: "49,00"
    },
    {
      name: "Pure",
      price: "40,00"
    },
    {
      name: "Polvo Vinagrete",
      price: "120,00"
    },
    {
      name: "Provolone 1 Simples",
      price: "55,00"
    },
    {
      name: "Provolone 2 À Milanesa",
      price: "60,00"
    },
    {
      name: "Polenta",
      price: "45,00"
    },
    {
      name: "Fritas",
      price: "45,00"
    },
    {
      name: "Fritas Com Cheddar E Bacon",
      price: "60,00"
    },
    {
      name: "Fritas Com Catupiry E Bacon",
      price: "60,00"
    },
    {
      name: "Marisco À Vinagrete",
      price: "80,00"
    },
    {
      name: "Mandioca Cremosa",
      price: "45,00"
    },
    {
      name: "Molho Tártaro",
      price: "25,00"
    },
    {
      name: "Molho De Camarão",
      price: "85,00"
    },
    {
      name: "Bolinho De Bacalhau",
      description: "10 Unidades",
      price: "39,00"
    },
    {
      name: "Pirão",
      price: "42,00"
    },
    {
      name: "Porquinho",
      price: "67,00"
    },
    {
      name: "Torresmo",
      price: "47,00"
    },
    {
      name: "Picanha",
      price: "153,00"
    }
  ]
}

const menuCategories: Category[] = [
  pizzaCategory, portionsCategory,  ...dishes,
]

export default menuCategories
