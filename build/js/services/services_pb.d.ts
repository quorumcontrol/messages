// package: v2services
// file: services/services.proto

import * as jspb from "google-protobuf";

export class AddBlockRequest extends jspb.Message {
  getObjectId(): Uint8Array | string;
  getObjectId_asU8(): Uint8Array;
  getObjectId_asB64(): string;
  setObjectId(value: Uint8Array | string): void;

  getPreviousTip(): Uint8Array | string;
  getPreviousTip_asU8(): Uint8Array;
  getPreviousTip_asB64(): string;
  setPreviousTip(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getNewTip(): Uint8Array | string;
  getNewTip_asU8(): Uint8Array;
  getNewTip_asB64(): string;
  setNewTip(value: Uint8Array | string): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  clearStateList(): void;
  getStateList(): Array<Uint8Array | string>;
  getStateList_asU8(): Array<Uint8Array>;
  getStateList_asB64(): Array<string>;
  setStateList(value: Array<Uint8Array | string>): void;
  addState(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBlockRequest): AddBlockRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBlockRequest;
  static deserializeBinaryFromReader(message: AddBlockRequest, reader: jspb.BinaryReader): AddBlockRequest;
}

export namespace AddBlockRequest {
  export type AsObject = {
    objectId: Uint8Array | string,
    previousTip: Uint8Array | string,
    height: number,
    newTip: Uint8Array | string,
    payload: Uint8Array | string,
    stateList: Array<Uint8Array | string>,
  }
}

export class ReceiveCurrentStateSnapshot extends jspb.Message {
  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveCurrentStateSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveCurrentStateSnapshot): ReceiveCurrentStateSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveCurrentStateSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveCurrentStateSnapshot;
  static deserializeBinaryFromReader(message: ReceiveCurrentStateSnapshot, reader: jspb.BinaryReader): ReceiveCurrentStateSnapshot;
}

export namespace ReceiveCurrentStateSnapshot {
  export type AsObject = {
    payload: Uint8Array | string,
  }
}

export class RequestCurrentStateSnapshot extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCurrentStateSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCurrentStateSnapshot): RequestCurrentStateSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestCurrentStateSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCurrentStateSnapshot;
  static deserializeBinaryFromReader(message: RequestCurrentStateSnapshot, reader: jspb.BinaryReader): RequestCurrentStateSnapshot;
}

export namespace RequestCurrentStateSnapshot {
  export type AsObject = {
  }
}

export class Ping extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ping.AsObject;
  static toObject(includeInstance: boolean, msg: Ping): Ping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ping;
  static deserializeBinaryFromReader(message: Ping, reader: jspb.BinaryReader): Ping;
}

export namespace Ping {
  export type AsObject = {
    msg: string,
  }
}

export class Pong extends jspb.Message {
  getMsg(): string;
  setMsg(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pong.AsObject;
  static toObject(includeInstance: boolean, msg: Pong): Pong.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Pong, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pong;
  static deserializeBinaryFromReader(message: Pong, reader: jspb.BinaryReader): Pong;
}

export namespace Pong {
  export type AsObject = {
    msg: string,
  }
}

