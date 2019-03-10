package messages

//go:generate protoc --proto_path=. --proto_path=$GOPATH/src --go_out=plugins=grpc:$GOPATH/src services/services.proto

// RUN `go generate` in this directory when updating the service.proto. Requires the protoc command to be in your path.
