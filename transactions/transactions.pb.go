// Code generated by protoc-gen-go. DO NOT EDIT.
// source: transactions/transactions.proto

package transactions // import "github.com/quorumcontrol/messages/transactions"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import any "github.com/golang/protobuf/ptypes/any"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type TransactionType int32

const (
	TransactionType_Unknown        TransactionType = 0
	TransactionType_SetData        TransactionType = 1
	TransactionType_SetOwnership   TransactionType = 2
	TransactionType_EstablishToken TransactionType = 3
	TransactionType_MintToken      TransactionType = 4
	TransactionType_Stake          TransactionType = 5
)

var TransactionType_name = map[int32]string{
	0: "Unknown",
	1: "SetData",
	2: "SetOwnership",
	3: "EstablishToken",
	4: "MintToken",
	5: "Stake",
}
var TransactionType_value = map[string]int32{
	"Unknown":        0,
	"SetData":        1,
	"SetOwnership":   2,
	"EstablishToken": 3,
	"MintToken":      4,
	"Stake":          5,
}

func (x TransactionType) String() string {
	return proto.EnumName(TransactionType_name, int32(x))
}
func (TransactionType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_transactions_01ae1bf4627811fc, []int{0}
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
	return fileDescriptor_transactions_01ae1bf4627811fc, []int{0}
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
	return fileDescriptor_transactions_01ae1bf4627811fc, []int{1}
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
	return fileDescriptor_transactions_01ae1bf4627811fc, []int{2}
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
	return fileDescriptor_transactions_01ae1bf4627811fc, []int{3}
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
	return fileDescriptor_transactions_01ae1bf4627811fc, []int{4}
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

type Transaction struct {
	Type                 TransactionType `protobuf:"varint,1,opt,name=type,proto3,enum=transactions.TransactionType" json:"type,omitempty"`
	Payload              *any.Any        `protobuf:"bytes,2,opt,name=Payload,proto3" json:"Payload,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *Transaction) Reset()         { *m = Transaction{} }
func (m *Transaction) String() string { return proto.CompactTextString(m) }
func (*Transaction) ProtoMessage()    {}
func (*Transaction) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_01ae1bf4627811fc, []int{5}
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

func (m *Transaction) GetType() TransactionType {
	if m != nil {
		return m.Type
	}
	return TransactionType_Unknown
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
	proto.RegisterType((*Transaction)(nil), "transactions.Transaction")
	proto.RegisterEnum("transactions.TransactionType", TransactionType_name, TransactionType_value)
}

func init() {
	proto.RegisterFile("transactions/transactions.proto", fileDescriptor_transactions_01ae1bf4627811fc)
}

var fileDescriptor_transactions_01ae1bf4627811fc = []byte{
	// 408 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0x41, 0x8f, 0xd3, 0x30,
	0x10, 0x85, 0xc9, 0x6e, 0xba, 0x55, 0xa7, 0x25, 0x1b, 0x79, 0x17, 0x54, 0x90, 0x10, 0x25, 0x07,
	0x54, 0x71, 0x70, 0x60, 0xb9, 0x21, 0x81, 0x04, 0x82, 0x0b, 0xd2, 0x8a, 0x95, 0x5b, 0x2e, 0x5c,
	0xd0, 0x34, 0x98, 0xc6, 0x6a, 0x6c, 0x87, 0x64, 0x4c, 0xc9, 0xbf, 0x47, 0x75, 0x13, 0xb6, 0xa9,
	0x90, 0xf6, 0xe6, 0xe7, 0xcc, 0xcc, 0xfb, 0x32, 0xcf, 0xf0, 0x94, 0x2a, 0x34, 0x35, 0x66, 0xa4,
	0xac, 0xa9, 0xd3, 0x43, 0xc1, 0xcb, 0xca, 0x92, 0x65, 0x93, 0xc3, 0xbb, 0xc7, 0x8f, 0xd6, 0xd6,
	0xae, 0x0b, 0x99, 0xfa, 0x6f, 0x2b, 0xf7, 0x33, 0x45, 0xd3, 0xec, 0x0b, 0x93, 0x37, 0x10, 0x2d,
	0x24, 0x7d, 0x44, 0xc2, 0x1b, 0x6c, 0x0a, 0x8b, 0x3f, 0x18, 0x83, 0xb0, 0x44, 0xca, 0xa7, 0xc1,
	0x2c, 0x98, 0x8f, 0x84, 0x3f, 0xb3, 0x4b, 0x18, 0xfc, 0xc6, 0xc2, 0xc9, 0xe9, 0xc9, 0x2c, 0x98,
	0x4f, 0xc4, 0x5e, 0x24, 0x6f, 0xe1, 0x62, 0x21, 0xe9, 0xcb, 0xd6, 0xc8, 0xaa, 0xce, 0x55, 0xd9,
	0x0d, 0x78, 0x0e, 0x11, 0x3a, 0xca, 0xa5, 0x21, 0x95, 0xe1, 0x0e, 0x60, 0x1a, 0xcc, 0x4e, 0xe7,
	0x23, 0x71, 0x74, 0x9b, 0xa4, 0x70, 0xb1, 0xb4, 0x1b, 0x69, 0xae, 0xad, 0x91, 0x84, 0x55, 0x73,
	0x63, 0x0b, 0x95, 0x35, 0x6c, 0x0a, 0x43, 0x8d, 0x7f, 0x94, 0x76, 0xda, 0x23, 0x84, 0xa2, 0x93,
	0xc9, 0x16, 0x1e, 0x7c, 0xaa, 0x09, 0x57, 0x85, 0xaa, 0x73, 0xdf, 0x79, 0x80, 0x6c, 0x50, 0xcb,
	0x0e, 0x79, 0x77, 0x66, 0x9f, 0xe1, 0x5c, 0xb7, 0x83, 0xbf, 0x97, 0x7e, 0xb2, 0x87, 0x1f, 0x5f,
	0x3d, 0xe3, 0xbd, 0x7d, 0xfd, 0x07, 0x41, 0x44, 0xba, 0xa7, 0x93, 0x77, 0x10, 0x5f, 0x2b, 0x43,
	0x77, 0x7a, 0x3e, 0x84, 0x33, 0xd4, 0xd6, 0x19, 0xf2, 0x56, 0xa1, 0x68, 0x55, 0x52, 0xc2, 0x78,
	0x79, 0xeb, 0xc9, 0x5e, 0x41, 0x48, 0x4d, 0xb9, 0x6f, 0x8d, 0xae, 0x9e, 0x1c, 0xf1, 0xdc, 0x8a,
	0x65, 0x53, 0x4a, 0xe1, 0x4b, 0x19, 0x87, 0x61, 0x6b, 0xdc, 0xfe, 0xc5, 0x25, 0xdf, 0x67, 0xca,
	0xbb, 0x4c, 0xf9, 0x7b, 0xd3, 0x88, 0xae, 0xe8, 0xc5, 0x06, 0xce, 0x8f, 0x06, 0xb1, 0x31, 0x0c,
	0xbf, 0x9a, 0x8d, 0xb1, 0x5b, 0x13, 0xdf, 0xdb, 0x89, 0x36, 0xf6, 0x38, 0x60, 0x31, 0x4c, 0x0e,
	0x73, 0x8c, 0x4f, 0x18, 0x83, 0xa8, 0xbf, 0xe9, 0xf8, 0x94, 0xdd, 0x87, 0xd1, 0xbf, 0x25, 0xc4,
	0x21, 0x1b, 0xc1, 0x60, 0x41, 0xb8, 0x91, 0xf1, 0xe0, 0xc3, 0xcb, 0x6f, 0x7c, 0xad, 0x28, 0x77,
	0x2b, 0x9e, 0x59, 0x9d, 0xfe, 0x72, 0xb6, 0x72, 0x3a, 0xb3, 0x86, 0x2a, 0x5b, 0xa4, 0x5a, 0xd6,
	0x35, 0xae, 0x65, 0xff, 0x91, 0xae, 0xce, 0x3c, 0xf5, 0xeb, 0xbf, 0x01, 0x00, 0x00, 0xff, 0xff,
	0xea, 0x65, 0xe5, 0xad, 0xc8, 0x02, 0x00, 0x00,
}
