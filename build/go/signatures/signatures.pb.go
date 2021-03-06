// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: signatures/signatures.proto

package signatures

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type PublicKey_Type int32

const (
	PublicKey_KeyTypeBLSGroupSig PublicKey_Type = 0
	PublicKey_KeyTypeSecp256k1   PublicKey_Type = 1
)

var PublicKey_Type_name = map[int32]string{
	0: "KeyTypeBLSGroupSig",
	1: "KeyTypeSecp256k1",
}

var PublicKey_Type_value = map[string]int32{
	"KeyTypeBLSGroupSig": 0,
	"KeyTypeSecp256k1":   1,
}

func (x PublicKey_Type) String() string {
	return proto.EnumName(PublicKey_Type_name, int32(x))
}

func (PublicKey_Type) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{0, 0}
}

type PublicKey struct {
	Type      PublicKey_Type `protobuf:"varint,1,opt,name=type,proto3,enum=v2signatures.PublicKey_Type" json:"type,omitempty"`
	PublicKey []byte         `protobuf:"bytes,2,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty"`
}

func (m *PublicKey) Reset()         { *m = PublicKey{} }
func (m *PublicKey) String() string { return proto.CompactTextString(m) }
func (*PublicKey) ProtoMessage()    {}
func (*PublicKey) Descriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{0}
}
func (m *PublicKey) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *PublicKey) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_PublicKey.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *PublicKey) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PublicKey.Merge(m, src)
}
func (m *PublicKey) XXX_Size() int {
	return m.Size()
}
func (m *PublicKey) XXX_DiscardUnknown() {
	xxx_messageInfo_PublicKey.DiscardUnknown(m)
}

var xxx_messageInfo_PublicKey proto.InternalMessageInfo

func (m *PublicKey) GetType() PublicKey_Type {
	if m != nil {
		return m.Type
	}
	return PublicKey_KeyTypeBLSGroupSig
}

func (m *PublicKey) GetPublicKey() []byte {
	if m != nil {
		return m.PublicKey
	}
	return nil
}

type Ownership struct {
	Id         string     `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	PublicKey  *PublicKey `protobuf:"bytes,2,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty"`
	Conditions string     `protobuf:"bytes,3,opt,name=conditions,proto3" json:"conditions,omitempty"`
}

func (m *Ownership) Reset()         { *m = Ownership{} }
func (m *Ownership) String() string { return proto.CompactTextString(m) }
func (*Ownership) ProtoMessage()    {}
func (*Ownership) Descriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{1}
}
func (m *Ownership) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Ownership) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Ownership.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Ownership) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Ownership.Merge(m, src)
}
func (m *Ownership) XXX_Size() int {
	return m.Size()
}
func (m *Ownership) XXX_DiscardUnknown() {
	xxx_messageInfo_Ownership.DiscardUnknown(m)
}

var xxx_messageInfo_Ownership proto.InternalMessageInfo

func (m *Ownership) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *Ownership) GetPublicKey() *PublicKey {
	if m != nil {
		return m.PublicKey
	}
	return nil
}

func (m *Ownership) GetConditions() string {
	if m != nil {
		return m.Conditions
	}
	return ""
}

type Signature struct {
	Ownership *Ownership `protobuf:"bytes,1,opt,name=ownership,proto3" json:"ownership,omitempty"`
	Signers   []uint32   `protobuf:"varint,2,rep,packed,name=signers,proto3" json:"signers,omitempty"`
	Signature []byte     `protobuf:"bytes,3,opt,name=signature,proto3" json:"signature,omitempty"`
	PreImage  string     `protobuf:"bytes,4,opt,name=pre_image,json=preImage,proto3" json:"pre_image,omitempty"`
}

func (m *Signature) Reset()         { *m = Signature{} }
func (m *Signature) String() string { return proto.CompactTextString(m) }
func (*Signature) ProtoMessage()    {}
func (*Signature) Descriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{2}
}
func (m *Signature) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Signature) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Signature.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Signature) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Signature.Merge(m, src)
}
func (m *Signature) XXX_Size() int {
	return m.Size()
}
func (m *Signature) XXX_DiscardUnknown() {
	xxx_messageInfo_Signature.DiscardUnknown(m)
}

var xxx_messageInfo_Signature proto.InternalMessageInfo

func (m *Signature) GetOwnership() *Ownership {
	if m != nil {
		return m.Ownership
	}
	return nil
}

func (m *Signature) GetSigners() []uint32 {
	if m != nil {
		return m.Signers
	}
	return nil
}

func (m *Signature) GetSignature() []byte {
	if m != nil {
		return m.Signature
	}
	return nil
}

func (m *Signature) GetPreImage() string {
	if m != nil {
		return m.PreImage
	}
	return ""
}

type TreeState struct {
	Signature     *Signature `protobuf:"bytes,1,opt,name=signature,proto3" json:"signature,omitempty"`
	ObjectId      []byte     `protobuf:"bytes,2,opt,name=object_id,json=objectId,proto3" json:"object_id,omitempty"`
	PreviousTip   []byte     `protobuf:"bytes,3,opt,name=previous_tip,json=previousTip,proto3" json:"previous_tip,omitempty"`
	NewTip        []byte     `protobuf:"bytes,4,opt,name=new_tip,json=newTip,proto3" json:"new_tip,omitempty"`
	TransactionId []byte     `protobuf:"bytes,5,opt,name=transaction_id,json=transactionId,proto3" json:"transaction_id,omitempty"`
	Height        uint64     `protobuf:"varint,6,opt,name=height,proto3" json:"height,omitempty"`
	View          uint64     `protobuf:"varint,7,opt,name=view,proto3" json:"view,omitempty"`
	Cycle         uint64     `protobuf:"varint,8,opt,name=cycle,proto3" json:"cycle,omitempty"`
}

func (m *TreeState) Reset()         { *m = TreeState{} }
func (m *TreeState) String() string { return proto.CompactTextString(m) }
func (*TreeState) ProtoMessage()    {}
func (*TreeState) Descriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{3}
}
func (m *TreeState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TreeState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TreeState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TreeState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TreeState.Merge(m, src)
}
func (m *TreeState) XXX_Size() int {
	return m.Size()
}
func (m *TreeState) XXX_DiscardUnknown() {
	xxx_messageInfo_TreeState.DiscardUnknown(m)
}

var xxx_messageInfo_TreeState proto.InternalMessageInfo

func (m *TreeState) GetSignature() *Signature {
	if m != nil {
		return m.Signature
	}
	return nil
}

func (m *TreeState) GetObjectId() []byte {
	if m != nil {
		return m.ObjectId
	}
	return nil
}

func (m *TreeState) GetPreviousTip() []byte {
	if m != nil {
		return m.PreviousTip
	}
	return nil
}

func (m *TreeState) GetNewTip() []byte {
	if m != nil {
		return m.NewTip
	}
	return nil
}

func (m *TreeState) GetTransactionId() []byte {
	if m != nil {
		return m.TransactionId
	}
	return nil
}

func (m *TreeState) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *TreeState) GetView() uint64 {
	if m != nil {
		return m.View
	}
	return 0
}

func (m *TreeState) GetCycle() uint64 {
	if m != nil {
		return m.Cycle
	}
	return 0
}

func init() {
	proto.RegisterEnum("v2signatures.PublicKey_Type", PublicKey_Type_name, PublicKey_Type_value)
	proto.RegisterType((*PublicKey)(nil), "v2signatures.PublicKey")
	proto.RegisterType((*Ownership)(nil), "v2signatures.Ownership")
	proto.RegisterType((*Signature)(nil), "v2signatures.Signature")
	proto.RegisterType((*TreeState)(nil), "v2signatures.TreeState")
}

func init() { proto.RegisterFile("signatures/signatures.proto", fileDescriptor_9fded3881b857d68) }

var fileDescriptor_9fded3881b857d68 = []byte{
	// 492 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x93, 0xc1, 0x6e, 0xda, 0x40,
	0x10, 0x86, 0x59, 0xe2, 0x00, 0x9e, 0x10, 0x84, 0x56, 0x51, 0x62, 0x29, 0xa9, 0x45, 0x91, 0x2a,
	0x71, 0xc2, 0x2d, 0x6d, 0xa2, 0x9e, 0x73, 0xa9, 0x50, 0x2a, 0xb5, 0x32, 0x9c, 0x7a, 0x41, 0xc6,
	0x1e, 0x99, 0x6d, 0xc0, 0xbb, 0xdd, 0x5d, 0x83, 0x7c, 0xef, 0x03, 0x54, 0xbd, 0xf4, 0x95, 0x7a,
	0xcc, 0xb1, 0xc7, 0x0a, 0x5e, 0xa4, 0xf2, 0x06, 0x63, 0xab, 0x69, 0x6f, 0x33, 0xdf, 0xfc, 0x9e,
	0xff, 0xb7, 0xad, 0x81, 0x4b, 0xc5, 0xe2, 0x24, 0xd0, 0xa9, 0x44, 0xe5, 0x95, 0xe5, 0x50, 0x48,
	0xae, 0x39, 0x6d, 0xaf, 0x47, 0x25, 0xeb, 0x7f, 0x27, 0x60, 0x7f, 0x4c, 0xe7, 0x4b, 0x16, 0xde,
	0x61, 0x46, 0x5f, 0x82, 0xa5, 0x33, 0x81, 0x0e, 0xe9, 0x91, 0x41, 0x67, 0x74, 0x35, 0xac, 0x4a,
	0x87, 0x07, 0xd9, 0x70, 0x9a, 0x09, 0xf4, 0x8d, 0x92, 0x3e, 0x03, 0x10, 0x86, 0xcf, 0xee, 0x31,
	0x73, 0xea, 0x3d, 0x32, 0x68, 0xfb, 0xb6, 0x28, 0x94, 0xfd, 0x37, 0x60, 0xe5, 0x62, 0x7a, 0x0e,
	0xf4, 0x0e, 0xb3, 0xbc, 0xbc, 0x7d, 0x3f, 0x79, 0x27, 0x79, 0x2a, 0x26, 0x2c, 0xee, 0xd6, 0xe8,
	0x19, 0x74, 0xf7, 0x7c, 0x82, 0xa1, 0x18, 0x5d, 0xdf, 0xdc, 0xbf, 0xea, 0x92, 0xbe, 0x02, 0xfb,
	0xc3, 0x26, 0x41, 0xa9, 0x16, 0x4c, 0xd0, 0x0e, 0xd4, 0x59, 0x64, 0x12, 0xd9, 0x7e, 0x9d, 0x45,
	0xf4, 0xe6, 0x89, 0xe3, 0xc9, 0xe8, 0xe2, 0x3f, 0x49, 0x2b, 0x51, 0xa8, 0x0b, 0x10, 0xf2, 0x24,
	0x62, 0x9a, 0xf1, 0x44, 0x39, 0x47, 0x66, 0x5f, 0x85, 0xf4, 0x7f, 0x10, 0xb0, 0x27, 0xc5, 0x0e,
	0x7a, 0x0d, 0x36, 0x2f, 0x22, 0x18, 0xf3, 0x27, 0x26, 0x87, 0x84, 0x7e, 0xa9, 0xa4, 0x0e, 0x34,
	0x73, 0x09, 0x4a, 0xe5, 0xd4, 0x7b, 0x47, 0x83, 0x53, 0xbf, 0x68, 0xe9, 0x15, 0xd8, 0x87, 0x87,
	0x8d, 0x7b, 0xdb, 0x2f, 0x01, 0xbd, 0x04, 0x5b, 0x48, 0x9c, 0xb1, 0x55, 0x10, 0xa3, 0x63, 0x99,
	0x6c, 0x2d, 0x21, 0x71, 0x9c, 0xf7, 0xfd, 0xaf, 0x75, 0xb0, 0xa7, 0x12, 0x71, 0xa2, 0x03, 0x6d,
	0x92, 0x95, 0x8b, 0xfe, 0x99, 0xec, 0xf0, 0x16, 0x7f, 0x39, 0xf0, 0xf9, 0x67, 0x0c, 0xf5, 0x8c,
	0x45, 0xfb, 0xff, 0xd4, 0x7a, 0x04, 0xe3, 0x88, 0x3e, 0x87, 0xb6, 0x90, 0xb8, 0x66, 0x3c, 0x55,
	0x33, 0xcd, 0xc4, 0x3e, 0xdf, 0x49, 0xc1, 0xa6, 0x4c, 0xd0, 0x0b, 0x68, 0x26, 0xb8, 0x31, 0x53,
	0xcb, 0x4c, 0x1b, 0x09, 0x6e, 0xf2, 0xc1, 0x0b, 0xe8, 0x68, 0x19, 0x24, 0x2a, 0x08, 0xf3, 0xef,
	0x98, 0x6f, 0x3f, 0x36, 0xf3, 0xd3, 0x0a, 0x1d, 0x47, 0xf4, 0x1c, 0x1a, 0x0b, 0x64, 0xf1, 0x42,
	0x3b, 0x8d, 0x1e, 0x19, 0x58, 0xfe, 0xbe, 0xa3, 0x14, 0xac, 0x35, 0xc3, 0x8d, 0xd3, 0x34, 0xd4,
	0xd4, 0xf4, 0x0c, 0x8e, 0xc3, 0x2c, 0x5c, 0xa2, 0xd3, 0x32, 0xf0, 0xb1, 0xb9, 0xf5, 0x7f, 0x6e,
	0x5d, 0xf2, 0xb0, 0x75, 0xc9, 0xef, 0xad, 0x4b, 0xbe, 0xed, 0xdc, 0xda, 0xc3, 0xce, 0xad, 0xfd,
	0xda, 0xb9, 0xb5, 0x4f, 0x6f, 0x63, 0xa6, 0x17, 0xe9, 0x7c, 0x18, 0xf2, 0x95, 0xf7, 0x25, 0xe5,
	0x32, 0x5d, 0x85, 0x3c, 0xd1, 0x92, 0x2f, 0xbd, 0x15, 0x2a, 0x15, 0xc4, 0xa8, 0xbc, 0xf5, 0xc8,
	0x9b, 0xa7, 0x6c, 0x19, 0x79, 0x31, 0xaf, 0x9c, 0xc4, 0xbc, 0x61, 0x6e, 0xe2, 0xf5, 0x9f, 0x00,
	0x00, 0x00, 0xff, 0xff, 0x63, 0x8f, 0x75, 0xb1, 0x32, 0x03, 0x00, 0x00,
}

func (m *PublicKey) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *PublicKey) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *PublicKey) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PublicKey) > 0 {
		i -= len(m.PublicKey)
		copy(dAtA[i:], m.PublicKey)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.PublicKey)))
		i--
		dAtA[i] = 0x12
	}
	if m.Type != 0 {
		i = encodeVarintSignatures(dAtA, i, uint64(m.Type))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func (m *Ownership) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Ownership) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Ownership) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Conditions) > 0 {
		i -= len(m.Conditions)
		copy(dAtA[i:], m.Conditions)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Conditions)))
		i--
		dAtA[i] = 0x1a
	}
	if m.PublicKey != nil {
		{
			size, err := m.PublicKey.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintSignatures(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	if len(m.Id) > 0 {
		i -= len(m.Id)
		copy(dAtA[i:], m.Id)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Id)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *Signature) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Signature) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Signature) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PreImage) > 0 {
		i -= len(m.PreImage)
		copy(dAtA[i:], m.PreImage)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.PreImage)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Signature) > 0 {
		i -= len(m.Signature)
		copy(dAtA[i:], m.Signature)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Signature)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Signers) > 0 {
		dAtA3 := make([]byte, len(m.Signers)*10)
		var j2 int
		for _, num := range m.Signers {
			for num >= 1<<7 {
				dAtA3[j2] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j2++
			}
			dAtA3[j2] = uint8(num)
			j2++
		}
		i -= j2
		copy(dAtA[i:], dAtA3[:j2])
		i = encodeVarintSignatures(dAtA, i, uint64(j2))
		i--
		dAtA[i] = 0x12
	}
	if m.Ownership != nil {
		{
			size, err := m.Ownership.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintSignatures(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *TreeState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TreeState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TreeState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Cycle != 0 {
		i = encodeVarintSignatures(dAtA, i, uint64(m.Cycle))
		i--
		dAtA[i] = 0x40
	}
	if m.View != 0 {
		i = encodeVarintSignatures(dAtA, i, uint64(m.View))
		i--
		dAtA[i] = 0x38
	}
	if m.Height != 0 {
		i = encodeVarintSignatures(dAtA, i, uint64(m.Height))
		i--
		dAtA[i] = 0x30
	}
	if len(m.TransactionId) > 0 {
		i -= len(m.TransactionId)
		copy(dAtA[i:], m.TransactionId)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.TransactionId)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.NewTip) > 0 {
		i -= len(m.NewTip)
		copy(dAtA[i:], m.NewTip)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.NewTip)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.PreviousTip) > 0 {
		i -= len(m.PreviousTip)
		copy(dAtA[i:], m.PreviousTip)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.PreviousTip)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.ObjectId) > 0 {
		i -= len(m.ObjectId)
		copy(dAtA[i:], m.ObjectId)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.ObjectId)))
		i--
		dAtA[i] = 0x12
	}
	if m.Signature != nil {
		{
			size, err := m.Signature.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintSignatures(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintSignatures(dAtA []byte, offset int, v uint64) int {
	offset -= sovSignatures(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *PublicKey) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Type != 0 {
		n += 1 + sovSignatures(uint64(m.Type))
	}
	l = len(m.PublicKey)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	return n
}

func (m *Ownership) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	if m.PublicKey != nil {
		l = m.PublicKey.Size()
		n += 1 + l + sovSignatures(uint64(l))
	}
	l = len(m.Conditions)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	return n
}

func (m *Signature) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Ownership != nil {
		l = m.Ownership.Size()
		n += 1 + l + sovSignatures(uint64(l))
	}
	if len(m.Signers) > 0 {
		l = 0
		for _, e := range m.Signers {
			l += sovSignatures(uint64(e))
		}
		n += 1 + sovSignatures(uint64(l)) + l
	}
	l = len(m.Signature)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	l = len(m.PreImage)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	return n
}

func (m *TreeState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Signature != nil {
		l = m.Signature.Size()
		n += 1 + l + sovSignatures(uint64(l))
	}
	l = len(m.ObjectId)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	l = len(m.PreviousTip)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	l = len(m.NewTip)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	l = len(m.TransactionId)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	if m.Height != 0 {
		n += 1 + sovSignatures(uint64(m.Height))
	}
	if m.View != 0 {
		n += 1 + sovSignatures(uint64(m.View))
	}
	if m.Cycle != 0 {
		n += 1 + sovSignatures(uint64(m.Cycle))
	}
	return n
}

func sovSignatures(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSignatures(x uint64) (n int) {
	return sovSignatures(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *PublicKey) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSignatures
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: PublicKey: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: PublicKey: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Type", wireType)
			}
			m.Type = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Type |= PublicKey_Type(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PublicKey", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PublicKey = append(m.PublicKey[:0], dAtA[iNdEx:postIndex]...)
			if m.PublicKey == nil {
				m.PublicKey = []byte{}
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipSignatures(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthSignatures
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthSignatures
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Ownership) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSignatures
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Ownership: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Ownership: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PublicKey", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.PublicKey == nil {
				m.PublicKey = &PublicKey{}
			}
			if err := m.PublicKey.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Conditions", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Conditions = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipSignatures(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthSignatures
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthSignatures
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *Signature) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSignatures
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Signature: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Signature: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Ownership", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Ownership == nil {
				m.Ownership = &Ownership{}
			}
			if err := m.Ownership.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType == 0 {
				var v uint32
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowSignatures
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					v |= uint32(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				m.Signers = append(m.Signers, v)
			} else if wireType == 2 {
				var packedLen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return ErrIntOverflowSignatures
					}
					if iNdEx >= l {
						return io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					packedLen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if packedLen < 0 {
					return ErrInvalidLengthSignatures
				}
				postIndex := iNdEx + packedLen
				if postIndex < 0 {
					return ErrInvalidLengthSignatures
				}
				if postIndex > l {
					return io.ErrUnexpectedEOF
				}
				var elementCount int
				var count int
				for _, integer := range dAtA[iNdEx:postIndex] {
					if integer < 128 {
						count++
					}
				}
				elementCount = count
				if elementCount != 0 && len(m.Signers) == 0 {
					m.Signers = make([]uint32, 0, elementCount)
				}
				for iNdEx < postIndex {
					var v uint32
					for shift := uint(0); ; shift += 7 {
						if shift >= 64 {
							return ErrIntOverflowSignatures
						}
						if iNdEx >= l {
							return io.ErrUnexpectedEOF
						}
						b := dAtA[iNdEx]
						iNdEx++
						v |= uint32(b&0x7F) << shift
						if b < 0x80 {
							break
						}
					}
					m.Signers = append(m.Signers, v)
				}
			} else {
				return fmt.Errorf("proto: wrong wireType = %d for field Signers", wireType)
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Signature", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Signature = append(m.Signature[:0], dAtA[iNdEx:postIndex]...)
			if m.Signature == nil {
				m.Signature = []byte{}
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PreImage", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PreImage = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipSignatures(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthSignatures
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthSignatures
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *TreeState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSignatures
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: TreeState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TreeState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Signature", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.Signature == nil {
				m.Signature = &Signature{}
			}
			if err := m.Signature.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ObjectId", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ObjectId = append(m.ObjectId[:0], dAtA[iNdEx:postIndex]...)
			if m.ObjectId == nil {
				m.ObjectId = []byte{}
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PreviousTip", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PreviousTip = append(m.PreviousTip[:0], dAtA[iNdEx:postIndex]...)
			if m.PreviousTip == nil {
				m.PreviousTip = []byte{}
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NewTip", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.NewTip = append(m.NewTip[:0], dAtA[iNdEx:postIndex]...)
			if m.NewTip == nil {
				m.NewTip = []byte{}
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TransactionId", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				byteLen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if byteLen < 0 {
				return ErrInvalidLengthSignatures
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthSignatures
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TransactionId = append(m.TransactionId[:0], dAtA[iNdEx:postIndex]...)
			if m.TransactionId == nil {
				m.TransactionId = []byte{}
			}
			iNdEx = postIndex
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Height", wireType)
			}
			m.Height = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Height |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field View", wireType)
			}
			m.View = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.View |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 8:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Cycle", wireType)
			}
			m.Cycle = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Cycle |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipSignatures(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthSignatures
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthSignatures
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipSignatures(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSignatures
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowSignatures
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthSignatures
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSignatures
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSignatures
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSignatures        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSignatures          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSignatures = fmt.Errorf("proto: unexpected end of group")
)
