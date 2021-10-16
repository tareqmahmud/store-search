export interface ITag {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface IStore {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  tags: ITag[];
  createdAt: string;
  updatedAt: string;
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
