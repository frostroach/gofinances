import { Category } from "./category";

export type Transaction = {
  id: string;
  title: string;
  value: number;
  category: Category;
  date: Date;
  type: string;
};
