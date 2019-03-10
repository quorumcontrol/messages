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
	return fileDescriptor_transactions_19816d9fa335d880, []int{0}
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
	return fileDescriptor_transactions_19816d9fa335d880, []int{1}
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

type CoinMonetaryPolicy struct {
	Maximum              uint64   `protobuf:"varint,1,opt,name=maximum,proto3" json:"maximum,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CoinMonetaryPolicy) Reset()         { *m = CoinMonetaryPolicy{} }
func (m *CoinMonetaryPolicy) String() string { return proto.CompactTextString(m) }
func (*CoinMonetaryPolicy) ProtoMessage()    {}
func (*CoinMonetaryPolicy) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_19816d9fa335d880, []int{2}
}
func (m *CoinMonetaryPolicy) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CoinMonetaryPolicy.Unmarshal(m, b)
}
func (m *CoinMonetaryPolicy) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CoinMonetaryPolicy.Marshal(b, m, deterministic)
}
func (dst *CoinMonetaryPolicy) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CoinMonetaryPolicy.Merge(dst, src)
}
func (m *CoinMonetaryPolicy) XXX_Size() int {
	return xxx_messageInfo_CoinMonetaryPolicy.Size(m)
}
func (m *CoinMonetaryPolicy) XXX_DiscardUnknown() {
	xxx_messageInfo_CoinMonetaryPolicy.DiscardUnknown(m)
}

var xxx_messageInfo_CoinMonetaryPolicy proto.InternalMessageInfo

func (m *CoinMonetaryPolicy) GetMaximum() uint64 {
	if m != nil {
		return m.Maximum
	}
	return 0
}

type EstablishCoinPayload struct {
	Name                 string              `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	MonetaryPolicy       *CoinMonetaryPolicy `protobuf:"bytes,2,opt,name=monetary_policy,json=monetaryPolicy,proto3" json:"monetary_policy,omitempty"`
	XXX_NoUnkeyedLiteral struct{}            `json:"-"`
	XXX_unrecognized     []byte              `json:"-"`
	XXX_sizecache        int32               `json:"-"`
}

func (m *EstablishCoinPayload) Reset()         { *m = EstablishCoinPayload{} }
func (m *EstablishCoinPayload) String() string { return proto.CompactTextString(m) }
func (*EstablishCoinPayload) ProtoMessage()    {}
func (*EstablishCoinPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_19816d9fa335d880, []int{3}
}
func (m *EstablishCoinPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_EstablishCoinPayload.Unmarshal(m, b)
}
func (m *EstablishCoinPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_EstablishCoinPayload.Marshal(b, m, deterministic)
}
func (dst *EstablishCoinPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_EstablishCoinPayload.Merge(dst, src)
}
func (m *EstablishCoinPayload) XXX_Size() int {
	return xxx_messageInfo_EstablishCoinPayload.Size(m)
}
func (m *EstablishCoinPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_EstablishCoinPayload.DiscardUnknown(m)
}

var xxx_messageInfo_EstablishCoinPayload proto.InternalMessageInfo

func (m *EstablishCoinPayload) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *EstablishCoinPayload) GetMonetaryPolicy() *CoinMonetaryPolicy {
	if m != nil {
		return m.MonetaryPolicy
	}
	return nil
}

type MintCoinPayload struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Amount               uint64   `protobuf:"varint,2,opt,name=amount,proto3" json:"amount,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MintCoinPayload) Reset()         { *m = MintCoinPayload{} }
func (m *MintCoinPayload) String() string { return proto.CompactTextString(m) }
func (*MintCoinPayload) ProtoMessage()    {}
func (*MintCoinPayload) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_19816d9fa335d880, []int{4}
}
func (m *MintCoinPayload) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MintCoinPayload.Unmarshal(m, b)
}
func (m *MintCoinPayload) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MintCoinPayload.Marshal(b, m, deterministic)
}
func (dst *MintCoinPayload) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MintCoinPayload.Merge(dst, src)
}
func (m *MintCoinPayload) XXX_Size() int {
	return xxx_messageInfo_MintCoinPayload.Size(m)
}
func (m *MintCoinPayload) XXX_DiscardUnknown() {
	xxx_messageInfo_MintCoinPayload.DiscardUnknown(m)
}

var xxx_messageInfo_MintCoinPayload proto.InternalMessageInfo

func (m *MintCoinPayload) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *MintCoinPayload) GetAmount() uint64 {
	if m != nil {
		return m.Amount
	}
	return 0
}

type Transaction struct {
	Type                 string   `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	Payload              *any.Any `protobuf:"bytes,2,opt,name=Payload,proto3" json:"Payload,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Transaction) Reset()         { *m = Transaction{} }
func (m *Transaction) String() string { return proto.CompactTextString(m) }
func (*Transaction) ProtoMessage()    {}
func (*Transaction) Descriptor() ([]byte, []int) {
	return fileDescriptor_transactions_19816d9fa335d880, []int{5}
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

func (m *Transaction) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
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
	proto.RegisterType((*CoinMonetaryPolicy)(nil), "transactions.CoinMonetaryPolicy")
	proto.RegisterType((*EstablishCoinPayload)(nil), "transactions.EstablishCoinPayload")
	proto.RegisterType((*MintCoinPayload)(nil), "transactions.MintCoinPayload")
	proto.RegisterType((*Transaction)(nil), "transactions.Transaction")
}

func init() {
	proto.RegisterFile("transactions/transactions.proto", fileDescriptor_transactions_19816d9fa335d880)
}

var fileDescriptor_transactions_19816d9fa335d880 = []byte{
	// 339 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0x92, 0x3f, 0x4f, 0xe3, 0x40,
	0x10, 0xc5, 0xe5, 0xbb, 0x5c, 0xa2, 0x6c, 0xa2, 0x44, 0xda, 0x8b, 0x90, 0xa1, 0xc1, 0x72, 0x81,
	0x52, 0xad, 0x11, 0x74, 0x48, 0x29, 0xf8, 0x57, 0x50, 0x44, 0x04, 0x87, 0x8a, 0x06, 0x8d, 0xcd,
	0x62, 0xaf, 0xe4, 0xdd, 0x31, 0xf6, 0x2c, 0xe0, 0x6f, 0x8f, 0xec, 0xd8, 0x90, 0x40, 0x41, 0x37,
	0x6f, 0x3c, 0xf3, 0xde, 0x4f, 0x9e, 0x65, 0x87, 0x54, 0x80, 0x29, 0x21, 0x26, 0x85, 0xa6, 0x0c,
	0xb6, 0x85, 0xc8, 0x0b, 0x24, 0xe4, 0xe3, 0xed, 0xde, 0xc1, 0x7e, 0x82, 0x98, 0x64, 0x32, 0x68,
	0xbe, 0x45, 0xf6, 0x39, 0x00, 0x53, 0x6d, 0x06, 0xfd, 0x33, 0x36, 0x59, 0x4b, 0xba, 0x02, 0x82,
	0x15, 0x54, 0x19, 0xc2, 0x13, 0xe7, 0xac, 0x97, 0x03, 0xa5, 0xae, 0xe3, 0x39, 0xf3, 0x61, 0xd8,
	0xd4, 0x7c, 0xc6, 0xfe, 0xbd, 0x42, 0x66, 0xa5, 0xfb, 0xc7, 0x73, 0xe6, 0xe3, 0x70, 0x23, 0xfc,
	0x05, 0xfb, 0xbf, 0x96, 0x74, 0xfb, 0x66, 0x64, 0x51, 0xa6, 0x2a, 0xef, 0x0c, 0x8e, 0xd8, 0x04,
	0x2c, 0xa5, 0xd2, 0x90, 0x8a, 0xa1, 0x06, 0x70, 0x1d, 0xef, 0xef, 0x7c, 0x18, 0x7e, 0xeb, 0xfa,
	0x82, 0xf1, 0x4b, 0x54, 0x66, 0x89, 0x46, 0x12, 0x14, 0xd5, 0x0a, 0x33, 0x15, 0x57, 0xdc, 0x65,
	0x03, 0x0d, 0xef, 0x4a, 0x5b, 0xdd, 0x10, 0xf4, 0xc2, 0x4e, 0xfa, 0x96, 0xcd, 0xae, 0x4b, 0x82,
	0x28, 0x53, 0x65, 0x5a, 0x2f, 0x6e, 0x01, 0x1b, 0xd0, 0xb2, 0x03, 0xae, 0x6b, 0x7e, 0xc3, 0xa6,
	0xba, 0xf5, 0x7d, 0xcc, 0x1b, 0xe3, 0x06, 0x7d, 0x74, 0xe2, 0x89, 0x9d, 0xbf, 0xf5, 0x13, 0x20,
	0x9c, 0xe8, 0x1d, 0xed, 0x2f, 0xd8, 0x74, 0xa9, 0x0c, 0xfd, 0x96, 0xb8, 0xc7, 0xfa, 0xa0, 0xd1,
	0x1a, 0x6a, 0x82, 0x7a, 0x61, 0xab, 0xfc, 0x3b, 0x36, 0xba, 0xff, 0x4a, 0xac, 0x57, 0xa9, 0xca,
	0x3f, 0x57, 0xeb, 0x9a, 0x0b, 0x36, 0x68, 0x9d, 0x5b, 0xc8, 0x99, 0xd8, 0x1c, 0x4c, 0x74, 0x07,
	0x13, 0xe7, 0xa6, 0x0a, 0xbb, 0xa1, 0x8b, 0xe3, 0x07, 0x91, 0x28, 0x4a, 0x6d, 0x24, 0x62, 0xd4,
	0xc1, 0x8b, 0xc5, 0xc2, 0xea, 0x18, 0x0d, 0x15, 0x98, 0x05, 0x5a, 0x96, 0x25, 0x24, 0x72, 0xf7,
	0x51, 0x44, 0xfd, 0xc6, 0xe8, 0xf4, 0x23, 0x00, 0x00, 0xff, 0xff, 0x3b, 0xd0, 0x70, 0xfb, 0x38,
	0x02, 0x00, 0x00,
}
