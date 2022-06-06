import { createRequire } from 'module';

const rq = createRequire(import.meta.url);

const products = rq('./../productList.json');


export default async (event) => {
  const { productId } = event.pathParameters;
  const product = products.find(item => item.id === productId);

  if (product) {
    return {
      statusCode: 200,
      body: JSON.stringify(product)
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify('Product not found')
    };
  }
};
