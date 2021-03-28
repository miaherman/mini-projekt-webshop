export interface Product {
    id: number;
    path: string;
    image: string;
    title: string;
    description: string;
    size: string;
    price: number;
}

export const products: Array<Product> = [
    {
      id: 1,
      path: 'le-jardin',
      image:
        "https://desenio.se/bilder/artiklar/zoom/15605_2.jpg?imgwidth=435&qt=F%C3%A4rgglada%20penseldrag",
      title: "Le Jardin",
      description: "Abstrakt målning med färgglada penseldrag, och texten Le Jardin de l'artiste à Avignon.",
      size: '50x70 cm',
      price: 300,
    },
    {
      id: 2,
      path: 'Hanagasumi',
      image:
        "https://desenio.se/bilder/artiklar/zoom/15610_2.jpg?imgwidth=435&qt=Ljusbeige%20blommor",
      title: "Hanagasumi",
      description: "Illustration av ljusbeige blommor på blå stjälkar, mot en rosa och ljusbeige bakgrund.",
      size: '50x70 cm',
      price: 400,
    },
    {
      id: 3,
      path: 'Obsession',
      image:
        "https://desenio.se/bilder/artiklar/zoom/15240_2.jpg?imgwidth=435&qt=Svarta%20cirklar",
      title: "The Obsession",
      description: "Svarta cirklar - illustration av svarta, små cirklar mot en beige bakgrund.",
      size: '50x70 cm',
      price: 500,
    },
    {
      id: 4,
      path: 'svarta-linjer',
      image:
        "https://desenio.se/bilder/artiklar/zoom/13293_2.jpg?imgwidth=435&qt=Valv%20av%20svarta%20linjer",
      title: "Svarta Linjer",
      description: "Lite svarta linjer",
      size: '50x70 cm',
      price: 500,
    },
    {
      id: 5,
      path: 'lilac-abstract-poster',
      image:
        "https://desenio.se/bilder/artiklar/zoom/14767_2.jpg?imgwidth=435&qt=Svarta%20former",
      title: "Lilac Abstract Poster",
      description: "Grafisk illustration med svarta abstrakta former och en lila rektangel bakom, på en beige bakgrund med svart text upptill och nedtill.",
      size: '50x70 cm',
      price: 500,
    },
    {
      id: 6,
      path: 'Lavender-abstract',
      image:
        "https://desenio.se/bilder/artiklar/zoom/14973_2.jpg?imgwidth=435&qt=Orange%20former",
      title: "Lavender Abstract",
      description: "Abstrakt illustration med en orange form med svarta och vita konturer mot en lila bakgrund med svarta detaljer.",
      size: '50x70 cm',
      price: 500,
    },
    {
    id: 7,
      path: 'graphic-figure',
      image:
        "https://desenio.se/bilder/artiklar/zoom/14182_2.jpg?imgwidth=435&qt=R%C3%B6tt%20ansikte",
      title: "Graphic figure",
      description: "Grafisk illustration av ett abstrakt ansikte och hand i rött och beige och texten Graphic figures längst ner. ",
      size: '50x70 cm',
      price: 500,
    },
    {
    id: 8,
      path: 'a-cup-of-tea',
      image:
        "https://cdn.shopify.com/s/files/1/0118/7443/5129/products/B54-031_1024x1024.jpg?v=1595307521",
      title: "A Cup of Tea",
      description: "Inspirerande poster med Rajneesh Bhagwan",
      size: '50x70 cm',
      price: 500,
    },
];