// package: config
// file: config/config.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class PublicKeySet extends jspb.Message { 
    getVerKeyHex(): string;
    setVerKeyHex(value: string): void;

    getDestKeyHex(): string;
    setDestKeyHex(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PublicKeySet.AsObject;
    static toObject(includeInstance: boolean, msg: PublicKeySet): PublicKeySet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PublicKeySet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PublicKeySet;
    static deserializeBinaryFromReader(message: PublicKeySet, reader: jspb.BinaryReader): PublicKeySet;
}

export namespace PublicKeySet {
    export type AsObject = {
        verKeyHex: string,
        destKeyHex: string,
    }
}

export class NotaryGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getTransactionToken(): string;
    setTransactionToken(value: string): void;

    getBurnAmount(): number;
    setBurnAmount(value: number): void;

    getTransactionTopic(): string;
    setTransactionTopic(value: string): void;

    getCommitTopic(): string;
    setCommitTopic(value: string): void;

    clearValidatorGeneratorsList(): void;
    getValidatorGeneratorsList(): Array<string>;
    setValidatorGeneratorsList(value: Array<string>): void;
    addValidatorGenerators(value: string, index?: number): string;

    clearTransactionsList(): void;
    getTransactionsList(): Array<string>;
    setTransactionsList(value: Array<string>): void;
    addTransactions(value: string, index?: number): string;

    clearSignersList(): void;
    getSignersList(): Array<PublicKeySet>;
    setSignersList(value: Array<PublicKeySet>): void;
    addSigners(value?: PublicKeySet, index?: number): PublicKeySet;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotaryGroup.AsObject;
    static toObject(includeInstance: boolean, msg: NotaryGroup): NotaryGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotaryGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotaryGroup;
    static deserializeBinaryFromReader(message: NotaryGroup, reader: jspb.BinaryReader): NotaryGroup;
}

export namespace NotaryGroup {
    export type AsObject = {
        id: string,
        transactionToken: string,
        burnAmount: number,
        transactionTopic: string,
        commitTopic: string,
        validatorGeneratorsList: Array<string>,
        transactionsList: Array<string>,
        signersList: Array<PublicKeySet.AsObject>,
    }
}
