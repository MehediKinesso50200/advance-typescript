import {httpRequest} from '../helpers/type-utils';

export interface Product {
  status: string;
  message: string;
  data: {
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
  }[];
}

export interface User {
  status: string;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    address: string;
  }[];
}


export async function getProductList() {
  const apiResponse: Product = httpRequest('productList', {});
  return apiResponse;
}

export async function getUserList() {
  const apiResponse: User = httpRequest('userList', {});
  return apiResponse;
}