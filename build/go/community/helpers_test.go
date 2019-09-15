package community

import (
	"crypto/ecdsa"
	"testing"

	"github.com/ethereum/go-ethereum/crypto"
	"github.com/stretchr/testify/require"
)

func generateKey(t *testing.T) *ecdsa.PrivateKey {
	key, err := crypto.GenerateKey()
	require.Nil(t, err)

	return key
}

func TestSignEnvelope(t *testing.T) {
	key := generateKey(t)

	e := &Envelope{
		To:       []byte("did:test:bob"),
		From:     []byte("did:test:alice"),
		Payload:  []byte("message payload"),
		Sequence: 0,
	}

	_, err := e.Sign(key)
	require.Nil(t, err)
	require.NotNil(t, e.Signature)
}

func TestSignAck(t *testing.T) {
	key := generateKey(t)

	e := &Envelope{
		To:       []byte("did:test:bob"),
		From:     []byte("did:test:alice"),
		Payload:  []byte("message payload"),
		Sequence: 0,
	}
	e.SetID()

	ack := AckFromEnv(e)
	_, err := ack.Sign(key)
	require.Nil(t, err)
	require.NotNil(t, ack.Signature)
}

func TestSignRequestMissing(t *testing.T) {
	key := generateKey(t)

	req := &RequestMissing{
		Sequence:   5,
		Identifier: []byte("id"),
	}

	_, err := req.Sign(key)
	require.Nil(t, err)
	require.NotNil(t, req.Signature)
}
