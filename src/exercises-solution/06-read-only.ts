import {Product} from '../interfaces/interfaces';

type ReadOnlyProduct = Readonly<Product>;

let product: Readonly<Product> = {
  id: 12,
  name: 'T-shirt',
  category: 'cloth',
  price: 0
};
const productT = {
  id: 12,
  name: 'T-shirt',
  category: 'cloth',
  price: 0
};

productT.name = 'newa';

function setCurrentProduct(product: Readonly<Product>) {
  product.price = 30;
  product.name = 'New T-shirt';

  return product;
}

// for making individual property readonly rather than default All property
type ReadonlyBy<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;
const product2: ReadonlyBy<Product, 'category'> = {
  id: 2,
  name: 'T-shirt',
  category: 'cloth',
  price: 200
};
