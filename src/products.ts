export interface Product {
    id: number;
    path: string;
    image: string;
    title: string;
    description: string;
    price: number;
    stock: number;
}

export const products: Array<Product> = [
    {
      id: 1,
      path: 'freddie-mercury',
      image:
        "https://desenio.se/bilder/artiklar/zoom/13580_2.jpg?imgwidth=435&qt=Freddie%20Mercury%20i%20svartvitt",
      title: "Freddie Mercury",
      description: "En bild på Freddie",
      price: 300,
      stock: 0,
    },
    {
      id: 2,
      path: 'ansikten',
      image:
        "https://desenio.se/bilder/artiklar/zoom/12126_2.jpg?imgwidth=435&qt=Line%20art-ansikten",
      title: "Ansikten",
      description: "Två ansikten",
      price: 400,
      stock: 2,
    },
    {
      id: 3,
      path: 'trana',
      image:
        "https://desenio.se/bilder/artiklar/zoom/14196_2.jpg?imgwidth=435&qt=Grafisk%20trana",
      title: "Trana",
      description: "En trana som flyger",
      price: 500,
      stock: 2,
    },
    {
      id: 4,
      path: 'svarta-linjer',
      image:
        "https://desenio.se/bilder/artiklar/zoom/13293_2.jpg?imgwidth=435&qt=Valv%20av%20svarta%20linjer",
      title: "Svarta Linjer",
      description: "Lite svarta linjer",
      price: 500,
      stock: 2,
    },
    {
      id: 5,
      path: 'strand-och-himmel',
      image:
        "https://desenio.se/bilder/artiklar/zoom/15070_2.jpg?imgwidth=435&qt=Pastellstrand",
      title: "Strand",
      description: "En strand och en himmel",
      price: 500,
      stock: 2,
    },
    {
      id: 6,
      path: 'person-med-kamera',
      image:
        "https://desenio.se/bilder/artiklar/zoom/11490_2.jpg?imgwidth=435&qt=Retrokamera",
      title: "Kamera",
      description: "En person håller i en kamera",
      price: 500,
      stock: 2,
    },
];