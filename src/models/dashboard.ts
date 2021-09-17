type Category = {
  name: string;
  key: string;
  icon: string;
};

export type ListItemData = {
  id: string;
  title: string;
  value: string;
  category: Category;
  date: string;
  type: "income" | "outcome";
};

export type ListItemProps = {
  data: ListItemData;
};
