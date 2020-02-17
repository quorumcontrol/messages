# Messages

This is the library that stores both the .proto files and also the generated
JS & Go code for the serialized messages passed around the Tupelo ecosystem.

## Installing

### Go

`go get github.com/quorumcontrol/messages/v2`

### JS

`npm install tupelo-messages`

## Developing

### Prerequisites

- GNU Make
- NPM
- curl
- unzip
- Go 1.13+

You will also need to install the version of protoc specified at the top of the
`Makefile` or be connected to the Internet so make can download it. See:
https://github.com/protocolbuffers/protobuf and
https://github.com/golang/protobuf

## Building

Run `make` in the root directory.

## Testing

### Go

```
make test
```
