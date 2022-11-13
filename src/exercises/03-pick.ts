import {OrderDetails} from '../exercises-solution/02-omit';

// orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
const orderItem: OrderDetails = {
  id: 123,
  orderStatus: 'packed',
  shippingAddress: 'string',
  quantity: 1,
  userDetails: {
    id: 12,
    name: 'John Doe'
  },
  productDetails: {
    id: 1,
    name: 'T-shirt',
    description: 'demo',
    images: [],
    price: 20,
    details: {
      color: '#000',
      size: 'sm'
    }
  },
  orderDate: new Date()
};

getOrderDetails(orderItem);
// Only need to get below attributes
export function getOrderDetails(orderItem: OrderDetails): OrderDetails {
  //TODO some data mutation take place
  return {
    id: 123,
    orderStatus: 'packed',
    shippingAddress: 'string'
  };
}

getOrderStatus(orderItem);

export function getOrderStatus(orderItem: OrderDetails): 'packed' | 'shipped' | 'delivered' | 'cancelled' {
  return 'packed';
}
