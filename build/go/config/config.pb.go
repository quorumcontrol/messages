// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: config/config.proto

package config

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

type PublicKeySet struct {
	VerKeyHex  string `protobuf:"bytes,1,opt,name=ver_key_hex,json=verKeyHex,proto3" json:"ver_key_hex,omitempty"`
	DestKeyHex string `protobuf:"bytes,2,opt,name=dest_key_hex,json=destKeyHex,proto3" json:"dest_key_hex,omitempty"`
}

func (m *PublicKeySet) Reset()         { *m = PublicKeySet{} }
func (m *PublicKeySet) String() string { return proto.CompactTextString(m) }
func (*PublicKeySet) ProtoMessage()    {}
func (*PublicKeySet) Descriptor() ([]byte, []int) {
	return fileDescriptor_cc332a44e926b360, []int{0}
}
func (m *PublicKeySet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *PublicKeySet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_PublicKeySet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *PublicKeySet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PublicKeySet.Merge(m, src)
}
func (m *PublicKeySet) XXX_Size() int {
	return m.Size()
}
func (m *PublicKeySet) XXX_DiscardUnknown() {
	xxx_messageInfo_PublicKeySet.DiscardUnknown(m)
}

var xxx_messageInfo_PublicKeySet proto.InternalMessageInfo

func (m *PublicKeySet) GetVerKeyHex() string {
	if m != nil {
		return m.VerKeyHex
	}
	return ""
}

func (m *PublicKeySet) GetDestKeyHex() string {
	if m != nil {
		return m.DestKeyHex
	}
	return ""
}

type NotaryGroup struct {
	Id                  string          `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	TransactionToken    string          `protobuf:"bytes,2,opt,name=transaction_token,json=transactionToken,proto3" json:"transaction_token,omitempty"`
	BurnAmount          uint64          `protobuf:"varint,3,opt,name=burn_amount,json=burnAmount,proto3" json:"burn_amount,omitempty"`
	TransactionTopic    string          `protobuf:"bytes,4,opt,name=transaction_topic,json=transactionTopic,proto3" json:"transaction_topic,omitempty"`
	CommitTopic         string          `protobuf:"bytes,5,opt,name=commit_topic,json=commitTopic,proto3" json:"commit_topic,omitempty"`
	ValidatorGenerators []string        `protobuf:"bytes,6,rep,name=validator_generators,json=validatorGenerators,proto3" json:"validator_generators,omitempty"`
	Transactions        []string        `protobuf:"bytes,7,rep,name=transactions,proto3" json:"transactions,omitempty"`
	Signers             []*PublicKeySet `protobuf:"bytes,8,rep,name=signers,proto3" json:"signers,omitempty"`
}

func (m *NotaryGroup) Reset()         { *m = NotaryGroup{} }
func (m *NotaryGroup) String() string { return proto.CompactTextString(m) }
func (*NotaryGroup) ProtoMessage()    {}
func (*NotaryGroup) Descriptor() ([]byte, []int) {
	return fileDescriptor_cc332a44e926b360, []int{1}
}
func (m *NotaryGroup) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NotaryGroup) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NotaryGroup.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalTo(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NotaryGroup) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NotaryGroup.Merge(m, src)
}
func (m *NotaryGroup) XXX_Size() int {
	return m.Size()
}
func (m *NotaryGroup) XXX_DiscardUnknown() {
	xxx_messageInfo_NotaryGroup.DiscardUnknown(m)
}

var xxx_messageInfo_NotaryGroup proto.InternalMessageInfo

func (m *NotaryGroup) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

func (m *NotaryGroup) GetTransactionToken() string {
	if m != nil {
		return m.TransactionToken
	}
	return ""
}

func (m *NotaryGroup) GetBurnAmount() uint64 {
	if m != nil {
		return m.BurnAmount
	}
	return 0
}

func (m *NotaryGroup) GetTransactionTopic() string {
	if m != nil {
		return m.TransactionTopic
	}
	return ""
}

func (m *NotaryGroup) GetCommitTopic() string {
	if m != nil {
		return m.CommitTopic
	}
	return ""
}

func (m *NotaryGroup) GetValidatorGenerators() []string {
	if m != nil {
		return m.ValidatorGenerators
	}
	return nil
}

func (m *NotaryGroup) GetTransactions() []string {
	if m != nil {
		return m.Transactions
	}
	return nil
}

func (m *NotaryGroup) GetSigners() []*PublicKeySet {
	if m != nil {
		return m.Signers
	}
	return nil
}

func init() {
	proto.RegisterType((*PublicKeySet)(nil), "config.PublicKeySet")
	proto.RegisterType((*NotaryGroup)(nil), "config.NotaryGroup")
}

func init() { proto.RegisterFile("config/config.proto", fileDescriptor_cc332a44e926b360) }

var fileDescriptor_cc332a44e926b360 = []byte{
	// 358 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x91, 0xcb, 0x4e, 0xb3, 0x40,
	0x00, 0x85, 0x0b, 0xed, 0xdf, 0xfe, 0x1d, 0x88, 0xd1, 0x69, 0x17, 0xac, 0x10, 0xbb, 0x22, 0x31,
	0x81, 0x54, 0x9f, 0x40, 0x37, 0x35, 0x69, 0x62, 0x1a, 0x74, 0xe5, 0x86, 0xc0, 0x30, 0xd2, 0x49,
	0x61, 0x06, 0xe7, 0xd2, 0x94, 0xb7, 0xf0, 0x99, 0x5c, 0xb9, 0xec, 0xd2, 0xa5, 0x69, 0x5f, 0xc4,
	0x70, 0xb1, 0xa9, 0xd1, 0x15, 0xcc, 0x77, 0xbe, 0x9c, 0x49, 0xe6, 0x80, 0x11, 0x62, 0xf4, 0x99,
	0xa4, 0x7e, 0xf3, 0xf1, 0x0a, 0xce, 0x24, 0x83, 0xfd, 0xe6, 0x34, 0x59, 0x00, 0x73, 0xa1, 0xe2,
	0x8c, 0xa0, 0x39, 0x2e, 0x1f, 0xb0, 0x84, 0x36, 0x30, 0xd6, 0x98, 0x87, 0x2b, 0x5c, 0x86, 0x4b,
	0xbc, 0xb1, 0x34, 0x47, 0x73, 0x87, 0xc1, 0x70, 0x8d, 0xf9, 0x1c, 0x97, 0x77, 0x78, 0x03, 0x1d,
	0x60, 0x26, 0x58, 0xc8, 0x83, 0xa0, 0xd7, 0x02, 0xa8, 0x58, 0x63, 0x4c, 0xde, 0x74, 0x60, 0xdc,
	0x33, 0x19, 0xf1, 0x72, 0xc6, 0x99, 0x2a, 0xe0, 0x09, 0xd0, 0x49, 0xd2, 0x16, 0xe9, 0x24, 0x81,
	0x97, 0xe0, 0x4c, 0xf2, 0x88, 0x8a, 0x08, 0x49, 0xc2, 0x68, 0x28, 0xd9, 0x0a, 0xd3, 0xb6, 0xe6,
	0xf4, 0x28, 0x78, 0xac, 0x38, 0x3c, 0x07, 0x46, 0xac, 0x38, 0x0d, 0xa3, 0x9c, 0x29, 0x2a, 0xad,
	0xae, 0xa3, 0xb9, 0xbd, 0x00, 0x54, 0xe8, 0xa6, 0x26, 0xbf, 0xdb, 0x0a, 0x82, 0xac, 0xde, 0x1f,
	0x6d, 0x05, 0x41, 0xf0, 0x02, 0x98, 0x88, 0xe5, 0x39, 0x91, 0xad, 0xf7, 0xaf, 0xf6, 0x8c, 0x86,
	0x35, 0xca, 0x14, 0x8c, 0xd7, 0x51, 0x46, 0x92, 0x48, 0x32, 0x1e, 0xa6, 0x98, 0x62, 0x5e, 0xfd,
	0x09, 0xab, 0xef, 0x74, 0xdd, 0x61, 0x30, 0x3a, 0x64, 0xb3, 0x43, 0x04, 0x27, 0xc0, 0x3c, 0xba,
	0x49, 0x58, 0x83, 0x5a, 0xfd, 0xc1, 0xa0, 0x07, 0x06, 0x82, 0xa4, 0x14, 0x73, 0x61, 0xfd, 0x77,
	0xba, 0xae, 0x71, 0x35, 0xf6, 0xda, 0x39, 0x8e, 0x5f, 0x3f, 0xf8, 0x96, 0x6e, 0xe7, 0xef, 0x3b,
	0x5b, 0xdb, 0xee, 0x6c, 0xed, 0x73, 0x67, 0x6b, 0xaf, 0x7b, 0xbb, 0xb3, 0xdd, 0xdb, 0x9d, 0x8f,
	0xbd, 0xdd, 0x79, 0x9a, 0xa6, 0x44, 0x2e, 0x55, 0xec, 0x21, 0x96, 0xfb, 0x2f, 0x8a, 0x71, 0x95,
	0x23, 0x46, 0x25, 0x67, 0x99, 0x9f, 0x63, 0x21, 0xa2, 0x14, 0x0b, 0x3f, 0x56, 0x24, 0x4b, 0xfc,
	0x94, 0xb5, 0x8b, 0xc7, 0xfd, 0x7a, 0xf2, 0xeb, 0xaf, 0x00, 0x00, 0x00, 0xff, 0xff, 0x47, 0xb7,
	0x47, 0x4b, 0x09, 0x02, 0x00, 0x00,
}

func (m *PublicKeySet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *PublicKeySet) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.VerKeyHex) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintConfig(dAtA, i, uint64(len(m.VerKeyHex)))
		i += copy(dAtA[i:], m.VerKeyHex)
	}
	if len(m.DestKeyHex) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintConfig(dAtA, i, uint64(len(m.DestKeyHex)))
		i += copy(dAtA[i:], m.DestKeyHex)
	}
	return i, nil
}

func (m *NotaryGroup) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalTo(dAtA)
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NotaryGroup) MarshalTo(dAtA []byte) (int, error) {
	var i int
	_ = i
	var l int
	_ = l
	if len(m.Id) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintConfig(dAtA, i, uint64(len(m.Id)))
		i += copy(dAtA[i:], m.Id)
	}
	if len(m.TransactionToken) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintConfig(dAtA, i, uint64(len(m.TransactionToken)))
		i += copy(dAtA[i:], m.TransactionToken)
	}
	if m.BurnAmount != 0 {
		dAtA[i] = 0x18
		i++
		i = encodeVarintConfig(dAtA, i, uint64(m.BurnAmount))
	}
	if len(m.TransactionTopic) > 0 {
		dAtA[i] = 0x22
		i++
		i = encodeVarintConfig(dAtA, i, uint64(len(m.TransactionTopic)))
		i += copy(dAtA[i:], m.TransactionTopic)
	}
	if len(m.CommitTopic) > 0 {
		dAtA[i] = 0x2a
		i++
		i = encodeVarintConfig(dAtA, i, uint64(len(m.CommitTopic)))
		i += copy(dAtA[i:], m.CommitTopic)
	}
	if len(m.ValidatorGenerators) > 0 {
		for _, s := range m.ValidatorGenerators {
			dAtA[i] = 0x32
			i++
			l = len(s)
			for l >= 1<<7 {
				dAtA[i] = uint8(uint64(l)&0x7f | 0x80)
				l >>= 7
				i++
			}
			dAtA[i] = uint8(l)
			i++
			i += copy(dAtA[i:], s)
		}
	}
	if len(m.Transactions) > 0 {
		for _, s := range m.Transactions {
			dAtA[i] = 0x3a
			i++
			l = len(s)
			for l >= 1<<7 {
				dAtA[i] = uint8(uint64(l)&0x7f | 0x80)
				l >>= 7
				i++
			}
			dAtA[i] = uint8(l)
			i++
			i += copy(dAtA[i:], s)
		}
	}
	if len(m.Signers) > 0 {
		for _, msg := range m.Signers {
			dAtA[i] = 0x42
			i++
			i = encodeVarintConfig(dAtA, i, uint64(msg.Size()))
			n, err := msg.MarshalTo(dAtA[i:])
			if err != nil {
				return 0, err
			}
			i += n
		}
	}
	return i, nil
}

func encodeVarintConfig(dAtA []byte, offset int, v uint64) int {
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return offset + 1
}
func (m *PublicKeySet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.VerKeyHex)
	if l > 0 {
		n += 1 + l + sovConfig(uint64(l))
	}
	l = len(m.DestKeyHex)
	if l > 0 {
		n += 1 + l + sovConfig(uint64(l))
	}
	return n
}

func (m *NotaryGroup) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Id)
	if l > 0 {
		n += 1 + l + sovConfig(uint64(l))
	}
	l = len(m.TransactionToken)
	if l > 0 {
		n += 1 + l + sovConfig(uint64(l))
	}
	if m.BurnAmount != 0 {
		n += 1 + sovConfig(uint64(m.BurnAmount))
	}
	l = len(m.TransactionTopic)
	if l > 0 {
		n += 1 + l + sovConfig(uint64(l))
	}
	l = len(m.CommitTopic)
	if l > 0 {
		n += 1 + l + sovConfig(uint64(l))
	}
	if len(m.ValidatorGenerators) > 0 {
		for _, s := range m.ValidatorGenerators {
			l = len(s)
			n += 1 + l + sovConfig(uint64(l))
		}
	}
	if len(m.Transactions) > 0 {
		for _, s := range m.Transactions {
			l = len(s)
			n += 1 + l + sovConfig(uint64(l))
		}
	}
	if len(m.Signers) > 0 {
		for _, e := range m.Signers {
			l = e.Size()
			n += 1 + l + sovConfig(uint64(l))
		}
	}
	return n
}

func sovConfig(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozConfig(x uint64) (n int) {
	return sovConfig(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *PublicKeySet) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowConfig
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
			return fmt.Errorf("proto: PublicKeySet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: PublicKeySet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field VerKeyHex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.VerKeyHex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DestKeyHex", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DestKeyHex = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipConfig(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthConfig
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthConfig
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
func (m *NotaryGroup) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowConfig
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
			return fmt.Errorf("proto: NotaryGroup: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NotaryGroup: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Id = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TransactionToken", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TransactionToken = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BurnAmount", wireType)
			}
			m.BurnAmount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BurnAmount |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TransactionTopic", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TransactionTopic = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field CommitTopic", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.CommitTopic = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ValidatorGenerators", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ValidatorGenerators = append(m.ValidatorGenerators, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Transactions", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Transactions = append(m.Transactions, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Signers", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Signers = append(m.Signers, &PublicKeySet{})
			if err := m.Signers[len(m.Signers)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipConfig(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthConfig
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthConfig
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
func skipConfig(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowConfig
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
					return 0, ErrIntOverflowConfig
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
					return 0, ErrIntOverflowConfig
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
				return 0, ErrInvalidLengthConfig
			}
			iNdEx += length
			if iNdEx < 0 {
				return 0, ErrInvalidLengthConfig
			}
			return iNdEx, nil
		case 3:
			for {
				var innerWire uint64
				var start int = iNdEx
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return 0, ErrIntOverflowConfig
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
				next, err := skipConfig(dAtA[start:])
				if err != nil {
					return 0, err
				}
				iNdEx = start + next
				if iNdEx < 0 {
					return 0, ErrInvalidLengthConfig
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
	ErrInvalidLengthConfig = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowConfig   = fmt.Errorf("proto: integer overflow")
)
