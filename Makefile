all: go js ts

FIRSTGOPATH = $(firstword $(subst :, ,$(GOPATH)))

GOGO_PROTOBUF_VERSION = $(shell grep github.com/gogo/protobuf go.mod | awk '{print $$2}')

NODE_PROTOC_TS_PLUGIN = $(shell npm bin -g)/protoc-gen-ts

NPM_BIN = $(shell cd build/js && npm bin)

$(NODE_PROTOC_TS_PLUGIN):
	cd build/js && npm install --only=dev

${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf:
	go mod download

go: build/go/community/community.pb.go build/go/config/config.pb.go build/go/services/services.pb.go build/go/signatures/signatures.pb.go build/go/transactions/transactions.pb.go build/go/bridge/bridge.pb.go

js: build/js/community/community_pb.js build/js/config/config_pb.js build/js/services/services_pb.js build/js/signatures/signatures_pb.js build/js/transactions/transactions_pb.js build/js/bridge/bridge_pb.js

ts: build/js/community/community_pb.d.ts build/js/config/config_pb.d.ts build/js/services/services_pb.d.ts build/js/signatures/signatures_pb.d.ts build/js/transactions/transactions_pb.d.ts build/js/bridge/bridge_pb.d.ts

build/go/%.pb.go: src/%.proto ${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf
	protoc -I=src -I=${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf --gogofaster_out=Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,paths=source_relative:build/go $<

build/js/%_pb.js: src/%.proto ${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf
	protoc -I=src -I=${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf --js_out=import_style=commonjs,binary:build/js $<

build/js/%_pb.d.ts: src/%.proto  ${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf
	protoc -I=src -I=${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf --ts_out="build/js" $<

test: go
	cd build/go && go test ./...

# Fails if protobuf generates code that differs from what's committed
# Intended for a CI check
diff: all
	@if [ -n "$$(git status --porcelain '*.pb.go' '*_pb.js' '*_pb.d.ts')" ]; then \
	echo "Protobuf code doesn't match generated code in repo"; \
	false; \
	fi

clean:
	find build -name '*.pb.go' -exec rm {} \;
	find build -name '*_pb.js' -exec rm {} \;
	find build -name '*_pb.d.ts' -exec rm {} \;

.PHONY: all clean go js ts test diff
