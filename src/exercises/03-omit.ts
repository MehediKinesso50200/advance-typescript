import {httpRequest} from '../helpers/type-utils';

// Problem statement: want to reuse our User and Product interface but need to omit price and address accordingly
interface Order {
  id: number;
  shippingAddress: string;
  orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
  product: {
    id: number;
    name: string;
    category: 'food' | 'cloth' | 'tech';
    // price: number; // next
  };
  user: {
    id: number;
    name: string;
    // address: string; // not available
    email: string;
  };
}

function getOrder() {
  const response = httpRequest<Order>('order', {id: 1});

  response.user.address;
  response.product.price;

  return response;
}
