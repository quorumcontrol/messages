// package: community
// file: community/community.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Envelope extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): void;

    getTo(): Uint8Array | string;
    getTo_asU8(): Uint8Array;
    getTo_asB64(): string;
    setTo(value: Uint8Array | string): void;

    getFrom(): Uint8Array | string;
    getFrom_asU8(): Uint8Array;
    getFrom_asB64(): string;
    setFrom(value: Uint8Array | string): void;

    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): void;

    getSequence(): number;
    setSequence(value: number): void;

    clearTopicsList(): void;
    getTopicsList(): Array<Uint8Array | string>;
    getTopicsList_asU8(): Array<Uint8Array>;
    getTopicsList_asB64(): Array<string>;
    setTopicsList(value: Array<Uint8Array | string>): void;
    addTopics(value: Uint8Array | string, index?: number): Uint8Array | string;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Envelope.AsObject;
    static toObject(includeInstance: boolean, msg: Envelope): Envelope.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Envelope, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Envelope;
    static deserializeBinaryFromReader(message: Envelope, reader: jspb.BinaryReader): Envelope;
}

export namespace Envelope {
    export type AsObject = {
        id: Uint8Array | string,
        to: Uint8Array | string,
        from: Uint8Array | string,
        payload: Uint8Array | string,
        sequence: number,
        topicsList: Array<Uint8Array | string>,
        signature: Uint8Array | string,
    }
}

export class Ack extends jspb.Message { 
    getId(): Uint8Array | string;
    getId_asU8(): Uint8Array;
    getId_asB64(): string;
    setId(value: Uint8Array | string): void;

    getTo(): Uint8Array | string;
    getTo_asU8(): Uint8Array;
    getTo_asB64(): string;
    setTo(value: Uint8Array | string): void;

    getFrom(): Uint8Array | string;
    getFrom_asU8(): Uint8Array;
    getFrom_asB64(): string;
    setFrom(value: Uint8Array | string): void;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ack.AsObject;
    static toObject(includeInstance: boolean, msg: Ack): Ack.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ack, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ack;
    static deserializeBinaryFromReader(message: Ack, reader: jspb.BinaryReader): Ack;
}

export namespace Ack {
    export type AsObject = {
        id: Uint8Array | string,
        to: Uint8Array | string,
        from: Uint8Array | string,
        signature: Uint8Array | string,
    }
}

export class RequestMissing extends jspb.Message { 
    getSequence(): number;
    setSequence(value: number): void;

    getIdentifier(): Uint8Array | string;
    getIdentifier_asU8(): Uint8Array;
    getIdentifier_asB64(): string;
    setIdentifier(value: Uint8Array | string): void;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestMissing.AsObject;
    static toObject(includeInstance: boolean, msg: RequestMissing): RequestMissing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestMissing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestMissing;
    static deserializeBinaryFromReader(message: RequestMissing, reader: jspb.BinaryReader): RequestMissing;
}

export namespace RequestMissing {
    export type AsObject = {
        sequence: number,
        identifier: Uint8Array | string,
        signature: Uint8Array | string,
    }
}

export class SavedMessages extends jspb.Message { 
    getTo(): Uint8Array | string;
    getTo_asU8(): Uint8Array;
    getTo_asB64(): string;
    setTo(value: Uint8Array | string): void;

    getCid(): Uint8Array | string;
    getCid_asU8(): Uint8Array;
    getCid_asB64(): string;
    setCid(value: Uint8Array | string): void;

    getProvider(): Uint8Array | string;
    getProvider_asU8(): Uint8Array;
    getProvider_asB64(): string;
    setProvider(value: Uint8Array | string): void;

    getSignature(): Uint8Array | string;
    getSignature_asU8(): Uint8Array;
    getSignature_asB64(): string;
    setSignature(value: Uint8Array | string): void;

    clearMessagesList(): void;
    getMessagesList(): Array<Envelope>;
    setMessagesList(value: Array<Envelope>): void;
    addMessages(value?: Envelope, index?: number): Envelope;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SavedMessages.AsObject;
    static toObject(includeInstance: boolean, msg: SavedMessages): SavedMessages.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SavedMessages, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SavedMessages;
    static deserializeBinaryFromReader(message: SavedMessages, reader: jspb.BinaryReader): SavedMessages;
}

export namespace SavedMessages {
    export type AsObject = {
        to: Uint8Array | string,
        cid: Uint8Array | string,
        provider: Uint8Array | string,
        signature: Uint8Array | string,
        messagesList: Array<Envelope.AsObject>,
    }
}
