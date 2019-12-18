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

type PublicKey struct {
	Id        string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Type      string `protobuf:"bytes,2,opt,name=type,proto3" json:"type,omitempty"`
	PublicKey []byte `protobuf:"bytes,3,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty"`
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

// TODO: we might just drop this, but it's useful for transition #1
type CurrentState struct {
	Signature *Signature `protobuf:"bytes,1,opt,name=signature,proto3" json:"signature,omitempty"`
}

func (m *CurrentState) Reset()         { *m = CurrentState{} }
func (m *CurrentState) String() string { return proto.CompactTextString(m) }
func (*CurrentState) ProtoMessage()    {}
func (*CurrentState) Descriptor() ([]byte, []int) {
	return fileDescriptor_9fded3881b857d68, []int{1}
}
func (m *CurrentState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *CurrentState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_CurrentState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
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

type Signature struct {
	Signers       []uint32 `protobuf:"varint,1,rep,packed,name=signers,proto3" json:"signers,omitempty"`
	Signature     []byte   `protobuf:"bytes,2,opt,name=signature,proto3" json:"signature,omitempty"`
	Type          string   `protobuf:"bytes,3,opt,name=type,proto3" json:"type,omitempty"`
	ObjectId      []byte   `protobuf:"bytes,4,opt,name=object_id,json=objectId,proto3" json:"object_id,omitempty"`
	PreviousTip   []byte   `protobuf:"bytes,5,opt,name=previous_tip,json=previousTip,proto3" json:"previous_tip,omitempty"`
	NewTip        []byte   `protobuf:"bytes,6,opt,name=new_tip,json=newTip,proto3" json:"new_tip,omitempty"`
	View          uint64   `protobuf:"varint,7,opt,name=view,proto3" json:"view,omitempty"`
	Cycle         uint64   `protobuf:"varint,8,opt,name=cycle,proto3" json:"cycle,omitempty"`
	Height        uint64   `protobuf:"varint,9,opt,name=height,proto3" json:"height,omitempty"`
	TransactionId []byte   `protobuf:"bytes,10,opt,name=transaction_id,json=transactionId,proto3" json:"transaction_id,omitempty"`
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

func (m *Signature) GetTransactionId() []byte {
	if m != nil {
		return m.TransactionId
	}
	return nil
}

func init() {
	proto.RegisterType((*PublicKey)(nil), "signatures.PublicKey")
	proto.RegisterType((*CurrentState)(nil), "signatures.CurrentState")
	proto.RegisterType((*Signature)(nil), "signatures.Signature")
}

func init() { proto.RegisterFile("signatures/signatures.proto", fileDescriptor_9fded3881b857d68) }

var fileDescriptor_9fded3881b857d68 = []byte{
	// 379 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x92, 0xbd, 0x8e, 0xd3, 0x40,
	0x14, 0x85, 0x33, 0x8e, 0xd7, 0x59, 0xdf, 0xcd, 0x6e, 0x31, 0xe2, 0x67, 0xa4, 0x05, 0xcb, 0x44,
	0x42, 0x72, 0x15, 0x4b, 0xac, 0x78, 0x01, 0xb6, 0x8a, 0x90, 0x00, 0x39, 0x54, 0x34, 0x91, 0x7f,
	0xae, 0x9c, 0x01, 0xc7, 0x63, 0xe6, 0x27, 0x91, 0xdf, 0x82, 0x96, 0x37, 0xa2, 0x4c, 0x49, 0x89,
	0x92, 0x17, 0x41, 0x99, 0xac, 0x1d, 0x77, 0xe7, 0x7e, 0x67, 0xe6, 0xdc, 0x53, 0x5c, 0xb8, 0x57,
	0xbc, 0xac, 0x53, 0x6d, 0x24, 0xaa, 0xf8, 0x22, 0xe7, 0x8d, 0x14, 0x5a, 0x50, 0xb8, 0x90, 0xd9,
	0x27, 0xf0, 0xbf, 0x98, 0xac, 0xe2, 0xf9, 0x47, 0x6c, 0xe9, 0x1d, 0x38, 0xbc, 0x60, 0x24, 0x24,
	0x91, 0x9f, 0x38, 0xbc, 0xa0, 0x14, 0x5c, 0xdd, 0x36, 0xc8, 0x1c, 0x4b, 0xac, 0xa6, 0xaf, 0x01,
	0x1a, 0xfb, 0x61, 0xf5, 0x03, 0x5b, 0x36, 0x0e, 0x49, 0x34, 0x4d, 0xfc, 0xa6, 0x8b, 0x98, 0x3d,
	0xc2, 0xf4, 0xd1, 0x48, 0x89, 0xb5, 0x5e, 0xea, 0x54, 0x23, 0x7d, 0x00, 0xbf, 0xdf, 0x66, 0x93,
	0x6f, 0xde, 0x3d, 0x9f, 0x0f, 0x1a, 0x2d, 0x3b, 0x99, 0x5c, 0xde, 0xcd, 0x7e, 0x3b, 0xe0, 0xf7,
	0x06, 0x65, 0x30, 0x39, 0x59, 0x28, 0x15, 0x23, 0xe1, 0x38, 0xba, 0x4d, 0xba, 0x91, 0xbe, 0x1a,
	0x86, 0x3b, 0xe7, 0x2a, 0x3d, 0xe8, 0xdb, 0x8f, 0x07, 0xed, 0xef, 0xc1, 0x17, 0xd9, 0x77, 0xcc,
	0xf5, 0x8a, 0x17, 0xcc, 0xb5, 0x3f, 0xae, 0xcf, 0x60, 0x51, 0xd0, 0x37, 0x30, 0x6d, 0x24, 0x6e,
	0xb9, 0x30, 0x6a, 0xa5, 0x79, 0xc3, 0xae, 0xac, 0x7f, 0xd3, 0xb1, 0xaf, 0xbc, 0xa1, 0x2f, 0x61,
	0x52, 0xe3, 0xce, 0xba, 0x9e, 0x75, 0xbd, 0x1a, 0x77, 0x27, 0x83, 0x82, 0xbb, 0xe5, 0xb8, 0x63,
	0x93, 0x90, 0x44, 0x6e, 0x62, 0x35, 0x7d, 0x06, 0x57, 0x79, 0x9b, 0x57, 0xc8, 0xae, 0x2d, 0x3c,
	0x0f, 0xf4, 0x05, 0x78, 0x6b, 0xe4, 0xe5, 0x5a, 0x33, 0xdf, 0xe2, 0xa7, 0x89, 0xbe, 0x85, 0x3b,
	0x2d, 0xd3, 0x5a, 0xa5, 0xb9, 0xe6, 0xa2, 0x3e, 0xf5, 0x03, 0xbb, 0xe1, 0x76, 0x40, 0x17, 0xc5,
	0x87, 0xcf, 0x7f, 0x0e, 0x01, 0xd9, 0x1f, 0x02, 0xf2, 0xef, 0x10, 0x90, 0x5f, 0xc7, 0x60, 0xb4,
	0x3f, 0x06, 0xa3, 0xbf, 0xc7, 0x60, 0xf4, 0xed, 0x7d, 0xc9, 0xf5, 0xda, 0x64, 0xf3, 0x5c, 0x6c,
	0xe2, 0x9f, 0x46, 0x48, 0xb3, 0xc9, 0x45, 0xad, 0xa5, 0xa8, 0xe2, 0x0d, 0x2a, 0x95, 0x96, 0xa8,
	0xe2, 0xcc, 0xf0, 0xaa, 0x88, 0x4b, 0x31, 0xb8, 0x89, 0xcc, 0xb3, 0x47, 0xf1, 0xf0, 0x3f, 0x00,
	0x00, 0xff, 0xff, 0x06, 0x92, 0xfa, 0x59, 0x33, 0x02, 0x00, 0x00,
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
		dAtA[i] = 0x1a
	}
	if len(m.Type) > 0 {
		i -= len(m.Type)
		copy(dAtA[i:], m.Type)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Type)))
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

func (m *CurrentState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *CurrentState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *CurrentState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
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
	if len(m.TransactionId) > 0 {
		i -= len(m.TransactionId)
		copy(dAtA[i:], m.TransactionId)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.TransactionId)))
		i--
		dAtA[i] = 0x52
	}
	if m.Height != 0 {
		i = encodeVarintSignatures(dAtA, i, uint64(m.Height))
		i--
		dAtA[i] = 0x48
	}
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
	if len(m.NewTip) > 0 {
		i -= len(m.NewTip)
		copy(dAtA[i:], m.NewTip)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.NewTip)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.PreviousTip) > 0 {
		i -= len(m.PreviousTip)
		copy(dAtA[i:], m.PreviousTip)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.PreviousTip)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.ObjectId) > 0 {
		i -= len(m.ObjectId)
		copy(dAtA[i:], m.ObjectId)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.ObjectId)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Type) > 0 {
		i -= len(m.Type)
		copy(dAtA[i:], m.Type)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Type)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Signature) > 0 {
		i -= len(m.Signature)
		copy(dAtA[i:], m.Signature)
		i = encodeVarintSignatures(dAtA, i, uint64(len(m.Signature)))
		i--
		dAtA[i] = 0x12
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
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	l = len(m.Type)
	if l > 0 {
		n += 1 + l + sovSignatures(uint64(l))
	}
	l = len(m.PublicKey)
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
	return n
}

func (m *Signature) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
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
	l = len(m.Type)
	if l > 0 {
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
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Type", wireType)
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
			m.Type = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
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
		case 2:
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
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Type", wireType)
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
			m.Type = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
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
		case 5:
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
		case 6:
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
		case 9:
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
		case 10:
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
