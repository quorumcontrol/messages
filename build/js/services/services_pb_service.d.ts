// package: services
// file: services/services.proto

import * as services_services_pb from "../services/services_pb";
import {grpc} from "@improbable-eng/grpc-web";

type WalletRPCServiceRegister = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.RegisterWalletRequest;
  readonly responseType: typeof services_services_pb.RegisterWalletResponse;
};

type WalletRPCServiceGenerateKey = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.GenerateKeyRequest;
  readonly responseType: typeof services_services_pb.GenerateKeyResponse;
};

type WalletRPCServiceCreateChainTree = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.GenerateChainRequest;
  readonly responseType: typeof services_services_pb.GenerateChainResponse;
};

type WalletRPCServiceExportChainTree = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.ExportChainRequest;
  readonly responseType: typeof services_services_pb.ExportChainResponse;
};

type WalletRPCServiceImportChainTree = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.ImportChainRequest;
  readonly responseType: typeof services_services_pb.ImportChainResponse;
};

type WalletRPCServiceGetTip = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.GetTipRequest;
  readonly responseType: typeof services_services_pb.GetTipResponse;
};

type WalletRPCServiceListChainIds = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.ListChainIdsRequest;
  readonly responseType: typeof services_services_pb.ListChainIdsResponse;
};

type WalletRPCServiceListKeys = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.ListKeysRequest;
  readonly responseType: typeof services_services_pb.ListKeysResponse;
};

type WalletRPCServiceSetOwner = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.SetOwnerRequest;
  readonly responseType: typeof services_services_pb.SetOwnerResponse;
};

type WalletRPCServiceSetData = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.SetDataRequest;
  readonly responseType: typeof services_services_pb.SetDataResponse;
};

type WalletRPCServiceResolve = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.ResolveRequest;
  readonly responseType: typeof services_services_pb.ResolveResponse;
};

type WalletRPCServiceResolveAt = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.ResolveAtRequest;
  readonly responseType: typeof services_services_pb.ResolveResponse;
};

type WalletRPCServiceEstablishToken = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.EstablishTokenRequest;
  readonly responseType: typeof services_services_pb.EstablishTokenResponse;
};

type WalletRPCServiceMintToken = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.MintTokenRequest;
  readonly responseType: typeof services_services_pb.MintTokenResponse;
};

type WalletRPCServiceSendToken = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.SendTokenRequest;
  readonly responseType: typeof services_services_pb.SendTokenResponse;
};

type WalletRPCServiceReceiveToken = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.ReceiveTokenRequest;
  readonly responseType: typeof services_services_pb.ReceiveTokenResponse;
};

type WalletRPCServicePlayTransactions = {
  readonly methodName: string;
  readonly service: typeof WalletRPCService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof services_services_pb.PlayTransactionsRequest;
  readonly responseType: typeof services_services_pb.PlayTransactionsResponse;
};

export class WalletRPCService {
  static readonly serviceName: string;
  static readonly Register: WalletRPCServiceRegister;
  static readonly GenerateKey: WalletRPCServiceGenerateKey;
  static readonly CreateChainTree: WalletRPCServiceCreateChainTree;
  static readonly ExportChainTree: WalletRPCServiceExportChainTree;
  static readonly ImportChainTree: WalletRPCServiceImportChainTree;
  static readonly GetTip: WalletRPCServiceGetTip;
  static readonly ListChainIds: WalletRPCServiceListChainIds;
  static readonly ListKeys: WalletRPCServiceListKeys;
  static readonly SetOwner: WalletRPCServiceSetOwner;
  static readonly SetData: WalletRPCServiceSetData;
  static readonly Resolve: WalletRPCServiceResolve;
  static readonly ResolveAt: WalletRPCServiceResolveAt;
  static readonly EstablishToken: WalletRPCServiceEstablishToken;
  static readonly MintToken: WalletRPCServiceMintToken;
  static readonly SendToken: WalletRPCServiceSendToken;
  static readonly ReceiveToken: WalletRPCServiceReceiveToken;
  static readonly PlayTransactions: WalletRPCServicePlayTransactions;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class WalletRPCServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  register(
    requestMessage: services_services_pb.RegisterWalletRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.RegisterWalletResponse|null) => void
  ): UnaryResponse;
  register(
    requestMessage: services_services_pb.RegisterWalletRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.RegisterWalletResponse|null) => void
  ): UnaryResponse;
  generateKey(
    requestMessage: services_services_pb.GenerateKeyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.GenerateKeyResponse|null) => void
  ): UnaryResponse;
  generateKey(
    requestMessage: services_services_pb.GenerateKeyRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.GenerateKeyResponse|null) => void
  ): UnaryResponse;
  createChainTree(
    requestMessage: services_services_pb.GenerateChainRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.GenerateChainResponse|null) => void
  ): UnaryResponse;
  createChainTree(
    requestMessage: services_services_pb.GenerateChainRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.GenerateChainResponse|null) => void
  ): UnaryResponse;
  exportChainTree(
    requestMessage: services_services_pb.ExportChainRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ExportChainResponse|null) => void
  ): UnaryResponse;
  exportChainTree(
    requestMessage: services_services_pb.ExportChainRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ExportChainResponse|null) => void
  ): UnaryResponse;
  importChainTree(
    requestMessage: services_services_pb.ImportChainRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ImportChainResponse|null) => void
  ): UnaryResponse;
  importChainTree(
    requestMessage: services_services_pb.ImportChainRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ImportChainResponse|null) => void
  ): UnaryResponse;
  getTip(
    requestMessage: services_services_pb.GetTipRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.GetTipResponse|null) => void
  ): UnaryResponse;
  getTip(
    requestMessage: services_services_pb.GetTipRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.GetTipResponse|null) => void
  ): UnaryResponse;
  listChainIds(
    requestMessage: services_services_pb.ListChainIdsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ListChainIdsResponse|null) => void
  ): UnaryResponse;
  listChainIds(
    requestMessage: services_services_pb.ListChainIdsRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ListChainIdsResponse|null) => void
  ): UnaryResponse;
  listKeys(
    requestMessage: services_services_pb.ListKeysRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ListKeysResponse|null) => void
  ): UnaryResponse;
  listKeys(
    requestMessage: services_services_pb.ListKeysRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ListKeysResponse|null) => void
  ): UnaryResponse;
  setOwner(
    requestMessage: services_services_pb.SetOwnerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.SetOwnerResponse|null) => void
  ): UnaryResponse;
  setOwner(
    requestMessage: services_services_pb.SetOwnerRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.SetOwnerResponse|null) => void
  ): UnaryResponse;
  setData(
    requestMessage: services_services_pb.SetDataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.SetDataResponse|null) => void
  ): UnaryResponse;
  setData(
    requestMessage: services_services_pb.SetDataRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.SetDataResponse|null) => void
  ): UnaryResponse;
  resolve(
    requestMessage: services_services_pb.ResolveRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ResolveResponse|null) => void
  ): UnaryResponse;
  resolve(
    requestMessage: services_services_pb.ResolveRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ResolveResponse|null) => void
  ): UnaryResponse;
  resolveAt(
    requestMessage: services_services_pb.ResolveAtRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ResolveResponse|null) => void
  ): UnaryResponse;
  resolveAt(
    requestMessage: services_services_pb.ResolveAtRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ResolveResponse|null) => void
  ): UnaryResponse;
  establishToken(
    requestMessage: services_services_pb.EstablishTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.EstablishTokenResponse|null) => void
  ): UnaryResponse;
  establishToken(
    requestMessage: services_services_pb.EstablishTokenRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.EstablishTokenResponse|null) => void
  ): UnaryResponse;
  mintToken(
    requestMessage: services_services_pb.MintTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.MintTokenResponse|null) => void
  ): UnaryResponse;
  mintToken(
    requestMessage: services_services_pb.MintTokenRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.MintTokenResponse|null) => void
  ): UnaryResponse;
  sendToken(
    requestMessage: services_services_pb.SendTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.SendTokenResponse|null) => void
  ): UnaryResponse;
  sendToken(
    requestMessage: services_services_pb.SendTokenRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.SendTokenResponse|null) => void
  ): UnaryResponse;
  receiveToken(
    requestMessage: services_services_pb.ReceiveTokenRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ReceiveTokenResponse|null) => void
  ): UnaryResponse;
  receiveToken(
    requestMessage: services_services_pb.ReceiveTokenRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.ReceiveTokenResponse|null) => void
  ): UnaryResponse;
  playTransactions(
    requestMessage: services_services_pb.PlayTransactionsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.PlayTransactionsResponse|null) => void
  ): UnaryResponse;
  playTransactions(
    requestMessage: services_services_pb.PlayTransactionsRequest,
    callback: (error: ServiceError|null, responseMessage: services_services_pb.PlayTransactionsResponse|null) => void
  ): UnaryResponse;
}

