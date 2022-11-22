import {httpRequest} from '../helpers/type-utils';
import { Product, User } from '../interfaces/interfaces';

interface Order {
  id: number;
  shippingAddress: string;
  orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
  product: Omit<Product, "price">
  // {
  //   id: number;
  //   name: string;
  //   category: 'food' | 'cloth' | 'tech';
  //   // price: number; // next
  // };
  user: Omit<User, "address" | "name">
  // {
  //   id: number;
  //   name: string;
  //   // address: string; // not available
  //   email: string;
  // };
}

function getOrder() {
  const response = httpRequest<Order>('order', {id: 1});

  response.user.name;
  response.user.address;
  response.product.price;

  return response;
}
