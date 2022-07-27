[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / BufferConstructor

# Interface: BufferConstructor

Raw data is stored in instances of the Buffer class.
A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'base64url'|'binary'(deprecated)|'hex'

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#constructor)

### Properties

- [poolSize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#poolsize)

### Methods

- [alloc](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#alloc)
- [allocUnsafe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#allocunsafe)
- [allocUnsafeSlow](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#allocunsafeslow)
- [byteLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#bytelength)
- [compare](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#compare)
- [concat](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#concat)
- [from](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#from)
- [isBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#isbuffer)
- [isEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#isencoding)
- [of](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md#of)

## Constructors

### constructor

• **new BufferConstructor**(`str`, `encoding?`)

Allocates a new buffer containing the given {str}.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String to store in buffer. |
| `encoding?` | `BufferEncoding` | encoding to use, optional.  Default is 'utf8' |

#### Defined in

[buffer.d.ts:97](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L97)

• **new BufferConstructor**(`size`)

Allocates a new buffer of {size} octets.

**`Deprecated`**

since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | count of octets to allocate. |

#### Defined in

[buffer.d.ts:104](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L104)

• **new BufferConstructor**(`array`)

Allocates a new buffer containing the given {array} of octets.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(array)` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `Uint8Array` | The octets to store. |

#### Defined in

[buffer.d.ts:111](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L111)

• **new BufferConstructor**(`arrayBuffer`)

Produces a Buffer backed by the same allocated memory as
the given {ArrayBuffer}/{SharedArrayBuffer}.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayBuffer` | `ArrayBuffer` \| `SharedArrayBuffer` | The ArrayBuffer with which to share memory. |

#### Defined in

[buffer.d.ts:120](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L120)

• **new BufferConstructor**(`array`)

Allocates a new buffer containing the given {array} of octets.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(array)` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | readonly `any`[] | The octets to store. |

#### Defined in

[buffer.d.ts:127](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L127)

• **new BufferConstructor**(`buffer`)

Copies the passed {buffer} data onto a new {Buffer} instance.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(buffer)` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) | The buffer to copy. |

#### Defined in

[buffer.d.ts:134](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L134)

• **new BufferConstructor**(`str`, `encoding?`)

Allocates a new buffer containing the given {str}.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(string[, encoding])` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String to store in buffer. |
| `encoding?` | `BufferEncoding` | encoding to use, optional.  Default is 'utf8' |

#### Defined in

[dist/types.d.ts:1343](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1343)

• **new BufferConstructor**(`size`)

Allocates a new buffer of {size} octets.

**`Deprecated`**

since v10.0.0 - Use `Buffer.alloc()` instead (also see `Buffer.allocUnsafe()`).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | count of octets to allocate. |

#### Defined in

[dist/types.d.ts:1350](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1350)

• **new BufferConstructor**(`array`)

Allocates a new buffer containing the given {array} of octets.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(array)` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `Uint8Array` | The octets to store. |

#### Defined in

[dist/types.d.ts:1357](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1357)

• **new BufferConstructor**(`arrayBuffer`)

Produces a Buffer backed by the same allocated memory as
the given {ArrayBuffer}/{SharedArrayBuffer}.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(arrayBuffer[, byteOffset[, length]])` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayBuffer` | `ArrayBuffer` \| `SharedArrayBuffer` | The ArrayBuffer with which to share memory. |

#### Defined in

[dist/types.d.ts:1366](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1366)

• **new BufferConstructor**(`array`)

Allocates a new buffer containing the given {array} of octets.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(array)` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | readonly `any`[] | The octets to store. |

#### Defined in

[dist/types.d.ts:1373](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1373)

• **new BufferConstructor**(`buffer`)

Copies the passed {buffer} data onto a new {Buffer} instance.

**`Deprecated`**

since v10.0.0 - Use `Buffer.from(buffer)` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) | The buffer to copy. |

#### Defined in

[dist/types.d.ts:1380](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1380)

## Properties

### poolSize

• **poolSize**: `number`

This is the size (in bytes) of pre-allocated internal `Buffer` instances used
for pooling. This value may be modified.

#### Defined in

[buffer.d.ts:440](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L440)

[dist/types.d.ts:1686](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1686)

## Methods

### alloc

▸ **alloc**(`size`, `fill?`, `encoding?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Allocates a new `Buffer` of `size` bytes. If `fill` is `undefined`, the`Buffer` will be zero-filled.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(5);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00>
```

If `size` is larger than constants.MAX_LENGTH or smaller than 0, `ERR_INVALID_ARG_VALUE` is thrown.

If `fill` is specified, the allocated `Buffer` will be initialized by calling `buf.fill(fill)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(5, 'a');

console.log(buf);
// Prints: <Buffer 61 61 61 61 61>
```

If both `fill` and `encoding` are specified, the allocated `Buffer` will be
initialized by calling `buf.fill(fill, encoding)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');

console.log(buf);
// Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
```

Calling `Buffer.alloc()` can be measurably slower than the alternative `Buffer.allocUnsafe()` but ensures that the newly created `Buffer` instance
contents will never contain sensitive data from previous allocations, including
data that might not have been allocated for `Buffer`s.

A `TypeError` will be thrown if `size` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The desired length of the new `Buffer`. |
| `fill?` | `string` \| `number` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) | A value to pre-fill the new `Buffer` with. |
| `encoding?` | `BufferEncoding` | If `fill` is a string, this is its encoding. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:351](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L351)

▸ **alloc**(`size`, `fill?`, `encoding?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Allocates a new `Buffer` of `size` bytes. If `fill` is `undefined`, the`Buffer` will be zero-filled.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(5);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00>
```

If `size` is larger than constants.MAX_LENGTH or smaller than 0, `ERR_INVALID_ARG_VALUE` is thrown.

If `fill` is specified, the allocated `Buffer` will be initialized by calling `buf.fill(fill)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(5, 'a');

console.log(buf);
// Prints: <Buffer 61 61 61 61 61>
```

If both `fill` and `encoding` are specified, the allocated `Buffer` will be
initialized by calling `buf.fill(fill, encoding)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');

console.log(buf);
// Prints: <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
```

Calling `Buffer.alloc()` can be measurably slower than the alternative `Buffer.allocUnsafe()` but ensures that the newly created `Buffer` instance
contents will never contain sensitive data from previous allocations, including
data that might not have been allocated for `Buffer`s.

A `TypeError` will be thrown if `size` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The desired length of the new `Buffer`. |
| `fill?` | `string` \| `number` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) | A value to pre-fill the new `Buffer` with. |
| `encoding?` | `BufferEncoding` | If `fill` is a string, this is its encoding. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1597](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1597)

___

### allocUnsafe

▸ **allocUnsafe**(`size`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Allocates a new `Buffer` of `size` bytes. If `size` is larger than constants.MAX_LENGTH or smaller than 0, `ERR_INVALID_ARG_VALUE` is thrown.

The underlying memory for `Buffer` instances created in this way is _not_
_initialized_. The contents of the newly created `Buffer` are unknown and _may contain sensitive data_. Use `Buffer.alloc()` instead to initialize`Buffer` instances with zeroes.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(10);

console.log(buf);
// Prints (contents may vary): <Buffer a0 8b 28 3f 01 00 00 00 50 32>

buf.fill(0);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00 00 00 00 00 00>
```

A `TypeError` will be thrown if `size` is not a number.

The `Buffer` module pre-allocates an internal `Buffer` instance of
size `Buffer.poolSize` that is used as a pool for the fast allocation of new`Buffer` instances created using `Buffer.allocUnsafe()`,`Buffer.from(array)`, `Buffer.concat()`, and the
deprecated`new Buffer(size)` constructor only when `size` is less than or equal
to `Buffer.poolSize >> 1` (floor of `Buffer.poolSize` divided by two).

Use of this pre-allocated internal memory pool is a key difference between
calling `Buffer.alloc(size, fill)` vs. `Buffer.allocUnsafe(size).fill(fill)`.
Specifically, `Buffer.alloc(size, fill)` will _never_ use the internal `Buffer`pool, while `Buffer.allocUnsafe(size).fill(fill)`_will_ use the internal`Buffer` pool if `size` is less
than or equal to half `Buffer.poolSize`. The
difference is subtle but can be important when an application requires the
additional performance that `Buffer.allocUnsafe()` provides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The desired length of the new `Buffer`. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:391](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L391)

▸ **allocUnsafe**(`size`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Allocates a new `Buffer` of `size` bytes. If `size` is larger than constants.MAX_LENGTH or smaller than 0, `ERR_INVALID_ARG_VALUE` is thrown.

The underlying memory for `Buffer` instances created in this way is _not_
_initialized_. The contents of the newly created `Buffer` are unknown and _may contain sensitive data_. Use `Buffer.alloc()` instead to initialize`Buffer` instances with zeroes.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(10);

console.log(buf);
// Prints (contents may vary): <Buffer a0 8b 28 3f 01 00 00 00 50 32>

buf.fill(0);

console.log(buf);
// Prints: <Buffer 00 00 00 00 00 00 00 00 00 00>
```

A `TypeError` will be thrown if `size` is not a number.

The `Buffer` module pre-allocates an internal `Buffer` instance of
size `Buffer.poolSize` that is used as a pool for the fast allocation of new`Buffer` instances created using `Buffer.allocUnsafe()`,`Buffer.from(array)`, `Buffer.concat()`, and the
deprecated`new Buffer(size)` constructor only when `size` is less than or equal
to `Buffer.poolSize >> 1` (floor of `Buffer.poolSize` divided by two).

Use of this pre-allocated internal memory pool is a key difference between
calling `Buffer.alloc(size, fill)` vs. `Buffer.allocUnsafe(size).fill(fill)`.
Specifically, `Buffer.alloc(size, fill)` will _never_ use the internal `Buffer`pool, while `Buffer.allocUnsafe(size).fill(fill)`_will_ use the internal`Buffer` pool if `size` is less
than or equal to half `Buffer.poolSize`. The
difference is subtle but can be important when an application requires the
additional performance that `Buffer.allocUnsafe()` provides.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The desired length of the new `Buffer`. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1637](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1637)

___

### allocUnsafeSlow

▸ **allocUnsafeSlow**(`size`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Allocates a new `Buffer` of `size` bytes. If `size` is larger than constants.MAX_LENGTH or smaller than 0, `ERR_INVALID_ARG_VALUE` is thrown. A zero-length `Buffer` is created
if `size` is 0.

The underlying memory for `Buffer` instances created in this way is _not_
_initialized_. The contents of the newly created `Buffer` are unknown and_may contain sensitive data_. Use `buf.fill(0)` to initialize
such `Buffer` instances with zeroes.

When using `Buffer.allocUnsafe()` to allocate new `Buffer` instances,
allocations under 4 KB are sliced from a single pre-allocated `Buffer`. This
allows applications to avoid the garbage collection overhead of creating many
individually allocated `Buffer` instances. This approach improves both
performance and memory usage by eliminating the need to track and clean up as
many individual `ArrayBuffer` objects.

However, in the case where a developer may need to retain a small chunk of
memory from a pool for an indeterminate amount of time, it may be appropriate
to create an un-pooled `Buffer` instance using `Buffer.allocUnsafeSlow()` and
then copying out the relevant bits.

```js
import { Buffer } from 'buffer';

// Need to keep around a few small chunks of memory.
const store = [];

socket.on('readable', () => {
  let data;
  while (null !== (data = readable.read())) {
    // Allocate for retained data.
    const sb = Buffer.allocUnsafeSlow(10);

    // Copy the data into the new allocation.
    data.copy(sb, 0, 0, 10);

    store.push(sb);
  }
});
```

A `TypeError` will be thrown if `size` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The desired length of the new `Buffer`. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:435](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L435)

▸ **allocUnsafeSlow**(`size`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Allocates a new `Buffer` of `size` bytes. If `size` is larger than constants.MAX_LENGTH or smaller than 0, `ERR_INVALID_ARG_VALUE` is thrown. A zero-length `Buffer` is created
if `size` is 0.

The underlying memory for `Buffer` instances created in this way is _not_
_initialized_. The contents of the newly created `Buffer` are unknown and_may contain sensitive data_. Use `buf.fill(0)` to initialize
such `Buffer` instances with zeroes.

When using `Buffer.allocUnsafe()` to allocate new `Buffer` instances,
allocations under 4 KB are sliced from a single pre-allocated `Buffer`. This
allows applications to avoid the garbage collection overhead of creating many
individually allocated `Buffer` instances. This approach improves both
performance and memory usage by eliminating the need to track and clean up as
many individual `ArrayBuffer` objects.

However, in the case where a developer may need to retain a small chunk of
memory from a pool for an indeterminate amount of time, it may be appropriate
to create an un-pooled `Buffer` instance using `Buffer.allocUnsafeSlow()` and
then copying out the relevant bits.

```js
import { Buffer } from 'buffer';

// Need to keep around a few small chunks of memory.
const store = [];

socket.on('readable', () => {
  let data;
  while (null !== (data = readable.read())) {
    // Allocate for retained data.
    const sb = Buffer.allocUnsafeSlow(10);

    // Copy the data into the new allocation.
    data.copy(sb, 0, 0, 10);

    store.push(sb);
  }
});
```

A `TypeError` will be thrown if `size` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `number` | The desired length of the new `Buffer`. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1681](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1681)

___

### byteLength

▸ **byteLength**(`string`, `encoding?`): `number`

Returns the byte length of a string when encoded using `encoding`.
This is not the same as [`String.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), which does not account
for the encoding that is used to convert the string into bytes.

For `'base64'`, `'base64url'`, and `'hex'`, this function assumes valid input.
For strings that contain non-base64/hex-encoded data (e.g. whitespace), the
return value might be greater than the length of a `Buffer` created from the
string.

```js
import { Buffer } from 'buffer';

const str = '\u00bd + \u00bc = \u00be';

console.log(`${str}: ${str.length} characters, ` +
            `${Buffer.byteLength(str, 'utf8')} bytes`);
// Prints: ½ + ¼ = ¾: 9 characters, 12 bytes
```

When `string` is a
`Buffer`/[`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)/[`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/-
Reference/Global_Objects/TypedArray)/[`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)/[`SharedArrayBuffer`](https://develop-
er.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), the byte length as reported by `.byteLength`is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| `ArrayBufferView` | A value to calculate the length of. |
| `encoding?` | `BufferEncoding` | If `string` is a string, this is its encoding. |

#### Returns

`number`

The number of bytes contained within `string`.

#### Defined in

[buffer.d.ts:246](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L246)

▸ **byteLength**(`string`, `encoding?`): `number`

Returns the byte length of a string when encoded using `encoding`.
This is not the same as [`String.prototype.length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), which does not account
for the encoding that is used to convert the string into bytes.

For `'base64'`, `'base64url'`, and `'hex'`, this function assumes valid input.
For strings that contain non-base64/hex-encoded data (e.g. whitespace), the
return value might be greater than the length of a `Buffer` created from the
string.

```js
import { Buffer } from 'buffer';

const str = '\u00bd + \u00bc = \u00be';

console.log(`${str}: ${str.length} characters, ` +
            `${Buffer.byteLength(str, 'utf8')} bytes`);
// Prints: ½ + ¼ = ¾: 9 characters, 12 bytes
```

When `string` is a
`Buffer`/[`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)/[`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/-
Reference/Global_Objects/TypedArray)/[`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)/[`SharedArrayBuffer`](https://develop-
er.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), the byte length as reported by `.byteLength`is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` \| `ArrayBuffer` \| `SharedArrayBuffer` \| `ArrayBufferView` | A value to calculate the length of. |
| `encoding?` | `BufferEncoding` | If `string` is a string, this is its encoding. |

#### Returns

`number`

The number of bytes contained within `string`.

#### Defined in

[dist/types.d.ts:1492](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1492)

___

### compare

▸ **compare**(`buf1`, `buf2`): ``0`` \| ``1`` \| ``-1``

Compares `buf1` to `buf2`, typically for the purpose of sorting arrays of`Buffer` instances. This is equivalent to calling `buf1.compare(buf2)`.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];

console.log(arr.sort(Buffer.compare));
// Prints: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
// (This result is equal to: [buf2, buf1].)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf1` | `Uint8Array` |
| `buf2` | `Uint8Array` |

#### Returns

``0`` \| ``1`` \| ``-1``

Either `-1`, `0`, or `1`, depending on the result of the comparison. See `compare` for details.

#### Defined in

[buffer.d.ts:304](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L304)

▸ **compare**(`buf1`, `buf2`): ``0`` \| ``1`` \| ``-1``

Compares `buf1` to `buf2`, typically for the purpose of sorting arrays of`Buffer` instances. This is equivalent to calling `buf1.compare(buf2)`.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from('1234');
const buf2 = Buffer.from('0123');
const arr = [buf1, buf2];

console.log(arr.sort(Buffer.compare));
// Prints: [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]
// (This result is equal to: [buf2, buf1].)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf1` | `Uint8Array` |
| `buf2` | `Uint8Array` |

#### Returns

``0`` \| ``1`` \| ``-1``

Either `-1`, `0`, or `1`, depending on the result of the comparison. See `compare` for details.

#### Defined in

[dist/types.d.ts:1550](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1550)

___

### concat

▸ **concat**(`list`, `totalLength?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Returns a new `Buffer` which is the result of concatenating all the `Buffer`instances in the `list` together.

If the list has no items, or if the `totalLength` is 0, then a new zero-length`Buffer` is returned.

If `totalLength` is not provided, it is calculated from the `Buffer` instances
in `list` by adding their lengths.

If `totalLength` is provided, it is coerced to an unsigned integer. If the
combined length of the `Buffer`s in `list` exceeds `totalLength`, the result is
truncated to `totalLength`.

```js
import { Buffer } from 'buffer';

// Create a single `Buffer` from a list of three `Buffer` instances.

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 = Buffer.alloc(18);
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);
// Prints: 42

const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

console.log(bufA);
// Prints: <Buffer 00 00 00 00 ...>
console.log(bufA.length);
// Prints: 42
```

`Buffer.concat()` may also use the internal `Buffer` pool like `Buffer.allocUnsafe()` does.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | readonly `Uint8Array`[] | List of `Buffer` or Uint8Array instances to concatenate. |
| `totalLength?` | `number` | Total length of the `Buffer` instances in `list` when concatenated. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:287](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L287)

▸ **concat**(`list`, `totalLength?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Returns a new `Buffer` which is the result of concatenating all the `Buffer`instances in the `list` together.

If the list has no items, or if the `totalLength` is 0, then a new zero-length`Buffer` is returned.

If `totalLength` is not provided, it is calculated from the `Buffer` instances
in `list` by adding their lengths.

If `totalLength` is provided, it is coerced to an unsigned integer. If the
combined length of the `Buffer`s in `list` exceeds `totalLength`, the result is
truncated to `totalLength`.

```js
import { Buffer } from 'buffer';

// Create a single `Buffer` from a list of three `Buffer` instances.

const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(14);
const buf3 = Buffer.alloc(18);
const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);
// Prints: 42

const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

console.log(bufA);
// Prints: <Buffer 00 00 00 00 ...>
console.log(bufA.length);
// Prints: 42
```

`Buffer.concat()` may also use the internal `Buffer` pool like `Buffer.allocUnsafe()` does.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | readonly `Uint8Array`[] | List of `Buffer` or Uint8Array instances to concatenate. |
| `totalLength?` | `number` | Total length of the `Buffer` instances in `list` when concatenated. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1533](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1533)

___

### from

▸ **from**(`arrayBuffer`, `byteOffset?`, `length?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Allocates a new `Buffer` using an `array` of bytes in the range `0` – `255`.
Array entries outside that range will be truncated to fit into it.

```js
import { Buffer } from 'buffer';

// Creates a new Buffer containing the UTF-8 bytes of the string 'buffer'.
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
```

A `TypeError` will be thrown if `array` is not an `Array` or another type
appropriate for `Buffer.from()` variants.

`Buffer.from(array)` and `Buffer.from(string)` may also use the internal`Buffer` pool like `Buffer.allocUnsafe()` does.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayBuffer` | `WithImplicitCoercion`<`ArrayBuffer` \| `SharedArrayBuffer`\> |
| `byteOffset?` | `number` |
| `length?` | `number` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:151](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L151)

▸ **from**(`data`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Creates a new Buffer using the passed {data}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` \| readonly `number`[] | data to create a new Buffer |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:160](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L160)

▸ **from**(`data`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `WithImplicitCoercion`<`string` \| `Uint8Array` \| readonly `number`[]\> |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:161](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L161)

▸ **from**(`str`, `encoding?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Creates a new Buffer containing the given JavaScript string {str}.
If provided, the {encoding} parameter identifies the character encoding.
If not provided, {encoding} defaults to 'utf8'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `WithImplicitCoercion`<`string`\> \| { `[toPrimitive]`: (`hint`: ``"string"``) => `string`  } |
| `encoding?` | `BufferEncoding` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:169](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L169)

▸ **from**(`arrayBuffer`, `byteOffset?`, `length?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Allocates a new `Buffer` using an `array` of bytes in the range `0` – `255`.
Array entries outside that range will be truncated to fit into it.

```js
import { Buffer } from 'buffer';

// Creates a new Buffer containing the UTF-8 bytes of the string 'buffer'.
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
```

A `TypeError` will be thrown if `array` is not an `Array` or another type
appropriate for `Buffer.from()` variants.

`Buffer.from(array)` and `Buffer.from(string)` may also use the internal`Buffer` pool like `Buffer.allocUnsafe()` does.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayBuffer` | `WithImplicitCoercion`<`ArrayBuffer` \| `SharedArrayBuffer`\> |
| `byteOffset?` | `number` |
| `length?` | `number` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1397](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1397)

▸ **from**(`data`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Creates a new Buffer using the passed {data}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` \| readonly `number`[] | data to create a new Buffer |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1406](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1406)

▸ **from**(`data`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `WithImplicitCoercion`<`string` \| `Uint8Array` \| readonly `number`[]\> |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1407](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1407)

▸ **from**(`str`, `encoding?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Creates a new Buffer containing the given JavaScript string {str}.
If provided, the {encoding} parameter identifies the character encoding.
If not provided, {encoding} defaults to 'utf8'.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `WithImplicitCoercion`<`string`\> \| { `[toPrimitive]`: (`hint`: ``"string"``) => `string`  } |
| `encoding?` | `BufferEncoding` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1415](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1415)

___

### isBuffer

▸ **isBuffer**(`obj`): obj is Buffer

Returns `true` if `obj` is a `Buffer`, `false` otherwise.

```js
import { Buffer } from 'buffer';

Buffer.isBuffer(Buffer.alloc(10)); // true
Buffer.isBuffer(Buffer.from('foo')); // true
Buffer.isBuffer('a string'); // false
Buffer.isBuffer([]); // false
Buffer.isBuffer(new Uint8Array(1024)); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is Buffer

#### Defined in

[buffer.d.ts:195](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L195)

▸ **isBuffer**(`obj`): obj is Buffer

Returns `true` if `obj` is a `Buffer`, `false` otherwise.

```js
import { Buffer } from 'buffer';

Buffer.isBuffer(Buffer.alloc(10)); // true
Buffer.isBuffer(Buffer.from('foo')); // true
Buffer.isBuffer('a string'); // false
Buffer.isBuffer([]); // false
Buffer.isBuffer(new Uint8Array(1024)); // false
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is Buffer

#### Defined in

[dist/types.d.ts:1441](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1441)

___

### isEncoding

▸ **isEncoding**(`encoding`): encoding is BufferEncoding

Returns `true` if `encoding` is the name of a supported character encoding,
or `false` otherwise.

```js
import { Buffer } from 'buffer';

console.log(Buffer.isEncoding('utf8'));
// Prints: true

console.log(Buffer.isEncoding('hex'));
// Prints: true

console.log(Buffer.isEncoding('utf/8'));
// Prints: false

console.log(Buffer.isEncoding(''));
// Prints: false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `string` | A character encoding name to check. |

#### Returns

encoding is BufferEncoding

#### Defined in

[buffer.d.ts:217](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L217)

▸ **isEncoding**(`encoding`): encoding is BufferEncoding

Returns `true` if `encoding` is the name of a supported character encoding,
or `false` otherwise.

```js
import { Buffer } from 'buffer';

console.log(Buffer.isEncoding('utf8'));
// Prints: true

console.log(Buffer.isEncoding('hex'));
// Prints: true

console.log(Buffer.isEncoding('utf/8'));
// Prints: false

console.log(Buffer.isEncoding(''));
// Prints: false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `string` | A character encoding name to check. |

#### Returns

encoding is BufferEncoding

#### Defined in

[dist/types.d.ts:1463](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1463)

___

### of

▸ **of**(...`items`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Creates a new Buffer using the passed {data}

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `number`[] |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[buffer.d.ts:181](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L181)

▸ **of**(...`items`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Creates a new Buffer using the passed {data}

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `number`[] |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:1427](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1427)
