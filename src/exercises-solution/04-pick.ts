import {Order} from '../interfaces/interfaces';

// orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
const orderItem: Order = {
  id: 123,
  orderStatus: 'packed',
  shippingAddress: 'address XYZ',
  product: {
    id: 3,
    name: 'Pants',
    category: 'food',
    price: 19
  },
  user: {
    id: 12,
    name: 'Jhon Doe',
    address: 'address XYZ',
    email: 'jhon@kinesso.com'
  }
};

getOrder(orderItem);

function getOrder(orderItem: Order): Pick<Order, "id" | "orderStatus" | "shippingAddress"> {
  //TODO some data mutation take place
  return {
    id: 123,
    orderStatus: 'packed',
    shippingAddress: 'address XYZ'
  };
}

type newType= Pick<Order, "id" | "orderStatus" | "shippingAddress">;

getOrderStatus(orderItem);

function getOrderStatus(orderItem: Order): Order["shippingAddress"] {
  return 'packed';
}
