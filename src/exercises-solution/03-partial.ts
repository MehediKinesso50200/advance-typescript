import {Product} from '../exercises-solution/01-common-use-case';
import {httpRequest} from '../helpers/type-utils';

// type DraftProduct = Partial<Product>;

const draftProduct: Partial<Product> = {
  name: 'T-shirt',
  description: 'Lorem ipsum dolor sit amet...',
  // images: undefined,
  categories: 'cloth',
  // inventory: undefined,
  details: {
    size: 'sm',
    color: '#fffff'
  }
};

createDraftProduct(draftProduct);

function createDraftProduct(product: Partial<Product>) {
  const postDraftProduct = httpRequest('postDraftProduct', {product});
  return postDraftProduct;
}

//TODO is it possible to make certail attribute mandatory