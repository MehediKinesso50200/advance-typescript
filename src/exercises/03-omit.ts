import {httpRequest} from '../helpers/type-utils';

export interface OrderDetails {
  id: number;
  orderDate: Date;
  shippingAddress: string;
  productDetails: {
    id: number;
    name: string;
    categories: 'food' | 'cloth' | 'tech';
    // price: number; // next
  };
  userDetails: {
    id: number;
    name: string;
    // address: string; // not available
    email: string;
  };
}

export async function getOrderDetails() {
  const orderDetailsResponse: OrderDetails = httpRequest('orderDetails', {id: 1});

  orderDetailsResponse.userDetails.address;
  orderDetailsResponse.productDetails.price;

  return orderDetailsResponse;
}
