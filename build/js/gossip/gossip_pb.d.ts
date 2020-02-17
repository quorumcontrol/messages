// package: gossip
// file: gossip/gossip.proto

import * as jspb from "google-protobuf";
import * as services_services_pb from "../services/services_pb";
import * as signatures_signatures_pb from "../signatures/signatures_pb";

export class Checkpoint extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  clearAddBlockRequestsList(): void;
  getAddBlockRequestsList(): Array<Uint8Array | string>;
  getAddBlockRequestsList_asU8(): Array<Uint8Array>;
  getAddBlockRequestsList_asB64(): Array<string>;
  setAddBlockRequestsList(value: Array<Uint8Array | string>): void;
  addAddBlockRequests(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Checkpoint.AsObject;
  static toObject(includeInstance: boolean, msg: Checkpoint): Checkpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Checkpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Checkpoint;
  static deserializeBinaryFromReader(message: Checkpoint, reader: jspb.BinaryReader): Checkpoint;
}

export namespace Checkpoint {
  export type AsObject = {
    height: number,
    addBlockRequestsList: Array<Uint8Array | string>,
  }
}

export class Round extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getCheckpointCid(): Uint8Array | string;
  getCheckpointCid_asU8(): Uint8Array;
  getCheckpointCid_asB64(): string;
  setCheckpointCid(value: Uint8Array | string): void;

  getStateCid(): Uint8Array | string;
  getStateCid_asU8(): Uint8Array;
  getStateCid_asB64(): string;
  setStateCid(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Round.AsObject;
  static toObject(includeInstance: boolean, msg: Round): Round.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Round, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Round;
  static deserializeBinaryFromReader(message: Round, reader: jspb.BinaryReader): Round;
}

export namespace Round {
  export type AsObject = {
    height: number,
    checkpointCid: Uint8Array | string,
    stateCid: Uint8Array | string,
  }
}

export class RoundConfirmation extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  getRoundCid(): Uint8Array | string;
  getRoundCid_asU8(): Uint8Array;
  getRoundCid_asB64(): string;
  setRoundCid(value: Uint8Array | string): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): signatures_signatures_pb.Signature | undefined;
  setSignature(value?: signatures_signatures_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoundConfirmation.AsObject;
  static toObject(includeInstance: boolean, msg: RoundConfirmation): RoundConfirmation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoundConfirmation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoundConfirmation;
  static deserializeBinaryFromReader(message: RoundConfirmation, reader: jspb.BinaryReader): RoundConfirmation;
}

export namespace RoundConfirmation {
  export type AsObject = {
    height: number,
    roundCid: Uint8Array | string,
    signature?: signatures_signatures_pb.Signature.AsObject,
  }
}

export class Proof extends jspb.Message {
  getObjectId(): Uint8Array | string;
  getObjectId_asU8(): Uint8Array;
  getObjectId_asB64(): string;
  setObjectId(value: Uint8Array | string): void;

  getTip(): Uint8Array | string;
  getTip_asU8(): Uint8Array;
  getTip_asB64(): string;
  setTip(value: Uint8Array | string): void;

  hasAddBlockRequest(): boolean;
  clearAddBlockRequest(): void;
  getAddBlockRequest(): services_services_pb.AddBlockRequest | undefined;
  setAddBlockRequest(value?: services_services_pb.AddBlockRequest): void;

  hasCheckpoint(): boolean;
  clearCheckpoint(): void;
  getCheckpoint(): Checkpoint | undefined;
  setCheckpoint(value?: Checkpoint): void;

  hasRound(): boolean;
  clearRound(): void;
  getRound(): Round | undefined;
  setRound(value?: Round): void;

  hasRoundConfirmation(): boolean;
  clearRoundConfirmation(): void;
  getRoundConfirmation(): RoundConfirmation | undefined;
  setRoundConfirmation(value?: RoundConfirmation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proof.AsObject;
  static toObject(includeInstance: boolean, msg: Proof): Proof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proof;
  static deserializeBinaryFromReader(message: Proof, reader: jspb.BinaryReader): Proof;
}

export namespace Proof {
  export type AsObject = {
    objectId: Uint8Array | string,
    tip: Uint8Array | string,
    addBlockRequest?: services_services_pb.AddBlockRequest.AsObject,
    checkpoint?: Checkpoint.AsObject,
    round?: Round.AsObject,
    roundConfirmation?: RoundConfirmation.AsObject,
  }
}

