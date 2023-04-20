/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "product";

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface CreateProductRequest {
  product: Product | undefined;
}

export interface CreateProductResponse {
  product: Product | undefined;
}

export interface ReadProductRequest {
  productId: string;
}

export interface ReadProductResponse {
  product: Product | undefined;
}

export interface UpdateProductRequest {
  product: Product | undefined;
}

export interface UpdateProductResponse {
  product: Product | undefined;
}

export interface DeleteProductRequest {
  productId: string;
}

export interface DeleteProductResponse {
  productId: string;
}

export interface ListProductRequest {
}

export interface ListProductResponse {
  products: Product[];
}

function createBaseProduct(): Product {
  return { id: "", name: "", description: "", imageUrl: "", price: 0 };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.imageUrl !== "") {
      writer.uint32(34).string(message.imageUrl);
    }
    if (message.price !== 0) {
      writer.uint32(41).double(message.price);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.imageUrl = reader.string();
          continue;
        case 5:
          if (tag != 41) {
            break;
          }

          message.price = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      imageUrl: isSet(object.imageUrl) ? String(object.imageUrl) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.imageUrl !== undefined && (obj.imageUrl = message.imageUrl);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  create(base?: DeepPartial<Product>): Product {
    return Product.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Product>): Product {
    const message = createBaseProduct();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.imageUrl = object.imageUrl ?? "";
    message.price = object.price ?? 0;
    return message;
  },
};

function createBaseCreateProductRequest(): CreateProductRequest {
  return { product: undefined };
}

export const CreateProductRequest = {
  encode(message: CreateProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductRequest {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: CreateProductRequest): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product ? Product.toJSON(message.product) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateProductRequest>): CreateProductRequest {
    return CreateProductRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateProductRequest>): CreateProductRequest {
    const message = createBaseCreateProductRequest();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseCreateProductResponse(): CreateProductResponse {
  return { product: undefined };
}

export const CreateProductResponse = {
  encode(message: CreateProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateProductResponse {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: CreateProductResponse): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product ? Product.toJSON(message.product) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateProductResponse>): CreateProductResponse {
    return CreateProductResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateProductResponse>): CreateProductResponse {
    const message = createBaseCreateProductResponse();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseReadProductRequest(): ReadProductRequest {
  return { productId: "" };
}

export const ReadProductRequest = {
  encode(message: ReadProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.productId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadProductRequest {
    return { productId: isSet(object.productId) ? String(object.productId) : "" };
  },

  toJSON(message: ReadProductRequest): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    return obj;
  },

  create(base?: DeepPartial<ReadProductRequest>): ReadProductRequest {
    return ReadProductRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ReadProductRequest>): ReadProductRequest {
    const message = createBaseReadProductRequest();
    message.productId = object.productId ?? "";
    return message;
  },
};

function createBaseReadProductResponse(): ReadProductResponse {
  return { product: undefined };
}

export const ReadProductResponse = {
  encode(message: ReadProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadProductResponse {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: ReadProductResponse): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product ? Product.toJSON(message.product) : undefined);
    return obj;
  },

  create(base?: DeepPartial<ReadProductResponse>): ReadProductResponse {
    return ReadProductResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ReadProductResponse>): ReadProductResponse {
    const message = createBaseReadProductResponse();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseUpdateProductRequest(): UpdateProductRequest {
  return { product: undefined };
}

export const UpdateProductRequest = {
  encode(message: UpdateProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProductRequest {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: UpdateProductRequest): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product ? Product.toJSON(message.product) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdateProductRequest>): UpdateProductRequest {
    return UpdateProductRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateProductRequest>): UpdateProductRequest {
    const message = createBaseUpdateProductRequest();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseUpdateProductResponse(): UpdateProductResponse {
  return { product: undefined };
}

export const UpdateProductResponse = {
  encode(message: UpdateProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.product !== undefined) {
      Product.encode(message.product, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.product = Product.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateProductResponse {
    return { product: isSet(object.product) ? Product.fromJSON(object.product) : undefined };
  },

  toJSON(message: UpdateProductResponse): unknown {
    const obj: any = {};
    message.product !== undefined && (obj.product = message.product ? Product.toJSON(message.product) : undefined);
    return obj;
  },

  create(base?: DeepPartial<UpdateProductResponse>): UpdateProductResponse {
    return UpdateProductResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<UpdateProductResponse>): UpdateProductResponse {
    const message = createBaseUpdateProductResponse();
    message.product = (object.product !== undefined && object.product !== null)
      ? Product.fromPartial(object.product)
      : undefined;
    return message;
  },
};

function createBaseDeleteProductRequest(): DeleteProductRequest {
  return { productId: "" };
}

export const DeleteProductRequest = {
  encode(message: DeleteProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.productId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteProductRequest {
    return { productId: isSet(object.productId) ? String(object.productId) : "" };
  },

  toJSON(message: DeleteProductRequest): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    return obj;
  },

  create(base?: DeepPartial<DeleteProductRequest>): DeleteProductRequest {
    return DeleteProductRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteProductRequest>): DeleteProductRequest {
    const message = createBaseDeleteProductRequest();
    message.productId = object.productId ?? "";
    return message;
  },
};

function createBaseDeleteProductResponse(): DeleteProductResponse {
  return { productId: "" };
}

export const DeleteProductResponse = {
  encode(message: DeleteProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.productId !== "") {
      writer.uint32(10).string(message.productId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.productId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteProductResponse {
    return { productId: isSet(object.productId) ? String(object.productId) : "" };
  },

  toJSON(message: DeleteProductResponse): unknown {
    const obj: any = {};
    message.productId !== undefined && (obj.productId = message.productId);
    return obj;
  },

  create(base?: DeepPartial<DeleteProductResponse>): DeleteProductResponse {
    return DeleteProductResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<DeleteProductResponse>): DeleteProductResponse {
    const message = createBaseDeleteProductResponse();
    message.productId = object.productId ?? "";
    return message;
  },
};

function createBaseListProductRequest(): ListProductRequest {
  return {};
}

export const ListProductRequest = {
  encode(_: ListProductRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ListProductRequest {
    return {};
  },

  toJSON(_: ListProductRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ListProductRequest>): ListProductRequest {
    return ListProductRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<ListProductRequest>): ListProductRequest {
    const message = createBaseListProductRequest();
    return message;
  },
};

function createBaseListProductResponse(): ListProductResponse {
  return { products: [] };
}

export const ListProductResponse = {
  encode(message: ListProductResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.products) {
      Product.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListProductResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListProductResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.products.push(Product.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListProductResponse {
    return { products: Array.isArray(object?.products) ? object.products.map((e: any) => Product.fromJSON(e)) : [] };
  },

  toJSON(message: ListProductResponse): unknown {
    const obj: any = {};
    if (message.products) {
      obj.products = message.products.map((e) => e ? Product.toJSON(e) : undefined);
    } else {
      obj.products = [];
    }
    return obj;
  },

  create(base?: DeepPartial<ListProductResponse>): ListProductResponse {
    return ListProductResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ListProductResponse>): ListProductResponse {
    const message = createBaseListProductResponse();
    message.products = object.products?.map((e) => Product.fromPartial(e)) || [];
    return message;
  },
};

export type ProductServiceDefinition = typeof ProductServiceDefinition;
export const ProductServiceDefinition = {
  name: "ProductService",
  fullName: "product.ProductService",
  methods: {
    createProduct: {
      name: "CreateProduct",
      requestType: CreateProductRequest,
      requestStream: false,
      responseType: CreateProductResponse,
      responseStream: false,
      options: {},
    },
    readProduct: {
      name: "ReadProduct",
      requestType: ReadProductRequest,
      requestStream: false,
      responseType: ReadProductResponse,
      responseStream: false,
      options: {},
    },
    updateProduct: {
      name: "UpdateProduct",
      requestType: UpdateProductRequest,
      requestStream: false,
      responseType: UpdateProductResponse,
      responseStream: false,
      options: {},
    },
    deleteProduct: {
      name: "DeleteProduct",
      requestType: DeleteProductRequest,
      requestStream: false,
      responseType: DeleteProductResponse,
      responseStream: false,
      options: {},
    },
    listProducts: {
      name: "ListProducts",
      requestType: ListProductRequest,
      requestStream: false,
      responseType: ListProductResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ProductServiceImplementation<CallContextExt = {}> {
  createProduct(
    request: CreateProductRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateProductResponse>>;
  readProduct(
    request: ReadProductRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ReadProductResponse>>;
  updateProduct(
    request: UpdateProductRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdateProductResponse>>;
  deleteProduct(
    request: DeleteProductRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DeleteProductResponse>>;
  listProducts(
    request: ListProductRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListProductResponse>>;
}

export interface ProductServiceClient<CallOptionsExt = {}> {
  createProduct(
    request: DeepPartial<CreateProductRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateProductResponse>;
  readProduct(
    request: DeepPartial<ReadProductRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ReadProductResponse>;
  updateProduct(
    request: DeepPartial<UpdateProductRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdateProductResponse>;
  deleteProduct(
    request: DeepPartial<DeleteProductRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DeleteProductResponse>;
  listProducts(
    request: DeepPartial<ListProductRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListProductResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
