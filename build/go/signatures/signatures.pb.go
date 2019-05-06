// Code generated by protoc-gen-go. DO NOT EDIT.
// source: signatures/signatures.proto

package signatures // import "github.com/quorumcontrol/messages/signatures"

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Signature struct {
	Signers              []bool   `protobuf:"varint,1,rep,packed,name=signers,proto3" json:"signers,omitempty"`
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
	return fileDescriptor_signatures_9e25b32cfa33633b, []int{0}
}
func (m *Signature) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Signature.Unmarshal(m, b)
}
func (m *Signature) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Signature.Marshal(b, m, deterministic)
}
func (dst *Signature) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Signature.Merge(dst, src)
}
func (m *Signature) XXX_Size() int {
	return xxx_messageInfo_Signature.Size(m)
}
func (m *Signature) XXX_DiscardUnknown() {
	xxx_messageInfo_Signature.DiscardUnknown(m)
}

var xxx_messageInfo_Signature proto.InternalMessageInfo

func (m *Signature) GetSigners() []bool {
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
	proto.RegisterType((*Signature)(nil), "signatures.Signature")
}

func init() {
	proto.RegisterFile("signatures/signatures.proto", fileDescriptor_signatures_9e25b32cfa33633b)
}

var fileDescriptor_signatures_9e25b32cfa33633b = []byte{
	// 244 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xbf, 0x4e, 0xc3, 0x30,
	0x10, 0x87, 0x65, 0x9a, 0xa6, 0xf1, 0xd1, 0xe9, 0x84, 0xc0, 0x52, 0x19, 0x02, 0x53, 0x06, 0x94,
	0x0c, 0xbc, 0x01, 0x1b, 0x6b, 0x60, 0x62, 0xa9, 0x1a, 0xf7, 0x94, 0x18, 0x35, 0xb1, 0xf1, 0x9f,
	0x46, 0x7d, 0x6d, 0x9e, 0x00, 0xd5, 0x25, 0x44, 0x6c, 0xbf, 0xef, 0xfb, 0x74, 0xcb, 0xc1, 0xc6,
	0xa9, 0x76, 0xd8, 0xf9, 0x60, 0xc9, 0x55, 0xf3, 0x2c, 0x8d, 0xd5, 0x5e, 0x23, 0xcc, 0xe6, 0xf1,
	0x9b, 0x01, 0x7f, 0x9b, 0x10, 0x05, 0xac, 0xce, 0x8d, 0xac, 0x13, 0x2c, 0x5f, 0x14, 0x59, 0x3d,
	0x21, 0xde, 0x03, 0xff, 0xbb, 0x12, 0x57, 0x39, 0x2b, 0xd6, 0xf5, 0x2c, 0x10, 0x21, 0xf1, 0x27,
	0x43, 0x62, 0x91, 0xb3, 0x82, 0xd7, 0x71, 0xe3, 0x06, 0xb8, 0x6e, 0x3e, 0x49, 0xfa, 0xad, 0xda,
	0x8b, 0x24, 0x5e, 0x64, 0x17, 0xf1, 0xba, 0xc7, 0x07, 0x58, 0x1b, 0x4b, 0x47, 0xa5, 0x83, 0xdb,
	0x7a, 0x65, 0xc4, 0x32, 0xf6, 0xeb, 0xc9, 0xbd, 0x2b, 0x83, 0x77, 0xb0, 0x1a, 0x68, 0x8c, 0x35,
	0x8d, 0x35, 0x1d, 0x68, 0x3c, 0x07, 0x84, 0xe4, 0xa8, 0x68, 0x14, 0xab, 0x9c, 0x15, 0x49, 0x1d,
	0x37, 0xde, 0xc0, 0x52, 0x9e, 0xe4, 0x81, 0x44, 0x16, 0xe5, 0x05, 0xf0, 0x16, 0xd2, 0x8e, 0x54,
	0xdb, 0x79, 0xc1, 0xa3, 0xfe, 0xa5, 0x97, 0xf2, 0xe3, 0xa9, 0x55, 0xbe, 0x0b, 0x4d, 0x29, 0x75,
	0x5f, 0x7d, 0x05, 0x6d, 0x43, 0x2f, 0xf5, 0xe0, 0xad, 0x3e, 0x54, 0x3d, 0x39, 0xb7, 0x6b, 0xff,
	0xbd, 0xad, 0x49, 0xe3, 0xdf, 0x9e, 0x7f, 0x02, 0x00, 0x00, 0xff, 0xff, 0x6e, 0xc8, 0x06, 0xda,
	0x56, 0x01, 0x00, 0x00,
}
