import {
  createClientFactory,
  createChannel,
  ClientFactory,
  Channel,
  ClientMiddleware,
  Metadata,
} from 'nice-grpc-web';
import { mockMiddleware } from './mocks/mockMiddleware';

type InitOptions = {
  gateway: string;
  token: string;
  mock?: string;
};

export let clientFactory: ClientFactory;
export let channel: Channel;

export const initialiseServices = ({
  gateway,
  token,
  mock = 'false',
}: InitOptions) => {
  clientFactory = createClientFactory().use(
    mock === 'true' ? mockMiddleware : tokenMiddleware(token)
  );
  channel = createChannel(gateway);
};

const tokenMiddleware = (token: string): ClientMiddleware => {
  return (call, options) =>
    call.next(call.request, {
      ...options,
      metadata: Metadata(options.metadata).set(
        'Authorization',
        `Bearer ${token}`
      ),
    });
};
