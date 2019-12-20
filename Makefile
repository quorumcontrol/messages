all: go js ts

FIRSTGOPATH = $(firstword $(subst :, ,$(GOPATH)))
NODE_PROTOC_TS_PLUGIN = $(shell npm bin -g)/protoc-gen-ts

$(NODE_PROTOC_TS_PLUGIN):
	npm install -g ts-protoc-gen

${FIRSTGOPATH}/src/github.com/gogo/protobuf/protobuf:
	go get github.com/gogo/protobuf/...	

go: build/go/community/community.pb.go build/go/config/config.pb.go build/go/services/services.pb.go build/go/signatures/signatures.pb.go build/go/transactions/transactions.pb.go build/go/bridge/bridge.pb.go

js: build/js/community/community_pb.js build/js/config/config_pb.js build/js/services/services_pb.js build/js/signatures/signatures_pb.js build/js/transactions/transactions_pb.js build/js/bridge/bridge_pb.js

ts: build/js/community/community_pb.d.ts build/js/config/config_pb.d.ts build/js/services/services_pb.d.ts build/js/signatures/signatures_pb.d.ts build/js/transactions/transactions_pb.d.ts build/js/bridge/bridge_pb.d.ts

build/go/%.pb.go: src/%.proto ${FIRSTGOPATH}/src/github.com/gogo/protobuf/protobuf
	protoc -I=src -I=${FIRSTGOPATH}/src/github.com/gogo/protobuf/protobuf --gogofaster_out=Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,paths=source_relative:build/go $<

build/js/%_pb.js: src/%.proto ${FIRSTGOPATH}/src/github.com/gogo/protobuf/protobuf
	protoc -I=src -I=${FIRSTGOPATH}/src/github.com/gogo/protobuf/protobuf --js_out=import_style=commonjs,binary:build/js $<

build/js/%_pb.d.ts: src/%.proto  ${FIRSTGOPATH}/src/github.com/gogo/protobuf/protobuf
	protoc -I=src -I=${FIRSTGOPATH}/src/github.com/gogo/protobuf/protobuf --ts_out="build/js" $<

test:
	cd build/go && go test ./...

clean:
	find build -name '*.pb.go' -exec rm {} \;
	find build -name '*_pb.js' -exec rm {} \;
	find build -name '*_pb.d.ts' -exec rm {} \;

.PHONY: all clean go js ts test
