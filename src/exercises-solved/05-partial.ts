import {httpRequest} from '../helpers/type-utils';
import {Product} from '../interfaces/interfaces';

// type DraftProduct = Partial<Product>;

const draftProduct: Product = {
  id: 2,
  name: 'T-shirt',
  categories: 'cloth',
  price: 200
};

createDraftProduct(draftProduct);
async function createDraftProduct(product: Product) {
  return httpRequest('postDraftProduct', {product});
}

// type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
