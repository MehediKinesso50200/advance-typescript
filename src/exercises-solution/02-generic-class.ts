export {};
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
}

const prodInstance = new MyStack();

prodInstance.length;
prodInstance.peek();

// Adding a Product to stack
prodInstance.push({
  id: 3,
  name: 'T-shirt',
  category: 'cloth',
  price: 250
});

//Adding a User to the Stack
// prodInstance.push({
//   id: 3,
//   name: 'Jhon Doe',
//   address: 'address XYZ',
//   email: 'jhon@kinesso.com'
// });


