import { ChartInterface } from "./chart.interface";

export interface ProductInterface {
  title: string;
  shop: string;
  compatibility?: string;
  tags: string[];
  price: string;
  image: string;
  thumbnail?: string;
}

export interface ProductDetailsInterface extends ProductInterface {
  region: string;
  advices: {
    title: string;
    description: string;
  }[];
  details: ChartInterface;
  infos: {
    title: string;
    icon: string;
    description: string;
  }[];
  delivery: {
    title: string;
    date: string;
    description: string;
    icon: string;
  }[];
}
