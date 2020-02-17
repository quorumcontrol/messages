// package: v2bridge
// file: bridge/bridge.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class ActorPID extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActorPID.AsObject;
  static toObject(includeInstance: boolean, msg: ActorPID): ActorPID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActorPID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActorPID;
  static deserializeBinaryFromReader(message: ActorPID, reader: jspb.BinaryReader): ActorPID;
}

export namespace ActorPID {
  export type AsObject = {
    address: string,
    id: string,
  }
}

export class WireDelivery extends jspb.Message {
  getHeaderMap(): jspb.Map<string, string>;
  clearHeaderMap(): void;
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): google_protobuf_any_pb.Any | undefined;
  setMessage(value?: google_protobuf_any_pb.Any): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): ActorPID | undefined;
  setTarget(value?: ActorPID): void;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): ActorPID | undefined;
  setSender(value?: ActorPID): void;

  getOutgoing(): boolean;
  setOutgoing(value: boolean): void;

  getTracingMap(): jspb.Map<string, string>;
  clearTracingMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WireDelivery.AsObject;
  static toObject(includeInstance: boolean, msg: WireDelivery): WireDelivery.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WireDelivery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WireDelivery;
  static deserializeBinaryFromReader(message: WireDelivery, reader: jspb.BinaryReader): WireDelivery;
}

export namespace WireDelivery {
  export type AsObject = {
    headerMap: Array<[string, string]>,
    message?: google_protobuf_any_pb.Any.AsObject,
    target?: ActorPID.AsObject,
    sender?: ActorPID.AsObject,
    outgoing: boolean,
    tracingMap: Array<[string, string]>,
  }
}

