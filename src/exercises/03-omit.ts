import {httpRequest} from '../helpers/type-utils';

interface Order {
  id: number;
  orderDate: Date;
  shippingAddress: string;
  product: {
    id: number;
    name: string;
    categories: 'food' | 'cloth' | 'tech';
    // price: number; // next
  };
  user: {
    id: number;
    name: string;
    // address: string; // not available
    email: string;
  };
}

function getOrderDetails() {
  const response = httpRequest<Order>('order', {id: 1});

  response.user.address;
  response.product.price;

  return response;
}
