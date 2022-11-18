import {httpRequest} from '../helpers/type-utils';

interface Order {
  id: number;
  shippingAddress: string;
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
