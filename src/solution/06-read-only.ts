import {Product} from '../interfaces/interfaces';

// type ReadOnlyProduct = Readonly<Product>;

let product: Product = {
  id: 12,
  name: 'T-shirt',
  categories: 'cloth',
  price: 0
};

export async function setCurrentProduct(product: Product) {
  product.price = 30;
  product.name = 'New T-shirt';
  const postDraftProduct = product;
  return postDraftProduct;
}
