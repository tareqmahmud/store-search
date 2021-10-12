export interface IPost {
  id: string;
  title: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: { id: string };
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