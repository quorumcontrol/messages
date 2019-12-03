// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_services_pb = require('../services/services_pb.js');
var signatures_signatures_pb = require('../signatures/signatures_pb.js');
var transactions_transactions_pb = require('../transactions/transactions_pb.js');

function serialize_v1services_EstablishTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.EstablishTokenRequest)) {
    throw new Error('Expected argument of type v1services.EstablishTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_EstablishTokenRequest(buffer_arg) {
  return services_services_pb.EstablishTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_EstablishTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.EstablishTokenResponse)) {
    throw new Error('Expected argument of type v1services.EstablishTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_EstablishTokenResponse(buffer_arg) {
  return services_services_pb.EstablishTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ExportChainRequest(arg) {
  if (!(arg instanceof services_services_pb.ExportChainRequest)) {
    throw new Error('Expected argument of type v1services.ExportChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ExportChainRequest(buffer_arg) {
  return services_services_pb.ExportChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ExportChainResponse(arg) {
  if (!(arg instanceof services_services_pb.ExportChainResponse)) {
    throw new Error('Expected argument of type v1services.ExportChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ExportChainResponse(buffer_arg) {
  return services_services_pb.ExportChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_GenerateChainRequest(arg) {
  if (!(arg instanceof services_services_pb.GenerateChainRequest)) {
    throw new Error('Expected argument of type v1services.GenerateChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_GenerateChainRequest(buffer_arg) {
  return services_services_pb.GenerateChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_GenerateChainResponse(arg) {
  if (!(arg instanceof services_services_pb.GenerateChainResponse)) {
    throw new Error('Expected argument of type v1services.GenerateChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_GenerateChainResponse(buffer_arg) {
  return services_services_pb.GenerateChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_GenerateKeyRequest(arg) {
  if (!(arg instanceof services_services_pb.GenerateKeyRequest)) {
    throw new Error('Expected argument of type v1services.GenerateKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_GenerateKeyRequest(buffer_arg) {
  return services_services_pb.GenerateKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_GenerateKeyResponse(arg) {
  if (!(arg instanceof services_services_pb.GenerateKeyResponse)) {
    throw new Error('Expected argument of type v1services.GenerateKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_GenerateKeyResponse(buffer_arg) {
  return services_services_pb.GenerateKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_GetTipRequest(arg) {
  if (!(arg instanceof services_services_pb.GetTipRequest)) {
    throw new Error('Expected argument of type v1services.GetTipRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_GetTipRequest(buffer_arg) {
  return services_services_pb.GetTipRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_GetTipResponse(arg) {
  if (!(arg instanceof services_services_pb.GetTipResponse)) {
    throw new Error('Expected argument of type v1services.GetTipResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_GetTipResponse(buffer_arg) {
  return services_services_pb.GetTipResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ImportChainRequest(arg) {
  if (!(arg instanceof services_services_pb.ImportChainRequest)) {
    throw new Error('Expected argument of type v1services.ImportChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ImportChainRequest(buffer_arg) {
  return services_services_pb.ImportChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ImportChainResponse(arg) {
  if (!(arg instanceof services_services_pb.ImportChainResponse)) {
    throw new Error('Expected argument of type v1services.ImportChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ImportChainResponse(buffer_arg) {
  return services_services_pb.ImportChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ListChainIdsRequest(arg) {
  if (!(arg instanceof services_services_pb.ListChainIdsRequest)) {
    throw new Error('Expected argument of type v1services.ListChainIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ListChainIdsRequest(buffer_arg) {
  return services_services_pb.ListChainIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ListChainIdsResponse(arg) {
  if (!(arg instanceof services_services_pb.ListChainIdsResponse)) {
    throw new Error('Expected argument of type v1services.ListChainIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ListChainIdsResponse(buffer_arg) {
  return services_services_pb.ListChainIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ListKeysRequest(arg) {
  if (!(arg instanceof services_services_pb.ListKeysRequest)) {
    throw new Error('Expected argument of type v1services.ListKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ListKeysRequest(buffer_arg) {
  return services_services_pb.ListKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ListKeysResponse(arg) {
  if (!(arg instanceof services_services_pb.ListKeysResponse)) {
    throw new Error('Expected argument of type v1services.ListKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ListKeysResponse(buffer_arg) {
  return services_services_pb.ListKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_MintTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.MintTokenRequest)) {
    throw new Error('Expected argument of type v1services.MintTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_MintTokenRequest(buffer_arg) {
  return services_services_pb.MintTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_MintTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.MintTokenResponse)) {
    throw new Error('Expected argument of type v1services.MintTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_MintTokenResponse(buffer_arg) {
  return services_services_pb.MintTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_PlayTransactionsRequest(arg) {
  if (!(arg instanceof services_services_pb.PlayTransactionsRequest)) {
    throw new Error('Expected argument of type v1services.PlayTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_PlayTransactionsRequest(buffer_arg) {
  return services_services_pb.PlayTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_PlayTransactionsResponse(arg) {
  if (!(arg instanceof services_services_pb.PlayTransactionsResponse)) {
    throw new Error('Expected argument of type v1services.PlayTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_PlayTransactionsResponse(buffer_arg) {
  return services_services_pb.PlayTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ReceiveTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.ReceiveTokenRequest)) {
    throw new Error('Expected argument of type v1services.ReceiveTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ReceiveTokenRequest(buffer_arg) {
  return services_services_pb.ReceiveTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ReceiveTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.ReceiveTokenResponse)) {
    throw new Error('Expected argument of type v1services.ReceiveTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ReceiveTokenResponse(buffer_arg) {
  return services_services_pb.ReceiveTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_RegisterWalletRequest(arg) {
  if (!(arg instanceof services_services_pb.RegisterWalletRequest)) {
    throw new Error('Expected argument of type v1services.RegisterWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_RegisterWalletRequest(buffer_arg) {
  return services_services_pb.RegisterWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_RegisterWalletResponse(arg) {
  if (!(arg instanceof services_services_pb.RegisterWalletResponse)) {
    throw new Error('Expected argument of type v1services.RegisterWalletResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_RegisterWalletResponse(buffer_arg) {
  return services_services_pb.RegisterWalletResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ResolveAtRequest(arg) {
  if (!(arg instanceof services_services_pb.ResolveAtRequest)) {
    throw new Error('Expected argument of type v1services.ResolveAtRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ResolveAtRequest(buffer_arg) {
  return services_services_pb.ResolveAtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ResolveRequest(arg) {
  if (!(arg instanceof services_services_pb.ResolveRequest)) {
    throw new Error('Expected argument of type v1services.ResolveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ResolveRequest(buffer_arg) {
  return services_services_pb.ResolveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_ResolveResponse(arg) {
  if (!(arg instanceof services_services_pb.ResolveResponse)) {
    throw new Error('Expected argument of type v1services.ResolveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_ResolveResponse(buffer_arg) {
  return services_services_pb.ResolveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_SendTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.SendTokenRequest)) {
    throw new Error('Expected argument of type v1services.SendTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_SendTokenRequest(buffer_arg) {
  return services_services_pb.SendTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_SendTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.SendTokenResponse)) {
    throw new Error('Expected argument of type v1services.SendTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_SendTokenResponse(buffer_arg) {
  return services_services_pb.SendTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_SetDataRequest(arg) {
  if (!(arg instanceof services_services_pb.SetDataRequest)) {
    throw new Error('Expected argument of type v1services.SetDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_SetDataRequest(buffer_arg) {
  return services_services_pb.SetDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_SetDataResponse(arg) {
  if (!(arg instanceof services_services_pb.SetDataResponse)) {
    throw new Error('Expected argument of type v1services.SetDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_SetDataResponse(buffer_arg) {
  return services_services_pb.SetDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_SetOwnerRequest(arg) {
  if (!(arg instanceof services_services_pb.SetOwnerRequest)) {
    throw new Error('Expected argument of type v1services.SetOwnerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_SetOwnerRequest(buffer_arg) {
  return services_services_pb.SetOwnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_v1services_SetOwnerResponse(arg) {
  if (!(arg instanceof services_services_pb.SetOwnerResponse)) {
    throw new Error('Expected argument of type v1services.SetOwnerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_v1services_SetOwnerResponse(buffer_arg) {
  return services_services_pb.SetOwnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletRPCServiceService = exports.WalletRPCServiceService = {
  register: {
    path: '/v1services.WalletRPCService/Register',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.RegisterWalletRequest,
    responseType: services_services_pb.RegisterWalletResponse,
    requestSerialize: serialize_v1services_RegisterWalletRequest,
    requestDeserialize: deserialize_v1services_RegisterWalletRequest,
    responseSerialize: serialize_v1services_RegisterWalletResponse,
    responseDeserialize: deserialize_v1services_RegisterWalletResponse,
  },
  generateKey: {
    path: '/v1services.WalletRPCService/GenerateKey',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GenerateKeyRequest,
    responseType: services_services_pb.GenerateKeyResponse,
    requestSerialize: serialize_v1services_GenerateKeyRequest,
    requestDeserialize: deserialize_v1services_GenerateKeyRequest,
    responseSerialize: serialize_v1services_GenerateKeyResponse,
    responseDeserialize: deserialize_v1services_GenerateKeyResponse,
  },
  createChainTree: {
    path: '/v1services.WalletRPCService/CreateChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GenerateChainRequest,
    responseType: services_services_pb.GenerateChainResponse,
    requestSerialize: serialize_v1services_GenerateChainRequest,
    requestDeserialize: deserialize_v1services_GenerateChainRequest,
    responseSerialize: serialize_v1services_GenerateChainResponse,
    responseDeserialize: deserialize_v1services_GenerateChainResponse,
  },
  exportChainTree: {
    path: '/v1services.WalletRPCService/ExportChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ExportChainRequest,
    responseType: services_services_pb.ExportChainResponse,
    requestSerialize: serialize_v1services_ExportChainRequest,
    requestDeserialize: deserialize_v1services_ExportChainRequest,
    responseSerialize: serialize_v1services_ExportChainResponse,
    responseDeserialize: deserialize_v1services_ExportChainResponse,
  },
  importChainTree: {
    path: '/v1services.WalletRPCService/ImportChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ImportChainRequest,
    responseType: services_services_pb.ImportChainResponse,
    requestSerialize: serialize_v1services_ImportChainRequest,
    requestDeserialize: deserialize_v1services_ImportChainRequest,
    responseSerialize: serialize_v1services_ImportChainResponse,
    responseDeserialize: deserialize_v1services_ImportChainResponse,
  },
  getTip: {
    path: '/v1services.WalletRPCService/GetTip',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GetTipRequest,
    responseType: services_services_pb.GetTipResponse,
    requestSerialize: serialize_v1services_GetTipRequest,
    requestDeserialize: deserialize_v1services_GetTipRequest,
    responseSerialize: serialize_v1services_GetTipResponse,
    responseDeserialize: deserialize_v1services_GetTipResponse,
  },
  listChainIds: {
    path: '/v1services.WalletRPCService/ListChainIds',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ListChainIdsRequest,
    responseType: services_services_pb.ListChainIdsResponse,
    requestSerialize: serialize_v1services_ListChainIdsRequest,
    requestDeserialize: deserialize_v1services_ListChainIdsRequest,
    responseSerialize: serialize_v1services_ListChainIdsResponse,
    responseDeserialize: deserialize_v1services_ListChainIdsResponse,
  },
  listKeys: {
    path: '/v1services.WalletRPCService/ListKeys',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ListKeysRequest,
    responseType: services_services_pb.ListKeysResponse,
    requestSerialize: serialize_v1services_ListKeysRequest,
    requestDeserialize: deserialize_v1services_ListKeysRequest,
    responseSerialize: serialize_v1services_ListKeysResponse,
    responseDeserialize: deserialize_v1services_ListKeysResponse,
  },
  setOwner: {
    path: '/v1services.WalletRPCService/SetOwner',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SetOwnerRequest,
    responseType: services_services_pb.SetOwnerResponse,
    requestSerialize: serialize_v1services_SetOwnerRequest,
    requestDeserialize: deserialize_v1services_SetOwnerRequest,
    responseSerialize: serialize_v1services_SetOwnerResponse,
    responseDeserialize: deserialize_v1services_SetOwnerResponse,
  },
  setData: {
    path: '/v1services.WalletRPCService/SetData',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SetDataRequest,
    responseType: services_services_pb.SetDataResponse,
    requestSerialize: serialize_v1services_SetDataRequest,
    requestDeserialize: deserialize_v1services_SetDataRequest,
    responseSerialize: serialize_v1services_SetDataResponse,
    responseDeserialize: deserialize_v1services_SetDataResponse,
  },
  resolve: {
    path: '/v1services.WalletRPCService/Resolve',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ResolveRequest,
    responseType: services_services_pb.ResolveResponse,
    requestSerialize: serialize_v1services_ResolveRequest,
    requestDeserialize: deserialize_v1services_ResolveRequest,
    responseSerialize: serialize_v1services_ResolveResponse,
    responseDeserialize: deserialize_v1services_ResolveResponse,
  },
  resolveAt: {
    path: '/v1services.WalletRPCService/ResolveAt',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ResolveAtRequest,
    responseType: services_services_pb.ResolveResponse,
    requestSerialize: serialize_v1services_ResolveAtRequest,
    requestDeserialize: deserialize_v1services_ResolveAtRequest,
    responseSerialize: serialize_v1services_ResolveResponse,
    responseDeserialize: deserialize_v1services_ResolveResponse,
  },
  establishToken: {
    path: '/v1services.WalletRPCService/EstablishToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.EstablishTokenRequest,
    responseType: services_services_pb.EstablishTokenResponse,
    requestSerialize: serialize_v1services_EstablishTokenRequest,
    requestDeserialize: deserialize_v1services_EstablishTokenRequest,
    responseSerialize: serialize_v1services_EstablishTokenResponse,
    responseDeserialize: deserialize_v1services_EstablishTokenResponse,
  },
  mintToken: {
    path: '/v1services.WalletRPCService/MintToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.MintTokenRequest,
    responseType: services_services_pb.MintTokenResponse,
    requestSerialize: serialize_v1services_MintTokenRequest,
    requestDeserialize: deserialize_v1services_MintTokenRequest,
    responseSerialize: serialize_v1services_MintTokenResponse,
    responseDeserialize: deserialize_v1services_MintTokenResponse,
  },
  sendToken: {
    path: '/v1services.WalletRPCService/SendToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SendTokenRequest,
    responseType: services_services_pb.SendTokenResponse,
    requestSerialize: serialize_v1services_SendTokenRequest,
    requestDeserialize: deserialize_v1services_SendTokenRequest,
    responseSerialize: serialize_v1services_SendTokenResponse,
    responseDeserialize: deserialize_v1services_SendTokenResponse,
  },
  receiveToken: {
    path: '/v1services.WalletRPCService/ReceiveToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ReceiveTokenRequest,
    responseType: services_services_pb.ReceiveTokenResponse,
    requestSerialize: serialize_v1services_ReceiveTokenRequest,
    requestDeserialize: deserialize_v1services_ReceiveTokenRequest,
    responseSerialize: serialize_v1services_ReceiveTokenResponse,
    responseDeserialize: deserialize_v1services_ReceiveTokenResponse,
  },
  playTransactions: {
    path: '/v1services.WalletRPCService/PlayTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.PlayTransactionsRequest,
    responseType: services_services_pb.PlayTransactionsResponse,
    requestSerialize: serialize_v1services_PlayTransactionsRequest,
    requestDeserialize: deserialize_v1services_PlayTransactionsRequest,
    responseSerialize: serialize_v1services_PlayTransactionsResponse,
    responseDeserialize: deserialize_v1services_PlayTransactionsResponse,
  },
};

exports.WalletRPCServiceClient = grpc.makeGenericClientConstructor(WalletRPCServiceService);
