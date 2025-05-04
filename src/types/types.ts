export interface IProduct {
  Name: string;
  SKU: string;
  Category: string;
  ShortDesc: string;
  Icon: string;
  CategoryName: string;
  Cost: number;
}

export interface IJourney {
  pyGUID: string;
  Label: string;
  Title: string;
  Content: string;
  ImageURL: string;
}
