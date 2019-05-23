// Code generated by protoc-gen-go. DO NOT EDIT.
// source: transactions/transactions.proto

package transactions // import "github.com/quorumcontrol/messages/build/go/transactions"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import any "github.com/golang/protobuf/ptypes/any"
import signatures "github.com/quorumcontrol/messages/build/go/signatures"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Transaction_Type int32

const (
	Transaction_UNKNOWN        Transaction_Type = 0
	Transaction_SETDATA        Transaction_Type = 1
	Transaction_SETOWNERSHIP   Transaction_Type = 2
	Transaction_ESTABLISHTOKEN Transaction_Type = 3
	Transaction_MINTTOKEN      Transaction_Type = 4
	Transaction_SENDTOKEN      Transaction_Type = 5
	Transaction_RECEIVETOKEN   Transaction_Type = 6
	Transaction_STAKE          Transaction_Type = 7
)

var Transaction_Type_name = map[int32]string{
	0: "UNKNOWN",
	1: "SETDATA",
	2: "SETOWNERSHIP",
	3: "ESTABLISHTOKEN",
	4: "MINTTOKEN",
	5: "SENDTOKEN",
	6: "RECEIVETOKEN",
	7: "STAKE",
}
var Transaction_Type_value = map[string]int32{
	"UNKNOWN":        0,
	"SETDATA":        1,
	"SETOWNERSHIP":   2,
	"ESTABLISHTOKEN": 3,
	"MINTTOKEN":      4,
	"SENDTOKEN":      5,
	"RECEIVETOKEN":   6,
	"STAKE":          7,
}

func (x Transaction_Type) String() string {
	return proto.EnumName(Transaction_Type_name, int32(x))
}
func (Transaction_Type) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{8, 0}
}

type SetDataPayload struct {
	Path                 string   `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	Value                []byte   `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SetDataPayload) Reset()         { *m = SetDataPayload{} }
func (m *SetDataPayload) String() string { return proto.CompactTextString(m) }
func (*SetDataPayload) ProtoMessage()    {}
func (*SetDataPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{0}
}
func (m *SetDataPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SetDataPayload.Unmarshal(m, b)
}
func (m *SetDataPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SetDataPayload.Marshal(b, m, deterministic)
}
func (dst *SetDataPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SetDataPayload.Merge(dst, src)
}
func (m *SetDataPayload) XXX_Size() int {
	return xxx_messageInfo_SetDataPayload.Size(m)
}
func (m *SetDataPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_SetDataPayload.DiscardUnknown(m)
}

var xxx_messageInfo_SetDataPayload proto.InternalMessageInfo

func (m *SetDataPayload) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *SetDataPayload) GetValue() []byte {
	if m != nil {
		return m.Value
	}
	return nil
}

type SetOwnershipPayload struct {
	Authentication       []string `protobuf:"bytes,1,rep,name=authentication,proto3" json:"authentication,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SetOwnershipPayload) Reset()         { *m = SetOwnershipPayload{} }
func (m *SetOwnershipPayload) String() string { return proto.CompactTextString(m) }
func (*SetOwnershipPayload) ProtoMessage()    {}
func (*SetOwnershipPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{1}
}
func (m *SetOwnershipPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SetOwnershipPayload.Unmarshal(m, b)
}
func (m *SetOwnershipPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SetOwnershipPayload.Marshal(b, m, deterministic)
}
func (dst *SetOwnershipPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SetOwnershipPayload.Merge(dst, src)
}
func (m *SetOwnershipPayload) XXX_Size() int {
	return xxx_messageInfo_SetOwnershipPayload.Size(m)
}
func (m *SetOwnershipPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_SetOwnershipPayload.DiscardUnknown(m)
}

var xxx_messageInfo_SetOwnershipPayload proto.InternalMessageInfo

func (m *SetOwnershipPayload) GetAuthentication() []string {
	if m != nil {
		return m.Authentication
	}
	return nil
}

type TokenMonetaryPolicy struct {
	Maximum              uint64   `protobuf:"varint,1,opt,name=maximum,proto3" json:"maximum,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *TokenMonetaryPolicy) Reset()         { *m = TokenMonetaryPolicy{} }
func (m *TokenMonetaryPolicy) String() string { return proto.CompactTextString(m) }
func (*TokenMonetaryPolicy) ProtoMessage()    {}
func (*TokenMonetaryPolicy) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{2}
}
func (m *TokenMonetaryPolicy) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TokenMonetaryPolicy.Unmarshal(m, b)
}
func (m *TokenMonetaryPolicy) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TokenMonetaryPolicy.Marshal(b, m, deterministic)
}
func (dst *TokenMonetaryPolicy) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TokenMonetaryPolicy.Merge(dst, src)
}
func (m *TokenMonetaryPolicy) XXX_Size() int {
	return xxx_messageInfo_TokenMonetaryPolicy.Size(m)
}
func (m *TokenMonetaryPolicy) XXX_DiscardUnknown() {
	xxx_messageInfo_TokenMonetaryPolicy.DiscardUnknown(m)
}

var xxx_messageInfo_TokenMonetaryPolicy proto.InternalMessageInfo

func (m *TokenMonetaryPolicy) GetMaximum() uint64 {
	if m != nil {
		return m.Maximum
	}
	return 0
}

type EstablishTokenPayload struct {
	Name                 string               `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	MonetaryPolicy       *TokenMonetaryPolicy `protobuf:"bytes,2,opt,name=monetary_policy,json=monetaryPolicy,proto3" json:"monetary_policy,omitempty"`
	XXX_NoUnkeyedLiteral struct{}             `json:"-"`
	XXX_unrecognized     []byte               `json:"-"`
	XXX_sizecache        int32                `json:"-"`
}

func (m *EstablishTokenPayload) Reset()         { *m = EstablishTokenPayload{} }
func (m *EstablishTokenPayload) String() string { return proto.CompactTextString(m) }
func (*EstablishTokenPayload) ProtoMessage()    {}
func (*EstablishTokenPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{3}
}
func (m *EstablishTokenPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_EstablishTokenPayload.Unmarshal(m, b)
}
func (m *EstablishTokenPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_EstablishTokenPayload.Marshal(b, m, deterministic)
}
func (dst *EstablishTokenPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EstablishTokenPayload.Merge(dst, src)
}
func (m *EstablishTokenPayload) XXX_Size() int {
	return xxx_messageInfo_EstablishTokenPayload.Size(m)
}
func (m *EstablishTokenPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_EstablishTokenPayload.DiscardUnknown(m)
}

var xxx_messageInfo_EstablishTokenPayload proto.InternalMessageInfo

func (m *EstablishTokenPayload) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *EstablishTokenPayload) GetMonetaryPolicy() *TokenMonetaryPolicy {
	if m != nil {
		return m.MonetaryPolicy
	}
	return nil
}

type MintTokenPayload struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Amount               uint64   `protobuf:"varint,2,opt,name=amount,proto3" json:"amount,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MintTokenPayload) Reset()         { *m = MintTokenPayload{} }
func (m *MintTokenPayload) String() string { return proto.CompactTextString(m) }
func (*MintTokenPayload) ProtoMessage()    {}
func (*MintTokenPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{4}
}
func (m *MintTokenPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MintTokenPayload.Unmarshal(m, b)
}
func (m *MintTokenPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MintTokenPayload.Marshal(b, m, deterministic)
}
func (dst *MintTokenPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MintTokenPayload.Merge(dst, src)
}
func (m *MintTokenPayload) XXX_Size() int {
	return xxx_messageInfo_MintTokenPayload.Size(m)
}
func (m *MintTokenPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_MintTokenPayload.DiscardUnknown(m)
}

var xxx_messageInfo_MintTokenPayload proto.InternalMessageInfo

func (m *MintTokenPayload) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *MintTokenPayload) GetAmount() uint64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

type SendTokenPayload struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Amount               uint64   `protobuf:"varint,3,opt,name=amount,proto3" json:"amount,omitempty"`
	Destination          string   `protobuf:"bytes,4,opt,name=destination,proto3" json:"destination,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SendTokenPayload) Reset()         { *m = SendTokenPayload{} }
func (m *SendTokenPayload) String() string { return proto.CompactTextString(m) }
func (*SendTokenPayload) ProtoMessage()    {}
func (*SendTokenPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{5}
}
func (m *SendTokenPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SendTokenPayload.Unmarshal(m, b)
}
func (m *SendTokenPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SendTokenPayload.Marshal(b, m, deterministic)
}
func (dst *SendTokenPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SendTokenPayload.Merge(dst, src)
}
func (m *SendTokenPayload) XXX_Size() int {
	return xxx_messageInfo_SendTokenPayload.Size(m)
}
func (m *SendTokenPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_SendTokenPayload.DiscardUnknown(m)
}

var xxx_messageInfo_SendTokenPayload proto.InternalMessageInfo

func (m *SendTokenPayload) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *SendTokenPayload) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *SendTokenPayload) GetAmount() uint64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func (m *SendTokenPayload) GetDestination() string {
	if m != nil {
		return m.Destination
	}
	return ""
}

type ReceiveTokenPayload struct {
	SendTokenTransactionId string                `protobuf:"bytes,1,opt,name=send_token_transaction_id,json=sendTokenTransactionId,proto3" json:"send_token_transaction_id,omitempty"`
	Tip                    []byte                `protobuf:"bytes,2,opt,name=tip,proto3" json:"tip,omitempty"`
	Signature              *signatures.Signature `protobuf:"bytes,3,opt,name=signature,proto3" json:"signature,omitempty"`
	Leaves                 [][]byte              `protobuf:"bytes,4,rep,name=Leaves,proto3" json:"Leaves,omitempty"`
	XXX_NoUnkeyedLiteral   struct{}              `json:"-"`
	XXX_unrecognized       []byte                `json:"-"`
	XXX_sizecache          int32                 `json:"-"`
}

func (m *ReceiveTokenPayload) Reset()         { *m = ReceiveTokenPayload{} }
func (m *ReceiveTokenPayload) String() string { return proto.CompactTextString(m) }
func (*ReceiveTokenPayload) ProtoMessage()    {}
func (*ReceiveTokenPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{6}
}
func (m *ReceiveTokenPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ReceiveTokenPayload.Unmarshal(m, b)
}
func (m *ReceiveTokenPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ReceiveTokenPayload.Marshal(b, m, deterministic)
}
func (dst *ReceiveTokenPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ReceiveTokenPayload.Merge(dst, src)
}
func (m *ReceiveTokenPayload) XXX_Size() int {
	return xxx_messageInfo_ReceiveTokenPayload.Size(m)
}
func (m *ReceiveTokenPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_ReceiveTokenPayload.DiscardUnknown(m)
}

var xxx_messageInfo_ReceiveTokenPayload proto.InternalMessageInfo

func (m *ReceiveTokenPayload) GetSendTokenTransactionId() string {
	if m != nil {
		return m.SendTokenTransactionId
	}
	return ""
}

func (m *ReceiveTokenPayload) GetTip() []byte {
	if m != nil {
		return m.Tip
	}
	return nil
}

func (m *ReceiveTokenPayload) GetSignature() *signatures.Signature {
	if m != nil {
		return m.Signature
	}
	return nil
}

func (m *ReceiveTokenPayload) GetLeaves() [][]byte {
	if m != nil {
		return m.Leaves
	}
	return nil
}

type TokenPayload struct {
	TransactionId        string                `protobuf:"bytes,1,opt,name=transaction_id,json=transactionId,proto3" json:"transaction_id,omitempty"`
	Tip                  string                `protobuf:"bytes,2,opt,name=tip,proto3" json:"tip,omitempty"`
	Signature            *signatures.Signature `protobuf:"bytes,3,opt,name=signature,proto3" json:"signature,omitempty"`
	Leaves               [][]byte              `protobuf:"bytes,4,rep,name=leaves,proto3" json:"leaves,omitempty"`
	XXX_NoUnkeyedLiteral struct{}              `json:"-"`
	XXX_unrecognized     []byte                `json:"-"`
	XXX_sizecache        int32                 `json:"-"`
}

func (m *TokenPayload) Reset()         { *m = TokenPayload{} }
func (m *TokenPayload) String() string { return proto.CompactTextString(m) }
func (*TokenPayload) ProtoMessage()    {}
func (*TokenPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{7}
}
func (m *TokenPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TokenPayload.Unmarshal(m, b)
}
func (m *TokenPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TokenPayload.Marshal(b, m, deterministic)
}
func (dst *TokenPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TokenPayload.Merge(dst, src)
}
func (m *TokenPayload) XXX_Size() int {
	return xxx_messageInfo_TokenPayload.Size(m)
}
func (m *TokenPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_TokenPayload.DiscardUnknown(m)
}

var xxx_messageInfo_TokenPayload proto.InternalMessageInfo

func (m *TokenPayload) GetTransactionId() string {
	if m != nil {
		return m.TransactionId
	}
	return ""
}

func (m *TokenPayload) GetTip() string {
	if m != nil {
		return m.Tip
	}
	return ""
}

func (m *TokenPayload) GetSignature() *signatures.Signature {
	if m != nil {
		return m.Signature
	}
	return nil
}

func (m *TokenPayload) GetLeaves() [][]byte {
	if m != nil {
		return m.Leaves
	}
	return nil
}

type Transaction struct {
	Type                 Transaction_Type `protobuf:"varint,1,opt,name=type,proto3,enum=transactions.Transaction_Type" json:"type,omitempty"`
	Payload              *any.Any         `protobuf:"bytes,2,opt,name=payload,proto3" json:"payload,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *Transaction) Reset()         { *m = Transaction{} }
func (m *Transaction) String() string { return proto.CompactTextString(m) }
func (*Transaction) ProtoMessage()    {}
func (*Transaction) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_13eb593761788088, []int{8}
}
func (m *Transaction) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Transaction.Unmarshal(m, b)
}
func (m *Transaction) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Transaction.Marshal(b, m, deterministic)
}
func (dst *Transaction) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Transaction.Merge(dst, src)
}
func (m *Transaction) XXX_Size() int {
	return xxx_messageInfo_Transaction.Size(m)
}
func (m *Transaction) XXX_DiscardUnknown() {
	xxx_messageInfo_Transaction.DiscardUnknown(m)
}

var xxx_messageInfo_Transaction proto.InternalMessageInfo

func (m *Transaction) GetType() Transaction_Type {
	if m != nil {
		return m.Type
	}
	return Transaction_UNKNOWN
}

func (m *Transaction) GetPayload() *any.Any {
	if m != nil {
		return m.Payload
	}
	return nil
}

func init() {
	proto.RegisterType((*SetDataPayload)(nil), "transactions.SetDataPayload")
	proto.RegisterType((*SetOwnershipPayload)(nil), "transactions.SetOwnershipPayload")
	proto.RegisterType((*TokenMonetaryPolicy)(nil), "transactions.TokenMonetaryPolicy")
	proto.RegisterType((*EstablishTokenPayload)(nil), "transactions.EstablishTokenPayload")
	proto.RegisterType((*MintTokenPayload)(nil), "transactions.MintTokenPayload")
	proto.RegisterType((*SendTokenPayload)(nil), "transactions.SendTokenPayload")
	proto.RegisterType((*ReceiveTokenPayload)(nil), "transactions.ReceiveTokenPayload")
	proto.RegisterType((*TokenPayload)(nil), "transactions.TokenPayload")
	proto.RegisterType((*Transaction)(nil), "transactions.Transaction")
	proto.RegisterEnum("transactions.Transaction_Type", Transaction_Type_name, Transaction_Type_value)
}

func init() {
	proto.RegisterFile("transactions/transactions.proto", fileDescriptor_transactions_13eb593761788088)
}

var fileDescriptor_transactions_13eb593761788088 = []byte{
	// 625 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x94, 0x4f, 0x6f, 0xd3, 0x4c,
	0x10, 0xc6, 0x5f, 0x27, 0x6e, 0xa3, 0x4c, 0xd2, 0xbc, 0xd6, 0xf6, 0x8f, 0xd2, 0x22, 0x41, 0xb0,
	0x04, 0xca, 0xc9, 0x96, 0xd2, 0x03, 0x2a, 0x12, 0x48, 0x29, 0xb5, 0xd4, 0xd0, 0xd6, 0xa9, 0x6c,
	0x43, 0x25, 0x2e, 0xd1, 0x26, 0x5e, 0x92, 0x15, 0xf6, 0xae, 0xf1, 0xae, 0x5b, 0x7c, 0xe4, 0x3b,
	0xf0, 0x3d, 0xf8, 0x74, 0xdc, 0x91, 0xed, 0xb8, 0xb1, 0xab, 0x22, 0x0e, 0xdc, 0xe6, 0x19, 0xcf,
	0x3c, 0xfb, 0xdb, 0xc9, 0x6c, 0xe0, 0x99, 0x8c, 0x31, 0x13, 0x78, 0x21, 0x29, 0x67, 0xc2, 0xac,
	0x0a, 0x23, 0x8a, 0xb9, 0xe4, 0xa8, 0x5b, 0xcd, 0x1d, 0x3d, 0x11, 0x74, 0xc9, 0xb0, 0x4c, 0x62,
	0x22, 0xcc, 0x4d, 0x58, 0x94, 0x1e, 0x1d, 0x2e, 0x39, 0x5f, 0x06, 0xc4, 0xcc, 0xd5, 0x3c, 0xf9,
	0x6c, 0x62, 0x96, 0x16, 0x9f, 0xf4, 0xd7, 0xd0, 0x73, 0x89, 0x3c, 0xc3, 0x12, 0x5f, 0xe3, 0x34,
	0xe0, 0xd8, 0x47, 0x08, 0xd4, 0x08, 0xcb, 0x55, 0x5f, 0x19, 0x28, 0xc3, 0xb6, 0x93, 0xc7, 0x68,
	0x0f, 0xb6, 0x6e, 0x71, 0x90, 0x90, 0x7e, 0x63, 0xa0, 0x0c, 0xbb, 0x4e, 0x21, 0xf4, 0x37, 0xb0,
	0xeb, 0x12, 0x39, 0xbd, 0x63, 0x24, 0x16, 0x2b, 0x1a, 0x95, 0x06, 0x2f, 0xa1, 0x87, 0x13, 0xb9,
	0x22, 0x4c, 0xd2, 0x05, 0xce, 0xe8, 0xfa, 0xca, 0xa0, 0x39, 0x6c, 0x3b, 0x0f, 0xb2, 0xba, 0x09,
	0xbb, 0x1e, 0xff, 0x42, 0xd8, 0x15, 0x67, 0x44, 0xe2, 0x38, 0xbd, 0xe6, 0x01, 0x5d, 0xa4, 0xa8,
	0x0f, 0xad, 0x10, 0x7f, 0xa3, 0x61, 0x12, 0xe6, 0x08, 0xaa, 0x53, 0x4a, 0xfd, 0x0e, 0xf6, 0x2d,
	0x21, 0xf1, 0x3c, 0xa0, 0x62, 0x95, 0x77, 0x56, 0x90, 0x19, 0x0e, 0x49, 0x89, 0x9c, 0xc5, 0xe8,
	0x3d, 0xfc, 0x1f, 0xae, 0x8d, 0x67, 0x51, 0xee, 0x9c, 0xc3, 0x77, 0x46, 0xcf, 0x8d, 0xda, 0x30,
	0x1f, 0x41, 0x70, 0x7a, 0x61, 0x4d, 0xeb, 0x6f, 0x41, 0xbb, 0xa2, 0x4c, 0xfe, 0xf5, 0xcc, 0x03,
	0xd8, 0xc6, 0x21, 0x4f, 0x98, 0xcc, 0x8f, 0x52, 0x9d, 0xb5, 0xd2, 0x23, 0xd0, 0x5c, 0xc2, 0xfc,
	0x5a, 0x7f, 0x0f, 0x1a, 0xd4, 0x5f, 0x77, 0x37, 0xe8, 0xc6, 0xaf, 0xf1, 0xa8, 0x5f, 0xb3, 0xea,
	0x87, 0x06, 0xd0, 0xf1, 0x89, 0x90, 0x94, 0x15, 0xe3, 0x55, 0xf3, 0x96, 0x6a, 0x4a, 0xff, 0xa9,
	0xc0, 0xae, 0x43, 0x16, 0x84, 0xde, 0x92, 0xda, 0xa9, 0x27, 0x70, 0x28, 0x08, 0xf3, 0x67, 0x32,
	0x4b, 0xce, 0x2a, 0x83, 0x98, 0xdd, 0xc3, 0x1c, 0x88, 0x12, 0xd5, 0xdb, 0x7c, 0x9e, 0xf8, 0x48,
	0x83, 0xa6, 0xa4, 0xd1, 0x7a, 0x03, 0xb2, 0x10, 0x1d, 0x43, 0xfb, 0x7e, 0xd5, 0x72, 0xc2, 0xce,
	0x68, 0xdf, 0xa8, 0x2c, 0x9f, 0x5b, 0x86, 0xce, 0xa6, 0x2e, 0xbb, 0xd3, 0x25, 0xc1, 0xb7, 0x44,
	0xf4, 0xd5, 0x41, 0x73, 0xd8, 0x75, 0xd6, 0x4a, 0xff, 0xa1, 0x40, 0xb7, 0x86, 0xfa, 0x02, 0x7a,
	0x8f, 0xf2, 0xed, 0xc8, 0x3f, 0x61, 0xb5, 0xff, 0x0d, 0x2b, 0xa8, 0x61, 0x15, 0x4a, 0xff, 0xa5,
	0x40, 0xa7, 0x32, 0x07, 0x34, 0x02, 0x55, 0xa6, 0x51, 0xf1, 0xb3, 0xf7, 0x46, 0x4f, 0x1f, 0xec,
	0xd2, 0x46, 0x18, 0x5e, 0x1a, 0x11, 0x27, 0xaf, 0x45, 0x06, 0xb4, 0xa2, 0xe2, 0x52, 0xeb, 0x15,
	0xdc, 0x33, 0x8a, 0x07, 0x69, 0x94, 0x0f, 0xd2, 0x18, 0xb3, 0xd4, 0x29, 0x8b, 0xf4, 0xef, 0x0a,
	0xa8, 0x59, 0x3b, 0xea, 0x40, 0xeb, 0x83, 0x7d, 0x61, 0x4f, 0x6f, 0x6c, 0xed, 0xbf, 0x4c, 0xb8,
	0x96, 0x77, 0x36, 0xf6, 0xc6, 0x9a, 0x82, 0x34, 0xe8, 0xba, 0x96, 0x37, 0xbd, 0xb1, 0x2d, 0xc7,
	0x3d, 0x9f, 0x5c, 0x6b, 0x0d, 0x84, 0xa0, 0x67, 0xb9, 0xde, 0xf8, 0xf4, 0x72, 0xe2, 0x9e, 0x7b,
	0xd3, 0x0b, 0xcb, 0xd6, 0x9a, 0x68, 0x07, 0xda, 0x57, 0x13, 0xdb, 0x2b, 0xa4, 0x9a, 0x49, 0xd7,
	0xb2, 0xcf, 0x0a, 0xb9, 0x95, 0x79, 0x38, 0xd6, 0x3b, 0x6b, 0xf2, 0xd1, 0x2a, 0x32, 0xdb, 0xa8,
	0x0d, 0x5b, 0xae, 0x37, 0xbe, 0xb0, 0xb4, 0xd6, 0xe9, 0xc9, 0xa7, 0x57, 0x4b, 0x2a, 0x57, 0xc9,
	0xdc, 0x58, 0xf0, 0xd0, 0xfc, 0x9a, 0xf0, 0x38, 0x09, 0x17, 0x9c, 0xc9, 0x98, 0x07, 0x66, 0x48,
	0x84, 0xc0, 0x4b, 0x22, 0xcc, 0x79, 0x42, 0x03, 0xdf, 0x5c, 0xf2, 0xda, 0xdf, 0xd3, 0x7c, 0x3b,
	0xbf, 0xd5, 0xf1, 0xef, 0x00, 0x00, 0x00, 0xff, 0xff, 0xae, 0x83, 0x51, 0x8e, 0xc2, 0x04, 0x00,
	0x00,
}
