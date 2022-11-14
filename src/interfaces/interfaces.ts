export interface Product {
  id: number;
  name: string;
  categories: 'food' | 'cloth' | 'tech';
  price: number;
}

export interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

export interface OrderDetails {
  id: number;
  quantity: number;
  orderStatus: 'packed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  userDetails: User;
  productDetails: Product;
}
