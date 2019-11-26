// package: v1signatures
// file: signatures/signatures.proto

import * as jspb from "google-protobuf";

export class PublicKey extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getPublicKey(): Uint8Array | string;
  getPublicKey_asU8(): Uint8Array;
  getPublicKey_asB64(): string;
  setPublicKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicKey.AsObject;
  static toObject(includeInstance: boolean, msg: PublicKey): PublicKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicKey;
  static deserializeBinaryFromReader(message: PublicKey, reader: jspb.BinaryReader): PublicKey;
}

export namespace PublicKey {
  export type AsObject = {
    id: string,
    type: string,
    publicKey: Uint8Array | string,
  }
}

export class CurrentState extends jspb.Message {
  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Signature | undefined;
  setSignature(value?: Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentState.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentState): CurrentState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentState;
  static deserializeBinaryFromReader(message: CurrentState, reader: jspb.BinaryReader): CurrentState;
}

export namespace CurrentState {
  export type AsObject = {
    signature?: Signature.AsObject,
  }
}

export class Signature extends jspb.Message {
  clearSignersList(): void;
  getSignersList(): Array<number>;
  setSignersList(value: Array<number>): void;
  addSigners(value: number, index?: number): number;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getType(): string;
  setType(value: string): void;

  getObjectId(): Uint8Array | string;
  getObjectId_asU8(): Uint8Array;
  getObjectId_asB64(): string;
  setObjectId(value: Uint8Array | string): void;

  getPreviousTip(): Uint8Array | string;
  getPreviousTip_asU8(): Uint8Array;
  getPreviousTip_asB64(): string;
  setPreviousTip(value: Uint8Array | string): void;

  getNewTip(): Uint8Array | string;
  getNewTip_asU8(): Uint8Array;
  getNewTip_asB64(): string;
  setNewTip(value: Uint8Array | string): void;

  getView(): number;
  setView(value: number): void;

  getCycle(): number;
  setCycle(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    signersList: Array<number>,
    signature: Uint8Array | string,
    type: string,
    objectId: Uint8Array | string,
    previousTip: Uint8Array | string,
    newTip: Uint8Array | string,
    view: number,
    cycle: number,
    height: number,
    transactionId: Uint8Array | string,
  }
}

