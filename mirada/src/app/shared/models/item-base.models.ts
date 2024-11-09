
export interface CatalogItem {
  id: number;
  itemName: string;
  category: string;
  itemInfo: ItemInfo[]
}

export interface ItemInfo {
  colorName: string;
  price: string;
  colorImg: string;
  photos: string[];
}