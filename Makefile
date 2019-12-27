PROTOC_VERSION := 3.11.2

all: go js ts

UNAME := $(shell uname)
ifeq ($(UNAME),Darwin)
  PLATFORM := osx
else
  ifeq ($(UNAME),Linux)
    PLATFORM := linux
  endif
endif

PROTOC_IN_PATH := $(shell hash protoc 2>/dev/null; echo $$?)

ifeq ($(PROTOC_IN_PATH),0)
  ifeq ($(shell protoc --version | awk '{print $$2}'),$(PROTOC_VERSION))
    PROTOC := $(shell which protoc)
  endif
else
  PROTOC ?= .protoc/protoc-$(PROTOC_VERSION)
endif

.protoc/protoc-$(PROTOC_VERSION):
	@echo "Downloading protoc $(PROTOC_VERSION) because you don't have it installed."
	mkdir -p .protoc
	curl -sL https://github.com/protocolbuffers/protobuf/releases/download/v$(PROTOC_VERSION)/protoc-$(PROTOC_VERSION)-$(PLATFORM)-x86_64.zip -o .protoc/protoc.zip
	cd .protoc && unzip -jo protoc.zip bin/protoc && mv protoc protoc-$(PROTOC_VERSION) && rm protoc.zip

FIRSTGOPATH = $(firstword $(subst :, ,$(GOPATH)))

GOGO_PROTOBUF_VERSION = $(shell grep github.com/gogo/protobuf go.mod | awk '{print $$2}')

NPM_BIN = $(shell cd build/js && npm bin)
NODE_PROTOC_TS_PLUGIN = $(NPM_BIN)/protoc-gen-ts

$(NODE_PROTOC_TS_PLUGIN):
	cd build/js && npm install --only=dev

${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf:
	go mod download
	go install github.com/gogo/protobuf/...

go: build/go/community/community.pb.go build/go/config/config.pb.go build/go/services/services.pb.go build/go/signatures/signatures.pb.go build/go/transactions/transactions.pb.go build/go/bridge/bridge.pb.go

js: build/js/community/community_pb.js build/js/config/config_pb.js build/js/services/services_pb.js build/js/signatures/signatures_pb.js build/js/transactions/transactions_pb.js build/js/bridge/bridge_pb.js

ts: build/js/community/community_pb.d.ts build/js/config/config_pb.d.ts build/js/services/services_pb.d.ts build/js/signatures/signatures_pb.d.ts build/js/transactions/transactions_pb.d.ts build/js/bridge/bridge_pb.d.ts

build/go/%.pb.go: src/%.proto $(PROTOC) ${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf
	$(PROTOC) -I=src -I=${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf --gogofaster_out=Mgoogle/protobuf/any.proto=github.com/gogo/protobuf/types,paths=source_relative:build/go $<

build/js/%_pb.js: src/%.proto $(PROTOC) ${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf
	$(PROTOC) -I=src -I=${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf --js_out=import_style=commonjs,binary:build/js $<

build/js/%_pb.d.ts: src/%.proto $(PROTOC) ${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf $(NODE_PROTOC_TS_PLUGIN)
	$(PROTOC) -I=src -I=${FIRSTGOPATH}/pkg/mod/github.com/gogo/protobuf@$(GOGO_PROTOBUF_VERSION)/protobuf --ts_out="build/js" $<

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
	rm -rf .protoc
	rm -rf build/js/node_modules

.PHONY: all clean go js ts test diff
