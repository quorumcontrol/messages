package transactions

import "fmt"

func (txn *Transaction) EnsureSetDataPayload() (*SetDataPayload, error) {
	if txn.Type == Transaction_SETDATA {
		return txn.SetDataPayload, nil
	} else {
		return nil, fmt.Errorf("not a SETDATA transaction")
	}
}

func (txn *Transaction) EnsureSetOwnershipPayload() (*SetOwnershipPayload, error) {
	if txn.Type == Transaction_SETOWNERSHIP {
		return txn.SetOwnershipPayload, nil
	} else {
		return nil, fmt.Errorf("not a SETOWNERSHIP transaction")
	}
}

func (txn *Transaction) EnsureEstablishTokenPayload() (*EstablishTokenPayload, error) {
	if txn.Type == Transaction_ESTABLISHTOKEN {
		return txn.EstablishTokenPayload, nil
	} else {
		return nil, fmt.Errorf("not an ESTABLISHTOKEN transaction")
	}
}

func (txn *Transaction) EnsureMintTokenPayload() (*MintTokenPayload, error) {
	if txn.Type == Transaction_MINTTOKEN {
		return txn.MintTokenPayload, nil
	} else {
		return nil, fmt.Errorf("not a MINTTOKEN transaction")
	}
}

func (txn *Transaction) EnsureSendTokenPayload() (*SendTokenPayload, error) {
	if txn.Type == Transaction_SENDTOKEN {
		return txn.SendTokenPayload, nil
	} else {
		return nil, fmt.Errorf("not a SENDTOKEN transaction")
	}
}

func (txn *Transaction) EnsureReceiveTokenPayload() (*ReceiveTokenPayload, error) {
	if txn.Type == Transaction_RECEIVETOKEN {
		return txn.ReceiveTokenPayload, nil
	} else {
		return nil, fmt.Errorf("not a RECEIVETOKEN transaction")
	}
}
