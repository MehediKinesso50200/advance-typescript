import {httpRequest} from '../helpers/type-utils';
import {Product, User} from './01-common-use-case';

export async function getOrderDetails() {
  const orderDetailsResponse: OrderDetails = httpRequest('orderDetails', {id: 1});

  orderDetailsResponse.userDetails.address;
  orderDetailsResponse.productDetails.inventory;
  orderDetailsResponse.productDetails.price;
  
  return orderDetailsResponse;
}

// Omit
export interface OrderDetails {
  id: number;
  orderDate: Date;
  orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  quantity: number;
  userDetails: Omit<User, 'address'>;
  productDetails: Omit<Product, 'inventory' | 'categories'>;
}
