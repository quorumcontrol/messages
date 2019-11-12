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

goog.exportSymbol('proto.config.NotaryGroup', null, global);
goog.exportSymbol('proto.config.PublicKeySet', null, global);
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
proto.config.PublicKeySet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.config.PublicKeySet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.config.PublicKeySet.displayName = 'proto.config.PublicKeySet';
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
proto.config.NotaryGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.config.NotaryGroup.repeatedFields_, null);
};
goog.inherits(proto.config.NotaryGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.config.NotaryGroup.displayName = 'proto.config.NotaryGroup';
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
proto.config.PublicKeySet.prototype.toObject = function(opt_includeInstance) {
  return proto.config.PublicKeySet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.config.PublicKeySet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.PublicKeySet.toObject = function(includeInstance, msg) {
  var f, obj = {
    verKey: msg.getVerKey_asB64(),
    destKey: msg.getDestKey_asB64()
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
 * @return {!proto.config.PublicKeySet}
 */
proto.config.PublicKeySet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.config.PublicKeySet;
  return proto.config.PublicKeySet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.config.PublicKeySet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.config.PublicKeySet}
 */
proto.config.PublicKeySet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVerKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDestKey(value);
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
proto.config.PublicKeySet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.config.PublicKeySet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.config.PublicKeySet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.PublicKeySet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVerKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDestKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes ver_key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.config.PublicKeySet.prototype.getVerKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ver_key = 1;
 * This is a type-conversion wrapper around `getVerKey()`
 * @return {string}
 */
proto.config.PublicKeySet.prototype.getVerKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVerKey()));
};


/**
 * optional bytes ver_key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVerKey()`
 * @return {!Uint8Array}
 */
proto.config.PublicKeySet.prototype.getVerKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVerKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.config.PublicKeySet.prototype.setVerKey = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes dest_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.config.PublicKeySet.prototype.getDestKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes dest_key = 2;
 * This is a type-conversion wrapper around `getDestKey()`
 * @return {string}
 */
proto.config.PublicKeySet.prototype.getDestKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDestKey()));
};


/**
 * optional bytes dest_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDestKey()`
 * @return {!Uint8Array}
 */
proto.config.PublicKeySet.prototype.getDestKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDestKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.config.PublicKeySet.prototype.setDestKey = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.config.NotaryGroup.repeatedFields_ = [6,7,8,9];



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
proto.config.NotaryGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.config.NotaryGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.config.NotaryGroup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.NotaryGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    transactionToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    burnAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    transactionTopic: jspb.Message.getFieldWithDefault(msg, 4, ""),
    commitTopic: jspb.Message.getFieldWithDefault(msg, 5, ""),
    validatorGeneratorsList: jspb.Message.getRepeatedField(msg, 6),
    transactionsList: jspb.Message.getRepeatedField(msg, 7),
    signersList: jspb.Message.toObjectList(msg.getSignersList(),
    proto.config.PublicKeySet.toObject, includeInstance),
    bootstrapAddressesList: jspb.Message.getRepeatedField(msg, 9)
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
 * @return {!proto.config.NotaryGroup}
 */
proto.config.NotaryGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.config.NotaryGroup;
  return proto.config.NotaryGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.config.NotaryGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.config.NotaryGroup}
 */
proto.config.NotaryGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBurnAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransactionTopic(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitTopic(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addValidatorGenerators(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addTransactions(value);
      break;
    case 8:
      var value = new proto.config.PublicKeySet;
      reader.readMessage(value,proto.config.PublicKeySet.deserializeBinaryFromReader);
      msg.addSigners(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addBootstrapAddresses(value);
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
proto.config.NotaryGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.config.NotaryGroup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.config.NotaryGroup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.config.NotaryGroup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTransactionToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBurnAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTransactionTopic();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCommitTopic();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getValidatorGeneratorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.config.PublicKeySet.serializeBinaryToWriter
    );
  }
  f = message.getBootstrapAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.config.NotaryGroup.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.config.NotaryGroup.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string transaction_token = 2;
 * @return {string}
 */
proto.config.NotaryGroup.prototype.getTransactionToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.config.NotaryGroup.prototype.setTransactionToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 burn_amount = 3;
 * @return {number}
 */
proto.config.NotaryGroup.prototype.getBurnAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.config.NotaryGroup.prototype.setBurnAmount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string transaction_topic = 4;
 * @return {string}
 */
proto.config.NotaryGroup.prototype.getTransactionTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.config.NotaryGroup.prototype.setTransactionTopic = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string commit_topic = 5;
 * @return {string}
 */
proto.config.NotaryGroup.prototype.getCommitTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.config.NotaryGroup.prototype.setCommitTopic = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string validator_generators = 6;
 * @return {!Array<string>}
 */
proto.config.NotaryGroup.prototype.getValidatorGeneratorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<string>} value */
proto.config.NotaryGroup.prototype.setValidatorGeneratorsList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.config.NotaryGroup.prototype.addValidatorGenerators = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.config.NotaryGroup.prototype.clearValidatorGeneratorsList = function() {
  this.setValidatorGeneratorsList([]);
};


/**
 * repeated string transactions = 7;
 * @return {!Array<string>}
 */
proto.config.NotaryGroup.prototype.getTransactionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/** @param {!Array<string>} value */
proto.config.NotaryGroup.prototype.setTransactionsList = function(value) {
  jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.config.NotaryGroup.prototype.addTransactions = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.config.NotaryGroup.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};


/**
 * repeated PublicKeySet signers = 8;
 * @return {!Array<!proto.config.PublicKeySet>}
 */
proto.config.NotaryGroup.prototype.getSignersList = function() {
  return /** @type{!Array<!proto.config.PublicKeySet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.config.PublicKeySet, 8));
};


/** @param {!Array<!proto.config.PublicKeySet>} value */
proto.config.NotaryGroup.prototype.setSignersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.config.PublicKeySet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.config.PublicKeySet}
 */
proto.config.NotaryGroup.prototype.addSigners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.config.PublicKeySet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.config.NotaryGroup.prototype.clearSignersList = function() {
  this.setSignersList([]);
};


/**
 * repeated string bootstrap_addresses = 9;
 * @return {!Array<string>}
 */
proto.config.NotaryGroup.prototype.getBootstrapAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/** @param {!Array<string>} value */
proto.config.NotaryGroup.prototype.setBootstrapAddressesList = function(value) {
  jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.config.NotaryGroup.prototype.addBootstrapAddresses = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.config.NotaryGroup.prototype.clearBootstrapAddressesList = function() {
  this.setBootstrapAddressesList([]);
};


goog.object.extend(exports, proto.config);
