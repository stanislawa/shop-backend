import { createRequire } from 'module';

const rq = createRequire(import.meta.url);

const products = rq('./../productList.json');

export default async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(products)
  };
};
