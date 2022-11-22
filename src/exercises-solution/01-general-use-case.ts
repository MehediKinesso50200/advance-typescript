import {httpRequest} from '../helpers/type-utils';

function getProductList() {
  return httpRequest<Wrapper<Product[]>>('productList', {});
}

function getUserList() {
  return httpRequest<Wrapper<User[]>>('userList', {});
}

interface Wrapper<T> {
  status: string;
  message: string;
  meta: string;
  data: T;
}

interface Product {
  id: number;
  name: string;
  category: 'food' | 'cloth' | 'tech';
  price: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}
