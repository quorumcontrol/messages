# Messages

This is the library that stores both the .proto files and also the generated JS/GO code for the serialized messages passed around the Tupelo ecosystem.

## Installing
You will need Make. Make will further install the NPM package 'grpc-tools' if necessary.

You will also need the protoc file installed. See: https://github.com/protocolbuffers/protobuf and  https://github.com/golang/protobuf

## Building
Run `make` in the root directory. 

## Testing
### Go
```
make test
```
