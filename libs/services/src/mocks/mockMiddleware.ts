/* eslint-disable no-debugger */
import { ClientMiddleware } from 'nice-grpc-common';
import mockData from './mockData';

export const mockMiddleware: ClientMiddleware = async function* mockMiddleware(
  call,
  options
) {
  if (call.method.path in mockData) {
    return mockData[call.method.path];
  }

  return yield* call.next(call.request, options);
};
