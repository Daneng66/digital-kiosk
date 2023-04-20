import { ListProductResponse, Product } from '../protos-ts/product';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockData: Record<string, any> = {
  '/product.ProductService/ListProducts': {
    products: [
      { id: '1', name: 'Test', description: '', imageUrl: '', price: 0 },
    ],
  } satisfies ListProductResponse,
};

export default mockData;
