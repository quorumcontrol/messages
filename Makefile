all: go js

go: build/go/services/services.pb.go build/go/transactions/transactions.pb.go

js: build/js/services/services_pb.js build/js/transactions/transactions_pb.js

build/go/services/services.pb.go: src/services/services.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/go/transactions/transactions.pb.go: src/transactions/transactions.proto
	protoc --proto_path=src --go_out=paths=source_relative,plugins=grpc:build/go $<

build/js/services/services_pb.js: src/services/services.proto
	protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js $<

build/js/transactions/transactions_pb.js: src/transactions/transactions.proto
	protoc --proto_path=src --js_out=import_style=commonjs,binary:build/js $<
