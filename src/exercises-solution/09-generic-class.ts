interface Stack<T> {
    length : number
    store: T[]
  
    pop(): T | undefined
    push(item: T): void
    peek(item: T): T
  }
  
  class MyStack<T> implements Stack<T> {
      store: T[] = []
  
      get length () {
          return this.store.length
      }
  
      pop(): T | undefined {
          return this.store.pop()
      }
  
      push(house: T) {
          this.store.push(house);
      }
  
      peek() {
          return this.store[this.store.length -1]
      }
  }
  
  
  interface House {
      id: number
      address: string 
      price: number
      type : 'condo' | 'terrace'
  }
  const myHouseInstance = new MyStack<House>()
  myHouseInstance.length
  myHouseInstance.push({ id: 1, address: '123', price: 1_000_000, type: 'condo'})
  myHouseInstance.peek
  
  
  interface Cat {
      id: number
      price: number
      type : 'persian' | 'meow'
  }
  const myCatInstance = new MyStack<Cat>()
  myCatInstance.length
  myCatInstance.push({ id: 1, address: '123', price: 1_000_000, type: 'condo'})
  myCatInstance.peek