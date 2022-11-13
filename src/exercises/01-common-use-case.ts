import {httpRequest} from '../helpers/type-utils';

interface DataWrapper<T> {
  status: string;
  message: string;
  meta: string;
  data: T;
}

export interface Product {
  name: string;
  description: string;
  images: string[];
  categories: 'food' | 'cloth' | 'tech';
  inventory: number;
  price: number;
  details: {
    size: string;
    color: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

export async function getProductList() {
  const apiResponse: DataWrapper<Product> = httpRequest('productList', {});
  return apiResponse;
}

export async function getUserList() {
  const apiResponse: DataWrapper<User> = httpRequest('userList', {});
  return apiResponse;
}
