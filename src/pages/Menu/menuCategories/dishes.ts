import type Category from "./types/Category"

const specialDishesCategory: Category = {
  name: "Pratos Especiais (Para 3 Pessoas)",
  items: [
    {
      "name": "Abadejo À Moda",
      "price": "240,00",
      "description": "Grelhado com legumes na manteiga, arroz à grega e fritas"
    },
    {
      "name": "Abadejo À Boa Vista",
      "price": "240,00",
      "description": "Arroz à grega, fritas, couve à dorê e dois palmitos"
    },
    {
      "name": "Abadejo À Florida",
      "price": "245,00",
      "description": "Grelhado, maionese de legumes, arroz, fritas e palmito"
    },
    {
      "name": "Filé De Pescada À Boa Vista",
      "price": "195,00",
      "description": "Arroz à grega, fritas, couve à dorê e dois palmitos"
    },
    {
      "name": "Moqueca",
      "price": "278,00",
      "description": "Abadejo ensopado, leite de coco, azeite de dendê, camarão, arroz e pirão"
    },
    {
      "name": "Calderada Abadejo",
      "price": "330,00",
      "description": "Ensopado com frutos do mar, legumes, arroz e pirão"
    },
    {
      "name": "Polvo Provençal",
      "price": "280,00",
      "description": "Ensopado ao molho sugo com alho dourado, molho inglês e arroz branco"
    },
    {
      "name": "Polvo À Espanhola",
      "price": "280,00",
      "description": "Ensopado com cebola, pimentão, tomate, ovos, batata e arroz"
    },
    {
      "name": "Guadalupe",
      "price": "219,80",
      "description": "Filé de pescada recheado com catupiry, mussarela e camarões pequenos, batata sautê e arroz com salsa picada"
    },
    {
      "name": "Abadejo À Brasileira",
      "price": "260,00",
      "description": "Ensopado com molho de camarão, pirão e arroz"
    },
    {
      "name": "Abadejo À Belle Muniere",
      "price": "250,00",
      "description": "Grelhado com arroz à grega, batata sauté e molho de alcaparra, camarão e champignon"
    },
    {
      "name": "Abadejo Ao Molho De Camarão",
      "price": "260,00",
      "description": "A dorê com arroz branco"
    },
    {
      "name": "Filé De Pescada À Belle Muniere",
      "price": "209,00",
      "description": "Grelhado com arroz à grega, batata sautê e molho de alcaparra, camarão e champignon"
    },
    {
      "name": "Salmão À Belle Muniere",
      "price": "240,00",
      "description": "Grelhado com arroz à grega, batata sautê e molho de alcaparra, camarão e champignon"
    },
    {
      "name": "Frito Misto De Frutos Do Mar",
      "price": "250,00",
      "description": "Casquinha de siri, isca de peixe, polvo alho e óleo, lula à dorê, camarão rosa paulista, molho tártaro"
    },
  ]
}

const paellaEspanholaCategory: Category = {
  name: "Paella Espanhola",
  items: [
    {
      "name": "Paella Espanhola - 2 PESSOAS",
      "price": "399,00",
    },
    {
      "name": "Paella Espanhola - 4 PESSOAS",
      "price": "620,00",
    },
    {
      "name": "Paella Espanhola - 6 PESSOAS",
      "price": "800,00",
    }
  ]
}

const peixadasCategory: Category = {
  name: "Peixadas (para 3 pessoas)",
  items: [
    {
      "name": "À Moda",
      "description": "grelhado, com arroz, legumes e fritas",
      "price": "219,00"
    },
    {
      "name": "À Brasileira",
      "description": "ensopado com molho de camarão, pirão e arroz",
      "price": "219,00"
    },
    {
      "name": "À Baiana",
      "description": "ensopado, leite de coco, azeite de dendê, arroz e pirão",
      "price": "229,00"
    },
    {
      "name": "À Moda da Praia",
      "description": "ensopado, purê, pirão, frutos do mar e arroz",
      "price": "230,00"
    },
    {
      "name": "Caldeirada",
      "description": "ensopado com frutos do mar, legumes, arroz e pirão",
      "price": "320,00"
    }
  ]
}

const fileDeLinguadoCategory: Category = {
  name: "Filé de Linguado (para 3 pessoas)",
  items: [
    {
      "name": "À Moda",
      "description": "fritas com frutos do mar e arroz",
      "price": "230,00"
    },
    {
      "name": "Dorê",
      "description": "com fritas e arroz",
      "price": "195,00"
    },
    {
      "name": "À Belle Muniere",
      "description": "grelhado com arroz, batata sauté e molho de alcaparra, camarão e champignon",
      "price": "230,00"
    }
  ]
}

const fileDePescadaCategory: Category = {
  name: "Filé de Pescada (para 3 pessoas)",
  items: [
    {
      "name": "À Moda",
      "description": "à dorê com arroz vermelho e frutos do mar",
      "price": "215,00"
    },
    {
      "name": "Com Legumes",
      "description": "à dorê e arroz",
      "price": "215,00"
    },
    {
      "name": "Ao Molho de Camarão",
      "description": "à dorê e arroz",
      "price": "225,00"
    },
    {
      "name": "À Milanesa",
      "description": "com fritas e arroz",
      "price": "182,00"
    }
  ]
}

const bacalhauCategory: Category = {
  name: "Bacalhau",
  items: [
    {
      "name": "Flórida",
      "description": "grelhado com brócolis, batata cozida ao alho e óleo e arroz",
      "price": "210,00"
    },
    {
      "name": "À Moda",
      "description": "com legumes, molho vermelho, leite de coco e azeite dendê",
      "price": "310,00"
    },
    {
      "name": "À Portuguesa",
      "description": "cozido, com legumes e arroz",
      "price": "340,00"
    },
    {
      "name": "Mascote",
      "description": "à dorê, arroz à grega e fritas",
      "price": "340,00"
    },
    {
      "name": "À Espanhola",
      "description": "ao molho de pimentão, batata e cenoura",
      "price": "310,00"
    }
  ]
}

const camaraoCategory: Category = {
  name: "Camarão (com 8 unidades)",
  items: [
    {
      "name": "Mascote",
      "description": "descascado ao alho, brócolis, arroz à grega e batata sauté",
      "price": "270,00"
    },
    {
      "name": "À Fortaleza",
      "description": "ao alho e óleo e/ou casca, arroz à grega, fritas e queijo à milanesa",
      "price": "270,00"
    },
    {
      "name": "À Grega",
      "description": "arroz à grega com fritas e queijo à milanesa",
      "price": "270,00"
    },
    {
      "name": "À Catupiry",
      "description": "recheado com catupiry, à milanesa, arroz à grega e fritas",
      "price": "275,00"
    },
    {
      "name": "São Jaques",
      "description": "recheado com catupiry, fritas, arroz com creme de leite e salsa",
      "price": "280,00"
    },
    {
      "name": "À Catupiry",
      "description": "gratinado com catupiry e arroz",
      "price": "280,00"
    },
    {
      "name": "À Paulista",
      "description": "alho e óleo",
      "price": "250,00"
    }
  ]
}

const saboresNaBrasa2people: Category = {
  name: "Sabores na Brasa (para 2 pessoas)",
  items: [
    {
      "name": "Picanha",
      "description": "arroz, fritas e farofa",
      "price": "210,00"
    },
    {
      "name": "Picanha Simples",
      "price": "190,00"
    },
    {
      "name": "Filé Mignon",
      "description": "arroz, fritas e farofa",
      "price": "190,00"
    },
    {
      "name": "Filé Mignon Simples",
      "price": "170,00"
    },
    {
      "name": "Lombo",
      "description": "arroz, fritas e farofa",
      "price": "165,00"
    },
    {
      "name": "Lombo Simples",
      "price": "140,00"
    },
    {
      "name": "Contra Filé e Lombo",
      "description": "arroz, fritas e farofa",
      "price": "185,00"
    },
    {
      "name": "Contra Filé e Frango",
      "description": "arroz, fritas e farofa",
      "price": "175,00"
    },
    {
      "name": "Contra Filé e Linguiça",
      "description": "arroz, fritas e farofa",
      "price": "175,00"
    },
    {
      "name": "Filé Mignon e Lombo",
      "description": "arroz, fritas e farofa",
      "price": "185,00"
    },
    {
      "name": "Espeto à Brasileira",
      "description": "filé mignon, lombo, linguiça, arroz, fritas e farofa",
      "price": "185,00"
    },
    {
      "name": "Espeto à Gaúcha",
      "description": "contra filé, frango, linguiça, arroz, fritas e farofa",
      "price": "180,00"
    },
    {
      "name": "Contra Filé",
      "description": "arroz, fritas e farofa",
      "price": "180,00"
    },
    {
      "name": "Contra Filé Simples",
      "price": "155,00"
    }
  ]
}

const saboresNaBrasa3people: Category = {
  name: "Sabores na Brasa (para 3 pessoas)",
  items: [
    {
      "name": "Picanha",
      "description": "arroz, fritas e farofa",
      "price": "255,00"
    },
    {
      "name": "Picanha Simples",
      "price": "235,00"
    },
    {
      "name": "Filé Mignon",
      "description": "arroz, fritas e farofa",
      "price": "235,00"
    },
    {
      "name": "Filé Mignon Simples",
      "price": "205,00"
    },
    {
      "name": "Lombo",
      "description": "arroz, fritas e farofa",
      "price": "200,00"
    },
    {
      "name": "Lombo Simples",
      "price": "170,00"
    },
    {
      "name": "Contra Filé e Lombo",
      "description": "arroz, fritas e farofa",
      "price": "205,00"
    },
    {
      "name": "Contra Filé e Frango",
      "description": "arroz, fritas e farofa",
      "price": "205,00"
    },
    {
      "name": "Contra Filé e Linguiça",
      "description": "arroz, fritas e farofa",
      "price": "205,00"
    },
    {
      "name": "Filé Mignon e Lombo",
      "description": "arroz, fritas e farofa",
      "price": "225,00"
    },
    {
      "name": "Espeto à Brasileira",
      "description": "filé mignon, lombo, linguiça, arroz, fritas e farofa",
      "price": "225,00"
    },
    {
      "name": "Espeto à Gaúcha",
      "description": "contra filé, frango, linguiça, arroz, fritas e farofa",
      "price": "223,00"
    },
    {
      "name": "Contra Filé",
      "description": "arroz, fritas e farofa",
      "price": "220,00"
    },
    {
      "name": "Contra Filé Simples",
      "price": "185,00"
    }
  ]
}

const frangosCategory: Category = {
  name: "Frangos (para 3 pessoas)",
  items: [
    {
      "name": "À Marechal",
      "description": "filé de frango grelhado, com maionese de legumes, arroz à grega e fritas",
      "price": "159,00"
    },
    {
      "name": "À Moda",
      "description": "filé de frango com farofa, arroz e fritas",
      "price": "148,00"
    },
    {
      "name": "Supremo à Cubana",
      "description": "à milanesa com fritas, compotas (banana à milanesa, maçã à milanesa, abacaxi à milanesa) e arroz",
      "price": "149,00"
    },
    {
      "name": "À Passarinho",
      "description": "alho e óleo com fritas",
      "price": "119,00"
    },
    {
      "name": "1/2 À Passarinho",
      "description": "alho e óleo com fritas",
      "price": "89,00"
    },
    {
      "name": "À Parmegiana",
      "description": "com mussarela, molho ao sugo, arroz e fritas",
      "price": "158,00"
    }
  ]
}

const fileMignonCategory: Category = {
  name: "Filé Mignon (para 3 pessoas)",
  items: [
    {
      "name": "À Moda",
      "description": "grelhado com legumes na manteiga, arroz à grega e fritas",
      "price": "209,00"
    },
    {
      "name": "À Cubana",
      "description": "à milanesa com fritas, compotas (banana à milanesa, maçã à milanesa, abacaxi à milanesa) e arroz",
      "price": "200,00"
    },
    {
      "name": "À Gaúcha",
      "description": "arroz, farofa, vinagrete e fritas",
      "price": "200,00"
    },
    {
      "name": "À Parmegiana",
      "description": "com mussarela, molho ao sugo, arroz e fritas",
      "price": "200,00"
    },
    {
      "name": "À Sugestão do Chefe",
      "description": "grelhado, arroz com brócolis, palmito e batata sauté",
      "price": "210,00"
    },
    {
      "name": "À Chateaubriand",
      "description": "com purê, molho madeira, champignon e arroz",
      "price": "210,00"
    },
    {
      "name": "À Francesa",
      "description": "grelhado com fritas, palmito, ervilha, cebola, presunto e arroz",
      "price": "210,00"
    },
    {
      "name": "À Parisiense",
      "description": "à milanesa com presunto, mussarela, arroz à grega, fritas e legumes",
      "price": "210,00"
    },
    {
      "name": "À Strogonoff",
      "description": "filé em fatias com creme rosé, purê e arroz",
      "price": "210,00"
    },
    {
      "name": "À Dorival",
      "description": "purê, molho de champignon e aspargo",
      "price": "210,00"
    },
    {
      "name": "Medalhão",
      "description": "filé grosso com bacon, arroz à grega, legumes e fritas",
      "price": "210,00"
    },
    {
      "name": "À Moda do Lorde",
      "description": "grelhado, arroz à grega, fritas, aspargo, champignon, molho madeira, melão e banana à milanesa",
      "price": "210,00"
    },
    {
      "name": "Ciara",
      "description": "grelhado com bacon, catupiry, fritas e arroz à grega",
      "price": "210,00"
    },
    {
      "name": "Simples Grelhado",
      "price": "160,00"
    }
  ]
}

const contraFileCategory: Category = {
  name: "Contra Filé (para 3 pessoas)",
  items: [
    {
      "name": "À Moda",
      "description": "batata frita, arroz à grega e legumes",
      "price": "175,00"
    },
    {
      "name": "À Gaúcha",
      "description": "arroz branco, farofa, vinagrete e fritas",
      "price": "175,00"
    }
  ]
}

const lomboCategory: Category = {
  name: "Lombo (para 3 pessoas)",
  items: [
    {
      "name": "À Moda",
      "description": "batata frita, arroz à grega e legumes",
      "price": "171,00"
    },
    {
      "name": "À Gaúcha",
      "description": "arroz branco, farofa, vinagrete e fritas",
      "price": "171,00"
    }
  ]
}

const omeletesCategory: Category = {
  name: "Omeletes",
  items: [
    {
      "name": "Imbrianni",
      "description": "queijo, calabresa, cebola e salsicha",
      "price": "92,00"
    },
    {
      "name": "À Moda",
      "description": "frango desfiado, queijo, palmito, cebola e salsicha",
      "price": "93,00"
    }
  ]
}

const risotosEntireCategory: Category = {
  name: "Risotos (Inteira)",
  items: [
    { "name": "Camarão", "price": "148,00" },
    { "name": "Marisco", "price": "135,00" },
    { "name": "Polvo", "price": "145,00" },
    { "name": "Lula", "price": "145,00" },
    { "name": "Atum", "price": "135,00" },
    { "name": "Frango", "price": "135,00" },
    { "name": "Frutos do Mar", "price": "160,00" },
    { "name": "Camarão Rosa", "price": "180,00" }
  ]
}

const risotosHalfCategory: Category = {
  name: "Risotos (Meia)",
  items: [
    { "name": "Camarão", "price": "110,00" },
    { "name": "Marisco", "price": "95,00" },
    { "name": "Polvo", "price": "110,00" },
    { "name": "Lula", "price": "110,00" },
    { "name": "Atum", "price": "95,00" },
    { "name": "Frango", "price": "95,00" },
    { "name": "Frutos do Mar", "price": "115,00" },
    { "name": "Camarão Rosa", "price": "135,00" }
  ]
}

const mayonnaiseEntireCategory: Category = {
  name: "Maionese (Inteira)",
  items: [
    { "name": "Camarão", "price": "123,00" },
    { "name": "Atum", "price": "96,00" },
    { "name": "Legumes", "price": "96,00" },
    { "name": "Frango", "price": "96,00" }
  ]
}

const mayonnaiseHalfCategory: Category = {
  name: "Maionese (Meia)",
  items: [
    { "name": "Camarão", "price": "76,00" },
    { "name": "Atum", "price": "66,00" },
    { "name": "Legumes", "price": "66,00" },
    { "name": "Frango", "price": "66,00" }
  ]
}

const saladsEntireCategory: Category = {
  name: "Saladas (Inteira)",
  items: [
    {
      "name": "Mista",
      "description": "alface, tomate, cebola, palmito, ervilha, azeitona",
      "price": "80,00"
    },
    {
      "name": "Palmito",
      "description": "alface, tomate, cebola, palmito, ervilha, azeitona",
      "price": "90,00"
    },
    {
      "name": "Completa",
      "description": "alface, tomate, cebola, palmito, ervilha, azeitona, ovo cozido, presunto, queijo, batata cozida, brócolis, couve flor",
      "price": "92,00"
    },
    { "name": "Alface e Tomate", "price": "51,00" },
    { "name": "Batata e Maionese", "price": "52,00" }
  ]
}

const saladsHalfCategory: Category = {
  name: "Saladas (Meia)",
  items: [
    {
      "name": "Mista",
      "description": "alface, tomate, cebola, palmito, ervilha, azeitona",
      "price": "55,00"
    },
    {
      "name": "Palmito",
      "description": "alface, tomate, cebola, palmito, ervilha, azeitona",
      "price": "60,00"
    },
    {
      "name": "Completa",
      "description": "alface, tomate, cebola, palmito, ervilha, azeitona, ovo cozido, presunto, queijo, batata cozida, brócolis, couve flor",
      "price": "65,00"
    },
    { "name": "Alface e Tomate", "price": "36,00" },
    { "name": "Batata e Maionese", "price": "50,00" }
  ]
}

const miniDishesForTwoCategory: Category = {
  name: "Mini Pratos (Para 2 pessoas)",
  items: [
    {
      "name": "Mini Abadejo à Moda",
      "description": "grelhado com legumes na manteiga, arroz à grega e fritas",
      "price": "175,00"
    },
    {
      "name": "Mini Abadejo à Flórida",
      "description": "grelhado, maionese de legumes, arroz à grega, fritas e palmito",
      "price": "180,00"
    },
    {
      "name": "Mini Abadejo à Belle Muniere",
      "description": "grelhado com arroz à grega, batata sauté e molho de alcaparra, camarão e champignon",
      "price": "180,00"
    }
  ]
}

const miniFileDeLinguadoForTwoCategory: Category = {
  name: "Mini Filé de Linguado (Para 2 pessoas)",
  items: [
    {
      "name": "À Belle Muniere",
      "description": "grelhado com arroz à grega, batata sauté e molho de alcaparra, camarão e champignon",
      "price": "175,00"
    }
  ]
}

const miniFileDePescadaForTwoCategory: Category = {
  name: "Mini Filé de Pescada (Para 2 pessoas)",
  items: [
    {
      "name": "Mini à Moda",
      "description": "à doré com arroz vermelho e frutos do mar",
      "price": "158,00"
    },
    {
      "name": "Mini ao Molho de Camarão",
      "description": "à doré e arroz",
      "price": "158,00"
    },
    {
      "name": "Mini à Boa Vista",
      "description": "arroz à grega, fritas, couve à doré e palmito",
      "price": "135,00"
    }
  ]
}

const miniLomboForTwoCategory: Category = {
  name: "Mini Lombo (Para 2 pessoas)",
  items: [
    {
      "name": "Mini à Moda",
      "description": "batata frita, arroz à grega e legumes",
      "price": "139,00"
    },
    {
      "name": "Mini à Gaúcha",
      "description": "arroz branco, farofa, vinagrete e fritas",
      "price": "138,00"
    }
  ]
}

const miniFileMignonForTwoCategory: Category = {
  name: "Mini Filé Mignon (Para 2 pessoas)",
  items: [
    {
      "name": "Mini à Moda",
      "description": "grelhado com legumes na manteiga, arroz à grega e fritas",
      "price": "165,00"
    },
    {
      "name": "Mini à Cubana",
      "description": "à milanesa com fritas, compotas (banana à milanesa, maçã à milanesa, abacaxi à milanesa) e arroz",
      "price": "165,00"
    },
    {
      "name": "Mini à Parmegiana",
      "description": "com mussarela, molho ao sugo, arroz e fritas",
      "price": "170,00"
    },
    {
      "name": "Mini à Francesa",
      "description": "grelhado com fritas, palmito, ervilha, cebola, presunto e arroz",
      "price": "170,00"
    },
    {
      "name": "Mini à Parisiense",
      "description": "à milanesa, presunto, mussarela, arroz à grega, fritas e legumes",
      "price": "170,00"
    },
    {
      "name": "Mini Moda Lorde",
      "description": "grelhado, arroz à grega, fritas, aspargo, champignon, molho madeira, melão e banana à milanesa",
      "price": "170,00"
    }
  ]
}

const pastaEntireCategory: Category = {
  name: "Massas (Inteira)",
  items: [
    { "name": "Espaguete ao Sugo", "price": "75,00" },
    { "name": "Espaguete Alho e Óleo", "price": "77,00" },
    { "name": "Espaguete Bolonhesa", "price": "79,00" },
    { "name": "Espaguete Quatro Queijos", "price": "85,00" },
    { "name": "Espaguete à Parisiense", "price": "85,00" },
    { "name": "Espaguete com Frutos do Mar", "price": "120,00" }
  ]
}

const pastaHalfCategory: Category = {
  name: "Massas (Meia)",
  items: [
    { "name": "Espaguete ao Sugo", "price": "50,00" },
    { "name": "Espaguete Alho e Óleo", "price": "55,00" },
    { "name": "Espaguete Bolonhesa", "price": "55,00" },
    { "name": "Espaguete Quatro Queijos", "price": "55,00" },
    { "name": "Espaguete à Parisiense", "price": "55,00" },
    { "name": "Espaguete com Frutos do Mar", "price": "100,00" }
  ]
}

const feijoadaCategory: Category = {
  name: "Feijoada (Somente aos sábados)",
  items: [
    { "name": "Feijoada por pessoa", "price": "90,00" },
    { "name": "Para viagem", "price": "160,00" }
  ]
}

const dishes = [
  specialDishesCategory, paellaEspanholaCategory, peixadasCategory,
  fileDeLinguadoCategory, fileDePescadaCategory, bacalhauCategory,
  camaraoCategory, saboresNaBrasa2people, saboresNaBrasa3people,
  frangosCategory, fileMignonCategory, contraFileCategory, lomboCategory,
  omeletesCategory, risotosEntireCategory, risotosHalfCategory,
  mayonnaiseEntireCategory, mayonnaiseHalfCategory, saladsEntireCategory,
  saladsHalfCategory, miniDishesForTwoCategory,
  miniFileDeLinguadoForTwoCategory, miniFileDePescadaForTwoCategory,
  miniLomboForTwoCategory, miniFileMignonForTwoCategory, pastaEntireCategory,
  pastaHalfCategory, feijoadaCategory
]

export default dishes
