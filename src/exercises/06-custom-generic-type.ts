export {};
// Return type and some generics

interface House {
  id: number;
  address: string;
  price: number;
  type: 'bunglow' | 'condo' | 'terrace';
}

function indentity<T>(input: T): T {
  return input;
}

// type a = <T>(input: T) => T
type a = typeof indentity;
type _number = typeof indentity<number>;

type toString = ReturnType<typeof indentity<string>>;
type toNumber = ReturnType<typeof indentity<number>>;
type toHouse = ReturnType<typeof indentity<House>>;

//////////////////////////////////

function returnMeWithId<T>(fn: () => T & {id: string}): ReturnType<typeof fn> {
  return fn();
}

returnMeWithId(() => '123');
returnMeWithId<{lat: number; lng: number}>(() => ({lat: 123, lng: 123}));

type year = number;
type month = 'Jan' | 'Feb';
type day = 1 | 2 | 3 | 30;
type str = `${year}/${month}/${day}`;
const date: str = `123123-Feb-30`;

type ipgdomain = 'kinesso' | 'matterkind' | 'ipg';
type kinessoEmail = `${string}@${ipgdomain}.com`;
const email: kinessoEmail = `abc@yahoo.com`;


interface OrderDetails {
  id: number;
  orderDate: Date;
  orderStatus: 'packed' | 'shipped' | 'delivered';
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
    details: {
      size: string; // format with type
      color: string; // format with type
    };
  };
}