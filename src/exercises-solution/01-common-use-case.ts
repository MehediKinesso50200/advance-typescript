import {httpRequest} from '../helpers/type-utils';

export interface DataResoponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface Product {
  id: number,
  name: string;
  description: string;
  images: string[];
  categories: 'food' | 'cloth' | 'tech';
  inventory: number,
  price: number,
  details: {
    size: string; // format with type
    color: string; // format with type
  };
}

export interface User {
  id: number;
  name: string;
  address: string;
}

export async function getProductList() {
  const apiResponse: DataResoponse<Product> = httpRequest('productList', {});
  return apiResponse;
}

export async function getUserList() {
  const apiResponse: DataResoponse<User> = httpRequest('productList', {});
  return apiResponse;
}
