import {Product} from '../exercises-solution/01-common-use-case';
import {httpRequest} from '../helpers/type-utils';

type ReadOnlyProduct = Readonly<Product>;

const readOnlyProduct: Product = {
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

setCurrentProduct(readOnlyProduct);

let totalProductPrice = 0;

async function setCurrentProduct(product: Readonly<Product>) {
  // should not let manupulate data in this function;
  product.description = 'lets not update this item';
  product.details = {size: 'xl', color: '#000000'};
  product.price = 30;

  totalProductPrice = +product.price;
  const postDraftProduct = product;
  return postDraftProduct;
}
