import { createChannel, createClientFactory } from 'nice-grpc-web';
import {
  ProductServiceClient,
  ProductServiceDefinition,
} from '../protos-ts/product';
import { mockMiddleware } from '../mocks/mockMiddleware';

const clientFactory = createClientFactory().use(mockMiddleware);
const channel = createChannel('');
const client: ProductServiceClient = clientFactory.create(
  ProductServiceDefinition,
  channel
);

export const listProducts = async () => {
  const res = await client.listProducts({});
  return res.products;
};
