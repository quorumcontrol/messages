// package: services
// file: services/services.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as services_services_pb from "../services/services_pb";
import * as signatures_signatures_pb from "../signatures/signatures_pb";
import * as transactions_transactions_pb from "../transactions/transactions_pb";

interface IWalletRPCServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    register: IWalletRPCServiceService_IRegister;
    generateKey: IWalletRPCServiceService_IGenerateKey;
    createChainTree: IWalletRPCServiceService_ICreateChainTree;
    exportChainTree: IWalletRPCServiceService_IExportChainTree;
    importChainTree: IWalletRPCServiceService_IImportChainTree;
    getTip: IWalletRPCServiceService_IGetTip;
    listChainIds: IWalletRPCServiceService_IListChainIds;
    listKeys: IWalletRPCServiceService_IListKeys;
    setOwner: IWalletRPCServiceService_ISetOwner;
    setData: IWalletRPCServiceService_ISetData;
    resolve: IWalletRPCServiceService_IResolve;
    resolveAt: IWalletRPCServiceService_IResolveAt;
    establishToken: IWalletRPCServiceService_IEstablishToken;
    mintToken: IWalletRPCServiceService_IMintToken;
    sendToken: IWalletRPCServiceService_ISendToken;
    receiveToken: IWalletRPCServiceService_IReceiveToken;
    playTransactions: IWalletRPCServiceService_IPlayTransactions;
}

interface IWalletRPCServiceService_IRegister extends grpc.MethodDefinition<services_services_pb.RegisterWalletRequest, services_services_pb.RegisterWalletResponse> {
    path: string; // "/services.WalletRPCService/Register"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.RegisterWalletRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.RegisterWalletRequest>;
    responseSerialize: grpc.serialize<services_services_pb.RegisterWalletResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.RegisterWalletResponse>;
}
interface IWalletRPCServiceService_IGenerateKey extends grpc.MethodDefinition<services_services_pb.GenerateKeyRequest, services_services_pb.GenerateKeyResponse> {
    path: string; // "/services.WalletRPCService/GenerateKey"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.GenerateKeyRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.GenerateKeyRequest>;
    responseSerialize: grpc.serialize<services_services_pb.GenerateKeyResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.GenerateKeyResponse>;
}
interface IWalletRPCServiceService_ICreateChainTree extends grpc.MethodDefinition<services_services_pb.GenerateChainRequest, services_services_pb.GenerateChainResponse> {
    path: string; // "/services.WalletRPCService/CreateChainTree"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.GenerateChainRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.GenerateChainRequest>;
    responseSerialize: grpc.serialize<services_services_pb.GenerateChainResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.GenerateChainResponse>;
}
interface IWalletRPCServiceService_IExportChainTree extends grpc.MethodDefinition<services_services_pb.ExportChainRequest, services_services_pb.ExportChainResponse> {
    path: string; // "/services.WalletRPCService/ExportChainTree"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.ExportChainRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.ExportChainRequest>;
    responseSerialize: grpc.serialize<services_services_pb.ExportChainResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.ExportChainResponse>;
}
interface IWalletRPCServiceService_IImportChainTree extends grpc.MethodDefinition<services_services_pb.ImportChainRequest, services_services_pb.ImportChainResponse> {
    path: string; // "/services.WalletRPCService/ImportChainTree"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.ImportChainRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.ImportChainRequest>;
    responseSerialize: grpc.serialize<services_services_pb.ImportChainResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.ImportChainResponse>;
}
interface IWalletRPCServiceService_IGetTip extends grpc.MethodDefinition<services_services_pb.GetTipRequest, services_services_pb.GetTipResponse> {
    path: string; // "/services.WalletRPCService/GetTip"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.GetTipRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.GetTipRequest>;
    responseSerialize: grpc.serialize<services_services_pb.GetTipResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.GetTipResponse>;
}
interface IWalletRPCServiceService_IListChainIds extends grpc.MethodDefinition<services_services_pb.ListChainIdsRequest, services_services_pb.ListChainIdsResponse> {
    path: string; // "/services.WalletRPCService/ListChainIds"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.ListChainIdsRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.ListChainIdsRequest>;
    responseSerialize: grpc.serialize<services_services_pb.ListChainIdsResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.ListChainIdsResponse>;
}
interface IWalletRPCServiceService_IListKeys extends grpc.MethodDefinition<services_services_pb.ListKeysRequest, services_services_pb.ListKeysResponse> {
    path: string; // "/services.WalletRPCService/ListKeys"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.ListKeysRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.ListKeysRequest>;
    responseSerialize: grpc.serialize<services_services_pb.ListKeysResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.ListKeysResponse>;
}
interface IWalletRPCServiceService_ISetOwner extends grpc.MethodDefinition<services_services_pb.SetOwnerRequest, services_services_pb.SetOwnerResponse> {
    path: string; // "/services.WalletRPCService/SetOwner"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.SetOwnerRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.SetOwnerRequest>;
    responseSerialize: grpc.serialize<services_services_pb.SetOwnerResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.SetOwnerResponse>;
}
interface IWalletRPCServiceService_ISetData extends grpc.MethodDefinition<services_services_pb.SetDataRequest, services_services_pb.SetDataResponse> {
    path: string; // "/services.WalletRPCService/SetData"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.SetDataRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.SetDataRequest>;
    responseSerialize: grpc.serialize<services_services_pb.SetDataResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.SetDataResponse>;
}
interface IWalletRPCServiceService_IResolve extends grpc.MethodDefinition<services_services_pb.ResolveRequest, services_services_pb.ResolveResponse> {
    path: string; // "/services.WalletRPCService/Resolve"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.ResolveRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.ResolveRequest>;
    responseSerialize: grpc.serialize<services_services_pb.ResolveResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.ResolveResponse>;
}
interface IWalletRPCServiceService_IResolveAt extends grpc.MethodDefinition<services_services_pb.ResolveAtRequest, services_services_pb.ResolveResponse> {
    path: string; // "/services.WalletRPCService/ResolveAt"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.ResolveAtRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.ResolveAtRequest>;
    responseSerialize: grpc.serialize<services_services_pb.ResolveResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.ResolveResponse>;
}
interface IWalletRPCServiceService_IEstablishToken extends grpc.MethodDefinition<services_services_pb.EstablishTokenRequest, services_services_pb.EstablishTokenResponse> {
    path: string; // "/services.WalletRPCService/EstablishToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.EstablishTokenRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.EstablishTokenRequest>;
    responseSerialize: grpc.serialize<services_services_pb.EstablishTokenResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.EstablishTokenResponse>;
}
interface IWalletRPCServiceService_IMintToken extends grpc.MethodDefinition<services_services_pb.MintTokenRequest, services_services_pb.MintTokenResponse> {
    path: string; // "/services.WalletRPCService/MintToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.MintTokenRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.MintTokenRequest>;
    responseSerialize: grpc.serialize<services_services_pb.MintTokenResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.MintTokenResponse>;
}
interface IWalletRPCServiceService_ISendToken extends grpc.MethodDefinition<services_services_pb.SendTokenRequest, services_services_pb.SendTokenResponse> {
    path: string; // "/services.WalletRPCService/SendToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.SendTokenRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.SendTokenRequest>;
    responseSerialize: grpc.serialize<services_services_pb.SendTokenResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.SendTokenResponse>;
}
interface IWalletRPCServiceService_IReceiveToken extends grpc.MethodDefinition<services_services_pb.ReceiveTokenRequest, services_services_pb.ReceiveTokenResponse> {
    path: string; // "/services.WalletRPCService/ReceiveToken"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.ReceiveTokenRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.ReceiveTokenRequest>;
    responseSerialize: grpc.serialize<services_services_pb.ReceiveTokenResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.ReceiveTokenResponse>;
}
interface IWalletRPCServiceService_IPlayTransactions extends grpc.MethodDefinition<services_services_pb.PlayTransactionsRequest, services_services_pb.PlayTransactionsResponse> {
    path: string; // "/services.WalletRPCService/PlayTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<services_services_pb.PlayTransactionsRequest>;
    requestDeserialize: grpc.deserialize<services_services_pb.PlayTransactionsRequest>;
    responseSerialize: grpc.serialize<services_services_pb.PlayTransactionsResponse>;
    responseDeserialize: grpc.deserialize<services_services_pb.PlayTransactionsResponse>;
}

export const WalletRPCServiceService: IWalletRPCServiceService;

export interface IWalletRPCServiceServer {
    register: grpc.handleUnaryCall<services_services_pb.RegisterWalletRequest, services_services_pb.RegisterWalletResponse>;
    generateKey: grpc.handleUnaryCall<services_services_pb.GenerateKeyRequest, services_services_pb.GenerateKeyResponse>;
    createChainTree: grpc.handleUnaryCall<services_services_pb.GenerateChainRequest, services_services_pb.GenerateChainResponse>;
    exportChainTree: grpc.handleUnaryCall<services_services_pb.ExportChainRequest, services_services_pb.ExportChainResponse>;
    importChainTree: grpc.handleUnaryCall<services_services_pb.ImportChainRequest, services_services_pb.ImportChainResponse>;
    getTip: grpc.handleUnaryCall<services_services_pb.GetTipRequest, services_services_pb.GetTipResponse>;
    listChainIds: grpc.handleUnaryCall<services_services_pb.ListChainIdsRequest, services_services_pb.ListChainIdsResponse>;
    listKeys: grpc.handleUnaryCall<services_services_pb.ListKeysRequest, services_services_pb.ListKeysResponse>;
    setOwner: grpc.handleUnaryCall<services_services_pb.SetOwnerRequest, services_services_pb.SetOwnerResponse>;
    setData: grpc.handleUnaryCall<services_services_pb.SetDataRequest, services_services_pb.SetDataResponse>;
    resolve: grpc.handleUnaryCall<services_services_pb.ResolveRequest, services_services_pb.ResolveResponse>;
    resolveAt: grpc.handleUnaryCall<services_services_pb.ResolveAtRequest, services_services_pb.ResolveResponse>;
    establishToken: grpc.handleUnaryCall<services_services_pb.EstablishTokenRequest, services_services_pb.EstablishTokenResponse>;
    mintToken: grpc.handleUnaryCall<services_services_pb.MintTokenRequest, services_services_pb.MintTokenResponse>;
    sendToken: grpc.handleUnaryCall<services_services_pb.SendTokenRequest, services_services_pb.SendTokenResponse>;
    receiveToken: grpc.handleUnaryCall<services_services_pb.ReceiveTokenRequest, services_services_pb.ReceiveTokenResponse>;
    playTransactions: grpc.handleUnaryCall<services_services_pb.PlayTransactionsRequest, services_services_pb.PlayTransactionsResponse>;
}

export interface IWalletRPCServiceClient {
    register(request: services_services_pb.RegisterWalletRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.RegisterWalletResponse) => void): grpc.ClientUnaryCall;
    register(request: services_services_pb.RegisterWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.RegisterWalletResponse) => void): grpc.ClientUnaryCall;
    register(request: services_services_pb.RegisterWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.RegisterWalletResponse) => void): grpc.ClientUnaryCall;
    generateKey(request: services_services_pb.GenerateKeyRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateKeyResponse) => void): grpc.ClientUnaryCall;
    generateKey(request: services_services_pb.GenerateKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateKeyResponse) => void): grpc.ClientUnaryCall;
    generateKey(request: services_services_pb.GenerateKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateKeyResponse) => void): grpc.ClientUnaryCall;
    createChainTree(request: services_services_pb.GenerateChainRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateChainResponse) => void): grpc.ClientUnaryCall;
    createChainTree(request: services_services_pb.GenerateChainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateChainResponse) => void): grpc.ClientUnaryCall;
    createChainTree(request: services_services_pb.GenerateChainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateChainResponse) => void): grpc.ClientUnaryCall;
    exportChainTree(request: services_services_pb.ExportChainRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ExportChainResponse) => void): grpc.ClientUnaryCall;
    exportChainTree(request: services_services_pb.ExportChainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ExportChainResponse) => void): grpc.ClientUnaryCall;
    exportChainTree(request: services_services_pb.ExportChainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ExportChainResponse) => void): grpc.ClientUnaryCall;
    importChainTree(request: services_services_pb.ImportChainRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ImportChainResponse) => void): grpc.ClientUnaryCall;
    importChainTree(request: services_services_pb.ImportChainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ImportChainResponse) => void): grpc.ClientUnaryCall;
    importChainTree(request: services_services_pb.ImportChainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ImportChainResponse) => void): grpc.ClientUnaryCall;
    getTip(request: services_services_pb.GetTipRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.GetTipResponse) => void): grpc.ClientUnaryCall;
    getTip(request: services_services_pb.GetTipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.GetTipResponse) => void): grpc.ClientUnaryCall;
    getTip(request: services_services_pb.GetTipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.GetTipResponse) => void): grpc.ClientUnaryCall;
    listChainIds(request: services_services_pb.ListChainIdsRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListChainIdsResponse) => void): grpc.ClientUnaryCall;
    listChainIds(request: services_services_pb.ListChainIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListChainIdsResponse) => void): grpc.ClientUnaryCall;
    listChainIds(request: services_services_pb.ListChainIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListChainIdsResponse) => void): grpc.ClientUnaryCall;
    listKeys(request: services_services_pb.ListKeysRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    listKeys(request: services_services_pb.ListKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    listKeys(request: services_services_pb.ListKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    setOwner(request: services_services_pb.SetOwnerRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetOwnerResponse) => void): grpc.ClientUnaryCall;
    setOwner(request: services_services_pb.SetOwnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetOwnerResponse) => void): grpc.ClientUnaryCall;
    setOwner(request: services_services_pb.SetOwnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetOwnerResponse) => void): grpc.ClientUnaryCall;
    setData(request: services_services_pb.SetDataRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetDataResponse) => void): grpc.ClientUnaryCall;
    setData(request: services_services_pb.SetDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetDataResponse) => void): grpc.ClientUnaryCall;
    setData(request: services_services_pb.SetDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetDataResponse) => void): grpc.ClientUnaryCall;
    resolve(request: services_services_pb.ResolveRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    resolve(request: services_services_pb.ResolveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    resolve(request: services_services_pb.ResolveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    resolveAt(request: services_services_pb.ResolveAtRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    resolveAt(request: services_services_pb.ResolveAtRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    resolveAt(request: services_services_pb.ResolveAtRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    establishToken(request: services_services_pb.EstablishTokenRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.EstablishTokenResponse) => void): grpc.ClientUnaryCall;
    establishToken(request: services_services_pb.EstablishTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.EstablishTokenResponse) => void): grpc.ClientUnaryCall;
    establishToken(request: services_services_pb.EstablishTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.EstablishTokenResponse) => void): grpc.ClientUnaryCall;
    mintToken(request: services_services_pb.MintTokenRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.MintTokenResponse) => void): grpc.ClientUnaryCall;
    mintToken(request: services_services_pb.MintTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.MintTokenResponse) => void): grpc.ClientUnaryCall;
    mintToken(request: services_services_pb.MintTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.MintTokenResponse) => void): grpc.ClientUnaryCall;
    sendToken(request: services_services_pb.SendTokenRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.SendTokenResponse) => void): grpc.ClientUnaryCall;
    sendToken(request: services_services_pb.SendTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.SendTokenResponse) => void): grpc.ClientUnaryCall;
    sendToken(request: services_services_pb.SendTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.SendTokenResponse) => void): grpc.ClientUnaryCall;
    receiveToken(request: services_services_pb.ReceiveTokenRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ReceiveTokenResponse) => void): grpc.ClientUnaryCall;
    receiveToken(request: services_services_pb.ReceiveTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ReceiveTokenResponse) => void): grpc.ClientUnaryCall;
    receiveToken(request: services_services_pb.ReceiveTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ReceiveTokenResponse) => void): grpc.ClientUnaryCall;
    playTransactions(request: services_services_pb.PlayTransactionsRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.PlayTransactionsResponse) => void): grpc.ClientUnaryCall;
    playTransactions(request: services_services_pb.PlayTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.PlayTransactionsResponse) => void): grpc.ClientUnaryCall;
    playTransactions(request: services_services_pb.PlayTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.PlayTransactionsResponse) => void): grpc.ClientUnaryCall;
}

export class WalletRPCServiceClient extends grpc.Client implements IWalletRPCServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public register(request: services_services_pb.RegisterWalletRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.RegisterWalletResponse) => void): grpc.ClientUnaryCall;
    public register(request: services_services_pb.RegisterWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.RegisterWalletResponse) => void): grpc.ClientUnaryCall;
    public register(request: services_services_pb.RegisterWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.RegisterWalletResponse) => void): grpc.ClientUnaryCall;
    public generateKey(request: services_services_pb.GenerateKeyRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateKeyResponse) => void): grpc.ClientUnaryCall;
    public generateKey(request: services_services_pb.GenerateKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateKeyResponse) => void): grpc.ClientUnaryCall;
    public generateKey(request: services_services_pb.GenerateKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateKeyResponse) => void): grpc.ClientUnaryCall;
    public createChainTree(request: services_services_pb.GenerateChainRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateChainResponse) => void): grpc.ClientUnaryCall;
    public createChainTree(request: services_services_pb.GenerateChainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateChainResponse) => void): grpc.ClientUnaryCall;
    public createChainTree(request: services_services_pb.GenerateChainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.GenerateChainResponse) => void): grpc.ClientUnaryCall;
    public exportChainTree(request: services_services_pb.ExportChainRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ExportChainResponse) => void): grpc.ClientUnaryCall;
    public exportChainTree(request: services_services_pb.ExportChainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ExportChainResponse) => void): grpc.ClientUnaryCall;
    public exportChainTree(request: services_services_pb.ExportChainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ExportChainResponse) => void): grpc.ClientUnaryCall;
    public importChainTree(request: services_services_pb.ImportChainRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ImportChainResponse) => void): grpc.ClientUnaryCall;
    public importChainTree(request: services_services_pb.ImportChainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ImportChainResponse) => void): grpc.ClientUnaryCall;
    public importChainTree(request: services_services_pb.ImportChainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ImportChainResponse) => void): grpc.ClientUnaryCall;
    public getTip(request: services_services_pb.GetTipRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.GetTipResponse) => void): grpc.ClientUnaryCall;
    public getTip(request: services_services_pb.GetTipRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.GetTipResponse) => void): grpc.ClientUnaryCall;
    public getTip(request: services_services_pb.GetTipRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.GetTipResponse) => void): grpc.ClientUnaryCall;
    public listChainIds(request: services_services_pb.ListChainIdsRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListChainIdsResponse) => void): grpc.ClientUnaryCall;
    public listChainIds(request: services_services_pb.ListChainIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListChainIdsResponse) => void): grpc.ClientUnaryCall;
    public listChainIds(request: services_services_pb.ListChainIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListChainIdsResponse) => void): grpc.ClientUnaryCall;
    public listKeys(request: services_services_pb.ListKeysRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    public listKeys(request: services_services_pb.ListKeysRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    public listKeys(request: services_services_pb.ListKeysRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ListKeysResponse) => void): grpc.ClientUnaryCall;
    public setOwner(request: services_services_pb.SetOwnerRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetOwnerResponse) => void): grpc.ClientUnaryCall;
    public setOwner(request: services_services_pb.SetOwnerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetOwnerResponse) => void): grpc.ClientUnaryCall;
    public setOwner(request: services_services_pb.SetOwnerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetOwnerResponse) => void): grpc.ClientUnaryCall;
    public setData(request: services_services_pb.SetDataRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetDataResponse) => void): grpc.ClientUnaryCall;
    public setData(request: services_services_pb.SetDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetDataResponse) => void): grpc.ClientUnaryCall;
    public setData(request: services_services_pb.SetDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.SetDataResponse) => void): grpc.ClientUnaryCall;
    public resolve(request: services_services_pb.ResolveRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    public resolve(request: services_services_pb.ResolveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    public resolve(request: services_services_pb.ResolveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    public resolveAt(request: services_services_pb.ResolveAtRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    public resolveAt(request: services_services_pb.ResolveAtRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    public resolveAt(request: services_services_pb.ResolveAtRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ResolveResponse) => void): grpc.ClientUnaryCall;
    public establishToken(request: services_services_pb.EstablishTokenRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.EstablishTokenResponse) => void): grpc.ClientUnaryCall;
    public establishToken(request: services_services_pb.EstablishTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.EstablishTokenResponse) => void): grpc.ClientUnaryCall;
    public establishToken(request: services_services_pb.EstablishTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.EstablishTokenResponse) => void): grpc.ClientUnaryCall;
    public mintToken(request: services_services_pb.MintTokenRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.MintTokenResponse) => void): grpc.ClientUnaryCall;
    public mintToken(request: services_services_pb.MintTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.MintTokenResponse) => void): grpc.ClientUnaryCall;
    public mintToken(request: services_services_pb.MintTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.MintTokenResponse) => void): grpc.ClientUnaryCall;
    public sendToken(request: services_services_pb.SendTokenRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.SendTokenResponse) => void): grpc.ClientUnaryCall;
    public sendToken(request: services_services_pb.SendTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.SendTokenResponse) => void): grpc.ClientUnaryCall;
    public sendToken(request: services_services_pb.SendTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.SendTokenResponse) => void): grpc.ClientUnaryCall;
    public receiveToken(request: services_services_pb.ReceiveTokenRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.ReceiveTokenResponse) => void): grpc.ClientUnaryCall;
    public receiveToken(request: services_services_pb.ReceiveTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.ReceiveTokenResponse) => void): grpc.ClientUnaryCall;
    public receiveToken(request: services_services_pb.ReceiveTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.ReceiveTokenResponse) => void): grpc.ClientUnaryCall;
    public playTransactions(request: services_services_pb.PlayTransactionsRequest, callback: (error: grpc.ServiceError | null, response: services_services_pb.PlayTransactionsResponse) => void): grpc.ClientUnaryCall;
    public playTransactions(request: services_services_pb.PlayTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_services_pb.PlayTransactionsResponse) => void): grpc.ClientUnaryCall;
    public playTransactions(request: services_services_pb.PlayTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_services_pb.PlayTransactionsResponse) => void): grpc.ClientUnaryCall;
}
