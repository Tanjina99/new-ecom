export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  order: number;
  categoryImage: string;
  children: ICategory[];
}
