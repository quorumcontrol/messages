package community

import (
	"testing"

	"github.com/ethereum/go-ethereum/crypto"
	"github.com/stretchr/testify/require"
)

func TestSignEnvelope(t *testing.T) {
	key, err := crypto.GenerateKey()
	require.Nil(t, err)

	e := &Envelope{
		To:       []byte("did:test:bob"),
		From:     []byte("did:test:alice"),
		Payload:  []byte("message payload"),
		Sequence: 0,
	}

	_, err = e.Sign(key)
	require.Nil(t, err)
	require.NotNil(t, e.Signature)
}

func TestSignAck(t *testing.T) {
	key, err := crypto.GenerateKey()
	require.Nil(t, err)

	e := &Envelope{
		To:       []byte("did:test:bob"),
		From:     []byte("did:test:alice"),
		Payload:  []byte("message payload"),
		Sequence: 0,
	}
	e.SetID()

	ack := AckFromEnv(e)
	_, err = ack.Sign(key)
	require.Nil(t, err)
	require.NotNil(t, ack.Signature)
}
