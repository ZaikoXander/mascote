import type Category from "./types/Category"

import dishes from "./dishes"

const pizzaCategory: Category = {
  name: 'Pizzas',
  items: [
    {
      name: 'À Moda Do Chefe',
      price: '85,00',
      description: 'Frango, Milho, Ervilha, Calabresa, Presunto, Catupiry, Parmesão E Azeitona'
    },
    {
      name: 'Alho',
      price: '80,00',
      description: 'Molho De Tomate, Orégano, Alho Frito, Parmesão E Azeitona'
    },
    {
      name: 'Aliche',
      price: '80,00',
      description: 'Mussarela E Aliche Importado'
    },
    {
      name: 'À Marinheira',
      price: '107,00',
      description: 'Mussarela Com Frutos Do Mar'
    },
    {
      name: 'À Moda',
      price: '77,00',
      description: 'Presunto, Palmito, Ovo, Ervilha, Mussarela, Bacon E Azeitona'
    },
    {
      name: 'À Moda Do Pizzaiolo',
      price: '85,00',
      description: 'Presunto, Palmito, Catupiry, Bacon, Orégano E Azeitona'
    },
    {
      name: 'Atum',
      price: '77,00',
      description: 'Atum E Cebola'
    },
    {
      name: 'Atum Com Catupiry',
      price: '80,00',
      description: 'Atum, Catupiry, Molho De Tomate, Orégano E Azeitona'
    },
    {
      name: 'Atum Especial',
      price: '80,00',
      description: 'Mussarela, Atum E Cebola'
    },
    {
      name: 'Bacon',
      price: '75,00',
      description: 'Mussarela E Bacon'
    },
    {
      name: 'Baiana',
      price: '75,00',
      description: 'Mussarela, Calabresa Apimentada Moída E Cebola'
    },
    {
      name: 'Bauru',
      price: '75,00',
      description: 'Mussarela, Presunto, Tomate Em Rodelas E Orégano'
    },
    {
      name: 'Beira Mar',
      price: '75,00',
      description: 'Mussarela, Tomate, Cebola, Parmesão E Azeitona'
    },
    {
      name: 'Boa Noite',
      price: '80,00',
      description: 'Catupiry Com Milho Verde, Ervilha E Azeitona'
    },
    {
      name: 'Brasileira',
      price: '80,00',
      description: 'Palmito E Catupiry'
    },
    {
      name: 'Brócolis',
      price: '80,00',
      description: 'Brócolis Com Bacon Coberto Com Mussarela'
    },
    {
      name: 'Picanha Defumada',
      price: '95,00',
      description: 'Mussarela De Búfala E Catupiry'
    },
    {
      name: 'Filé Mignon',
      price: '95,00',
      description: 'Mussarela Coberta Com Gorgonzola'
    },
    {
      name: 'Caipira',
      price: '80,00',
      description: 'Frango, Milho, Cebola E Catupiry'
    },
    {
      name: 'Calabresa',
      price: '48,00',
      description: 'Calabresa, Cebola E Azeitona'
    },
    {
      name: 'Calzone Fechado',
      price: '75,00',
      description: 'Mussarela, Ricota, Presunto, Molho De Tomate, Parmesão Gratinado'
    },
    {
      name: 'Camarão 1',
      price: '107,00',
      description: 'Camarão E Mussarela'
    },
    {
      name: 'Camarão 2',
      price: '109,00',
      description: 'Camarão E Catupiry'
    },
    {
      name: 'Camarão Rosa 1',
      price: '211,00',
      description: 'Camarão Rosa Médio E Mussarela'
    },
    {
      name: 'Camarão Rosa 2',
      price: '221,00',
      description: 'Camarão Rosa Médio E Catupiry'
    },
    {
      name: 'Carne Seca 1',
      description: 'carne seca e mussarela',
      price: '95,00'
    },
    {
      name: 'Carne Seca 2',
      description: 'carne seca e catupiry',
      price: '109,00'
    },
    {
      name: 'Canadense',
      description: 'mussarela, lombo e cebola',
      price: '75,00'
    },
    {
      name: 'Carne de Siri',
      description: 'mussarela, siri e parmesão',
      price: '96,00'
    },
    {
      name: 'Calatu',
      description: 'catupiry, calabresa moída, rodelas de tomate, parmesão, orégano e azeitona',
      price: '85,00'
    },
    {
      name: 'Carioca',
      description: 'frango, palmito, milho, mussarela, orégano e azeitona',
      price: '85,00'
    },
    {
      name: 'Catupiry',
      description: 'molho de tomate, orégano e azeitona',
      price: '80,00'
    },
    {
      name: 'Cinco Queijos',
      description: 'mussarela, catupiry, provolone, parmesão e gorgonzola',
      price: '85,00'
    },
    {
      name: 'Cogumelo',
      description: 'mussarela, creme rosé e champignon',
      price: '80,00'
    },
    {
      name: 'Dois Queijos',
      description: 'mussarela, catupiry, orégano e azeitona',
      price: '75,00'
    },
    {
      name: 'Escarola',
      description: 'mussarela, tomate, escarola, alho, bacon, cebola, mussarela e orégano',
      price: '80,00'
    },
    {
      name: 'Executiva',
      description: 'frango desfiado, bacon, provolone, orégano e azeitona',
      price: '80,00'
    },
    {
      name: 'Frango com Catupiry',
      description: 'frango, catupiry, orégano e azeitona',
      price: '80,00'
    },
    {
      name: 'Gorgonzola',
      description: 'gorgonzola com molho de tomate',
      price: '80,00'
    },
    {
      name: 'Lombo com Catupiry',
      description: 'lombo, catupiry, molho de tomate, orégano e azeitona',
      price: '80,00'
    },
    {
      name: 'Macaca',
      description: 'mussarela, banana, catupiry e canela',
      price: '80,00'
    },
    {
      name: 'Mafiosa',
      description: 'mussarela, rodelas de tomate, parmesão e azeitona',
      price: '75,00'
    },
    {
      name: 'Mama Celeste',
      description: 'escarola, ricota, mussarela, alho, molho de tomate e orégano',
      price: '80,00'
    },
    {
      name: 'Mama Mia',
      description: 'presunto, ovos, ervilha, palmito, cebola, catupiry, orégano e azeitona',
      price: '75,00'
    },
    {
      name: 'Marajá',
      description: 'calabresa, lombinho canadense, cebola e orégano',
      price: '80,00'
    },
    {
      name: 'Mascote',
      description: 'mussarela de búfala, rúcula e tomate seco',
      price: '80,00'
    },
    {
      name: 'Milho e Catupiry',
      description: 'milho e catupiry',
      price: '80,00'
    },
    {
      name: 'Milho e Mussarela',
      description: 'milho e mussarela',
      price: '80,00'
    },
    {
      name: 'Miti',
      description: 'presunto, ervilha, ovo, mussarela, aliche e orégano',
      price: '80,00'
    },
    {
      name: 'Mussarela',
      description: 'mussarela, orégano e rodelas de tomate',
      price: '56,00'
    },
    {
      name: 'Mussarela de Búfala',
      description: 'mussarela de búfala, molho de tomate, orégano e azeitona',
      price: '80,00'
    },
    {
      name: 'Palmito',
      description: 'palmito, mussarela e orégano',
      price: '77,00'
    },
    {
      name: 'Pampa',
      description: 'palmito, provolone, ovos, orégano e azeitona',
      price: '80,00'
    },
    {
      name: 'Paulista',
      description: 'ricota, catupiry, orégano e azeitona',
      price: '71,00'
    },
    {
      name: 'Peperoni',
      description: 'peperoni, mussarela e cebola',
      price: '80,00'
    },
    {
      name: 'Peruana',
      description: 'frango desfiado, ervilha, cebola e mussarela',
      price: '75,00'
    },
    {
      name: 'Presunto',
      description: 'presunto e mussarela',
      price: '70,00'
    },
    {
      name: 'Portuguesa',
      description: 'presunto, ovos, ervilha, palmito, cebola e mussarela',
      price: '80,00'
    },
    {
      name: 'Quatro Queijos',
      description: 'mussarela, catupiry, provolone e parmesão',
      price: '80,00'
    },
    {
      name: 'Romana',
      description: 'mussarela, rodelas de tomate, aliche e cebola',
      price: '80,00'
    },
    {
      name: 'Ronny Hein',
      description: 'mussarela, catupiry, champignon, parmesão e orégano',
      price: '80,00'
    },
    {
      name: 'São Bernardo',
      description: 'frango, presunto, calabresa, cebola, palmito, catupiry, parmesão, orégano e azeitona',
      price: '95,00'
    },
    {
      name: 'Siciliana',
      description: 'mussarela, champignon, cebola e bacon',
      price: '80,00'
    },
    {
      name: 'Suprema',
      description: 'mussarela, presunto, calabresa, champignon e cebola',
      price: '80,00'
    },
    {
      name: 'Tomate Seco',
      description: 'mussarela, tomate seco e azeitona',
      price: '75,00'
    },
    {
      name: 'Toscana',
      description: 'mussarela, calabresa e cebola',
      price: '70,00'
    },
    {
      name: 'Três Queijos',
      description: 'mussarela, cheddar, provolone, orégano e azeitona',
      price: '71,00'
    },
    {
      name: 'Tropical',
      description: 'calabresa moída, palmito, bacon, mussarela, tomate, parmesão, orégano e azeitona',
      price: '80,00'
    },
    {
      name: 'Xuxa',
      description: 'mussarela, parmesão e manjericão',
      price: '75,00'
    },
    {
      name: 'Vegetariana',
      description: 'escarola, parmesão, alho, palmito, ervilha, champignon, orégano e azeitona',
      price: '78,00'
    },
    {
      name: 'Bordas Recheadas',
      description: 'bordas recheadas de catupiry ou cheddar',
      price: '15,00'
    }
  ]
}

const sweetPizzaCategory: Category = {
  name: 'Pizzas Doces',
  items: [
    {
      name: 'Brigadeiro',
      price: '80,00'
    },
    {
      name: 'Romeu e Julieta',
      price: '80,00'
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
  pizzaCategory, sweetPizzaCategory, portionsCategory,  ...dishes,
]

export default menuCategories
