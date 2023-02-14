export type VotesType = {
  count: number;
  value: number;
}

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[]
}

export type ReviewTypeList = {
  id: string;
  images: string[];
  title: string;
  types: string;
  description: string;
}

export type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
  images: string[];
  discount?: string;
  currentPrice: number;
  punctuation: PunctuationType;
  reviews: ReviewType[];
}

export type ProductTypeList = {
  id: string;
  name: string;
  price: number;
  color: string;
  images: string[];
  discount?: string;
  currentPrice?: number;
}

export type CheckTypeList = {
  id: string;
  name: string;
  color: string;
  images: string[];
  status: string;
}

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  salePrice: number;
  noDiscount: number;
  count: number;
  color: string;
  size: string;
}

export type CheckedType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
}

export type ReviewType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
}

export type StoreTypeList = {
  id: string;
  name: string;
  address: string;
  images: string[];
  link: string;
}

export type GtagEventType = {
  action: string;
  category: string; 
  label: string;
  value: string
}