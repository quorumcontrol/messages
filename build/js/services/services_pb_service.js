// package: services
// file: services/services.proto

var services_services_pb = require("../services/services_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WalletRPCService = (function () {
  function WalletRPCService() {}
  WalletRPCService.serviceName = "services.WalletRPCService";
  return WalletRPCService;
}());

WalletRPCService.Register = {
  methodName: "Register",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.RegisterWalletRequest,
  responseType: services_services_pb.RegisterWalletResponse
};

WalletRPCService.GenerateKey = {
  methodName: "GenerateKey",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.GenerateKeyRequest,
  responseType: services_services_pb.GenerateKeyResponse
};

WalletRPCService.CreateChainTree = {
  methodName: "CreateChainTree",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.GenerateChainRequest,
  responseType: services_services_pb.GenerateChainResponse
};

WalletRPCService.ExportChainTree = {
  methodName: "ExportChainTree",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.ExportChainRequest,
  responseType: services_services_pb.ExportChainResponse
};

WalletRPCService.ImportChainTree = {
  methodName: "ImportChainTree",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.ImportChainRequest,
  responseType: services_services_pb.ImportChainResponse
};

WalletRPCService.GetTip = {
  methodName: "GetTip",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.GetTipRequest,
  responseType: services_services_pb.GetTipResponse
};

WalletRPCService.ListChainIds = {
  methodName: "ListChainIds",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.ListChainIdsRequest,
  responseType: services_services_pb.ListChainIdsResponse
};

WalletRPCService.ListKeys = {
  methodName: "ListKeys",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.ListKeysRequest,
  responseType: services_services_pb.ListKeysResponse
};

WalletRPCService.SetOwner = {
  methodName: "SetOwner",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.SetOwnerRequest,
  responseType: services_services_pb.SetOwnerResponse
};

WalletRPCService.SetData = {
  methodName: "SetData",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.SetDataRequest,
  responseType: services_services_pb.SetDataResponse
};

WalletRPCService.Resolve = {
  methodName: "Resolve",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.ResolveRequest,
  responseType: services_services_pb.ResolveResponse
};

WalletRPCService.ResolveAt = {
  methodName: "ResolveAt",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.ResolveAtRequest,
  responseType: services_services_pb.ResolveResponse
};

WalletRPCService.EstablishToken = {
  methodName: "EstablishToken",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.EstablishTokenRequest,
  responseType: services_services_pb.EstablishTokenResponse
};

WalletRPCService.MintToken = {
  methodName: "MintToken",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.MintTokenRequest,
  responseType: services_services_pb.MintTokenResponse
};

WalletRPCService.SendToken = {
  methodName: "SendToken",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.SendTokenRequest,
  responseType: services_services_pb.SendTokenResponse
};

WalletRPCService.ReceiveToken = {
  methodName: "ReceiveToken",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.ReceiveTokenRequest,
  responseType: services_services_pb.ReceiveTokenResponse
};

WalletRPCService.PlayTransactions = {
  methodName: "PlayTransactions",
  service: WalletRPCService,
  requestStream: false,
  responseStream: false,
  requestType: services_services_pb.PlayTransactionsRequest,
  responseType: services_services_pb.PlayTransactionsResponse
};

exports.WalletRPCService = WalletRPCService;

function WalletRPCServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WalletRPCServiceClient.prototype.register = function register(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.Register, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.generateKey = function generateKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.GenerateKey, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.createChainTree = function createChainTree(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.CreateChainTree, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.exportChainTree = function exportChainTree(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.ExportChainTree, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.importChainTree = function importChainTree(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.ImportChainTree, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.getTip = function getTip(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.GetTip, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.listChainIds = function listChainIds(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.ListChainIds, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.listKeys = function listKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.ListKeys, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.setOwner = function setOwner(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.SetOwner, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.setData = function setData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.SetData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.resolve = function resolve(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.Resolve, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.resolveAt = function resolveAt(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.ResolveAt, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.establishToken = function establishToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.EstablishToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.mintToken = function mintToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.MintToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.sendToken = function sendToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.SendToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.receiveToken = function receiveToken(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.ReceiveToken, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

WalletRPCServiceClient.prototype.playTransactions = function playTransactions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WalletRPCService.PlayTransactions, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.WalletRPCServiceClient = WalletRPCServiceClient;

