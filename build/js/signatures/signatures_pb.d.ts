// package: v2signatures
// file: signatures/signatures.proto

import * as jspb from "google-protobuf";

export class PublicKey extends jspb.Message {
  getType(): PublicKey.TypeMap[keyof PublicKey.TypeMap];
  setType(value: PublicKey.TypeMap[keyof PublicKey.TypeMap]): void;

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
    type: PublicKey.TypeMap[keyof PublicKey.TypeMap],
    publicKey: Uint8Array | string,
  }

  export interface TypeMap {
    KEYTYPEBLSGROUPSIG: 0;
    KEYTYPESECP256K1: 1;
  }

  export const Type: TypeMap;
}

export class Ownership extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasPublicKey(): boolean;
  clearPublicKey(): void;
  getPublicKey(): PublicKey | undefined;
  setPublicKey(value?: PublicKey): void;

  getConditions(): string;
  setConditions(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ownership.AsObject;
  static toObject(includeInstance: boolean, msg: Ownership): Ownership.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ownership, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ownership;
  static deserializeBinaryFromReader(message: Ownership, reader: jspb.BinaryReader): Ownership;
}

export namespace Ownership {
  export type AsObject = {
    id: string,
    publicKey?: PublicKey.AsObject,
    conditions: string,
  }
}

export class Signature extends jspb.Message {
  hasOwnership(): boolean;
  clearOwnership(): void;
  getOwnership(): Ownership | undefined;
  setOwnership(value?: Ownership): void;

  clearSignersList(): void;
  getSignersList(): Array<number>;
  setSignersList(value: Array<number>): void;
  addSigners(value: number, index?: number): number;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  getPreImage(): string;
  setPreImage(value: string): void;

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
    ownership?: Ownership.AsObject,
    signersList: Array<number>,
    signature: Uint8Array | string,
    preImage: string,
  }
}

export class TreeState extends jspb.Message {
  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Signature | undefined;
  setSignature(value?: Signature): void;

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

  getTransactionId(): Uint8Array | string;
  getTransactionId_asU8(): Uint8Array;
  getTransactionId_asB64(): string;
  setTransactionId(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getView(): number;
  setView(value: number): void;

  getCycle(): number;
  setCycle(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeState.AsObject;
  static toObject(includeInstance: boolean, msg: TreeState): TreeState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TreeState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeState;
  static deserializeBinaryFromReader(message: TreeState, reader: jspb.BinaryReader): TreeState;
}

export namespace TreeState {
  export type AsObject = {
    signature?: Signature.AsObject,
    objectId: Uint8Array | string,
    previousTip: Uint8Array | string,
    newTip: Uint8Array | string,
    transactionId: Uint8Array | string,
    height: number,
    view: number,
    cycle: number,
  }
}

