import {Product} from '../exercises-solution/01-common-use-case';

interface Stack<T> {
  length: number;
  store: T[];

  pop(): T | undefined;
  push(item: T): void;
  peek(item: T): T;
  centerObject():T;
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

  centerObject(): T {
    return this.length & 1 ? this.store[this.length/2] : this.store[this.length + 1 / 2] 
  }
}

const myProductInstance = new MyStack<Product>();
myProductInstance.length;
myProductInstance.push({
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
myProductInstance.peek();
