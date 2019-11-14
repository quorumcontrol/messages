package transactions

import (
	"testing"

	signatures "github.com/quorumcontrol/messages/v2/build/go/signatures"
	"github.com/stretchr/testify/require"
)

func fakeSetData() (*SetDataPayload, *Transaction) {
	payload := &SetDataPayload{
		Path:  "foo",
		Value: []byte("bar"),
	}

	return payload, &Transaction{
		Type:           Transaction_SETDATA,
		SetDataPayload: payload,
	}
}

func fakeSetOwnership() (*SetOwnershipPayload, *Transaction) {
	payload := &SetOwnershipPayload{
		Authentication: []string{"privileged"},
	}

	return payload, &Transaction{
		Type:                Transaction_SETOWNERSHIP,
		SetOwnershipPayload: payload,
	}
}

func fakeEstablishToken() (*EstablishTokenPayload, *Transaction) {
	payload := &EstablishTokenPayload{
		Name: "foo",
		MonetaryPolicy: &TokenMonetaryPolicy{
			Maximum: 50,
		},
	}

	return payload, &Transaction{
		Type:                  Transaction_ESTABLISHTOKEN,
		EstablishTokenPayload: payload,
	}
}

func fakeMintToken() (*MintTokenPayload, *Transaction) {
	payload := &MintTokenPayload{
		Name:   "foo",
		Amount: 50,
	}

	return payload, &Transaction{
		Type:             Transaction_MINTTOKEN,
		MintTokenPayload: payload,
	}
}

func fakeSendToken() (*SendTokenPayload, *Transaction) {
	payload := &SendTokenPayload{
		Name:   "foo",
		Amount: 50,
	}

	return payload, &Transaction{
		Type:             Transaction_SENDTOKEN,
		SendTokenPayload: payload,
	}
}

func fakeReceiveToken() (*ReceiveTokenPayload, *Transaction) {
	payload := &ReceiveTokenPayload{
		SendTokenTransactionId: "foo",
		Tip:                    []byte("tip"),
		TreeState:              &signatures.TreeState{},
		Leaves:                 [][]byte{},
	}

	return payload, &Transaction{
		Type:                Transaction_RECEIVETOKEN,
		ReceiveTokenPayload: payload,
	}

}

func fakeStake() (*StakePayload, *Transaction) {
	payload := &StakePayload{
		GroupId: "foo",
		Amount:  5,
	}

	return payload, &Transaction{
		Type:         Transaction_STAKE,
		StakePayload: payload,
	}

}

func TestEnsureSetDataPayload(t *testing.T) {
	// Success when the transaction is of type SETDATA
	setDataPayload, setDataTxn := fakeSetData()
	p, err := setDataTxn.EnsureSetDataPayload()
	require.Nil(t, err)
	require.Equal(t, p, setDataPayload)

	// Failure when the transaction is not of type SETDATA
	_, receiveTokenTxn := fakeReceiveToken()
	p, err = receiveTokenTxn.EnsureSetDataPayload()
	require.NotNil(t, err)
	require.Nil(t, p)
}

func TestEnsureSetOwnershipPayload(t *testing.T) {
	// Success when the transaction is of type SETOWNERSHIP
	setOwnershipPayload, setOwnershipTransaction := fakeSetOwnership()
	p, err := setOwnershipTransaction.EnsureSetOwnershipPayload()
	require.Nil(t, err)
	require.Equal(t, p, setOwnershipPayload)

	// Failure when the transaction is not of type SETOWNERSHIP
	_, receiveTokenTxn := fakeReceiveToken()
	p, err = receiveTokenTxn.EnsureSetOwnershipPayload()
	require.NotNil(t, err)
	require.Nil(t, p)
}

func TestEnsureEstablishTokenPayload(t *testing.T) {
	// Success when the transaction is of type ESTABLISHTOKEN
	establishTokenPayload, establishTokenTxn := fakeEstablishToken()
	p, err := establishTokenTxn.EnsureEstablishTokenPayload()
	require.Nil(t, err)
	require.Equal(t, p, establishTokenPayload)

	// Failure when the transaction is not of type ESTABLISHTOKEN
	_, receiveTokenTxn := fakeReceiveToken()
	p, err = receiveTokenTxn.EnsureEstablishTokenPayload()
	require.NotNil(t, err)
	require.Nil(t, p)
}

func TestEnsureMintTokenPayload(t *testing.T) {
	// Success when the transaction is of type MINTTOKEN
	mintTokenPayload, mintTokenTxn := fakeMintToken()
	p, err := mintTokenTxn.EnsureMintTokenPayload()
	require.Nil(t, err)
	require.Equal(t, p, mintTokenPayload)

	// Failure when the transaction is not of type MINTTOKEN
	_, receiveTokenTxn := fakeReceiveToken()
	p, err = receiveTokenTxn.EnsureMintTokenPayload()
	require.NotNil(t, err)
	require.Nil(t, p)
}

func TestEnsureSendTokenPayload(t *testing.T) {
	// Success when the transaction is of type SENDTOKEN
	sendTokenPayload, sendTokenTxn := fakeSendToken()
	p, err := sendTokenTxn.EnsureSendTokenPayload()
	require.Nil(t, err)
	require.Equal(t, p, sendTokenPayload)

	// Failure when the transaction is not of type SENDTOKEN
	_, receiveTokenTxn := fakeReceiveToken()
	p, err = receiveTokenTxn.EnsureSendTokenPayload()
	require.NotNil(t, err)
	require.Nil(t, p)
}

func TestEnsureReceiveTokenPayload(t *testing.T) {
	// Success when the transaction is of type RECEIVETOKEN
	receiveTokenPayload, receiveTokenTxn := fakeReceiveToken()
	p, err := receiveTokenTxn.EnsureReceiveTokenPayload()
	require.Nil(t, err)
	require.Equal(t, p, receiveTokenPayload)

	// Failure when the transaction is not of type RECEIVETOKEN
	_, sendTokenTxn := fakeSendToken()
	p, err = sendTokenTxn.EnsureReceiveTokenPayload()
	require.NotNil(t, err)
	require.Nil(t, p)
}

func TestEnsureStakePayload(t *testing.T) {
	// Success when the transaction is of type STAKE
	receiveTokenPayload, receiveTokenTxn := fakeStake()
	p, err := receiveTokenTxn.EnsureStakePayload()
	require.Nil(t, err)
	require.Equal(t, p, receiveTokenPayload)

	// Failure when the transaction is not of type STAKE
	_, sendTokenTxn := fakeSendToken()
	p, err = sendTokenTxn.EnsureStakePayload()
	require.NotNil(t, err)
	require.Nil(t, p)
}
