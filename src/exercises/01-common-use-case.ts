import {httpRequest} from '../helpers/type-utils';

export async function getProductList() {
  const apiResponse: ProductResponse = httpRequest('productList', {});
  return apiResponse;
}

export async function getUserList() {
  const apiResponse: UserResponse = httpRequest('userList', {});
  return apiResponse;
}

export interface ProductResponse {
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

export interface UserResponse {
  status: string;
  message: string;
  data: {
    id: number;
    name: string;
    email: string;
    address: string;
  }[];
}
