import {httpRequest} from '../helpers/type-utils';

function getProductList() {
  return httpRequest<Product>('productList', {});
}

function getUserList() {
  return httpRequest<User>('userList', {});
}

interface Product {
  status: string;
  message: string;
  data: {
    id: number;
    name: string;
    category: 'food' | 'cloth' | 'tech';
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
