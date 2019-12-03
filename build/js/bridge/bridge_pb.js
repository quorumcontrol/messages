// source: bridge/bridge.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
goog.exportSymbol('proto.v1bridge.ActorPID', null, global);
goog.exportSymbol('proto.v1bridge.WireDelivery', null, global);
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
proto.v1bridge.ActorPID = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1bridge.ActorPID, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1bridge.ActorPID.displayName = 'proto.v1bridge.ActorPID';
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
proto.v1bridge.WireDelivery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1bridge.WireDelivery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1bridge.WireDelivery.displayName = 'proto.v1bridge.WireDelivery';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1bridge.ActorPID.prototype.toObject = function(opt_includeInstance) {
  return proto.v1bridge.ActorPID.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1bridge.ActorPID} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1bridge.ActorPID.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.v1bridge.ActorPID}
 */
proto.v1bridge.ActorPID.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1bridge.ActorPID;
  return proto.v1bridge.ActorPID.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1bridge.ActorPID} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1bridge.ActorPID}
 */
proto.v1bridge.ActorPID.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.v1bridge.ActorPID.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1bridge.ActorPID.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1bridge.ActorPID} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1bridge.ActorPID.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.v1bridge.ActorPID.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1bridge.ActorPID} returns this
 */
proto.v1bridge.ActorPID.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.v1bridge.ActorPID.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1bridge.ActorPID} returns this
 */
proto.v1bridge.ActorPID.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.v1bridge.WireDelivery.prototype.toObject = function(opt_includeInstance) {
  return proto.v1bridge.WireDelivery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1bridge.WireDelivery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1bridge.WireDelivery.toObject = function(includeInstance, msg) {
  var f, obj = {
    headerMap: (f = msg.getHeaderMap()) ? f.toObject(includeInstance, undefined) : [],
    message: (f = msg.getMessage()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    target: (f = msg.getTarget()) && proto.v1bridge.ActorPID.toObject(includeInstance, f),
    sender: (f = msg.getSender()) && proto.v1bridge.ActorPID.toObject(includeInstance, f),
    outgoing: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    tracingMap: (f = msg.getTracingMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.v1bridge.WireDelivery}
 */
proto.v1bridge.WireDelivery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1bridge.WireDelivery;
  return proto.v1bridge.WireDelivery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1bridge.WireDelivery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1bridge.WireDelivery}
 */
proto.v1bridge.WireDelivery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getHeaderMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.v1bridge.ActorPID;
      reader.readMessage(value,proto.v1bridge.ActorPID.deserializeBinaryFromReader);
      msg.setTarget(value);
      break;
    case 4:
      var value = new proto.v1bridge.ActorPID;
      reader.readMessage(value,proto.v1bridge.ActorPID.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOutgoing(value);
      break;
    case 6:
      var value = msg.getTracingMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.v1bridge.WireDelivery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1bridge.WireDelivery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1bridge.WireDelivery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1bridge.WireDelivery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeaderMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getTarget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.v1bridge.ActorPID.serializeBinaryToWriter
    );
  }
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.v1bridge.ActorPID.serializeBinaryToWriter
    );
  }
  f = message.getOutgoing();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getTracingMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> header = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.v1bridge.WireDelivery.prototype.getHeaderMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.v1bridge.WireDelivery} returns this
 */
proto.v1bridge.WireDelivery.prototype.clearHeaderMap = function() {
  this.getHeaderMap().clear();
  return this;};


/**
 * optional google.protobuf.Any message = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.v1bridge.WireDelivery.prototype.getMessage = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.v1bridge.WireDelivery} returns this
*/
proto.v1bridge.WireDelivery.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1bridge.WireDelivery} returns this
 */
proto.v1bridge.WireDelivery.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1bridge.WireDelivery.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ActorPID target = 3;
 * @return {?proto.v1bridge.ActorPID}
 */
proto.v1bridge.WireDelivery.prototype.getTarget = function() {
  return /** @type{?proto.v1bridge.ActorPID} */ (
    jspb.Message.getWrapperField(this, proto.v1bridge.ActorPID, 3));
};


/**
 * @param {?proto.v1bridge.ActorPID|undefined} value
 * @return {!proto.v1bridge.WireDelivery} returns this
*/
proto.v1bridge.WireDelivery.prototype.setTarget = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1bridge.WireDelivery} returns this
 */
proto.v1bridge.WireDelivery.prototype.clearTarget = function() {
  return this.setTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1bridge.WireDelivery.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ActorPID sender = 4;
 * @return {?proto.v1bridge.ActorPID}
 */
proto.v1bridge.WireDelivery.prototype.getSender = function() {
  return /** @type{?proto.v1bridge.ActorPID} */ (
    jspb.Message.getWrapperField(this, proto.v1bridge.ActorPID, 4));
};


/**
 * @param {?proto.v1bridge.ActorPID|undefined} value
 * @return {!proto.v1bridge.WireDelivery} returns this
*/
proto.v1bridge.WireDelivery.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1bridge.WireDelivery} returns this
 */
proto.v1bridge.WireDelivery.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1bridge.WireDelivery.prototype.hasSender = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool outgoing = 5;
 * @return {boolean}
 */
proto.v1bridge.WireDelivery.prototype.getOutgoing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1bridge.WireDelivery} returns this
 */
proto.v1bridge.WireDelivery.prototype.setOutgoing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * map<string, string> tracing = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.v1bridge.WireDelivery.prototype.getTracingMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.v1bridge.WireDelivery} returns this
 */
proto.v1bridge.WireDelivery.prototype.clearTracingMap = function() {
  this.getTracingMap().clear();
  return this;};


goog.object.extend(exports, proto.v1bridge);
