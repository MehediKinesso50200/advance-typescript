import {httpRequest} from '../helpers/type-utils';

function getProductList() {
  return httpRequest<Product>('productList', {});
}

function getUserList() {
  const apiResponse: User = httpRequest('userList', {});
  return apiResponse;
}

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