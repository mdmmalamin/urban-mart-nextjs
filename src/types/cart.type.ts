import { TInventoryProps, TProductStatus } from "./product.type";

export type TImageProps = {
  url: string;
};

export type TCartProductProps = {
  id: string;
  categoryId: string;
  inventoryId: string;
  inventory: TInventoryProps;
  name: string;
  description: string;
  price: number;
  status: TProductStatus;
  images?: TImageProps[];

  createdAt?: string;
  updatedAt?: string;
};

export type TCartItemsProps = {
  quantity: number;
  total: number;
  product: TCartProductProps;
};

export type TCartProps = {
  id: TCartItemsProps;
  customerId: TCartItemsProps;
  totalAmount: number;
  cartItems: TCartItemsProps[];
  totalItem: number;

  createdAt?: TCartItemsProps;
  updatedAt?: TCartItemsProps;
};
