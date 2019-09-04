// package: services
// file: services/services.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as signatures_signatures_pb from "../signatures/signatures_pb";
import * as transactions_transactions_pb from "../transactions/transactions_pb";

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

export class Credentials extends jspb.Message { 
    getWalletName(): string;
    setWalletName(value: string): void;

    getPassPhrase(): string;
    setPassPhrase(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Credentials.AsObject;
    static toObject(includeInstance: boolean, msg: Credentials): Credentials.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Credentials, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Credentials;
    static deserializeBinaryFromReader(message: Credentials, reader: jspb.BinaryReader): Credentials;
}

export namespace Credentials {
    export type AsObject = {
        walletName: string,
        passPhrase: string,
    }
}

export class SerializableChainTree extends jspb.Message { 
    clearDagList(): void;
    getDagList(): Array<Uint8Array | string>;
    getDagList_asU8(): Array<Uint8Array>;
    getDagList_asB64(): Array<string>;
    setDagList(value: Array<Uint8Array | string>): void;
    addDag(value: Uint8Array | string, index?: number): Uint8Array | string;


    getSignaturesMap(): jspb.Map<string, signatures_signatures_pb.Signature>;
    clearSignaturesMap(): void;

    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SerializableChainTree.AsObject;
    static toObject(includeInstance: boolean, msg: SerializableChainTree): SerializableChainTree.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SerializableChainTree, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SerializableChainTree;
    static deserializeBinaryFromReader(message: SerializableChainTree, reader: jspb.BinaryReader): SerializableChainTree;
}

export namespace SerializableChainTree {
    export type AsObject = {
        dagList: Array<Uint8Array | string>,

        signaturesMap: Array<[string, signatures_signatures_pb.Signature.AsObject]>,
        tip: string,
    }
}

export class RegisterWalletRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterWalletRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterWalletRequest): RegisterWalletRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterWalletRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterWalletRequest;
    static deserializeBinaryFromReader(message: RegisterWalletRequest, reader: jspb.BinaryReader): RegisterWalletRequest;
}

export namespace RegisterWalletRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
    }
}

export class RegisterWalletResponse extends jspb.Message { 
    getWalletName(): string;
    setWalletName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterWalletResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterWalletResponse): RegisterWalletResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterWalletResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterWalletResponse;
    static deserializeBinaryFromReader(message: RegisterWalletResponse, reader: jspb.BinaryReader): RegisterWalletResponse;
}

export namespace RegisterWalletResponse {
    export type AsObject = {
        walletName: string,
    }
}

export class StorageAdapterConfigForBadger extends jspb.Message { 
    getPath(): string;
    setPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageAdapterConfigForBadger.AsObject;
    static toObject(includeInstance: boolean, msg: StorageAdapterConfigForBadger): StorageAdapterConfigForBadger.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageAdapterConfigForBadger, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageAdapterConfigForBadger;
    static deserializeBinaryFromReader(message: StorageAdapterConfigForBadger, reader: jspb.BinaryReader): StorageAdapterConfigForBadger;
}

export namespace StorageAdapterConfigForBadger {
    export type AsObject = {
        path: string,
    }
}

export class StorageAdapterConfigForIpld extends jspb.Message { 
    getPath(): string;
    setPath(value: string): void;

    getAddress(): string;
    setAddress(value: string): void;

    getOffline(): boolean;
    setOffline(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageAdapterConfigForIpld.AsObject;
    static toObject(includeInstance: boolean, msg: StorageAdapterConfigForIpld): StorageAdapterConfigForIpld.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageAdapterConfigForIpld, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageAdapterConfigForIpld;
    static deserializeBinaryFromReader(message: StorageAdapterConfigForIpld, reader: jspb.BinaryReader): StorageAdapterConfigForIpld;
}

export namespace StorageAdapterConfigForIpld {
    export type AsObject = {
        path: string,
        address: string,
        offline: boolean,
    }
}

export class StorageAdapterConfig extends jspb.Message { 

    hasBadger(): boolean;
    clearBadger(): void;
    getBadger(): StorageAdapterConfigForBadger | undefined;
    setBadger(value?: StorageAdapterConfigForBadger): void;


    hasIpld(): boolean;
    clearIpld(): void;
    getIpld(): StorageAdapterConfigForIpld | undefined;
    setIpld(value?: StorageAdapterConfigForIpld): void;


    getAdapterConfigCase(): StorageAdapterConfig.AdapterConfigCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StorageAdapterConfig.AsObject;
    static toObject(includeInstance: boolean, msg: StorageAdapterConfig): StorageAdapterConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StorageAdapterConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StorageAdapterConfig;
    static deserializeBinaryFromReader(message: StorageAdapterConfig, reader: jspb.BinaryReader): StorageAdapterConfig;
}

export namespace StorageAdapterConfig {
    export type AsObject = {
        badger?: StorageAdapterConfigForBadger.AsObject,
        ipld?: StorageAdapterConfigForIpld.AsObject,
    }

    export enum AdapterConfigCase {
        ADAPTERCONFIG_NOT_SET = 0,
    
    BADGER = 1,

    IPLD = 2,

    }

}

export class GenerateChainRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getKeyAddr(): string;
    setKeyAddr(value: string): void;


    hasStorageAdapter(): boolean;
    clearStorageAdapter(): void;
    getStorageAdapter(): StorageAdapterConfig | undefined;
    setStorageAdapter(value?: StorageAdapterConfig): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateChainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateChainRequest): GenerateChainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateChainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateChainRequest;
    static deserializeBinaryFromReader(message: GenerateChainRequest, reader: jspb.BinaryReader): GenerateChainRequest;
}

export namespace GenerateChainRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        keyAddr: string,
        storageAdapter?: StorageAdapterConfig.AsObject,
    }
}

export class GenerateChainResponse extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateChainResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateChainResponse): GenerateChainResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateChainResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateChainResponse;
    static deserializeBinaryFromReader(message: GenerateChainResponse, reader: jspb.BinaryReader): GenerateChainResponse;
}

export namespace GenerateChainResponse {
    export type AsObject = {
        chainId: string,
    }
}

export class ExportChainRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportChainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ExportChainRequest): ExportChainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportChainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportChainRequest;
    static deserializeBinaryFromReader(message: ExportChainRequest, reader: jspb.BinaryReader): ExportChainRequest;
}

export namespace ExportChainRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
    }
}

export class ExportChainResponse extends jspb.Message { 
    getChainTree(): string;
    setChainTree(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExportChainResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExportChainResponse): ExportChainResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExportChainResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExportChainResponse;
    static deserializeBinaryFromReader(message: ExportChainResponse, reader: jspb.BinaryReader): ExportChainResponse;
}

export namespace ExportChainResponse {
    export type AsObject = {
        chainTree: string,
    }
}

export class ImportChainRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainTree(): string;
    setChainTree(value: string): void;


    hasStorageAdapter(): boolean;
    clearStorageAdapter(): void;
    getStorageAdapter(): StorageAdapterConfig | undefined;
    setStorageAdapter(value?: StorageAdapterConfig): void;

    getSkipValidation(): boolean;
    setSkipValidation(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportChainRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImportChainRequest): ImportChainRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportChainRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportChainRequest;
    static deserializeBinaryFromReader(message: ImportChainRequest, reader: jspb.BinaryReader): ImportChainRequest;
}

export namespace ImportChainRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainTree: string,
        storageAdapter?: StorageAdapterConfig.AsObject,
        skipValidation: boolean,
    }
}

export class ImportChainResponse extends jspb.Message { 
    getChainId(): string;
    setChainId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImportChainResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImportChainResponse): ImportChainResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImportChainResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImportChainResponse;
    static deserializeBinaryFromReader(message: ImportChainResponse, reader: jspb.BinaryReader): ImportChainResponse;
}

export namespace ImportChainResponse {
    export type AsObject = {
        chainId: string,
    }
}

export class GenerateKeyRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateKeyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateKeyRequest): GenerateKeyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateKeyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateKeyRequest;
    static deserializeBinaryFromReader(message: GenerateKeyRequest, reader: jspb.BinaryReader): GenerateKeyRequest;
}

export namespace GenerateKeyRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
    }
}

export class GenerateKeyResponse extends jspb.Message { 
    getKeyAddr(): string;
    setKeyAddr(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenerateKeyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GenerateKeyResponse): GenerateKeyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenerateKeyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenerateKeyResponse;
    static deserializeBinaryFromReader(message: GenerateKeyResponse, reader: jspb.BinaryReader): GenerateKeyResponse;
}

export namespace GenerateKeyResponse {
    export type AsObject = {
        keyAddr: string,
    }
}

export class GetTipRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTipRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTipRequest): GetTipRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTipRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTipRequest;
    static deserializeBinaryFromReader(message: GetTipRequest, reader: jspb.BinaryReader): GetTipRequest;
}

export namespace GetTipRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
    }
}

export class GetTipResponse extends jspb.Message { 
    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTipResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTipResponse): GetTipResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTipResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTipResponse;
    static deserializeBinaryFromReader(message: GetTipResponse, reader: jspb.BinaryReader): GetTipResponse;
}

export namespace GetTipResponse {
    export type AsObject = {
        tip: string,
    }
}

export class ListChainIdsRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListChainIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListChainIdsRequest): ListChainIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListChainIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListChainIdsRequest;
    static deserializeBinaryFromReader(message: ListChainIdsRequest, reader: jspb.BinaryReader): ListChainIdsRequest;
}

export namespace ListChainIdsRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
    }
}

export class ListChainIdsResponse extends jspb.Message { 
    clearChainIdsList(): void;
    getChainIdsList(): Array<string>;
    setChainIdsList(value: Array<string>): void;
    addChainIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListChainIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListChainIdsResponse): ListChainIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListChainIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListChainIdsResponse;
    static deserializeBinaryFromReader(message: ListChainIdsResponse, reader: jspb.BinaryReader): ListChainIdsResponse;
}

export namespace ListChainIdsResponse {
    export type AsObject = {
        chainIdsList: Array<string>,
    }
}

export class ListKeysRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListKeysRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListKeysRequest): ListKeysRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListKeysRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListKeysRequest;
    static deserializeBinaryFromReader(message: ListKeysRequest, reader: jspb.BinaryReader): ListKeysRequest;
}

export namespace ListKeysRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
    }
}

export class ListKeysResponse extends jspb.Message { 
    clearKeyAddrsList(): void;
    getKeyAddrsList(): Array<string>;
    setKeyAddrsList(value: Array<string>): void;
    addKeyAddrs(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListKeysResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListKeysResponse): ListKeysResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListKeysResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListKeysResponse;
    static deserializeBinaryFromReader(message: ListKeysResponse, reader: jspb.BinaryReader): ListKeysResponse;
}

export namespace ListKeysResponse {
    export type AsObject = {
        keyAddrsList: Array<string>,
    }
}

export class SetOwnerRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getKeyAddr(): string;
    setKeyAddr(value: string): void;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): transactions_transactions_pb.SetOwnershipPayload | undefined;
    setPayload(value?: transactions_transactions_pb.SetOwnershipPayload): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOwnerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetOwnerRequest): SetOwnerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOwnerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOwnerRequest;
    static deserializeBinaryFromReader(message: SetOwnerRequest, reader: jspb.BinaryReader): SetOwnerRequest;
}

export namespace SetOwnerRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        keyAddr: string,
        payload?: transactions_transactions_pb.SetOwnershipPayload.AsObject,
    }
}

export class SetOwnerResponse extends jspb.Message { 
    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetOwnerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetOwnerResponse): SetOwnerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetOwnerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetOwnerResponse;
    static deserializeBinaryFromReader(message: SetOwnerResponse, reader: jspb.BinaryReader): SetOwnerResponse;
}

export namespace SetOwnerResponse {
    export type AsObject = {
        tip: string,
    }
}

export class SetDataRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getKeyAddr(): string;
    setKeyAddr(value: string): void;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): transactions_transactions_pb.SetDataPayload | undefined;
    setPayload(value?: transactions_transactions_pb.SetDataPayload): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SetDataRequest): SetDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDataRequest;
    static deserializeBinaryFromReader(message: SetDataRequest, reader: jspb.BinaryReader): SetDataRequest;
}

export namespace SetDataRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        keyAddr: string,
        payload?: transactions_transactions_pb.SetDataPayload.AsObject,
    }
}

export class SetDataResponse extends jspb.Message { 
    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SetDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SetDataResponse): SetDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SetDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SetDataResponse;
    static deserializeBinaryFromReader(message: SetDataResponse, reader: jspb.BinaryReader): SetDataResponse;
}

export namespace SetDataResponse {
    export type AsObject = {
        tip: string,
    }
}

export class ResolveRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getPath(): string;
    setPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResolveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResolveRequest): ResolveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResolveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResolveRequest;
    static deserializeBinaryFromReader(message: ResolveRequest, reader: jspb.BinaryReader): ResolveRequest;
}

export namespace ResolveRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        path: string,
    }
}

export class ResolveResponse extends jspb.Message { 
    getRemainingPath(): string;
    setRemainingPath(value: string): void;

    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResolveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResolveResponse): ResolveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResolveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResolveResponse;
    static deserializeBinaryFromReader(message: ResolveResponse, reader: jspb.BinaryReader): ResolveResponse;
}

export namespace ResolveResponse {
    export type AsObject = {
        remainingPath: string,
        data: Uint8Array | string,
    }
}

export class ResolveAtRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getTip(): string;
    setTip(value: string): void;

    getPath(): string;
    setPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResolveAtRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResolveAtRequest): ResolveAtRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResolveAtRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResolveAtRequest;
    static deserializeBinaryFromReader(message: ResolveAtRequest, reader: jspb.BinaryReader): ResolveAtRequest;
}

export namespace ResolveAtRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        tip: string,
        path: string,
    }
}

export class EstablishTokenRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getKeyAddr(): string;
    setKeyAddr(value: string): void;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): transactions_transactions_pb.EstablishTokenPayload | undefined;
    setPayload(value?: transactions_transactions_pb.EstablishTokenPayload): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstablishTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EstablishTokenRequest): EstablishTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstablishTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstablishTokenRequest;
    static deserializeBinaryFromReader(message: EstablishTokenRequest, reader: jspb.BinaryReader): EstablishTokenRequest;
}

export namespace EstablishTokenRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        keyAddr: string,
        payload?: transactions_transactions_pb.EstablishTokenPayload.AsObject,
    }
}

export class EstablishTokenResponse extends jspb.Message { 
    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EstablishTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EstablishTokenResponse): EstablishTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EstablishTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EstablishTokenResponse;
    static deserializeBinaryFromReader(message: EstablishTokenResponse, reader: jspb.BinaryReader): EstablishTokenResponse;
}

export namespace EstablishTokenResponse {
    export type AsObject = {
        tip: string,
    }
}

export class MintTokenRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getKeyAddr(): string;
    setKeyAddr(value: string): void;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): transactions_transactions_pb.MintTokenPayload | undefined;
    setPayload(value?: transactions_transactions_pb.MintTokenPayload): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MintTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MintTokenRequest): MintTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MintTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MintTokenRequest;
    static deserializeBinaryFromReader(message: MintTokenRequest, reader: jspb.BinaryReader): MintTokenRequest;
}

export namespace MintTokenRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        keyAddr: string,
        payload?: transactions_transactions_pb.MintTokenPayload.AsObject,
    }
}

export class MintTokenResponse extends jspb.Message { 
    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MintTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MintTokenResponse): MintTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MintTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MintTokenResponse;
    static deserializeBinaryFromReader(message: MintTokenResponse, reader: jspb.BinaryReader): MintTokenResponse;
}

export namespace MintTokenResponse {
    export type AsObject = {
        tip: string,
    }
}

export class SendTokenRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getKeyAddr(): string;
    setKeyAddr(value: string): void;

    getTokenName(): string;
    setTokenName(value: string): void;

    getDestinationChainId(): string;
    setDestinationChainId(value: string): void;

    getAmount(): number;
    setAmount(value: number): void;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): transactions_transactions_pb.SendTokenPayload | undefined;
    setPayload(value?: transactions_transactions_pb.SendTokenPayload): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendTokenRequest): SendTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTokenRequest;
    static deserializeBinaryFromReader(message: SendTokenRequest, reader: jspb.BinaryReader): SendTokenRequest;
}

export namespace SendTokenRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        keyAddr: string,
        tokenName: string,
        destinationChainId: string,
        amount: number,
        payload?: transactions_transactions_pb.SendTokenPayload.AsObject,
    }
}

export class SendTokenResponse extends jspb.Message { 
    getSendToken(): string;
    setSendToken(value: string): void;

    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendTokenResponse): SendTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTokenResponse;
    static deserializeBinaryFromReader(message: SendTokenResponse, reader: jspb.BinaryReader): SendTokenResponse;
}

export namespace SendTokenResponse {
    export type AsObject = {
        sendToken: string,
        tip: string,
    }
}

export class ReceiveTokenRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getKeyAddr(): string;
    setKeyAddr(value: string): void;

    getTokenPayload(): string;
    setTokenPayload(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiveTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiveTokenRequest): ReceiveTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiveTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiveTokenRequest;
    static deserializeBinaryFromReader(message: ReceiveTokenRequest, reader: jspb.BinaryReader): ReceiveTokenRequest;
}

export namespace ReceiveTokenRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        keyAddr: string,
        tokenPayload: string,
    }
}

export class ReceiveTokenResponse extends jspb.Message { 
    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReceiveTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReceiveTokenResponse): ReceiveTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReceiveTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReceiveTokenResponse;
    static deserializeBinaryFromReader(message: ReceiveTokenResponse, reader: jspb.BinaryReader): ReceiveTokenResponse;
}

export namespace ReceiveTokenResponse {
    export type AsObject = {
        tip: string,
    }
}

export class GetTokenBalanceRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getTokenName(): string;
    setTokenName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTokenBalanceRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTokenBalanceRequest): GetTokenBalanceRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTokenBalanceRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTokenBalanceRequest;
    static deserializeBinaryFromReader(message: GetTokenBalanceRequest, reader: jspb.BinaryReader): GetTokenBalanceRequest;
}

export namespace GetTokenBalanceRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        tokenName: string,
    }
}

export class GetTokenBalanceResponse extends jspb.Message { 
    getAmount(): number;
    setAmount(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTokenBalanceResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetTokenBalanceResponse): GetTokenBalanceResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTokenBalanceResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTokenBalanceResponse;
    static deserializeBinaryFromReader(message: GetTokenBalanceResponse, reader: jspb.BinaryReader): GetTokenBalanceResponse;
}

export namespace GetTokenBalanceResponse {
    export type AsObject = {
        amount: number,
    }
}

export class PlayTransactionsRequest extends jspb.Message { 

    hasCreds(): boolean;
    clearCreds(): void;
    getCreds(): Credentials | undefined;
    setCreds(value?: Credentials): void;

    getChainId(): string;
    setChainId(value: string): void;

    getKeyAddr(): string;
    setKeyAddr(value: string): void;

    clearTransactionsList(): void;
    getTransactionsList(): Array<transactions_transactions_pb.Transaction>;
    setTransactionsList(value: Array<transactions_transactions_pb.Transaction>): void;
    addTransactions(value?: transactions_transactions_pb.Transaction, index?: number): transactions_transactions_pb.Transaction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayTransactionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PlayTransactionsRequest): PlayTransactionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayTransactionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayTransactionsRequest;
    static deserializeBinaryFromReader(message: PlayTransactionsRequest, reader: jspb.BinaryReader): PlayTransactionsRequest;
}

export namespace PlayTransactionsRequest {
    export type AsObject = {
        creds?: Credentials.AsObject,
        chainId: string,
        keyAddr: string,
        transactionsList: Array<transactions_transactions_pb.Transaction.AsObject>,
    }
}

export class PlayTransactionsResponse extends jspb.Message { 
    getTip(): string;
    setTip(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PlayTransactionsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PlayTransactionsResponse): PlayTransactionsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PlayTransactionsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PlayTransactionsResponse;
    static deserializeBinaryFromReader(message: PlayTransactionsResponse, reader: jspb.BinaryReader): PlayTransactionsResponse;
}

export namespace PlayTransactionsResponse {
    export type AsObject = {
        tip: string,
    }
}
