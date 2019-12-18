// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_services_pb = require('../services/services_pb.js');
var signatures_signatures_pb = require('../signatures/signatures_pb.js');
var transactions_transactions_pb = require('../transactions/transactions_pb.js');

function serialize_v2services_EstablishTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.EstablishTokenRequest)) {
    throw new Error('Expected argument of type v2services.EstablishTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_EstablishTokenRequest(buffer_arg) {
  return services_services_pb.EstablishTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_EstablishTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.EstablishTokenResponse)) {
    throw new Error('Expected argument of type v2services.EstablishTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_EstablishTokenResponse(buffer_arg) {
  return services_services_pb.EstablishTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ExportChainRequest(arg) {
  if (!(arg instanceof services_services_pb.ExportChainRequest)) {
    throw new Error('Expected argument of type v2services.ExportChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ExportChainRequest(buffer_arg) {
  return services_services_pb.ExportChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ExportChainResponse(arg) {
  if (!(arg instanceof services_services_pb.ExportChainResponse)) {
    throw new Error('Expected argument of type v2services.ExportChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ExportChainResponse(buffer_arg) {
  return services_services_pb.ExportChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_GenerateChainRequest(arg) {
  if (!(arg instanceof services_services_pb.GenerateChainRequest)) {
    throw new Error('Expected argument of type v2services.GenerateChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_GenerateChainRequest(buffer_arg) {
  return services_services_pb.GenerateChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_GenerateChainResponse(arg) {
  if (!(arg instanceof services_services_pb.GenerateChainResponse)) {
    throw new Error('Expected argument of type v2services.GenerateChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_GenerateChainResponse(buffer_arg) {
  return services_services_pb.GenerateChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_GenerateKeyRequest(arg) {
  if (!(arg instanceof services_services_pb.GenerateKeyRequest)) {
    throw new Error('Expected argument of type v2services.GenerateKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_GenerateKeyRequest(buffer_arg) {
  return services_services_pb.GenerateKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_GenerateKeyResponse(arg) {
  if (!(arg instanceof services_services_pb.GenerateKeyResponse)) {
    throw new Error('Expected argument of type v2services.GenerateKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_GenerateKeyResponse(buffer_arg) {
  return services_services_pb.GenerateKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_GetTipRequest(arg) {
  if (!(arg instanceof services_services_pb.GetTipRequest)) {
    throw new Error('Expected argument of type v2services.GetTipRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_GetTipRequest(buffer_arg) {
  return services_services_pb.GetTipRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_GetTipResponse(arg) {
  if (!(arg instanceof services_services_pb.GetTipResponse)) {
    throw new Error('Expected argument of type v2services.GetTipResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_GetTipResponse(buffer_arg) {
  return services_services_pb.GetTipResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ImportChainRequest(arg) {
  if (!(arg instanceof services_services_pb.ImportChainRequest)) {
    throw new Error('Expected argument of type v2services.ImportChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ImportChainRequest(buffer_arg) {
  return services_services_pb.ImportChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ImportChainResponse(arg) {
  if (!(arg instanceof services_services_pb.ImportChainResponse)) {
    throw new Error('Expected argument of type v2services.ImportChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ImportChainResponse(buffer_arg) {
  return services_services_pb.ImportChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ListChainIdsRequest(arg) {
  if (!(arg instanceof services_services_pb.ListChainIdsRequest)) {
    throw new Error('Expected argument of type v2services.ListChainIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ListChainIdsRequest(buffer_arg) {
  return services_services_pb.ListChainIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ListChainIdsResponse(arg) {
  if (!(arg instanceof services_services_pb.ListChainIdsResponse)) {
    throw new Error('Expected argument of type v2services.ListChainIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ListChainIdsResponse(buffer_arg) {
  return services_services_pb.ListChainIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ListKeysRequest(arg) {
  if (!(arg instanceof services_services_pb.ListKeysRequest)) {
    throw new Error('Expected argument of type v2services.ListKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ListKeysRequest(buffer_arg) {
  return services_services_pb.ListKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ListKeysResponse(arg) {
  if (!(arg instanceof services_services_pb.ListKeysResponse)) {
    throw new Error('Expected argument of type v2services.ListKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ListKeysResponse(buffer_arg) {
  return services_services_pb.ListKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_MintTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.MintTokenRequest)) {
    throw new Error('Expected argument of type v2services.MintTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_MintTokenRequest(buffer_arg) {
  return services_services_pb.MintTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_MintTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.MintTokenResponse)) {
    throw new Error('Expected argument of type v2services.MintTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_MintTokenResponse(buffer_arg) {
  return services_services_pb.MintTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_PlayTransactionsRequest(arg) {
  if (!(arg instanceof services_services_pb.PlayTransactionsRequest)) {
    throw new Error('Expected argument of type v2services.PlayTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_PlayTransactionsRequest(buffer_arg) {
  return services_services_pb.PlayTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_PlayTransactionsResponse(arg) {
  if (!(arg instanceof services_services_pb.PlayTransactionsResponse)) {
    throw new Error('Expected argument of type v2services.PlayTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_PlayTransactionsResponse(buffer_arg) {
  return services_services_pb.PlayTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ReceiveTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.ReceiveTokenRequest)) {
    throw new Error('Expected argument of type v2services.ReceiveTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ReceiveTokenRequest(buffer_arg) {
  return services_services_pb.ReceiveTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ReceiveTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.ReceiveTokenResponse)) {
    throw new Error('Expected argument of type v2services.ReceiveTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ReceiveTokenResponse(buffer_arg) {
  return services_services_pb.ReceiveTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_RegisterWalletRequest(arg) {
  if (!(arg instanceof services_services_pb.RegisterWalletRequest)) {
    throw new Error('Expected argument of type v2services.RegisterWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_RegisterWalletRequest(buffer_arg) {
  return services_services_pb.RegisterWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_RegisterWalletResponse(arg) {
  if (!(arg instanceof services_services_pb.RegisterWalletResponse)) {
    throw new Error('Expected argument of type v2services.RegisterWalletResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_RegisterWalletResponse(buffer_arg) {
  return services_services_pb.RegisterWalletResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ResolveAtRequest(arg) {
  if (!(arg instanceof services_services_pb.ResolveAtRequest)) {
    throw new Error('Expected argument of type v2services.ResolveAtRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ResolveAtRequest(buffer_arg) {
  return services_services_pb.ResolveAtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ResolveRequest(arg) {
  if (!(arg instanceof services_services_pb.ResolveRequest)) {
    throw new Error('Expected argument of type v2services.ResolveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ResolveRequest(buffer_arg) {
  return services_services_pb.ResolveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_ResolveResponse(arg) {
  if (!(arg instanceof services_services_pb.ResolveResponse)) {
    throw new Error('Expected argument of type v2services.ResolveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_ResolveResponse(buffer_arg) {
  return services_services_pb.ResolveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_SendTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.SendTokenRequest)) {
    throw new Error('Expected argument of type v2services.SendTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_SendTokenRequest(buffer_arg) {
  return services_services_pb.SendTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_SendTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.SendTokenResponse)) {
    throw new Error('Expected argument of type v2services.SendTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_SendTokenResponse(buffer_arg) {
  return services_services_pb.SendTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_SetDataRequest(arg) {
  if (!(arg instanceof services_services_pb.SetDataRequest)) {
    throw new Error('Expected argument of type v2services.SetDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_SetDataRequest(buffer_arg) {
  return services_services_pb.SetDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_SetDataResponse(arg) {
  if (!(arg instanceof services_services_pb.SetDataResponse)) {
    throw new Error('Expected argument of type v2services.SetDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_SetDataResponse(buffer_arg) {
  return services_services_pb.SetDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_SetOwnerRequest(arg) {
  if (!(arg instanceof services_services_pb.SetOwnerRequest)) {
    throw new Error('Expected argument of type v2services.SetOwnerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_SetOwnerRequest(buffer_arg) {
  return services_services_pb.SetOwnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v2services_SetOwnerResponse(arg) {
  if (!(arg instanceof services_services_pb.SetOwnerResponse)) {
    throw new Error('Expected argument of type v2services.SetOwnerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v2services_SetOwnerResponse(buffer_arg) {
  return services_services_pb.SetOwnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletRPCServiceService = exports.WalletRPCServiceService = {
  register: {
    path: '/v2services.WalletRPCService/Register',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.RegisterWalletRequest,
    responseType: services_services_pb.RegisterWalletResponse,
    requestSerialize: serialize_v2services_RegisterWalletRequest,
    requestDeserialize: deserialize_v2services_RegisterWalletRequest,
    responseSerialize: serialize_v2services_RegisterWalletResponse,
    responseDeserialize: deserialize_v2services_RegisterWalletResponse,
  },
  generateKey: {
    path: '/v2services.WalletRPCService/GenerateKey',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GenerateKeyRequest,
    responseType: services_services_pb.GenerateKeyResponse,
    requestSerialize: serialize_v2services_GenerateKeyRequest,
    requestDeserialize: deserialize_v2services_GenerateKeyRequest,
    responseSerialize: serialize_v2services_GenerateKeyResponse,
    responseDeserialize: deserialize_v2services_GenerateKeyResponse,
  },
  createChainTree: {
    path: '/v2services.WalletRPCService/CreateChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GenerateChainRequest,
    responseType: services_services_pb.GenerateChainResponse,
    requestSerialize: serialize_v2services_GenerateChainRequest,
    requestDeserialize: deserialize_v2services_GenerateChainRequest,
    responseSerialize: serialize_v2services_GenerateChainResponse,
    responseDeserialize: deserialize_v2services_GenerateChainResponse,
  },
  exportChainTree: {
    path: '/v2services.WalletRPCService/ExportChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ExportChainRequest,
    responseType: services_services_pb.ExportChainResponse,
    requestSerialize: serialize_v2services_ExportChainRequest,
    requestDeserialize: deserialize_v2services_ExportChainRequest,
    responseSerialize: serialize_v2services_ExportChainResponse,
    responseDeserialize: deserialize_v2services_ExportChainResponse,
  },
  importChainTree: {
    path: '/v2services.WalletRPCService/ImportChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ImportChainRequest,
    responseType: services_services_pb.ImportChainResponse,
    requestSerialize: serialize_v2services_ImportChainRequest,
    requestDeserialize: deserialize_v2services_ImportChainRequest,
    responseSerialize: serialize_v2services_ImportChainResponse,
    responseDeserialize: deserialize_v2services_ImportChainResponse,
  },
  getTip: {
    path: '/v2services.WalletRPCService/GetTip',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GetTipRequest,
    responseType: services_services_pb.GetTipResponse,
    requestSerialize: serialize_v2services_GetTipRequest,
    requestDeserialize: deserialize_v2services_GetTipRequest,
    responseSerialize: serialize_v2services_GetTipResponse,
    responseDeserialize: deserialize_v2services_GetTipResponse,
  },
  listChainIds: {
    path: '/v2services.WalletRPCService/ListChainIds',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ListChainIdsRequest,
    responseType: services_services_pb.ListChainIdsResponse,
    requestSerialize: serialize_v2services_ListChainIdsRequest,
    requestDeserialize: deserialize_v2services_ListChainIdsRequest,
    responseSerialize: serialize_v2services_ListChainIdsResponse,
    responseDeserialize: deserialize_v2services_ListChainIdsResponse,
  },
  listKeys: {
    path: '/v2services.WalletRPCService/ListKeys',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ListKeysRequest,
    responseType: services_services_pb.ListKeysResponse,
    requestSerialize: serialize_v2services_ListKeysRequest,
    requestDeserialize: deserialize_v2services_ListKeysRequest,
    responseSerialize: serialize_v2services_ListKeysResponse,
    responseDeserialize: deserialize_v2services_ListKeysResponse,
  },
  setOwner: {
    path: '/v2services.WalletRPCService/SetOwner',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SetOwnerRequest,
    responseType: services_services_pb.SetOwnerResponse,
    requestSerialize: serialize_v2services_SetOwnerRequest,
    requestDeserialize: deserialize_v2services_SetOwnerRequest,
    responseSerialize: serialize_v2services_SetOwnerResponse,
    responseDeserialize: deserialize_v2services_SetOwnerResponse,
  },
  setData: {
    path: '/v2services.WalletRPCService/SetData',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SetDataRequest,
    responseType: services_services_pb.SetDataResponse,
    requestSerialize: serialize_v2services_SetDataRequest,
    requestDeserialize: deserialize_v2services_SetDataRequest,
    responseSerialize: serialize_v2services_SetDataResponse,
    responseDeserialize: deserialize_v2services_SetDataResponse,
  },
  resolve: {
    path: '/v2services.WalletRPCService/Resolve',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ResolveRequest,
    responseType: services_services_pb.ResolveResponse,
    requestSerialize: serialize_v2services_ResolveRequest,
    requestDeserialize: deserialize_v2services_ResolveRequest,
    responseSerialize: serialize_v2services_ResolveResponse,
    responseDeserialize: deserialize_v2services_ResolveResponse,
  },
  resolveAt: {
    path: '/v2services.WalletRPCService/ResolveAt',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ResolveAtRequest,
    responseType: services_services_pb.ResolveResponse,
    requestSerialize: serialize_v2services_ResolveAtRequest,
    requestDeserialize: deserialize_v2services_ResolveAtRequest,
    responseSerialize: serialize_v2services_ResolveResponse,
    responseDeserialize: deserialize_v2services_ResolveResponse,
  },
  establishToken: {
    path: '/v2services.WalletRPCService/EstablishToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.EstablishTokenRequest,
    responseType: services_services_pb.EstablishTokenResponse,
    requestSerialize: serialize_v2services_EstablishTokenRequest,
    requestDeserialize: deserialize_v2services_EstablishTokenRequest,
    responseSerialize: serialize_v2services_EstablishTokenResponse,
    responseDeserialize: deserialize_v2services_EstablishTokenResponse,
  },
  mintToken: {
    path: '/v2services.WalletRPCService/MintToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.MintTokenRequest,
    responseType: services_services_pb.MintTokenResponse,
    requestSerialize: serialize_v2services_MintTokenRequest,
    requestDeserialize: deserialize_v2services_MintTokenRequest,
    responseSerialize: serialize_v2services_MintTokenResponse,
    responseDeserialize: deserialize_v2services_MintTokenResponse,
  },
  sendToken: {
    path: '/v2services.WalletRPCService/SendToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SendTokenRequest,
    responseType: services_services_pb.SendTokenResponse,
    requestSerialize: serialize_v2services_SendTokenRequest,
    requestDeserialize: deserialize_v2services_SendTokenRequest,
    responseSerialize: serialize_v2services_SendTokenResponse,
    responseDeserialize: deserialize_v2services_SendTokenResponse,
  },
  receiveToken: {
    path: '/v2services.WalletRPCService/ReceiveToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ReceiveTokenRequest,
    responseType: services_services_pb.ReceiveTokenResponse,
    requestSerialize: serialize_v2services_ReceiveTokenRequest,
    requestDeserialize: deserialize_v2services_ReceiveTokenRequest,
    responseSerialize: serialize_v2services_ReceiveTokenResponse,
    responseDeserialize: deserialize_v2services_ReceiveTokenResponse,
  },
  playTransactions: {
    path: '/v2services.WalletRPCService/PlayTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.PlayTransactionsRequest,
    responseType: services_services_pb.PlayTransactionsResponse,
    requestSerialize: serialize_v2services_PlayTransactionsRequest,
    requestDeserialize: deserialize_v2services_PlayTransactionsRequest,
    responseSerialize: serialize_v2services_PlayTransactionsResponse,
    responseDeserialize: deserialize_v2services_PlayTransactionsResponse,
  },
};

exports.WalletRPCServiceClient = grpc.makeGenericClientConstructor(WalletRPCServiceService);
