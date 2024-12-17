import { TImages, TProductStatus } from "./product.type";

export type TMyInventory = {
  id: string;
  sku: string;
  availableQuantity: number;
  product: {
    id: string;
    name: string;
    price: number;
    status: TProductStatus;
    images: TImages[];
  };
};
