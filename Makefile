all: go js

NODE_PROTOC_PLUGIN = $(shell npm bin -g)/grpc_tools_node_protoc_plugin

$(NODE_PROTOC_PLUGIN):
	npm install -g grpc-tools

go: build/go/services/services.pb.go build/go/signatures/signatures.pb.go build/go/transactions/transactions.pb.go build/go/bridge/bridge.pb.go

js: build/js/services/services_pb.js build/js/signatures/signatures_pb.js build/js/transactions/transactions_pb.js build/js/bridge/bridge_pb.js

build/go/%.pb.go: src/%.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/js/%_pb.js: src/%.proto $(NODE_PROTOC_PLUGIN)
	grpc_tools_node_protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js --grpc_out=build/js --plugin=protoc-gen-grpc=$(NODE_PROTOC_PLUGIN) $<

test:
	cd build/go && go test ./...

clean:
	find build -name '*.pb.go' -exec rm {} \;
	find build -name '*_pb.js' -exec rm {} \;

.PHONY: all clean go js test
