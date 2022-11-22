import {Product} from '../interfaces/interfaces';

// type ReadOnlyProduct = Readonly<Product>;

let product: Readonly<Product> = {
  id: 12,
  name: 'T-shirt',
  category: 'cloth',
  price: 0
};
const productT =  {
  id: 12,
  name: 'T-shirt',
  category: 'cloth',
  price: 0
};

productT.name = "newa";

function setCurrentProduct(product: Readonly<Product>) {
  product.price = 30;
  product.name = 'New T-shirt';

  return product;
}
