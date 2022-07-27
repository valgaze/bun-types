[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "buffer"

# Namespace: "buffer"

`Buffer` objects are used to represent a fixed-length sequence of bytes. Many
Node.js APIs support `Buffer`s.

The `Buffer` class is a subclass of JavaScript's [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) class and
extends it with methods that cover additional use cases. Node.js APIs accept
plain [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) s wherever `Buffer`s are supported as well.

While the `Buffer` class is available within the global scope, it is still
recommended to explicitly reference it via an import or require statement.

```js
import { Buffer } from 'buffer';

// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10);

// Creates a Buffer of length 10,
// filled with bytes which all have the value `1`.
const buf2 = Buffer.alloc(10, 1);

// Creates an uninitialized buffer of length 10.
// This is faster than calling Buffer.alloc() but the returned
// Buffer instance might contain old data that needs to be
// overwritten using fill(), write(), or other functions that fill the Buffer's
// contents.
const buf3 = Buffer.allocUnsafe(10);

// Creates a Buffer containing the bytes [1, 2, 3].
const buf4 = Buffer.from([1, 2, 3]);

// Creates a Buffer containing the bytes [1, 1, 1, 1] – the entries
// are all truncated using `(value &#x26; 255)` to fit into the range 0–255.
const buf5 = Buffer.from([257, 257.5, -255, '1']);

// Creates a Buffer containing the UTF-8-encoded bytes for the string 'tést':
// [0x74, 0xc3, 0xa9, 0x73, 0x74] (in hexadecimal notation)
// [116, 195, 169, 115, 116] (in decimal notation)
const buf6 = Buffer.from('tést');

// Creates a Buffer containing the Latin-1 bytes [0x74, 0xe9, 0x73, 0x74].
const buf7 = Buffer.from('tést', 'latin1');
```

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/buffer.js)

## Table of contents

### Interfaces

- [BlobOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.BlobOptions.md)
- [Buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md)

### Type Aliases

- [TranscodeEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#transcodeencoding)

### Variables

- [Buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)
- [INSPECT\_MAX\_BYTES](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#inspect_max_bytes)
- [SlowBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#slowbuffer)
- [kMaxLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#kmaxlength)

## Type Aliases

### TranscodeEncoding

Ƭ **TranscodeEncoding**: ``"ascii"`` \| ``"utf8"`` \| ``"utf16le"`` \| ``"ucs2"`` \| ``"latin1"`` \| ``"binary"``

#### Defined in

[buffer.d.ts:49](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L49)

## Variables

### Buffer

• **Buffer**: [`BufferConstructor`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BufferConstructor.md)

#### Defined in

[buffer.d.ts:442](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L442)

[buffer.d.ts:2084](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L2084)

[dist/types.d.ts:1688](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1688)

[dist/types.d.ts:3330](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3330)

___

### INSPECT\_MAX\_BYTES

• `Const` **INSPECT\_MAX\_BYTES**: `number`

#### Defined in

[buffer.d.ts:47](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L47)

___

### SlowBuffer

• `Const` **SlowBuffer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) |

#### Defined in

[buffer.d.ts:56](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L56)

___

### kMaxLength

• `Const` **kMaxLength**: `number`

#### Defined in

[buffer.d.ts:48](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L48)
