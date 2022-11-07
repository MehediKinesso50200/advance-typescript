import {Product} from './01-common-use-case';

interface Stack<T> {
  length: number;
  store: T[];

  pop(): T | undefined;
  push(item: T): void;
  peek(item: T): T;
}

class MyStack<T> implements Stack<T> {
  store: T[] = [];

  get length() {
    return this.store.length;
  }

  pop(): T | undefined {
    return this.store.pop();
  }

  push(house: T) {
    this.store.push(house);
  }

  peek() {
    return this.store[this.store.length - 1];
  }
}

const myHouseInstance = new MyStack<Product>();
myHouseInstance.length;
myHouseInstance.push({
  id: 10,
  name: 'T-shirt',
  description: 'Lorem ipsum dolor sit amet...',
  images: [],
  categories: 'cloth',
  inventory: 20,
  price: 250,
  details: {
    size: 'sm',
    color: '#fffff'
  }
});
myHouseInstance.peek();
