export interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  categories: 'food' | 'cloth' | 'tech';
  inventory: number;
  price: number;
  details: {
    size: string;
    color: string;
  };
}

export interface User {
  id: number;
  name: string;
  address: string;
}

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
    //address: string; // need to omit
  };
  productDetails: {
    id: number;
    name: string;
    description: string;
    images: string[];
    //inventory: number, // need to omit
    categories: 'food' | 'cloth' | 'tech';
    price: number;
    details: {
      size: string;
      color: string;
    };
  };
}
