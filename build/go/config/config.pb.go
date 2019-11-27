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
	VerKey  []byte `protobuf:"bytes,1,opt,name=ver_key,json=verKey,proto3" json:"ver_key,omitempty"`
	DestKey []byte `protobuf:"bytes,2,opt,name=dest_key,json=destKey,proto3" json:"dest_key,omitempty"`
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

func (m *PublicKeySet) GetVerKey() []byte {
	if m != nil {
		return m.VerKey
	}
	return nil
}

func (m *PublicKeySet) GetDestKey() []byte {
	if m != nil {
		return m.DestKey
	}
	return nil
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
	BootstrapAddresses  []string        `protobuf:"bytes,9,rep,name=bootstrap_addresses,json=bootstrapAddresses,proto3" json:"bootstrap_addresses,omitempty"`
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

func (m *NotaryGroup) GetBootstrapAddresses() []string {
	if m != nil {
		return m.BootstrapAddresses
	}
	return nil
}

func init() {
	proto.RegisterType((*PublicKeySet)(nil), "config.PublicKeySet")
	proto.RegisterType((*NotaryGroup)(nil), "config.NotaryGroup")
}

func init() { proto.RegisterFile("config/config.proto", fileDescriptor_cc332a44e926b360) }

var fileDescriptor_cc332a44e926b360 = []byte{
	// 388 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x92, 0x4f, 0x8e, 0xd3, 0x30,
	0x18, 0xc5, 0x9b, 0x76, 0x68, 0xa7, 0x6e, 0x84, 0xc0, 0x1d, 0x89, 0xb0, 0x09, 0xa1, 0xab, 0x48,
	0x48, 0x89, 0x18, 0xb8, 0xc0, 0xcc, 0x66, 0x16, 0x95, 0x46, 0x28, 0xb0, 0x62, 0x13, 0x39, 0xce,
	0x47, 0xb0, 0x26, 0xf1, 0x17, 0xfc, 0x27, 0x52, 0x6e, 0xc1, 0xb1, 0x58, 0xce, 0x92, 0x25, 0x6a,
	0x8f, 0xc0, 0x05, 0x50, 0x9c, 0xb6, 0x2a, 0x82, 0x95, 0xfd, 0xbd, 0xdf, 0xf3, 0xb3, 0x64, 0x3f,
	0xb2, 0xe6, 0x28, 0xbf, 0x88, 0x2a, 0x1d, 0x97, 0xa4, 0x55, 0x68, 0x90, 0xce, 0xc7, 0x69, 0x73,
	0x4b, 0xfc, 0x0f, 0xb6, 0xa8, 0x05, 0xdf, 0x42, 0xff, 0x11, 0x0c, 0x7d, 0x41, 0x16, 0x1d, 0xa8,
	0xfc, 0x01, 0xfa, 0xc0, 0x8b, 0xbc, 0xd8, 0xcf, 0xe6, 0x1d, 0xa8, 0x2d, 0xf4, 0xf4, 0x25, 0xb9,
	0x2c, 0x41, 0x1b, 0x47, 0xa6, 0x8e, 0x2c, 0x86, 0x79, 0x0b, 0xfd, 0xe6, 0xf7, 0x94, 0xac, 0xee,
	0xd1, 0x30, 0xd5, 0xdf, 0x29, 0xb4, 0x2d, 0x7d, 0x4a, 0xa6, 0xa2, 0x74, 0xc7, 0x97, 0xd9, 0x54,
	0x94, 0xf4, 0x0d, 0x79, 0x6e, 0x14, 0x93, 0x9a, 0x71, 0x23, 0x50, 0xe6, 0x06, 0x1f, 0x40, 0xba,
	0x8c, 0x65, 0xf6, 0xec, 0x0c, 0x7c, 0x1a, 0x74, 0xfa, 0x8a, 0xac, 0x0a, 0xab, 0x64, 0xce, 0x1a,
	0xb4, 0xd2, 0x04, 0xb3, 0xc8, 0x8b, 0x2f, 0x32, 0x32, 0x48, 0x37, 0x4e, 0xf9, 0x37, 0xad, 0x15,
	0x3c, 0xb8, 0xf8, 0x4f, 0x5a, 0x2b, 0x38, 0x7d, 0x4d, 0x7c, 0x8e, 0x4d, 0x23, 0xcc, 0xc1, 0xf7,
	0xc4, 0xf9, 0x56, 0xa3, 0x36, 0x5a, 0xde, 0x92, 0xab, 0x8e, 0xd5, 0xa2, 0x64, 0x06, 0x55, 0x5e,
	0x81, 0x04, 0x35, 0xec, 0x74, 0x30, 0x8f, 0x66, 0xf1, 0x32, 0x5b, 0x9f, 0xd8, 0xdd, 0x09, 0xd1,
	0x0d, 0xf1, 0xcf, 0x6e, 0xd2, 0xc1, 0xc2, 0x59, 0xff, 0xd2, 0x68, 0x42, 0x16, 0x5a, 0x54, 0x12,
	0x94, 0x0e, 0x2e, 0xa3, 0x59, 0xbc, 0xba, 0xbe, 0x4a, 0x0e, 0x1f, 0x70, 0xfe, 0xde, 0xd9, 0xd1,
	0x44, 0x53, 0xb2, 0x2e, 0x10, 0x8d, 0x36, 0x8a, 0xb5, 0x39, 0x2b, 0x4b, 0x05, 0x5a, 0x83, 0x0e,
	0x96, 0x2e, 0x9a, 0x9e, 0xd0, 0xcd, 0x91, 0xdc, 0xde, 0xff, 0xd8, 0x85, 0xde, 0xe3, 0x2e, 0xf4,
	0x7e, 0xed, 0x42, 0xef, 0xfb, 0x3e, 0x9c, 0x3c, 0xee, 0xc3, 0xc9, 0xcf, 0x7d, 0x38, 0xf9, 0xfc,
	0xbe, 0x12, 0xe6, 0xab, 0x2d, 0x12, 0x8e, 0x4d, 0xfa, 0xcd, 0xa2, 0xb2, 0x0d, 0x47, 0x69, 0x14,
	0xd6, 0x69, 0x03, 0x5a, 0xb3, 0x0a, 0x74, 0xda, 0x5d, 0xa7, 0x85, 0x15, 0x75, 0x99, 0x56, 0x78,
	0xe8, 0x45, 0x31, 0x77, 0xc5, 0x78, 0xf7, 0x27, 0x00, 0x00, 0xff, 0xff, 0xf2, 0x99, 0x2f, 0x92,
	0x2f, 0x02, 0x00, 0x00,
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
	if len(m.VerKey) > 0 {
		dAtA[i] = 0xa
		i++
		i = encodeVarintConfig(dAtA, i, uint64(len(m.VerKey)))
		i += copy(dAtA[i:], m.VerKey)
	}
	if len(m.DestKey) > 0 {
		dAtA[i] = 0x12
		i++
		i = encodeVarintConfig(dAtA, i, uint64(len(m.DestKey)))
		i += copy(dAtA[i:], m.DestKey)
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
	if len(m.BootstrapAddresses) > 0 {
		for _, s := range m.BootstrapAddresses {
			dAtA[i] = 0x4a
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
	l = len(m.VerKey)
	if l > 0 {
		n += 1 + l + sovConfig(uint64(l))
	}
	l = len(m.DestKey)
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
	if len(m.BootstrapAddresses) > 0 {
		for _, s := range m.BootstrapAddresses {
			l = len(s)
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
				return fmt.Errorf("proto: wrong wireType = %d for field VerKey", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.VerKey = append(m.VerKey[:0], dAtA[iNdEx:postIndex]...)
			if m.VerKey == nil {
				m.VerKey = []byte{}
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field DestKey", wireType)
			}
			var byteLen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowConfig
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
				return ErrInvalidLengthConfig
			}
			postIndex := iNdEx + byteLen
			if postIndex < 0 {
				return ErrInvalidLengthConfig
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.DestKey = append(m.DestKey[:0], dAtA[iNdEx:postIndex]...)
			if m.DestKey == nil {
				m.DestKey = []byte{}
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
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BootstrapAddresses", wireType)
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
			m.BootstrapAddresses = append(m.BootstrapAddresses, string(dAtA[iNdEx:postIndex]))
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