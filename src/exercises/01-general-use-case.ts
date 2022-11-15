import {httpRequest} from '../helpers/type-utils';

interface Product {
  status: string;
  message: string;
  data: {
    id: number;
    name: string;
    categories: 'food' | 'cloth' | 'tech';
    price: number;
  }[];
}
interface User {
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
