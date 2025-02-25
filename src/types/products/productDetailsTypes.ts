export interface ProductDetailsApiResponseTypes {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
  price: number;
  sku: string;
  stock: number;
  description: string;
  unit: string;
  createdBy: string;
  discount: Discount;
  tax: Tax;
  shipping: Shipping;
  meta: Meta;
  tags: string[];
  gallery: string[];
  attributes: any[];
  variations: any[];
  productType: "simple";
  isActive: boolean;
  isFeatured: boolean;
  sales: number;
  categories: Category[];
  brand: string;
  campaigns: Campaign[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Discount {
  discountType: "percent" | "flat";
  value: number;
}

export interface Tax {
  taxType: "percent";
  value: number;
}

export interface Shipping {
  isFree: boolean;
  cost: number;
}

export interface Meta {
  title: string;
  description: string;
  image: string;
}

export interface Category {
  _id: string;
  level: number;
  category: string;
}

export interface Campaign {
  _id: string;
  campaign: string;
  discount: Discount;
}

//for cartitem
export interface CartItem {
  _id: string;
  name: string;
  price: number;
  discount?: Discount;
  tax?: Tax;
  quantity: number;
}
