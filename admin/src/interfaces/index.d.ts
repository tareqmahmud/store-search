export interface IStore {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  tags: [];
  createdAt: string;
  updatedAt: string;
  // status: "published" | "draft" | "rejected";
  // category: { id: string };
}

export interface ITag {
  id: string;
  name: string;
}

export interface ICategory {
  id: string;
  title: string;
}

export interface ILogin {
  username: string;
  password: string;
  remember: boolean;
}
