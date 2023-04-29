export enum WorkType {
  COLLECTION = "collection",
  MOVIE = "movie",
  SERIE = "serie",
  BONUS = "bonus",
  OTHER = "other",
}

export enum ShopStatus {
  OPEN = "open",
  DEAD = "dead",
}

export interface Shop {
  id: string;
  name: string;
  location?: string;
  status?: ShopStatus;
}

export interface Tag {
  id: string;
  name: string;
  color?: string;
  description?: string;
}

export interface Work {
  name: string;
  type?: WorkType;
  omdbId?: string;
}

export interface Receipt {
  purchasedDate: string;
  priceBt: number;
  priceAt: number;
  shopID: string;
}

export interface Possesion extends Work, Receipt {
  id: string;
  userId: number;
  note: string;
  format: string[];
  tags?: string[];
  parentId?: string;
  childIds?: number[];
}
