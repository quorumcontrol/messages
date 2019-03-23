package transactions

//go:generate protoc --proto_path=. --proto_path=$GOPATH/src --go_out=plugins=grpc:$GOPATH/src transactions.proto

// RUN `go generate` in this directory when updating the transactions.proto. Requires the protoc command to be in your path.
