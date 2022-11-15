export {}
class MyStack {
  store: any[] = [];

  get length() {
    return this.store.length;
  }

  pop() {
    return this.store.pop();
  }

  push(item: any) {
    this.store.push(item);
  }

  peek() {
    return this.store[this.store.length - 1];
  }

  // centerObject() {
  //   return this.length & 1 ? this.store[this.length / 2] : this.store[this.length + 1 / 2];
  // }
}

const myProductInstance = new MyStack();
myProductInstance.length;
myProductInstance.push({
  id: 3,
  name: 'T-shirt',
  categories: 'cloth',
  price: 250
});
myProductInstance.push({
  id: 3,
  name: 'Jhon Doe',
  address: 'address XYZ',
  email: 'jhon@kinesso.com'
});
myProductInstance.peek();
