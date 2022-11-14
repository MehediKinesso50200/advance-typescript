import {OrderDetails} from '../interfaces/interfaces';

// orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
const orderItem: OrderDetails = {
  id: 123,
  orderStatus: 'packed',
  shippingAddress: 'address XYZ',
  quantity: 1,
  productDetails: {
    id: 3,
    name: 'Pants',
    categories: 'food',
    price: 19
  },
  userDetails: {
    id: 12,
    name: 'Jhon Doe',
    address: 'address XYZ',
    email: "jhon@kinesso.com"
  },
};

getOrderDetails(orderItem);
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
