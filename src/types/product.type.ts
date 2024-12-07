export type TProductStatus = "DRAFTED" | "PUBLISHED" | "UNLISTED";

export type TCategoryProps = {
  id: string;
  name: string;

  createdAt: string;
  updatedAt: string;
};

export type TInventoryProps = {
  id: string;
  shopId: string;
  sku: string;
  availableQuantity: number;

  createdAt: string;
  updatedAt: string;
};

export type TImage = {
  id: string;
  productId: string;
  url: string;
  isPrimary: boolean;

  createdAt: string;
  updatedAt: string;
};

export type TProductProps = {
  id: string;
  categoryId: string;
  inventoryId: string;
  name: string;
  description?: string;
  price: number;
  status: TProductStatus;
  category: TCategoryProps;
  images: TImage[];
  inventory: TInventoryProps;
  quantity: number;
  stock: string;

  createdAt?: string;
  updatedAt?: string;
};
