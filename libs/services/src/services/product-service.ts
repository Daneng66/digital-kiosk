import { ProductServiceDefinition } from '../protos-ts/product';
import { channel, clientFactory } from '../init';
import { Client } from 'nice-grpc-web';

let service: Client<ProductServiceDefinition>;

export const productService = () => {
  if (!service) {
    service = clientFactory.create(ProductServiceDefinition, channel);
  }

  return service;
};
