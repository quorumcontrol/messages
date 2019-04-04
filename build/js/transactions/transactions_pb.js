/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.transactions.EstablishTokenPayload', null, global);
goog.exportSymbol('proto.transactions.MintTokenPayload', null, global);
goog.exportSymbol('proto.transactions.SetDataPayload', null, global);
goog.exportSymbol('proto.transactions.SetOwnershipPayload', null, global);
goog.exportSymbol('proto.transactions.TokenMonetaryPolicy', null, global);
goog.exportSymbol('proto.transactions.Transaction', null, global);
goog.exportSymbol('proto.transactions.TransactionType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transactions.SetDataPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transactions.SetDataPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transactions.SetDataPayload.displayName = 'proto.transactions.SetDataPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transactions.SetOwnershipPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.transactions.SetOwnershipPayload.repeatedFields_, null);
};
goog.inherits(proto.transactions.SetOwnershipPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transactions.SetOwnershipPayload.displayName = 'proto.transactions.SetOwnershipPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transactions.TokenMonetaryPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transactions.TokenMonetaryPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transactions.TokenMonetaryPolicy.displayName = 'proto.transactions.TokenMonetaryPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transactions.EstablishTokenPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transactions.EstablishTokenPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transactions.EstablishTokenPayload.displayName = 'proto.transactions.EstablishTokenPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transactions.MintTokenPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transactions.MintTokenPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transactions.MintTokenPayload.displayName = 'proto.transactions.MintTokenPayload';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transactions.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.transactions.Transaction.oneofGroups_);
};
goog.inherits(proto.transactions.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transactions.Transaction.displayName = 'proto.transactions.Transaction';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transactions.SetDataPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.transactions.SetDataPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transactions.SetDataPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.SetDataPayload.toObject = function(includeInstance, msg) {
  var obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transactions.SetDataPayload}
 */
proto.transactions.SetDataPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transactions.SetDataPayload;
  return proto.transactions.SetDataPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transactions.SetDataPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transactions.SetDataPayload}
 */
proto.transactions.SetDataPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transactions.SetDataPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transactions.SetDataPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transactions.SetDataPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.SetDataPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.transactions.SetDataPayload.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.transactions.SetDataPayload.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.transactions.SetDataPayload.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.transactions.SetDataPayload.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.transactions.SetDataPayload.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/** @param {!(string|Uint8Array)} value */
proto.transactions.SetDataPayload.prototype.setValue = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.transactions.SetOwnershipPayload.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transactions.SetOwnershipPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.transactions.SetOwnershipPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transactions.SetOwnershipPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.SetOwnershipPayload.toObject = function(includeInstance, msg) {
  var obj = {
    authenticationList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transactions.SetOwnershipPayload}
 */
proto.transactions.SetOwnershipPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transactions.SetOwnershipPayload;
  return proto.transactions.SetOwnershipPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transactions.SetOwnershipPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transactions.SetOwnershipPayload}
 */
proto.transactions.SetOwnershipPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAuthentication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transactions.SetOwnershipPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transactions.SetOwnershipPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transactions.SetOwnershipPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.SetOwnershipPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthenticationList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string authentication = 1;
 * @return {!Array<string>}
 */
proto.transactions.SetOwnershipPayload.prototype.getAuthenticationList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.transactions.SetOwnershipPayload.prototype.setAuthenticationList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.transactions.SetOwnershipPayload.prototype.addAuthentication = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.transactions.SetOwnershipPayload.prototype.clearAuthenticationList = function() {
  this.setAuthenticationList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transactions.TokenMonetaryPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.transactions.TokenMonetaryPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transactions.TokenMonetaryPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.TokenMonetaryPolicy.toObject = function(includeInstance, msg) {
  var obj = {
    maximum: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transactions.TokenMonetaryPolicy}
 */
proto.transactions.TokenMonetaryPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transactions.TokenMonetaryPolicy;
  return proto.transactions.TokenMonetaryPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transactions.TokenMonetaryPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transactions.TokenMonetaryPolicy}
 */
proto.transactions.TokenMonetaryPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaximum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transactions.TokenMonetaryPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transactions.TokenMonetaryPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transactions.TokenMonetaryPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.TokenMonetaryPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaximum();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 maximum = 1;
 * @return {number}
 */
proto.transactions.TokenMonetaryPolicy.prototype.getMaximum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.transactions.TokenMonetaryPolicy.prototype.setMaximum = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transactions.EstablishTokenPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.transactions.EstablishTokenPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transactions.EstablishTokenPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.EstablishTokenPayload.toObject = function(includeInstance, msg) {
  var obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    monetaryPolicy: (f = msg.getMonetaryPolicy()) && proto.transactions.TokenMonetaryPolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transactions.EstablishTokenPayload}
 */
proto.transactions.EstablishTokenPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transactions.EstablishTokenPayload;
  return proto.transactions.EstablishTokenPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transactions.EstablishTokenPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transactions.EstablishTokenPayload}
 */
proto.transactions.EstablishTokenPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.transactions.TokenMonetaryPolicy;
      reader.readMessage(value,proto.transactions.TokenMonetaryPolicy.deserializeBinaryFromReader);
      msg.setMonetaryPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transactions.EstablishTokenPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transactions.EstablishTokenPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transactions.EstablishTokenPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.EstablishTokenPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMonetaryPolicy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.transactions.TokenMonetaryPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.transactions.EstablishTokenPayload.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.transactions.EstablishTokenPayload.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TokenMonetaryPolicy monetary_policy = 2;
 * @return {?proto.transactions.TokenMonetaryPolicy}
 */
proto.transactions.EstablishTokenPayload.prototype.getMonetaryPolicy = function() {
  return /** @type{?proto.transactions.TokenMonetaryPolicy} */ (
    jspb.Message.getWrapperField(this, proto.transactions.TokenMonetaryPolicy, 2));
};


/** @param {?proto.transactions.TokenMonetaryPolicy|undefined} value */
proto.transactions.EstablishTokenPayload.prototype.setMonetaryPolicy = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.transactions.EstablishTokenPayload.prototype.clearMonetaryPolicy = function() {
  this.setMonetaryPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transactions.EstablishTokenPayload.prototype.hasMonetaryPolicy = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transactions.MintTokenPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.transactions.MintTokenPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transactions.MintTokenPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.MintTokenPayload.toObject = function(includeInstance, msg) {
  var obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transactions.MintTokenPayload}
 */
proto.transactions.MintTokenPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transactions.MintTokenPayload;
  return proto.transactions.MintTokenPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transactions.MintTokenPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transactions.MintTokenPayload}
 */
proto.transactions.MintTokenPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transactions.MintTokenPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transactions.MintTokenPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transactions.MintTokenPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.MintTokenPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.transactions.MintTokenPayload.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.transactions.MintTokenPayload.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 amount = 2;
 * @return {number}
 */
proto.transactions.MintTokenPayload.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.transactions.MintTokenPayload.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.transactions.Transaction.oneofGroups_ = [[2,3,4,5]];

/**
 * @enum {number}
 */
proto.transactions.Transaction.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  SET_DATA_PAYLOAD: 2,
  SET_OWNERSHIP_PAYLOAD: 3,
  ESTABLISH_TOKEN_PAYLOAD: 4,
  MINT_TOKEN_PAYLOAD: 5
};

/**
 * @return {proto.transactions.Transaction.PayloadCase}
 */
proto.transactions.Transaction.prototype.getPayloadCase = function() {
  return /** @type {proto.transactions.Transaction.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.transactions.Transaction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transactions.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.transactions.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transactions.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.Transaction.toObject = function(includeInstance, msg) {
  var obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    setDataPayload: (f = msg.getSetDataPayload()) && proto.transactions.SetDataPayload.toObject(includeInstance, f),
    setOwnershipPayload: (f = msg.getSetOwnershipPayload()) && proto.transactions.SetOwnershipPayload.toObject(includeInstance, f),
    establishTokenPayload: (f = msg.getEstablishTokenPayload()) && proto.transactions.EstablishTokenPayload.toObject(includeInstance, f),
    mintTokenPayload: (f = msg.getMintTokenPayload()) && proto.transactions.MintTokenPayload.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transactions.Transaction}
 */
proto.transactions.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transactions.Transaction;
  return proto.transactions.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transactions.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transactions.Transaction}
 */
proto.transactions.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.transactions.TransactionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.transactions.SetDataPayload;
      reader.readMessage(value,proto.transactions.SetDataPayload.deserializeBinaryFromReader);
      msg.setSetDataPayload(value);
      break;
    case 3:
      var value = new proto.transactions.SetOwnershipPayload;
      reader.readMessage(value,proto.transactions.SetOwnershipPayload.deserializeBinaryFromReader);
      msg.setSetOwnershipPayload(value);
      break;
    case 4:
      var value = new proto.transactions.EstablishTokenPayload;
      reader.readMessage(value,proto.transactions.EstablishTokenPayload.deserializeBinaryFromReader);
      msg.setEstablishTokenPayload(value);
      break;
    case 5:
      var value = new proto.transactions.MintTokenPayload;
      reader.readMessage(value,proto.transactions.MintTokenPayload.deserializeBinaryFromReader);
      msg.setMintTokenPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transactions.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transactions.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transactions.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transactions.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSetDataPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.transactions.SetDataPayload.serializeBinaryToWriter
    );
  }
  f = message.getSetOwnershipPayload();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.transactions.SetOwnershipPayload.serializeBinaryToWriter
    );
  }
  f = message.getEstablishTokenPayload();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.transactions.EstablishTokenPayload.serializeBinaryToWriter
    );
  }
  f = message.getMintTokenPayload();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.transactions.MintTokenPayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional TransactionType type = 1;
 * @return {!proto.transactions.TransactionType}
 */
proto.transactions.Transaction.prototype.getType = function() {
  return /** @type {!proto.transactions.TransactionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.transactions.TransactionType} value */
proto.transactions.Transaction.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SetDataPayload set_data_payload = 2;
 * @return {?proto.transactions.SetDataPayload}
 */
proto.transactions.Transaction.prototype.getSetDataPayload = function() {
  return /** @type{?proto.transactions.SetDataPayload} */ (
    jspb.Message.getWrapperField(this, proto.transactions.SetDataPayload, 2));
};


/** @param {?proto.transactions.SetDataPayload|undefined} value */
proto.transactions.Transaction.prototype.setSetDataPayload = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.transactions.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.transactions.Transaction.prototype.clearSetDataPayload = function() {
  this.setSetDataPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transactions.Transaction.prototype.hasSetDataPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional SetOwnershipPayload set_ownership_payload = 3;
 * @return {?proto.transactions.SetOwnershipPayload}
 */
proto.transactions.Transaction.prototype.getSetOwnershipPayload = function() {
  return /** @type{?proto.transactions.SetOwnershipPayload} */ (
    jspb.Message.getWrapperField(this, proto.transactions.SetOwnershipPayload, 3));
};


/** @param {?proto.transactions.SetOwnershipPayload|undefined} value */
proto.transactions.Transaction.prototype.setSetOwnershipPayload = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.transactions.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.transactions.Transaction.prototype.clearSetOwnershipPayload = function() {
  this.setSetOwnershipPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transactions.Transaction.prototype.hasSetOwnershipPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EstablishTokenPayload establish_token_payload = 4;
 * @return {?proto.transactions.EstablishTokenPayload}
 */
proto.transactions.Transaction.prototype.getEstablishTokenPayload = function() {
  return /** @type{?proto.transactions.EstablishTokenPayload} */ (
    jspb.Message.getWrapperField(this, proto.transactions.EstablishTokenPayload, 4));
};


/** @param {?proto.transactions.EstablishTokenPayload|undefined} value */
proto.transactions.Transaction.prototype.setEstablishTokenPayload = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.transactions.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.transactions.Transaction.prototype.clearEstablishTokenPayload = function() {
  this.setEstablishTokenPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transactions.Transaction.prototype.hasEstablishTokenPayload = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MintTokenPayload mint_token_payload = 5;
 * @return {?proto.transactions.MintTokenPayload}
 */
proto.transactions.Transaction.prototype.getMintTokenPayload = function() {
  return /** @type{?proto.transactions.MintTokenPayload} */ (
    jspb.Message.getWrapperField(this, proto.transactions.MintTokenPayload, 5));
};


/** @param {?proto.transactions.MintTokenPayload|undefined} value */
proto.transactions.Transaction.prototype.setMintTokenPayload = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.transactions.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.transactions.Transaction.prototype.clearMintTokenPayload = function() {
  this.setMintTokenPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transactions.Transaction.prototype.hasMintTokenPayload = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.transactions.TransactionType = {
  UNKNOWN: 0,
  SETDATA: 1,
  SETOWNERSHIP: 2,
  ESTABLISHTOKEN: 3,
  MINTTOKEN: 4,
  STAKE: 5
};

goog.object.extend(exports, proto.transactions);
