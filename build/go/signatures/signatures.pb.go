// Code generated by protoc-gen-go. DO NOT EDIT.
// source: signatures/signatures.proto

package signatures

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type PublicKey struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type                 string   `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	PublicKey            []byte   `protobuf:"bytes,3,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PublicKey) Reset()         { *m = PublicKey{} }
func (m *PublicKey) String() string { return proto.CompactTextString(m) }
func (*PublicKey) ProtoMessage()    {}
func (*PublicKey) Descriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{0}
}

func (m *PublicKey) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PublicKey.Unmarshal(m, b)
}
func (m *PublicKey) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PublicKey.Marshal(b, m, deterministic)
}
func (m *PublicKey) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PublicKey.Merge(m, src)
}
func (m *PublicKey) XXX_Size() int {
	return xxx_messageInfo_PublicKey.Size(m)
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

func (m *PublicKey) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *PublicKey) GetPublicKey() []byte {
	if m != nil {
		return m.PublicKey
	}
	return nil
}

type Signature struct {
	Signers              []uint32 `protobuf:"varint,1,rep,packed,name=signers,proto3" json:"signers,omitempty"`
	Signature            []byte   `protobuf:"bytes,2,opt,name=signature,proto3" json:"signature,omitempty"`
	Type                 string   `protobuf:"bytes,3,opt,name=type,proto3" json:"type,omitempty"`
	ObjectId             []byte   `protobuf:"bytes,4,opt,name=object_id,json=objectId,proto3" json:"object_id,omitempty"`
	PreviousTip          []byte   `protobuf:"bytes,5,opt,name=previous_tip,json=previousTip,proto3" json:"previous_tip,omitempty"`
	NewTip               []byte   `protobuf:"bytes,6,opt,name=new_tip,json=newTip,proto3" json:"new_tip,omitempty"`
	View                 uint64   `protobuf:"varint,7,opt,name=view,proto3" json:"view,omitempty"`
	Cycle                uint64   `protobuf:"varint,8,opt,name=cycle,proto3" json:"cycle,omitempty"`
	Height               uint64   `protobuf:"varint,9,opt,name=height,proto3" json:"height,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Signature) Reset()         { *m = Signature{} }
func (m *Signature) String() string { return proto.CompactTextString(m) }
func (*Signature) ProtoMessage()    {}
func (*Signature) Descriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{1}
}

func (m *Signature) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Signature.Unmarshal(m, b)
}
func (m *Signature) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Signature.Marshal(b, m, deterministic)
}
func (m *Signature) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Signature.Merge(m, src)
}
func (m *Signature) XXX_Size() int {
	return xxx_messageInfo_Signature.Size(m)
}
func (m *Signature) XXX_DiscardUnknown() {
	xxx_messageInfo_Signature.DiscardUnknown(m)
}

var xxx_messageInfo_Signature proto.InternalMessageInfo

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

func (m *Signature) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *Signature) GetObjectId() []byte {
	if m != nil {
		return m.ObjectId
	}
	return nil
}

func (m *Signature) GetPreviousTip() []byte {
	if m != nil {
		return m.PreviousTip
	}
	return nil
}

func (m *Signature) GetNewTip() []byte {
	if m != nil {
		return m.NewTip
	}
	return nil
}

func (m *Signature) GetView() uint64 {
	if m != nil {
		return m.View
	}
	return 0
}

func (m *Signature) GetCycle() uint64 {
	if m != nil {
		return m.Cycle
	}
	return 0
}

func (m *Signature) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func init() {
	proto.RegisterType((*PublicKey)(nil), "signatures.PublicKey")
	proto.RegisterType((*Signature)(nil), "signatures.Signature")
}

func init() { proto.RegisterFile("signatures/signatures.proto", fileDescriptor_9fded3881b857d68) }

var fileDescriptor_9fded3881b857d68 = []byte{
	// 297 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x91, 0x4f, 0x4b, 0xc3, 0x40,
	0x14, 0xc4, 0x49, 0x9b, 0xa6, 0xdd, 0x67, 0xf5, 0xb0, 0x88, 0x2e, 0x54, 0x21, 0xf6, 0x94, 0x53,
	0x73, 0x10, 0xf1, 0xee, 0x4d, 0x04, 0x91, 0xe8, 0xc9, 0x4b, 0x69, 0x92, 0x47, 0xba, 0x9a, 0x66,
	0xd7, 0xfd, 0xd3, 0x92, 0xaf, 0xed, 0x27, 0x90, 0xbe, 0x9a, 0xa6, 0xb7, 0x99, 0xdf, 0xb0, 0x33,
	0x0b, 0x0f, 0x66, 0x56, 0x56, 0xcd, 0xca, 0x79, 0x83, 0x36, 0xed, 0xe5, 0x42, 0x1b, 0xe5, 0x14,
	0x87, 0x9e, 0xcc, 0x5f, 0x81, 0xbd, 0xf9, 0xbc, 0x96, 0xc5, 0x0b, 0xb6, 0xfc, 0x02, 0x06, 0xb2,
	0x14, 0x41, 0x1c, 0x24, 0x2c, 0x1b, 0xc8, 0x92, 0x73, 0x08, 0x5d, 0xab, 0x51, 0x0c, 0x88, 0x90,
	0xe6, 0xb7, 0x00, 0x9a, 0x1e, 0x2c, 0xbf, 0xb1, 0x15, 0xc3, 0x38, 0x48, 0xa6, 0x19, 0xd3, 0x5d,
	0xc5, 0xfc, 0x37, 0x00, 0xf6, 0xde, 0xd5, 0x73, 0x01, 0xe3, 0xfd, 0x16, 0x1a, 0x2b, 0x82, 0x78,
	0x98, 0x9c, 0x67, 0x9d, 0xe5, 0x37, 0xc0, 0x8e, 0xbf, 0xa0, 0xfe, 0x69, 0xd6, 0x83, 0xe3, 0xf0,
	0xf0, 0x64, 0x78, 0x06, 0x4c, 0xe5, 0x5f, 0x58, 0xb8, 0xa5, 0x2c, 0x45, 0x48, 0x2f, 0x26, 0x07,
	0xf0, 0x5c, 0xf2, 0x3b, 0x98, 0x6a, 0x83, 0x5b, 0xa9, 0xbc, 0x5d, 0x3a, 0xa9, 0xc5, 0x88, 0xf2,
	0xb3, 0x8e, 0x7d, 0x48, 0xcd, 0xaf, 0x61, 0xdc, 0xe0, 0x8e, 0xd2, 0x88, 0xd2, 0xa8, 0xc1, 0xdd,
	0x3e, 0xe0, 0x10, 0x6e, 0x25, 0xee, 0xc4, 0x38, 0x0e, 0x92, 0x30, 0x23, 0xcd, 0x2f, 0x61, 0x54,
	0xb4, 0x45, 0x8d, 0x62, 0x42, 0xf0, 0x60, 0xf8, 0x15, 0x44, 0x6b, 0x94, 0xd5, 0xda, 0x09, 0x46,
	0xf8, 0xdf, 0x3d, 0x3d, 0x7e, 0x3e, 0x54, 0xd2, 0xad, 0x7d, 0xbe, 0x28, 0xd4, 0x26, 0xfd, 0xf1,
	0xca, 0xf8, 0x4d, 0xa1, 0x1a, 0x67, 0x54, 0x9d, 0x6e, 0xd0, 0xda, 0x55, 0x85, 0x36, 0xcd, 0xbd,
	0xac, 0xcb, 0xb4, 0x52, 0x27, 0xf7, 0xc8, 0x23, 0x3a, 0xc8, 0xfd, 0x5f, 0x00, 0x00, 0x00, 0xff,
	0xff, 0x27, 0x97, 0x7b, 0x2a, 0xaf, 0x01, 0x00, 0x00,
}
