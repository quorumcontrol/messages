all: go js

srcfiles := $(shell for d in services transactions; do echo src/$$d/$$d.proto; done)

source: $(srcfiles)

go: build/go/services/services.pb.go build/go/signatures/signatures.pb.go build/go/transactions/transactions.pb.go

js: build/js/services/services_pb.js build/js/signatures/signatures_pb.js build/js/transactions/transactions_pb.js

build/go/%/%.pb.go: src/%/%.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/go/services/services.pb.go: src/services/services.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/go/signatures/signatures.pb.go: src/signatures/signatures.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/go/transactions/transactions.pb.go: src/transactions/transactions.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/js/transactions/transactions_pb.js: src/transactions/transactions.proto
	protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js $<

build/js/services/services_pb.js: src/services/services.proto
	protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js $<

build/js/signatures/signatures_pb.js: src/signatures/signatures.proto
	protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js $<
