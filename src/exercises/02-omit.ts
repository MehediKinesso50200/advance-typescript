import {httpRequest} from '../helpers/type-utils';

export async function getOrderDetails() {
  const orderDetailsResponse: OrderDetails = httpRequest('orderDetails', {id: 1});

  orderDetailsResponse.userDetails.address;
  orderDetailsResponse.productDetails.inventory;

  return orderDetailsResponse;
}

// Omit
export interface OrderDetails {
  id: number;
  orderDate: Date;
  orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  quantity: number;
  userDetails: {
    id: number;
    name: string;
    email: string;
    // address: string; // need to omit
  };
  productDetails: {
    id: number;
    name: string;
    description: string;
    images: string[];
    // inventory: number, // need to omit
    categories: 'food' | 'cloth' | 'tech';
    price: number;
    details: {
      size: string;
      color: string;
    };
  };
}
