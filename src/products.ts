export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
}

export const products: Array<Product> = [
    {
      id: 1,
      image:
        "https://desenio.se/bilder/artiklar/zoom/13580_2.jpg?imgwidth=435&qt=Freddie%20Mercury%20i%20svartvitt",
      title: "Fred Mercury",
      description: "En bild på Fred",
      price: 300,
    },
    {
      id: 2,
      image:
        "https://desenio.se/bilder/artiklar/zoom/12126_2.jpg?imgwidth=435&qt=Line%20art-ansikten",
      title: "Ansikten",
      description: "Två ansikten",
      price: 400,
    },
    {
      id: 3,
      image:
        "https://desenio.se/bilder/artiklar/zoom/14196_2.jpg?imgwidth=435&qt=Grafisk%20trana",
      title: "Trana",
      description: "En trana som flyger",
      price: 500,
    },
    {
      id: 4,
      image:
        "https://desenio.se/bilder/artiklar/zoom/13293_2.jpg?imgwidth=435&qt=Valv%20av%20svarta%20linjer",
      title: "Svarta Linjer",
      description: "Lite svarta linjer",
      price: 500,
    },
    {
      id: 5,
      image:
        "https://desenio.se/bilder/artiklar/zoom/15070_2.jpg?imgwidth=435&qt=Pastellstrand",
      title: "Strand",
      description: "En strand och en himmel",
      price: 500,
    },
    {
      id: 6,
      image:
        "https://desenio.se/bilder/artiklar/zoom/11490_2.jpg?imgwidth=435&qt=Retrokamera",
      title: "Kamera",
      description: "En person håller i en kamera",
      price: 500,
    },
];