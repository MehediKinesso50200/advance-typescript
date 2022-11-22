import { Product, User } from "../interfaces/interfaces";

export {};
class MyStack<T> {
  store: T[] = [];

  get length() {
    return this.store.length;
  }

  pop() {
    return this.store.pop();
  }

  push(item: T) {
    this.store.push(item);
  }

  peek(): T {
    return this.store[this.store.length - 1];
  }
}

const prodInstance = new MyStack<Product>();

prodInstance.length;
prodInstance.peek();

// Adding a Product to stack
prodInstance.push({
  id: 3,
  name: 'T-shirt',
  category: 'cloth',
  price: 250
});

const userInstance = new MyStack<User>();

//Adding a User to the Stack
userInstance.push({
  id: 3,
  name: 'Jhon Doe',
  address: 'address XYZ',
  email: 'jhon@kinesso.com'
});


