import { ProductDetailsInterface } from "../types/product.interface";

export const product: ProductDetailsInterface = {
  title: "Cuvée Tradition 2018",
  shop: "Le Puits d’Amour",
  compatibility: "88% de compatibilité",
  tags: ["Fort", "Boisé", "Épicé"],
  price: "11,99 €",
  image: "/",
  region: "Bordeaux, 33340, Saint Germain d’Esteuil",
  advices: [
    {
      title: "Température : 16°C ",
      description: "Carafe : 1/2h",
    },
  ],
  details: {
    title: "Les détails de ce vin",
    description:
      "La Cuvée Tradition 2018 est un vin rouge complexe, boisé et épicé.",
    rgb: "122, 16, 71",
    datas: [
      {
        label: "Puissant",
        value: 3.5,
      },
      {
        label: "Épicé",
        value: 9.5,
      },
      {
        label: "Doux",
        value: 7.5,
      },
      {
        label: "Complexe",
        value: 10,
      },
      {
        label: "Boisé",
        value: 10,
      },
      {
        label: "Fruité",
        value: 9,
      },
    ],
  },
  infos: [
    {
      title: "Cépages : ",
      description: "Cinsault, Grenache noir, Syrah",
      icon: "grape",
    },
    {
      title: "Nez : ",
      description: "Arômes délicats de pêche et de poire",
      icon: "nose",
    },
    {
      title: "Bouche : ",
      description: "Suave, gourmande et équilibrée",
      icon: "mouth",
    },
  ],
  delivery: [
    {
      title: "Livraison par votre facteur : 2.50 €",
      date: "À partir du 22 Juin 2022",
      description:
        "C’est la livraison verte et de proximité ! Votre facteur récupère votre commande en boutique et vous livre au cours de sa tournée. Tarif unique de 2,5€ TTC.",
      icon: "/laposte.png",
    },
    {
      title: "Colissimo : à partir de 4.00 € ",
      date: "À partir du 22 Juin 2022",
      description:
        "Vous payez en ligne et retirez votre commande dans la boutique du commerçant. Votre produit sera disponible dans les 2 heures qui suivent votre confirmation de commande.",
      icon: "/colissimo.png",
    },
    {
      title: "Click & Collect : gratuit",
      date: "2 heures après confirmation",
      description:
        "Vous payez en ligne et retirez votre commande dans la boutique du commerçant. Votre produit sera disponible dans les 2 heures qui suivent votre confirmation de commande.",
      icon: "/shop.png",
    },
  ],
};
