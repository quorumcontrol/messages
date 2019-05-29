// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var services_services_pb = require('../services/services_pb.js');
var signatures_signatures_pb = require('../signatures/signatures_pb.js');
var transactions_transactions_pb = require('../transactions/transactions_pb.js');

function serialize_services_EstablishTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.EstablishTokenRequest)) {
    throw new Error('Expected argument of type services.EstablishTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_EstablishTokenRequest(buffer_arg) {
  return services_services_pb.EstablishTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_EstablishTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.EstablishTokenResponse)) {
    throw new Error('Expected argument of type services.EstablishTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_EstablishTokenResponse(buffer_arg) {
  return services_services_pb.EstablishTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ExportChainRequest(arg) {
  if (!(arg instanceof services_services_pb.ExportChainRequest)) {
    throw new Error('Expected argument of type services.ExportChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ExportChainRequest(buffer_arg) {
  return services_services_pb.ExportChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ExportChainResponse(arg) {
  if (!(arg instanceof services_services_pb.ExportChainResponse)) {
    throw new Error('Expected argument of type services.ExportChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ExportChainResponse(buffer_arg) {
  return services_services_pb.ExportChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_GenerateChainRequest(arg) {
  if (!(arg instanceof services_services_pb.GenerateChainRequest)) {
    throw new Error('Expected argument of type services.GenerateChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_GenerateChainRequest(buffer_arg) {
  return services_services_pb.GenerateChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_GenerateChainResponse(arg) {
  if (!(arg instanceof services_services_pb.GenerateChainResponse)) {
    throw new Error('Expected argument of type services.GenerateChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_GenerateChainResponse(buffer_arg) {
  return services_services_pb.GenerateChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_GenerateKeyRequest(arg) {
  if (!(arg instanceof services_services_pb.GenerateKeyRequest)) {
    throw new Error('Expected argument of type services.GenerateKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_GenerateKeyRequest(buffer_arg) {
  return services_services_pb.GenerateKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_GenerateKeyResponse(arg) {
  if (!(arg instanceof services_services_pb.GenerateKeyResponse)) {
    throw new Error('Expected argument of type services.GenerateKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_GenerateKeyResponse(buffer_arg) {
  return services_services_pb.GenerateKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_GetTipRequest(arg) {
  if (!(arg instanceof services_services_pb.GetTipRequest)) {
    throw new Error('Expected argument of type services.GetTipRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_GetTipRequest(buffer_arg) {
  return services_services_pb.GetTipRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_GetTipResponse(arg) {
  if (!(arg instanceof services_services_pb.GetTipResponse)) {
    throw new Error('Expected argument of type services.GetTipResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_GetTipResponse(buffer_arg) {
  return services_services_pb.GetTipResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ImportChainRequest(arg) {
  if (!(arg instanceof services_services_pb.ImportChainRequest)) {
    throw new Error('Expected argument of type services.ImportChainRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ImportChainRequest(buffer_arg) {
  return services_services_pb.ImportChainRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ImportChainResponse(arg) {
  if (!(arg instanceof services_services_pb.ImportChainResponse)) {
    throw new Error('Expected argument of type services.ImportChainResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ImportChainResponse(buffer_arg) {
  return services_services_pb.ImportChainResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ListChainIdsRequest(arg) {
  if (!(arg instanceof services_services_pb.ListChainIdsRequest)) {
    throw new Error('Expected argument of type services.ListChainIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListChainIdsRequest(buffer_arg) {
  return services_services_pb.ListChainIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ListChainIdsResponse(arg) {
  if (!(arg instanceof services_services_pb.ListChainIdsResponse)) {
    throw new Error('Expected argument of type services.ListChainIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListChainIdsResponse(buffer_arg) {
  return services_services_pb.ListChainIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ListKeysRequest(arg) {
  if (!(arg instanceof services_services_pb.ListKeysRequest)) {
    throw new Error('Expected argument of type services.ListKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListKeysRequest(buffer_arg) {
  return services_services_pb.ListKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ListKeysResponse(arg) {
  if (!(arg instanceof services_services_pb.ListKeysResponse)) {
    throw new Error('Expected argument of type services.ListKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListKeysResponse(buffer_arg) {
  return services_services_pb.ListKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_MintTokenRequest(arg) {
  if (!(arg instanceof services_services_pb.MintTokenRequest)) {
    throw new Error('Expected argument of type services.MintTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_MintTokenRequest(buffer_arg) {
  return services_services_pb.MintTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_MintTokenResponse(arg) {
  if (!(arg instanceof services_services_pb.MintTokenResponse)) {
    throw new Error('Expected argument of type services.MintTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_MintTokenResponse(buffer_arg) {
  return services_services_pb.MintTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_PlayTransactionsRequest(arg) {
  if (!(arg instanceof services_services_pb.PlayTransactionsRequest)) {
    throw new Error('Expected argument of type services.PlayTransactionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PlayTransactionsRequest(buffer_arg) {
  return services_services_pb.PlayTransactionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_PlayTransactionsResponse(arg) {
  if (!(arg instanceof services_services_pb.PlayTransactionsResponse)) {
    throw new Error('Expected argument of type services.PlayTransactionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PlayTransactionsResponse(buffer_arg) {
  return services_services_pb.PlayTransactionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_RegisterWalletRequest(arg) {
  if (!(arg instanceof services_services_pb.RegisterWalletRequest)) {
    throw new Error('Expected argument of type services.RegisterWalletRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_RegisterWalletRequest(buffer_arg) {
  return services_services_pb.RegisterWalletRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_RegisterWalletResponse(arg) {
  if (!(arg instanceof services_services_pb.RegisterWalletResponse)) {
    throw new Error('Expected argument of type services.RegisterWalletResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_RegisterWalletResponse(buffer_arg) {
  return services_services_pb.RegisterWalletResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ResolveRequest(arg) {
  if (!(arg instanceof services_services_pb.ResolveRequest)) {
    throw new Error('Expected argument of type services.ResolveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ResolveRequest(buffer_arg) {
  return services_services_pb.ResolveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ResolveResponse(arg) {
  if (!(arg instanceof services_services_pb.ResolveResponse)) {
    throw new Error('Expected argument of type services.ResolveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ResolveResponse(buffer_arg) {
  return services_services_pb.ResolveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SetDataRequest(arg) {
  if (!(arg instanceof services_services_pb.SetDataRequest)) {
    throw new Error('Expected argument of type services.SetDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SetDataRequest(buffer_arg) {
  return services_services_pb.SetDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SetDataResponse(arg) {
  if (!(arg instanceof services_services_pb.SetDataResponse)) {
    throw new Error('Expected argument of type services.SetDataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SetDataResponse(buffer_arg) {
  return services_services_pb.SetDataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SetOwnerRequest(arg) {
  if (!(arg instanceof services_services_pb.SetOwnerRequest)) {
    throw new Error('Expected argument of type services.SetOwnerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SetOwnerRequest(buffer_arg) {
  return services_services_pb.SetOwnerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SetOwnerResponse(arg) {
  if (!(arg instanceof services_services_pb.SetOwnerResponse)) {
    throw new Error('Expected argument of type services.SetOwnerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SetOwnerResponse(buffer_arg) {
  return services_services_pb.SetOwnerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletRPCServiceService = exports.WalletRPCServiceService = {
  register: {
    path: '/services.WalletRPCService/Register',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.RegisterWalletRequest,
    responseType: services_services_pb.RegisterWalletResponse,
    requestSerialize: serialize_services_RegisterWalletRequest,
    requestDeserialize: deserialize_services_RegisterWalletRequest,
    responseSerialize: serialize_services_RegisterWalletResponse,
    responseDeserialize: deserialize_services_RegisterWalletResponse,
  },
  generateKey: {
    path: '/services.WalletRPCService/GenerateKey',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GenerateKeyRequest,
    responseType: services_services_pb.GenerateKeyResponse,
    requestSerialize: serialize_services_GenerateKeyRequest,
    requestDeserialize: deserialize_services_GenerateKeyRequest,
    responseSerialize: serialize_services_GenerateKeyResponse,
    responseDeserialize: deserialize_services_GenerateKeyResponse,
  },
  createChainTree: {
    path: '/services.WalletRPCService/CreateChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GenerateChainRequest,
    responseType: services_services_pb.GenerateChainResponse,
    requestSerialize: serialize_services_GenerateChainRequest,
    requestDeserialize: deserialize_services_GenerateChainRequest,
    responseSerialize: serialize_services_GenerateChainResponse,
    responseDeserialize: deserialize_services_GenerateChainResponse,
  },
  exportChainTree: {
    path: '/services.WalletRPCService/ExportChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ExportChainRequest,
    responseType: services_services_pb.ExportChainResponse,
    requestSerialize: serialize_services_ExportChainRequest,
    requestDeserialize: deserialize_services_ExportChainRequest,
    responseSerialize: serialize_services_ExportChainResponse,
    responseDeserialize: deserialize_services_ExportChainResponse,
  },
  importChainTree: {
    path: '/services.WalletRPCService/ImportChainTree',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ImportChainRequest,
    responseType: services_services_pb.ImportChainResponse,
    requestSerialize: serialize_services_ImportChainRequest,
    requestDeserialize: deserialize_services_ImportChainRequest,
    responseSerialize: serialize_services_ImportChainResponse,
    responseDeserialize: deserialize_services_ImportChainResponse,
  },
  getTip: {
    path: '/services.WalletRPCService/GetTip',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.GetTipRequest,
    responseType: services_services_pb.GetTipResponse,
    requestSerialize: serialize_services_GetTipRequest,
    requestDeserialize: deserialize_services_GetTipRequest,
    responseSerialize: serialize_services_GetTipResponse,
    responseDeserialize: deserialize_services_GetTipResponse,
  },
  listChainIds: {
    path: '/services.WalletRPCService/ListChainIds',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ListChainIdsRequest,
    responseType: services_services_pb.ListChainIdsResponse,
    requestSerialize: serialize_services_ListChainIdsRequest,
    requestDeserialize: deserialize_services_ListChainIdsRequest,
    responseSerialize: serialize_services_ListChainIdsResponse,
    responseDeserialize: deserialize_services_ListChainIdsResponse,
  },
  listKeys: {
    path: '/services.WalletRPCService/ListKeys',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ListKeysRequest,
    responseType: services_services_pb.ListKeysResponse,
    requestSerialize: serialize_services_ListKeysRequest,
    requestDeserialize: deserialize_services_ListKeysRequest,
    responseSerialize: serialize_services_ListKeysResponse,
    responseDeserialize: deserialize_services_ListKeysResponse,
  },
  setOwner: {
    path: '/services.WalletRPCService/SetOwner',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SetOwnerRequest,
    responseType: services_services_pb.SetOwnerResponse,
    requestSerialize: serialize_services_SetOwnerRequest,
    requestDeserialize: deserialize_services_SetOwnerRequest,
    responseSerialize: serialize_services_SetOwnerResponse,
    responseDeserialize: deserialize_services_SetOwnerResponse,
  },
  setData: {
    path: '/services.WalletRPCService/SetData',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.SetDataRequest,
    responseType: services_services_pb.SetDataResponse,
    requestSerialize: serialize_services_SetDataRequest,
    requestDeserialize: deserialize_services_SetDataRequest,
    responseSerialize: serialize_services_SetDataResponse,
    responseDeserialize: deserialize_services_SetDataResponse,
  },
  resolve: {
    path: '/services.WalletRPCService/Resolve',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.ResolveRequest,
    responseType: services_services_pb.ResolveResponse,
    requestSerialize: serialize_services_ResolveRequest,
    requestDeserialize: deserialize_services_ResolveRequest,
    responseSerialize: serialize_services_ResolveResponse,
    responseDeserialize: deserialize_services_ResolveResponse,
  },
  establishToken: {
    path: '/services.WalletRPCService/EstablishToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.EstablishTokenRequest,
    responseType: services_services_pb.EstablishTokenResponse,
    requestSerialize: serialize_services_EstablishTokenRequest,
    requestDeserialize: deserialize_services_EstablishTokenRequest,
    responseSerialize: serialize_services_EstablishTokenResponse,
    responseDeserialize: deserialize_services_EstablishTokenResponse,
  },
  mintToken: {
    path: '/services.WalletRPCService/MintToken',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.MintTokenRequest,
    responseType: services_services_pb.MintTokenResponse,
    requestSerialize: serialize_services_MintTokenRequest,
    requestDeserialize: deserialize_services_MintTokenRequest,
    responseSerialize: serialize_services_MintTokenResponse,
    responseDeserialize: deserialize_services_MintTokenResponse,
  },
  playTransactions: {
    path: '/services.WalletRPCService/PlayTransactions',
    requestStream: false,
    responseStream: false,
    requestType: services_services_pb.PlayTransactionsRequest,
    responseType: services_services_pb.PlayTransactionsResponse,
    requestSerialize: serialize_services_PlayTransactionsRequest,
    requestDeserialize: deserialize_services_PlayTransactionsRequest,
    responseSerialize: serialize_services_PlayTransactionsResponse,
    responseDeserialize: deserialize_services_PlayTransactionsResponse,
  },
};

exports.WalletRPCServiceClient = grpc.makeGenericClientConstructor(WalletRPCServiceService);
