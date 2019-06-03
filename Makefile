all: go js

srcfiles := $(shell for d in services transactions; do echo src/$$d/$$d.proto; done)
FIRSTGOPATH = $(firstword $(subst :, ,$(GOPATH)))

source: $(srcfiles)

go: build/go/services/services.pb.go build/go/signatures/signatures.pb.go build/go/transactions/transactions.pb.go build/go/bridge/bridge.pb.go

js: build/js/services/services_pb.js build/js/signatures/signatures_pb.js build/js/transactions/transactions_pb.js build/js/bridge/bridge_pb.js

build/go/%/%.pb.go: src/%/%.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/go/services/services.pb.go: src/services/services.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/go/signatures/signatures.pb.go: src/signatures/signatures.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/go/transactions/transactions.pb.go: src/transactions/transactions.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/go/bridge/bridge.pb.go: src/bridge/bridge.proto
	protoc -I=src -I=$(FIRSTGOPATH)/src/github.com/protocolbuffers/protobuf/src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/js/transactions/transactions_pb.js: src/transactions/transactions.proto
	grpc_tools_node_protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js --grpc_out=build/js --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $<

build/js/services/services_pb.js: src/services/services.proto
	grpc_tools_node_protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js --grpc_out=build/js --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $<

build/js/signatures/signatures_pb.js: src/signatures/signatures.proto
	grpc_tools_node_protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js --grpc_out=build/js --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $<

build/js/bridge/bridge_pb.js: src/bridge/bridge.proto
	grpc_tools_node_protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js --grpc_out=build/js --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` $<
