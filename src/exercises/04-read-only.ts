import {Product} from '../exercises-solution/01-common-use-case';
import {httpRequest} from '../helpers/type-utils';

// type ReadOnlyProduct = Readonly<Product>;

const readOnlyProduct: Readonly<Product> = {
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

setCurrentProduct(readOnlyProduct)

export async function setCurrentProduct(product: Product) {
  product.description = 'lets not update this item';
  product.details = {size: 'xl', color: '#000000'};
  product.price = 30;
  const postDraftProduct = product;
  return postDraftProduct;
}

// can readonly certain 