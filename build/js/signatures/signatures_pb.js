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

goog.exportSymbol('proto.signatures.Signature', null, global);
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
proto.signatures.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.signatures.Signature.repeatedFields_, null);
};
goog.inherits(proto.signatures.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.signatures.Signature.displayName = 'proto.signatures.Signature';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.signatures.Signature.repeatedFields_ = [1];



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
proto.signatures.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.signatures.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.signatures.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.signatures.Signature.toObject = function(includeInstance, msg) {
  var obj = {
    signersList: jspb.Message.getRepeatedField(msg, 1),
    signature: msg.getSignature_asB64(),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    objectId: msg.getObjectId_asB64(),
    previousTip: msg.getPreviousTip_asB64(),
    newTip: msg.getNewTip_asB64(),
    view: jspb.Message.getFieldWithDefault(msg, 7, 0),
    cycle: jspb.Message.getFieldWithDefault(msg, 8, 0),
    height: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.signatures.Signature}
 */
proto.signatures.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.signatures.Signature;
  return proto.signatures.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.signatures.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.signatures.Signature}
 */
proto.signatures.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<boolean>} */ (reader.readPackedBool());
      msg.setSignersList(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setObjectId(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPreviousTip(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNewTip(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setView(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCycle(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
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
proto.signatures.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.signatures.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.signatures.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.signatures.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignersList();
  if (f.length > 0) {
    writer.writePackedBool(
      1,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getObjectId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getPreviousTip_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getNewTip_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getView();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getCycle();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
};


/**
 * repeated bool signers = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {!Array<boolean>}
 */
proto.signatures.Signature.prototype.getSignersList = function() {
  return /** @type {!Array<boolean>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<boolean>} value */
proto.signatures.Signature.prototype.setSignersList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {boolean} value
 * @param {number=} opt_index
 */
proto.signatures.Signature.prototype.addSigners = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.signatures.Signature.prototype.clearSignersList = function() {
  this.setSignersList([]);
};


/**
 * optional bytes signature = 2;
 * @return {!(string|Uint8Array)}
 */
proto.signatures.Signature.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes signature = 2;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.signatures.Signature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.signatures.Signature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/** @param {!(string|Uint8Array)} value */
proto.signatures.Signature.prototype.setSignature = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.signatures.Signature.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.signatures.Signature.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes object_id = 4;
 * @return {!(string|Uint8Array)}
 */
proto.signatures.Signature.prototype.getObjectId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes object_id = 4;
 * This is a type-conversion wrapper around `getObjectId()`
 * @return {string}
 */
proto.signatures.Signature.prototype.getObjectId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getObjectId()));
};


/**
 * optional bytes object_id = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getObjectId()`
 * @return {!Uint8Array}
 */
proto.signatures.Signature.prototype.getObjectId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getObjectId()));
};


/** @param {!(string|Uint8Array)} value */
proto.signatures.Signature.prototype.setObjectId = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes previous_tip = 5;
 * @return {!(string|Uint8Array)}
 */
proto.signatures.Signature.prototype.getPreviousTip = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes previous_tip = 5;
 * This is a type-conversion wrapper around `getPreviousTip()`
 * @return {string}
 */
proto.signatures.Signature.prototype.getPreviousTip_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPreviousTip()));
};


/**
 * optional bytes previous_tip = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPreviousTip()`
 * @return {!Uint8Array}
 */
proto.signatures.Signature.prototype.getPreviousTip_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPreviousTip()));
};


/** @param {!(string|Uint8Array)} value */
proto.signatures.Signature.prototype.setPreviousTip = function(value) {
  jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes new_tip = 6;
 * @return {!(string|Uint8Array)}
 */
proto.signatures.Signature.prototype.getNewTip = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes new_tip = 6;
 * This is a type-conversion wrapper around `getNewTip()`
 * @return {string}
 */
proto.signatures.Signature.prototype.getNewTip_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNewTip()));
};


/**
 * optional bytes new_tip = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNewTip()`
 * @return {!Uint8Array}
 */
proto.signatures.Signature.prototype.getNewTip_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNewTip()));
};


/** @param {!(string|Uint8Array)} value */
proto.signatures.Signature.prototype.setNewTip = function(value) {
  jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional uint64 view = 7;
 * @return {number}
 */
proto.signatures.Signature.prototype.getView = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.signatures.Signature.prototype.setView = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 cycle = 8;
 * @return {number}
 */
proto.signatures.Signature.prototype.getCycle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.signatures.Signature.prototype.setCycle = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 height = 9;
 * @return {number}
 */
proto.signatures.Signature.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.signatures.Signature.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


goog.object.extend(exports, proto.signatures);
