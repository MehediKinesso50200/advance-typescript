import {httpRequest} from '../helpers/type-utils';
import {Product} from '../interfaces/interfaces';

// make product attribute optional so that can create draft product still using same type

const draftProduct: Product = {
  id: 2,
  name: 'T-shirt',
  category: undefined,
  price: 200
};

createDraftProduct(draftProduct);
async function createDraftProduct(product: Product) {
  return httpRequest('postDraftProduct', {product});
}



