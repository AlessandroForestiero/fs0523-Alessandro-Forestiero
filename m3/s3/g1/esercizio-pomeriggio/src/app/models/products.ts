import { Prod } from './prod';

export interface Products {
  products: Prod[];
  total: number;
  skip: number;
  limit: number;
}
