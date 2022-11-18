import {Product} from '../interfaces/interfaces';

// type ReadOnlyProduct = Readonly<Product>;

let product: Product = {
  id: 12,
  name: 'T-shirt',
  category: 'cloth',
  price: 0
};

function setCurrentProduct(product: Product) {
  product.price = 30;
  product.name = 'New T-shirt';

  return product;
}
