package community

import (
	"crypto/ecdsa"
	"crypto/sha256"
	"encoding/binary"
	fmt "fmt"

	"github.com/ethereum/go-ethereum/crypto"
	"github.com/pkg/errors"
)

func AckFromEnv(env *Envelope) *Ack {
	return &Ack{
		Id:   env.Id,
		To:   env.To,
		From: env.From,
	}
}

func (e *Envelope) SetID() []byte {
	seqBytes := uint64ToBytes(e.Sequence)
	hsh := sha256.Sum256(appendMultiple(
		e.Id,
		e.To,
		e.From,
		e.Payload,
		seqBytes,
	))
	e.Id = hsh[:]
	return e.Id
}

func (e *Envelope) Signable() []byte {
	if len(e.Id) == 0 {
		e.SetID()
	}
	return e.Id
}

func (e *Envelope) Sign(key *ecdsa.PrivateKey) ([]byte, error) {
	bits, err := crypto.Sign(e.Signable(), key)
	if err != nil {
		return nil, errors.Wrap(err, "error signing")
	}
	e.Signature = bits
	return bits, nil
}

func (a *Ack) Signable() []byte {
	if len(a.Id) == 0 {
		panic(fmt.Errorf("the Id of an Ack should never be nil, but it was"))
	}
	return a.Id
}

func (a *Ack) Sign(key *ecdsa.PrivateKey) ([]byte, error) {
	bits, err := crypto.Sign(a.Signable(), key)
	if err != nil {
		return nil, errors.Wrap(err, "error signing")
	}
	a.Signature = bits
	return bits, nil
}

func (rm *RequestMissing) Signable() []byte {
	seqBytes := uint64ToBytes(rm.Sequence)
	preImage := appendMultiple(rm.Identifier, seqBytes)
	hsh := sha256.Sum256(preImage)

	return hsh[:]
}

func (rm *RequestMissing) Sign(key *ecdsa.PrivateKey) ([]byte, error) {
	bits, err := crypto.Sign(rm.Signable(), key)
	if err != nil {
		return nil, errors.Wrap(err, "error signing")
	}
	rm.Signature = bits
	return bits, nil
}

func appendMultiple(bits ...[]byte) []byte {
	var retSlice []byte
	for _, b := range bits {
		retSlice = append(retSlice, b...)
	}
	return retSlice
}

func uint64ToBytes(x uint64) []byte {
	buf := make([]byte, binary.MaxVarintLen64)
	n := binary.PutUvarint(buf, x)
	return buf[:n]
}
