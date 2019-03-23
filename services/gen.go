package services

//go:generate protoc --proto_path=. --proto_path=$GOPATH/src --go_out=plugins=grpc:$GOPATH/src services.proto

// RUN `go generate` in this directory when updating the services.proto. Requires the protoc command to be in your path.
