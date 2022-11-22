import {httpRequest} from '../helpers/type-utils';
import {Product} from '../interfaces/interfaces';

//type DraftProduct = Partial<Product>;

const draftProduct: Partial<Product> = {
  id: 2,
  name: 'T-shirt',
  category: undefined,
  price: 200
};

createDraftProduct(draftProduct);
async function createDraftProduct(product: Partial<Product>) {
  return httpRequest('postDraftProduct', {product});
}

// type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
