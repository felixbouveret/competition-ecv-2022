export interface ProductInterface {
  title: string;
  shop: string;
  compatibility?: string;
  tags: string[];
  price: number;
  region?: string;
  image: string;
  advices?: {
    title: string;
    description: string;
  }[];
  details?: [];
  infos?: {
    title: string;
    icon: string;
    description: string;
  }[];
}
