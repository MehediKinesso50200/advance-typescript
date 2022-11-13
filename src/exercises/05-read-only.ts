import {Product} from '../exercises-solution/01-common-use-case';

// type ReadOnlyProduct = Readonly<Product>;

let product: Product = {
  id: 12,
  name: 'T-shirt',
  description: 'Lorem ipsum dolor sit amet...',
  images: ['image1', 'image2'],
  categories: 'cloth',
  inventory: 20,
  details: {
    size: 'sm',
    color: '#fffff'
  },
  price: 0
};

export async function setCurrentProduct(product: Product) {
  product.description = 'lets not update this item';
  product.details = {size: 'xl', color: '#000000'};
  product.price = 30;
  const postDraftProduct = product;
  return postDraftProduct;
}
