// package: v2transactions
// file: transactions/transactions.proto

import * as jspb from "google-protobuf";
import * as signatures_signatures_pb from "../signatures/signatures_pb";

export class SetDataPayload extends jspb.Message {
  getPath(): string;
  setPath(value: string): void;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDataPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SetDataPayload): SetDataPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDataPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDataPayload;
  static deserializeBinaryFromReader(message: SetDataPayload, reader: jspb.BinaryReader): SetDataPayload;
}

export namespace SetDataPayload {
  export type AsObject = {
    path: string,
    value: Uint8Array | string,
  }
}

export class SetOwnershipPayload extends jspb.Message {
  clearAuthenticationList(): void;
  getAuthenticationList(): Array<string>;
  setAuthenticationList(value: Array<string>): void;
  addAuthentication(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOwnershipPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SetOwnershipPayload): SetOwnershipPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOwnershipPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOwnershipPayload;
  static deserializeBinaryFromReader(message: SetOwnershipPayload, reader: jspb.BinaryReader): SetOwnershipPayload;
}

export namespace SetOwnershipPayload {
  export type AsObject = {
    authenticationList: Array<string>,
  }
}

export class TokenMonetaryPolicy extends jspb.Message {
  getMaximum(): number;
  setMaximum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenMonetaryPolicy.AsObject;
  static toObject(includeInstance: boolean, msg: TokenMonetaryPolicy): TokenMonetaryPolicy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenMonetaryPolicy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenMonetaryPolicy;
  static deserializeBinaryFromReader(message: TokenMonetaryPolicy, reader: jspb.BinaryReader): TokenMonetaryPolicy;
}

export namespace TokenMonetaryPolicy {
  export type AsObject = {
    maximum: number,
  }
}

export class EstablishTokenPayload extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasMonetaryPolicy(): boolean;
  clearMonetaryPolicy(): void;
  getMonetaryPolicy(): TokenMonetaryPolicy | undefined;
  setMonetaryPolicy(value?: TokenMonetaryPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstablishTokenPayload.AsObject;
  static toObject(includeInstance: boolean, msg: EstablishTokenPayload): EstablishTokenPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EstablishTokenPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstablishTokenPayload;
  static deserializeBinaryFromReader(message: EstablishTokenPayload, reader: jspb.BinaryReader): EstablishTokenPayload;
}

export namespace EstablishTokenPayload {
  export type AsObject = {
    name: string,
    monetaryPolicy?: TokenMonetaryPolicy.AsObject,
  }
}

export class MintTokenPayload extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MintTokenPayload.AsObject;
  static toObject(includeInstance: boolean, msg: MintTokenPayload): MintTokenPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MintTokenPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MintTokenPayload;
  static deserializeBinaryFromReader(message: MintTokenPayload, reader: jspb.BinaryReader): MintTokenPayload;
}

export namespace MintTokenPayload {
  export type AsObject = {
    name: string,
    amount: number,
  }
}

export class SendTokenPayload extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getDestination(): string;
  setDestination(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendTokenPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SendTokenPayload): SendTokenPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendTokenPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendTokenPayload;
  static deserializeBinaryFromReader(message: SendTokenPayload, reader: jspb.BinaryReader): SendTokenPayload;
}

export namespace SendTokenPayload {
  export type AsObject = {
    id: string,
    name: string,
    amount: number,
    destination: string,
  }
}

export class ReceiveTokenPayload extends jspb.Message {
  getSendTokenTransactionId(): string;
  setSendTokenTransactionId(value: string): void;

  getTip(): Uint8Array | string;
  getTip_asU8(): Uint8Array;
  getTip_asB64(): string;
  setTip(value: Uint8Array | string): void;

  hasTreeState(): boolean;
  clearTreeState(): void;
  getTreeState(): signatures_signatures_pb.TreeState | undefined;
  setTreeState(value?: signatures_signatures_pb.TreeState): void;

  clearLeavesList(): void;
  getLeavesList(): Array<Uint8Array | string>;
  getLeavesList_asU8(): Array<Uint8Array>;
  getLeavesList_asB64(): Array<string>;
  setLeavesList(value: Array<Uint8Array | string>): void;
  addLeaves(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveTokenPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveTokenPayload): ReceiveTokenPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveTokenPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveTokenPayload;
  static deserializeBinaryFromReader(message: ReceiveTokenPayload, reader: jspb.BinaryReader): ReceiveTokenPayload;
}

export namespace ReceiveTokenPayload {
  export type AsObject = {
    sendTokenTransactionId: string,
    tip: Uint8Array | string,
    treeState?: signatures_signatures_pb.TreeState.AsObject,
    leavesList: Array<Uint8Array | string>,
  }
}

export class TokenPayload extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): void;

  getTip(): string;
  setTip(value: string): void;

  hasTreeState(): boolean;
  clearTreeState(): void;
  getTreeState(): signatures_signatures_pb.TreeState | undefined;
  setTreeState(value?: signatures_signatures_pb.TreeState): void;

  clearLeavesList(): void;
  getLeavesList(): Array<Uint8Array | string>;
  getLeavesList_asU8(): Array<Uint8Array>;
  getLeavesList_asB64(): Array<string>;
  setLeavesList(value: Array<Uint8Array | string>): void;
  addLeaves(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenPayload.AsObject;
  static toObject(includeInstance: boolean, msg: TokenPayload): TokenPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenPayload;
  static deserializeBinaryFromReader(message: TokenPayload, reader: jspb.BinaryReader): TokenPayload;
}

export namespace TokenPayload {
  export type AsObject = {
    transactionId: string,
    tip: string,
    treeState?: signatures_signatures_pb.TreeState.AsObject,
    leavesList: Array<Uint8Array | string>,
  }
}

export class StakePayload extends jspb.Message {
  getGroupId(): string;
  setGroupId(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  hasDstKey(): boolean;
  clearDstKey(): void;
  getDstKey(): signatures_signatures_pb.PublicKey | undefined;
  setDstKey(value?: signatures_signatures_pb.PublicKey): void;

  hasVerKey(): boolean;
  clearVerKey(): void;
  getVerKey(): signatures_signatures_pb.PublicKey | undefined;
  setVerKey(value?: signatures_signatures_pb.PublicKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakePayload.AsObject;
  static toObject(includeInstance: boolean, msg: StakePayload): StakePayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StakePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakePayload;
  static deserializeBinaryFromReader(message: StakePayload, reader: jspb.BinaryReader): StakePayload;
}

export namespace StakePayload {
  export type AsObject = {
    groupId: string,
    amount: number,
    dstKey?: signatures_signatures_pb.PublicKey.AsObject,
    verKey?: signatures_signatures_pb.PublicKey.AsObject,
  }
}

export class Transaction extends jspb.Message {
  getType(): Transaction.TypeMap[keyof Transaction.TypeMap];
  setType(value: Transaction.TypeMap[keyof Transaction.TypeMap]): void;

  hasSetDataPayload(): boolean;
  clearSetDataPayload(): void;
  getSetDataPayload(): SetDataPayload | undefined;
  setSetDataPayload(value?: SetDataPayload): void;

  hasSetOwnershipPayload(): boolean;
  clearSetOwnershipPayload(): void;
  getSetOwnershipPayload(): SetOwnershipPayload | undefined;
  setSetOwnershipPayload(value?: SetOwnershipPayload): void;

  hasEstablishTokenPayload(): boolean;
  clearEstablishTokenPayload(): void;
  getEstablishTokenPayload(): EstablishTokenPayload | undefined;
  setEstablishTokenPayload(value?: EstablishTokenPayload): void;

  hasMintTokenPayload(): boolean;
  clearMintTokenPayload(): void;
  getMintTokenPayload(): MintTokenPayload | undefined;
  setMintTokenPayload(value?: MintTokenPayload): void;

  hasSendTokenPayload(): boolean;
  clearSendTokenPayload(): void;
  getSendTokenPayload(): SendTokenPayload | undefined;
  setSendTokenPayload(value?: SendTokenPayload): void;

  hasReceiveTokenPayload(): boolean;
  clearReceiveTokenPayload(): void;
  getReceiveTokenPayload(): ReceiveTokenPayload | undefined;
  setReceiveTokenPayload(value?: ReceiveTokenPayload): void;

  hasStakePayload(): boolean;
  clearStakePayload(): void;
  getStakePayload(): StakePayload | undefined;
  setStakePayload(value?: StakePayload): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    type: Transaction.TypeMap[keyof Transaction.TypeMap],
    setDataPayload?: SetDataPayload.AsObject,
    setOwnershipPayload?: SetOwnershipPayload.AsObject,
    establishTokenPayload?: EstablishTokenPayload.AsObject,
    mintTokenPayload?: MintTokenPayload.AsObject,
    sendTokenPayload?: SendTokenPayload.AsObject,
    receiveTokenPayload?: ReceiveTokenPayload.AsObject,
    stakePayload?: StakePayload.AsObject,
  }

  export interface TypeMap {
    UNKNOWN: 0;
    SETDATA: 1;
    SETOWNERSHIP: 2;
    ESTABLISHTOKEN: 3;
    MINTTOKEN: 4;
    SENDTOKEN: 5;
    RECEIVETOKEN: 6;
    STAKE: 7;
  }

  export const Type: TypeMap;
}

