# Digital Kiosk - Kiosk Terminal and F&B Mobile Clients

Digital Kiosk is a collection of apps and shared libraries that allow you to make orders of food and beverage products. The apps are designed to be used in a kiosk terminal and a mobile device.

The Terminal client is written in TypeScript and uses React 18, Node 18, ts-proto, nice-grpc-web and was bootstrapped with Vite react-ts template and NX.

See [nice-grpc](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc-web#preparing-the-server) for more information on setting up the protos/grpc.

See [Nx Documentation](https://nx.dev) to learn more about NX.

## Getting Started

### Prerequisites

Run `npm ci` to install all dependencies.

Get [protoc](https://github.com/protocolbuffers/protobuf/releases) and add it to your PATH environment variable, to use the `protoc` CLI command, to generate `.ts` proto files from `*.proto` files.

### Usage

Run `npm run dev` to start the web-ui client.

Run the following in PowerShell, from the `/digital-kiosk` directory, to generate a `.ts` file, for each `*.proto` file, in the `/protos/` directory, and output the `.ts` file to `/lib/protos` directory:

```
protoc --plugin=protoc-gen-ts_proto=.\node_modules\.bin\protoc-gen-ts_proto.cmd --ts_proto_out=./libs/protos --ts_proto_opt="outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false" --proto_path=./libs/protos ./libs/protos/*.proto
```
