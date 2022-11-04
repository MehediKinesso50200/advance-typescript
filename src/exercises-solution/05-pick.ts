import {OrderDetails} from './02-omit';

// orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
const orderItem: Partial<OrderDetails> = {
  id: 123,
  // orderStatus: 'packed',
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
  }
};

export function getOrderStatus(orderItem: OrderDetails): OrderDetails['orderStatus'] {
  //TODO call qurior api to check status;
  return 'packed';
}

export function getOrderDetails(orderItem: OrderDetails): Pick<OrderDetails, 'id' | 'shippingAddress' | 'quantity'> {
  return {
    id: 123,
    shippingAddress: 'string',
    quantity: 1
  };
}
