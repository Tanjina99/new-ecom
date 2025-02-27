export interface Discount {
  discountType: "flat" | "percentage";
  value: number;
}

interface Product {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
  price: number;
  discount: Discount;
  createdAt: string;
  ratingCount: number;
  average: number | null;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  parentId: string | null;
  order: number;
  categoryImage: string;
  children: Category[];
}
