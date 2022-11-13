import {httpRequest} from '../helpers/type-utils';


export interface OrderDetails {
  id: number;
  orderDate: Date;
  shippingAddress: string;
  userDetails: {
    id: number;
    name: string;
    email: string;
    //address: string; // not available
  };
  productDetails: {
    name: string;
    description: string;
    images: string[];
    //inventory: number, // not available
    categories: 'food' | 'cloth' | 'tech';
    price: number; //next
    details: {
      size: string;
      color: string;
    };
  };
}


export async function getOrderDetails() {
  const orderDetailsResponse: OrderDetails = httpRequest('orderDetails', {id: 1});

  orderDetailsResponse.userDetails.address;
  orderDetailsResponse.productDetails.inventory;

  return orderDetailsResponse;
}

// Omit

