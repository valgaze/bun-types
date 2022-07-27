[bun-types](../README.md) / [Exports](../modules.md) / ["bun:ffi"](../modules/bun_ffi_.md) / FFIType

# Enumeration: FFIType

["bun:ffi"](../modules/bun_ffi_.md).FFIType

## Table of contents

### Enumeration Members

- [bool](bun_ffi_.FFIType.md#bool)
- [char](bun_ffi_.FFIType.md#char)
- [cstring](bun_ffi_.FFIType.md#cstring)
- [double](bun_ffi_.FFIType.md#double)
- [f32](bun_ffi_.FFIType.md#f32)
- [f64](bun_ffi_.FFIType.md#f64)
- [float](bun_ffi_.FFIType.md#float)
- [i16](bun_ffi_.FFIType.md#i16)
- [i32](bun_ffi_.FFIType.md#i32)
- [i64](bun_ffi_.FFIType.md#i64)
- [i64\_fast](bun_ffi_.FFIType.md#i64_fast)
- [i8](bun_ffi_.FFIType.md#i8)
- [int](bun_ffi_.FFIType.md#int)
- [int16\_t](bun_ffi_.FFIType.md#int16_t)
- [int32\_t](bun_ffi_.FFIType.md#int32_t)
- [int64\_t](bun_ffi_.FFIType.md#int64_t)
- [int8\_t](bun_ffi_.FFIType.md#int8_t)
- [pointer](bun_ffi_.FFIType.md#pointer)
- [ptr](bun_ffi_.FFIType.md#ptr)
- [u16](bun_ffi_.FFIType.md#u16)
- [u32](bun_ffi_.FFIType.md#u32)
- [u64](bun_ffi_.FFIType.md#u64)
- [u64\_fast](bun_ffi_.FFIType.md#u64_fast)
- [u8](bun_ffi_.FFIType.md#u8)
- [uint16\_t](bun_ffi_.FFIType.md#uint16_t)
- [uint32\_t](bun_ffi_.FFIType.md#uint32_t)
- [uint64\_t](bun_ffi_.FFIType.md#uint64_t)
- [uint8\_t](bun_ffi_.FFIType.md#uint8_t)
- [void](bun_ffi_.FFIType.md#void)

## Enumeration Members

### bool

• **bool** = ``11``

Booelan value

Must be `true` or `false`. `0` and `1` type coercion is not supported.

In C, this corresponds to:
```c
bool
_Bool
```

#### Defined in

[ffi.d.ts:276](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L276)

___

### char

• **char** = ``0``

#### Defined in

[ffi.d.ts:20](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L20)

___

### cstring

• **cstring** = ``14``

When used as a `returns`, this will automatically become a [CString](../classes/bun_ffi_.CString.md).

When used in `args` it is equivalent to [pointer](bun_ffi_.FFIType.md#pointer)

#### Defined in

[ffi.d.ts:322](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L322)

___

### double

• **double** = ``9``

Doubles are not supported yet!

#### Defined in

[ffi.d.ts:249](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L249)

___

### f32

• **f32** = ``10``

Floats are not supported yet!

#### Defined in

[ffi.d.ts:261](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L261)

___

### f64

• **f64** = ``9``

Doubles are not supported yet!

#### Defined in

[ffi.d.ts:253](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L253)

___

### float

• **float** = ``10``

Floats are not supported yet!

#### Defined in

[ffi.d.ts:257](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L257)

___

### i16

• **i16** = ``3``

16-bit signed integer

Must be a value between -32768 and 32767

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
in16_t
short // on arm64 & x64
```

In JavaScript:
```js
var num = 0;
```

#### Defined in

[ffi.d.ts:134](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L134)

___

### i32

• **i32** = ``5``

32-bit signed integer

Alias of [int32_t](bun_ffi_.FFIType.md#int32_t)

#### Defined in

[ffi.d.ts:186](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L186)

___

### i64

• **i64** = ``7``

i64 is a 64-bit signed integer

This is not implemented yet!

#### Defined in

[ffi.d.ts:231](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L231)

___

### i64\_fast

• **i64\_fast** = ``15``

Attempt to coerce `BigInt` into a `Number` if it fits. This improves performance
but means you might get a `BigInt` or you might get a `number`.

In C, this always becomes `int64_t`

In JavaScript, this could be number or it could be BigInt, depending on what
value is passed in.

#### Defined in

[ffi.d.ts:334](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L334)

___

### i8

• **i8** = ``1``

8-bit signed integer

Must be a value between -127 and 127

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
signed char
char // on x64 & aarch64 macOS
```

In JavaScript:
```js
var num = 0;
```

#### Defined in

[ffi.d.ts:58](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L58)

___

### int

• **int** = ``5``

32-bit signed integer

The same as `int` in C

```c
int
```

#### Defined in

[ffi.d.ts:196](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L196)

___

### int16\_t

• **int16\_t** = ``3``

16-bit signed integer

Must be a value between -32768 and 32767

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
in16_t
short // on arm64 & x64
```

In JavaScript:
```js
var num = 0;
```

#### Defined in

[ffi.d.ts:115](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L115)

___

### int32\_t

• **int32\_t** = ``5``

32-bit signed integer

#### Defined in

[ffi.d.ts:179](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L179)

___

### int64\_t

• **int64\_t** = ``7``

int64 is a 64-bit signed integer

This is not implemented yet!

#### Defined in

[ffi.d.ts:225](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L225)

___

### int8\_t

• **int8\_t** = ``1``

8-bit signed integer

Must be a value between -127 and 127

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
signed char
char // on x64 & aarch64 macOS
```

In JavaScript:
```js
var num = 0;
```

#### Defined in

[ffi.d.ts:39](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L39)

___

### pointer

• **pointer** = ``12``

Pointer value

alias of [ptr](bun_ffi_.FFIType.md#ptr)

#### Defined in

[ffi.d.ts:299](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L299)

___

### ptr

• **ptr** = ``12``

Pointer value

See Bun.FFI.ptr for more information

In C:
```c
void*
```

In JavaScript:
```js
ptr(new Uint8Array(1))
```

#### Defined in

[ffi.d.ts:293](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L293)

___

### u16

• **u16** = ``4``

16-bit unsigned integer

Must be a value between 0 and 65535, inclusive.

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
uint16_t
unsigned short // on arm64 & x64
```

In JavaScript:
```js
var num = 0;
```

#### Defined in

[ffi.d.ts:173](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L173)

___

### u32

• **u32** = ``6``

32-bit unsigned integer

Alias of [uint32_t](bun_ffi_.FFIType.md#uint32_t)

#### Defined in

[ffi.d.ts:218](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L218)

___

### u64

• **u64** = ``8``

64-bit unsigned integer

This is not implemented yet!

#### Defined in

[ffi.d.ts:244](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L244)

___

### u64\_fast

• **u64\_fast** = ``16``

Attempt to coerce `BigInt` into a `Number` if it fits. This improves performance
but means you might get a `BigInt` or you might get a `number`.

In C, this always becomes `uint64_t`

In JavaScript, this could be number or it could be BigInt, depending on what
value is passed in.

#### Defined in

[ffi.d.ts:346](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L346)

___

### u8

• **u8** = ``2``

8-bit unsigned integer

Must be a value between 0 and 255

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
unsigned char
```

In JavaScript:
```js
var num = 0;
```

#### Defined in

[ffi.d.ts:95](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L95)

___

### uint16\_t

• **uint16\_t** = ``4``

16-bit unsigned integer

Must be a value between 0 and 65535, inclusive.

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
uint16_t
unsigned short // on arm64 & x64
```

In JavaScript:
```js
var num = 0;
```

#### Defined in

[ffi.d.ts:154](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L154)

___

### uint32\_t

• **uint32\_t** = ``6``

32-bit unsigned integer

The same as `unsigned int` in C (on x64 & arm64)

C:
```c
unsigned int
```
JavaScript:
```js
ptr(new Uint32Array(1))
```

#### Defined in

[ffi.d.ts:212](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L212)

___

### uint64\_t

• **uint64\_t** = ``8``

64-bit unsigned integer

This is not implemented yet!

#### Defined in

[ffi.d.ts:238](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L238)

___

### uint8\_t

• **uint8\_t** = ``2``

8-bit unsigned integer

Must be a value between 0 and 255

When passing to a FFI function (C ABI), type coercion is not performed.

In C:
```c
unsigned char
```

In JavaScript:
```js
var num = 0;
```

#### Defined in

[ffi.d.ts:77](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L77)

___

### void

• **void** = ``13``

void value

void arguments are not supported

void return type is the default return type

In C:
```c
void
```

#### Defined in

[ffi.d.ts:314](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L314)
