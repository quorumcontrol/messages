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
const _ = proto.GoGoProtoPackageIsVersion2 // please upgrade the proto package

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
	Id        string         `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type      PublicKey_Type `protobuf:"varint,2,opt,name=type,proto3,enum=signatures.PublicKey_Type" json:"type,omitempty"`
	PublicKey []byte         `protobuf:"bytes,3,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty"`
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
		n, err := m.MarshalTo(b)
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

func (m *PublicKey) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

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
	PublicKey  *PublicKey `protobuf:"bytes,1,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty"`
	Conditions string     `protobuf:"bytes,2,opt,name=conditions,proto3" json:"conditions,omitempty"`
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
		n, err := m.MarshalTo(b)
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
		n, err := m.MarshalTo(b)
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

// TODO: we might just drop this, but it's useful for transition #1
type CurrentState struct {
	Signature     *Signature `protobuf:"bytes,1,opt,name=signature,proto3" json:"signature,omitempty"`
	ObjectId      []byte     `protobuf:"bytes,2,opt,name=object_id,json=objectId,proto3" json:"object_id,omitempty"`
	PreviousTip   []byte     `protobuf:"bytes,3,opt,name=previous_tip,json=previousTip,proto3" json:"previous_tip,omitempty"`
	NewTip        []byte     `protobuf:"bytes,4,opt,name=new_tip,json=newTip,proto3" json:"new_tip,omitempty"`
	View          uint64     `protobuf:"varint,5,opt,name=view,proto3" json:"view,omitempty"`
	Cycle         uint64     `protobuf:"varint,6,opt,name=cycle,proto3" json:"cycle,omitempty"`
	Height        uint64     `protobuf:"varint,7,opt,name=height,proto3" json:"height,omitempty"`
	TransactionId []byte     `protobuf:"bytes,8,opt,name=transaction_id,json=transactionId,proto3" json:"transaction_id,omitempty"`
}

func (m *CurrentState) Reset()         { *m = CurrentState{} }
func (m *CurrentState) String() string { return proto.CompactTextString(m) }
func (*CurrentState) ProtoMessage()    {}
func (*CurrentState) Descriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{3}
}
func (m *CurrentState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CurrentState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CurrentState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *CurrentState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CurrentState.Merge(m, src)
}
func (m *CurrentState) XXX_Size() int {
	return m.Size()
}
func (m *CurrentState) XXX_DiscardUnknown() {
	xxx_messageInfo_CurrentState.DiscardUnknown(m)
}

var xxx_messageInfo_CurrentState proto.InternalMessageInfo

func (m *CurrentState) GetSignature() *Signature {
	if m != nil {
		return m.Signature
	}
	return nil
}

func (m *CurrentState) GetObjectId() []byte {
	if m != nil {
		return m.ObjectId
	}
	return nil
}

func (m *CurrentState) GetPreviousTip() []byte {
	if m != nil {
		return m.PreviousTip
	}
	return nil
}

func (m *CurrentState) GetNewTip() []byte {
	if m != nil {
		return m.NewTip
	}
	return nil
}

func (m *CurrentState) GetView() uint64 {
	if m != nil {
		return m.View
	}
	return 0
}

func (m *CurrentState) GetCycle() uint64 {
	if m != nil {
		return m.Cycle
	}
	return 0
}

func (m *CurrentState) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *CurrentState) GetTransactionId() []byte {
	if m != nil {
		return m.TransactionId
	}
	return nil
}

func init() {
	proto.RegisterEnum("signatures.PublicKey_Type", PublicKey_Type_name, PublicKey_Type_value)
	proto.RegisterType((*PublicKey)(nil), "signatures.PublicKey")
	proto.RegisterType((*Ownership)(nil), "signatures.Ownership")
	proto.RegisterType((*Signature)(nil), "signatures.Signature")
	proto.RegisterType((*CurrentState)(nil), "signatures.CurrentState")
}

func init() { proto.RegisterFile("signatures/signatures.proto", fileDescriptor_9fded3881b857d68) }

var fileDescriptor_9fded3881b857d68 = []byte{
	// 492 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x93, 0xcf, 0x6e, 0xd3, 0x40,
	0x10, 0xc6, 0xb3, 0xa9, 0x9b, 0xc6, 0xd3, 0x34, 0x8a, 0x56, 0xa5, 0x58, 0x14, 0xac, 0x10, 0x09,
	0x29, 0x27, 0x5b, 0xa4, 0x2d, 0x0f, 0x50, 0x0e, 0x28, 0x2a, 0x52, 0x91, 0xdd, 0x13, 0x97, 0xc8,
	0x7f, 0x46, 0xce, 0xd2, 0xc4, 0xbb, 0xac, 0xd7, 0x8d, 0xfc, 0x00, 0xdc, 0xb9, 0x70, 0xe7, 0x71,
	0x38, 0xf6, 0xc8, 0x11, 0x25, 0x2f, 0x82, 0xbc, 0x8d, 0x1d, 0x83, 0x72, 0xdb, 0xf9, 0xcd, 0xb7,
	0xf3, 0x7d, 0x63, 0x6b, 0xe1, 0x3c, 0x63, 0x49, 0x1a, 0xa8, 0x5c, 0x62, 0xe6, 0xee, 0x8e, 0x8e,
	0x90, 0x5c, 0x71, 0x0a, 0x3b, 0x32, 0xfa, 0x49, 0xc0, 0xfc, 0x94, 0x87, 0x0b, 0x16, 0xdd, 0x60,
	0x41, 0xfb, 0xd0, 0x66, 0xb1, 0x45, 0x86, 0x64, 0x6c, 0x7a, 0x6d, 0x16, 0x53, 0x07, 0x0c, 0x55,
	0x08, 0xb4, 0xda, 0x43, 0x32, 0xee, 0x4f, 0x5e, 0x38, 0x8d, 0x51, 0xf5, 0x25, 0xe7, 0xae, 0x10,
	0xe8, 0x69, 0x1d, 0x7d, 0x05, 0x20, 0x34, 0x9f, 0xdd, 0x63, 0x61, 0x1d, 0x0c, 0xc9, 0xb8, 0xe7,
	0x99, 0xa2, 0x52, 0x8e, 0x2e, 0xc1, 0x28, 0xc5, 0xf4, 0x0c, 0xe8, 0x0d, 0x16, 0xe5, 0xf1, 0xfa,
	0xa3, 0xff, 0x41, 0xf2, 0x5c, 0xf8, 0x2c, 0x19, 0xb4, 0xe8, 0x29, 0x0c, 0xb6, 0xdc, 0xc7, 0x48,
	0x4c, 0xae, 0xde, 0xdd, 0xbf, 0x1d, 0x90, 0x51, 0x00, 0xe6, 0xed, 0x2a, 0x45, 0x99, 0xcd, 0x99,
	0xa0, 0x97, 0xff, 0x38, 0x94, 0x49, 0x8f, 0x27, 0xcf, 0xf6, 0xe6, 0x6a, 0x18, 0x53, 0x1b, 0x20,
	0xe2, 0x69, 0xcc, 0x14, 0xe3, 0x69, 0xa6, 0xb7, 0x31, 0xbd, 0x06, 0x19, 0xfd, 0x20, 0x60, 0xfa,
	0xd5, 0x0c, 0x7a, 0x01, 0x26, 0xaf, 0x0c, 0xf7, 0x59, 0xd4, 0x69, 0xbc, 0x9d, 0x8e, 0x5a, 0x70,
	0x54, 0x4a, 0x50, 0x96, 0xf3, 0x0f, 0xc6, 0x27, 0x5e, 0x55, 0xd2, 0x97, 0x60, 0xd6, 0x97, 0xab,
	0x6f, 0x52, 0x03, 0x7a, 0x0e, 0xa6, 0x90, 0x38, 0x63, 0xcb, 0x20, 0x41, 0xcb, 0xd0, 0xc9, 0xba,
	0x42, 0xe2, 0xb4, 0xac, 0x47, 0xdf, 0xda, 0xd0, 0x7b, 0x9f, 0x4b, 0x89, 0xa9, 0xf2, 0x55, 0xa0,
	0x74, 0xb4, 0xdd, 0xac, 0x3d, 0xd1, 0xea, 0x25, 0xfe, 0xb3, 0xe0, 0xe1, 0x17, 0x8c, 0xd4, 0x8c,
	0xc5, 0x7a, 0xf9, 0x9e, 0xd7, 0x7d, 0x02, 0xd3, 0x98, 0xbe, 0x86, 0x9e, 0x90, 0xf8, 0xc0, 0x78,
	0x9e, 0xcd, 0x14, 0x13, 0xdb, 0x80, 0xc7, 0x15, 0xbb, 0x63, 0x82, 0x3e, 0x87, 0xa3, 0x14, 0x57,
	0xba, 0x6b, 0xe8, 0x6e, 0x27, 0xc5, 0x55, 0xd9, 0xa0, 0x60, 0x3c, 0x30, 0x5c, 0x59, 0x87, 0x43,
	0x32, 0x36, 0x3c, 0x7d, 0xa6, 0xa7, 0x70, 0x18, 0x15, 0xd1, 0x02, 0xad, 0x8e, 0x86, 0x4f, 0x05,
	0x3d, 0x83, 0xce, 0x1c, 0x59, 0x32, 0x57, 0xd6, 0x91, 0xc6, 0xdb, 0x8a, 0xbe, 0x81, 0xbe, 0x92,
	0x41, 0x9a, 0x05, 0x51, 0xf9, 0x23, 0xca, 0x7c, 0x5d, 0xed, 0x70, 0xd2, 0xa0, 0xd3, 0xf8, 0xfa,
	0xf6, 0xd7, 0xda, 0x26, 0x8f, 0x6b, 0x9b, 0xfc, 0x59, 0xdb, 0xe4, 0xfb, 0xc6, 0x6e, 0x3d, 0x6e,
	0xec, 0xd6, 0xef, 0x8d, 0xdd, 0xfa, 0x7c, 0x95, 0x30, 0x35, 0xcf, 0x43, 0x27, 0xe2, 0x4b, 0xf7,
	0x6b, 0xce, 0x65, 0xbe, 0x8c, 0x78, 0xaa, 0x24, 0x5f, 0xb8, 0x4b, 0xcc, 0xb2, 0x20, 0xc1, 0xcc,
	0x0d, 0x73, 0xb6, 0x88, 0xdd, 0x84, 0x37, 0x1e, 0x42, 0xd8, 0xd1, 0x2f, 0xe1, 0xe2, 0x6f, 0x00,
	0x00, 0x00, 0xff, 0xff, 0x10, 0x73, 0x58, 0x09, 0x28, 0x03, 0x00, 0x00,
}

func (m *PublicKey) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *PublicKey) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.Id) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Id)))
		i += copy(dAtA[i:], m.Id)
	}
	if m.Type != 0 {
		dAtA[i] = 0x10
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(m.Type))
	}
	if len(m.PublicKey) > 0 {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.PublicKey)))
		i += copy(dAtA[i:], m.PublicKey)
	}
	return i, nil
}

func (m *Ownership) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Ownership) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if m.PublicKey != nil {
		dAtA[i] = 0xa
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(m.PublicKey.Size()))
		n1, err1 := m.PublicKey.MarshalTo(dAtA[i:])
		if err1 != nil {
			return 0, err1
		}
		i += n1
	}
	if len(m.Conditions) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Conditions)))
		i += copy(dAtA[i:], m.Conditions)
	}
	return i, nil
}

func (m *Signature) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Signature) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if m.Ownership != nil {
		dAtA[i] = 0xa
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(m.Ownership.Size()))
		n2, err2 := m.Ownership.MarshalTo(dAtA[i:])
		if err2 != nil {
			return 0, err2
		}
		i += n2
	}
	if len(m.Signers) > 0 {
		dAtA4 := make([]byte, len(m.Signers)*10)
		var j3 int
		for _, num := range m.Signers {
			for num >= 1<<7 {
				dAtA4[j3] = uint8(uint64(num)&0x7f | 0x80)
				num >>= 7
				j3++
			}
			dAtA4[j3] = uint8(num)
			j3++
		}
		dAtA[i] = 0x12
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(j3))
		i += copy(dAtA[i:], dAtA4[:j3])
	}
	if len(m.Signature) > 0 {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Signature)))
		i += copy(dAtA[i:], m.Signature)
	}
	if len(m.PreImage) > 0 {
		dAtA[i] = 0x22
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.PreImage)))
		i += copy(dAtA[i:], m.PreImage)
	}
	return i, nil
}

func (m *CurrentState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CurrentState) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if m.Signature != nil {
		dAtA[i] = 0xa
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(m.Signature.Size()))
		n5, err5 := m.Signature.MarshalTo(dAtA[i:])
		if err5 != nil {
			return 0, err5
		}
		i += n5
	}
	if len(m.ObjectId) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.ObjectId)))
		i += copy(dAtA[i:], m.ObjectId)
	}
	if len(m.PreviousTip) > 0 {
		dAtA[i] = 0x1a
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.PreviousTip)))
		i += copy(dAtA[i:], m.PreviousTip)
	}
	if len(m.NewTip) > 0 {
		dAtA[i] = 0x22
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.NewTip)))
		i += copy(dAtA[i:], m.NewTip)
	}
	if m.View != 0 {
		dAtA[i] = 0x28
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(m.View))
	}
	if m.Cycle != 0 {
		dAtA[i] = 0x30
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(m.Cycle))
	}
	if m.Height != 0 {
		dAtA[i] = 0x38
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(m.Height))
	}
	if len(m.TransactionId) > 0 {
		dAtA[i] = 0x42
		i++
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.TransactionId)))
		i += copy(dAtA[i:], m.TransactionId)
	}
	return i, nil
}

func encodeVarintSignatures(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func (m *PublicKey) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
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

func (m *CurrentState) Size() (n int) {
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
	if m.View != 0 {
		n += 1 + sovSignatures(uint64(m.View))
	}
	if m.Cycle != 0 {
		n += 1 + sovSignatures(uint64(m.Cycle))
	}
	if m.Height != 0 {
		n += 1 + sovSignatures(uint64(m.Height))
	}
	l = len(m.TransactionId)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
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
		case 3:
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
		case 2:
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
func (m *CurrentState) Unmarshal(dAtA []byte) error {
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
			return fmt.Errorf("proto: CurrentState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: CurrentState: illegal tag %d (wire type %d)", fieldNum, wire)
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
		case 6:
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
		case 7:
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
		case 8:
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
			return iNdEx, nil
		case 1:
			iNdEx += 8
			return iNdEx, nil
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
			if iNdEx < 0 {
				return 0, ErrInvalidLengthSignatures
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowSignatures
					}
					if iNdEx >= l {
						return 0, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					innerWire |= (uint64(b) & 0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				innerWireType := int(innerWire & 0x7)
				if innerWireType == 4 {
					break
				}
				next, err := skipSignatures(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
				if iNdEx < 0 {
					return 0, ErrInvalidLengthSignatures
				}
			}
			return iNdEx, nil
		case 4:
			return iNdEx, nil
		case 5:
			iNdEx += 4
			return iNdEx, nil
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
	}
	panic("unreachable")
}

var (
	ErrInvalidLengthSignatures = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSignatures   = fmt.Errorf("proto: integer overflow")
)
