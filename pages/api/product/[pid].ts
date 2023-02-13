import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import products from '../../../utils/data/products';
import { stores } from './../../../utils/data/stores';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { pid },
  } = req

  const product = products.find(x => x.id === pid);
  res.status(200).json(product);

  const store = stores.find(x => x.id === pid);
  res.status(200).json(stores);
}
