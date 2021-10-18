export type Tag = {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type TShop = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
};
