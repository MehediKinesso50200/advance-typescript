import {Product} from '../exercises-solution/01-common-use-case';
import {httpRequest} from '../helpers/type-utils';

//type DraftProduct = Partial<Product>;

const draftProduct: Product = {
  name: 'T-shirt',
  description: 'Lorem ipsum dolor sit amet...',
  images: undefined,
  categories: 'cloth',
  inventory: undefined,
  details: {
    size: 'sm',
    color: '#fffff'
  }
};

createDraftProduct(draftProduct);

export async function createDraftProduct(product: Product) {
  const postDraftProduct = httpRequest('postDraftProduct', {product});
  return postDraftProduct;
}

// type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
// nested type will not be partial
