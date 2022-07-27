[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["buffer"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md) / Buffer

# Interface: Buffer

["buffer"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md).Buffer

## Hierarchy

- `Uint8Array`

  ↳ **`Buffer`**

## Table of contents

### Methods

- [compare](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#compare)
- [copy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#copy)
- [entries](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#entries)
- [equals](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#equals)
- [fill](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#fill)
- [includes](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#includes)
- [indexOf](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#indexof)
- [keys](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#keys)
- [lastIndexOf](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#lastindexof)
- [readBigInt64BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readbigint64be)
- [readBigInt64LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readbigint64le)
- [readBigUInt64BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readbiguint64be)
- [readBigUInt64LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readbiguint64le)
- [readBigUint64BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readbiguint64be-1)
- [readBigUint64LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readbiguint64le-1)
- [readDoubleBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readdoublebe)
- [readDoubleLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readdoublele)
- [readFloatBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readfloatbe)
- [readFloatLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readfloatle)
- [readInt16BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readint16be)
- [readInt16LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readint16le)
- [readInt32BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readint32be)
- [readInt32LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readint32le)
- [readInt8](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readint8)
- [readIntBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readintbe)
- [readIntLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readintle)
- [readUInt16BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint16be)
- [readUInt16LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint16le)
- [readUInt32BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint32be)
- [readUInt32LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint32le)
- [readUInt8](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint8)
- [readUIntBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuintbe)
- [readUIntLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuintle)
- [readUint16BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint16be-1)
- [readUint16LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint16le-1)
- [readUint32BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint32be-1)
- [readUint32LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint32le-1)
- [readUint8](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuint8-1)
- [readUintBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuintbe-1)
- [readUintLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#readuintle-1)
- [reverse](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#reverse)
- [slice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#slice)
- [subarray](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#subarray)
- [swap16](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#swap16)
- [swap32](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#swap32)
- [swap64](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#swap64)
- [toJSON](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#tojson)
- [toString](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#tostring)
- [values](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#values)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#write)
- [writeBigInt64BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writebigint64be)
- [writeBigInt64LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writebigint64le)
- [writeBigUInt64BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writebiguint64be)
- [writeBigUInt64LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writebiguint64le)
- [writeBigUint64BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writebiguint64be-1)
- [writeBigUint64LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writebiguint64le-1)
- [writeDoubleBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writedoublebe)
- [writeDoubleLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writedoublele)
- [writeFloatBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writefloatbe)
- [writeFloatLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writefloatle)
- [writeInt16BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeint16be)
- [writeInt16LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeint16le)
- [writeInt32BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeint32be)
- [writeInt32LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeint32le)
- [writeInt8](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeint8)
- [writeIntBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeintbe)
- [writeIntLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeintle)
- [writeUInt16BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint16be)
- [writeUInt16LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint16le)
- [writeUInt32BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint32be)
- [writeUInt32LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint32le)
- [writeUInt8](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint8)
- [writeUIntBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuintbe)
- [writeUIntLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuintle)
- [writeUint16BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint16be-1)
- [writeUint16LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint16le-1)
- [writeUint32BE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint32be-1)
- [writeUint32LE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint32le-1)
- [writeUint8](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuint8-1)
- [writeUintBE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuintbe-1)
- [writeUintLE](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/buffer_.Buffer.md#writeuintle-1)

## Methods

### compare

▸ **compare**(`target`, `targetStart?`, `targetEnd?`, `sourceStart?`, `sourceEnd?`): ``0`` \| ``1`` \| ``-1``

Compares `buf` with `target` and returns a number indicating whether `buf`comes before, after, or is the same as `target` in sort order.
Comparison is based on the actual sequence of bytes in each `Buffer`.

* `0` is returned if `target` is the same as `buf`
* `1` is returned if `target` should come _before_`buf` when sorted.
* `-1` is returned if `target` should come _after_`buf` when sorted.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

console.log(buf1.compare(buf1));
// Prints: 0
console.log(buf1.compare(buf2));
// Prints: -1
console.log(buf1.compare(buf3));
// Prints: -1
console.log(buf2.compare(buf1));
// Prints: 1
console.log(buf2.compare(buf3));
// Prints: 1
console.log([buf1, buf2, buf3].sort(Buffer.compare));
// Prints: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
// (This result is equal to: [buf1, buf3, buf2].)
```

The optional `targetStart`, `targetEnd`, `sourceStart`, and `sourceEnd`arguments can be used to limit the comparison to specific ranges within `target`and `buf` respectively.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const buf2 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);

console.log(buf1.compare(buf2, 5, 9, 0, 4));
// Prints: 0
console.log(buf1.compare(buf2, 0, 6, 4));
// Prints: -1
console.log(buf1.compare(buf2, 5, 6, 5));
// Prints: 1
```

`ERR_OUT_OF_RANGE` is thrown if `targetStart < 0`, `sourceStart < 0`,`targetEnd > target.byteLength`, or `sourceEnd > source.byteLength`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Uint8Array` | A `Buffer` or Uint8Array with which to compare `buf`. |
| `targetStart?` | `number` | The offset within `target` at which to begin comparison. |
| `targetEnd?` | `number` | The offset within `target` at which to end comparison (not inclusive). |
| `sourceStart?` | `number` | The offset within `buf` at which to begin comparison. |
| `sourceEnd?` | `number` | The offset within `buf` at which to end comparison (not inclusive). |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Defined in

[buffer.d.ts:620](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L620)

▸ **compare**(`target`, `targetStart?`, `targetEnd?`, `sourceStart?`, `sourceEnd?`): ``0`` \| ``1`` \| ``-1``

Compares `buf` with `target` and returns a number indicating whether `buf`comes before, after, or is the same as `target` in sort order.
Comparison is based on the actual sequence of bytes in each `Buffer`.

* `0` is returned if `target` is the same as `buf`
* `1` is returned if `target` should come _before_`buf` when sorted.
* `-1` is returned if `target` should come _after_`buf` when sorted.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('BCD');
const buf3 = Buffer.from('ABCD');

console.log(buf1.compare(buf1));
// Prints: 0
console.log(buf1.compare(buf2));
// Prints: -1
console.log(buf1.compare(buf3));
// Prints: -1
console.log(buf2.compare(buf1));
// Prints: 1
console.log(buf2.compare(buf3));
// Prints: 1
console.log([buf1, buf2, buf3].sort(Buffer.compare));
// Prints: [ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
// (This result is equal to: [buf1, buf3, buf2].)
```

The optional `targetStart`, `targetEnd`, `sourceStart`, and `sourceEnd`arguments can be used to limit the comparison to specific ranges within `target`and `buf` respectively.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const buf2 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);

console.log(buf1.compare(buf2, 5, 9, 0, 4));
// Prints: 0
console.log(buf1.compare(buf2, 0, 6, 4));
// Prints: -1
console.log(buf1.compare(buf2, 5, 6, 5));
// Prints: 1
```

`ERR_OUT_OF_RANGE` is thrown if `targetStart < 0`, `sourceStart < 0`,`targetEnd > target.byteLength`, or `sourceEnd > source.byteLength`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Uint8Array` | A `Buffer` or Uint8Array with which to compare `buf`. |
| `targetStart?` | `number` | The offset within `target` at which to begin comparison. |
| `targetEnd?` | `number` | The offset within `target` at which to end comparison (not inclusive). |
| `sourceStart?` | `number` | The offset within `buf` at which to begin comparison. |
| `sourceEnd?` | `number` | The offset within `buf` at which to end comparison (not inclusive). |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Defined in

[dist/types.d.ts:1866](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1866)

___

### copy

▸ **copy**(`target`, `targetStart?`, `sourceStart?`, `sourceEnd?`): `number`

Copies data from a region of `buf` to a region in `target`, even if the `target`memory region overlaps with `buf`.

[`TypedArray.prototype.set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set) performs the same operation, and is available
for all TypedArrays, including Node.js `Buffer`s, although it takes
different function arguments.

```js
import { Buffer } from 'buffer';

// Create two `Buffer` instances.
const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

// Copy `buf1` bytes 16 through 19 into `buf2` starting at byte 8 of `buf2`.
buf1.copy(buf2, 8, 16, 20);
// This is equivalent to:
// buf2.set(buf1.subarray(16, 20), 8);

console.log(buf2.toString('ascii', 0, 25));
// Prints: !!!!!!!!qrst!!!!!!!!!!!!!
```

```js
import { Buffer } from 'buffer';

// Create a `Buffer` and copy data from one region to an overlapping region
// within the same `Buffer`.

const buf = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf[i] = i + 97;
}

buf.copy(buf, 0, 4, 10);

console.log(buf.toString());
// Prints: efghijghijklmnopqrstuvwxyz
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Uint8Array` | A `Buffer` or Uint8Array to copy into. |
| `targetStart?` | `number` | The offset within `target` at which to begin writing. |
| `sourceStart?` | `number` | The offset within `buf` from which to begin copying. |
| `sourceEnd?` | `number` | The offset within `buf` at which to stop copying (not inclusive). |

#### Returns

`number`

The number of bytes copied.

#### Defined in

[buffer.d.ts:679](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L679)

▸ **copy**(`target`, `targetStart?`, `sourceStart?`, `sourceEnd?`): `number`

Copies data from a region of `buf` to a region in `target`, even if the `target`memory region overlaps with `buf`.

[`TypedArray.prototype.set()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set) performs the same operation, and is available
for all TypedArrays, including Node.js `Buffer`s, although it takes
different function arguments.

```js
import { Buffer } from 'buffer';

// Create two `Buffer` instances.
const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26).fill('!');

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

// Copy `buf1` bytes 16 through 19 into `buf2` starting at byte 8 of `buf2`.
buf1.copy(buf2, 8, 16, 20);
// This is equivalent to:
// buf2.set(buf1.subarray(16, 20), 8);

console.log(buf2.toString('ascii', 0, 25));
// Prints: !!!!!!!!qrst!!!!!!!!!!!!!
```

```js
import { Buffer } from 'buffer';

// Create a `Buffer` and copy data from one region to an overlapping region
// within the same `Buffer`.

const buf = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf[i] = i + 97;
}

buf.copy(buf, 0, 4, 10);

console.log(buf.toString());
// Prints: efghijghijklmnopqrstuvwxyz
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Uint8Array` | A `Buffer` or Uint8Array to copy into. |
| `targetStart?` | `number` | The offset within `target` at which to begin writing. |
| `sourceStart?` | `number` | The offset within `buf` from which to begin copying. |
| `sourceEnd?` | `number` | The offset within `buf` at which to stop copying (not inclusive). |

#### Returns

`number`

The number of bytes copied.

#### Defined in

[dist/types.d.ts:1925](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1925)

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, `number`]\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of `[index, byte]` pairs from the contents
of `buf`.

```js
import { Buffer } from 'buffer';

// Log the entire contents of a `Buffer`.

const buf = Buffer.from('buffer');

for (const pair of buf.entries()) {
  console.log(pair);
}
// Prints:
//   [0, 98]
//   [1, 117]
//   [2, 102]
//   [3, 102]
//   [4, 101]
//   [5, 114]
```

#### Returns

`IterableIterator`<[`number`, `number`]\>

#### Inherited from

Uint8Array.entries

#### Defined in

[buffer.d.ts:1995](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1995)

▸ **entries**(): `IterableIterator`<[`number`, `number`]\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of `[index, byte]` pairs from the contents
of `buf`.

```js
import { Buffer } from 'buffer';

// Log the entire contents of a `Buffer`.

const buf = Buffer.from('buffer');

for (const pair of buf.entries()) {
  console.log(pair);
}
// Prints:
//   [0, 98]
//   [1, 117]
//   [2, 102]
//   [3, 102]
//   [4, 101]
//   [5, 114]
```

#### Returns

`IterableIterator`<[`number`, `number`]\>

#### Inherited from

Uint8Array.entries

#### Defined in

[dist/types.d.ts:3241](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3241)

___

### equals

▸ **equals**(`otherBuffer`): `boolean`

Returns `true` if both `buf` and `otherBuffer` have exactly the same bytes,`false` otherwise. Equivalent to `buf.compare(otherBuffer) === 0`.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('414243', 'hex');
const buf3 = Buffer.from('ABCD');

console.log(buf1.equals(buf2));
// Prints: true
console.log(buf1.equals(buf3));
// Prints: false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherBuffer` | `Uint8Array` | A `Buffer` or Uint8Array with which to compare `buf`. |

#### Returns

`boolean`

#### Defined in

[buffer.d.ts:566](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L566)

▸ **equals**(`otherBuffer`): `boolean`

Returns `true` if both `buf` and `otherBuffer` have exactly the same bytes,`false` otherwise. Equivalent to `buf.compare(otherBuffer) === 0`.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from('ABC');
const buf2 = Buffer.from('414243', 'hex');
const buf3 = Buffer.from('ABCD');

console.log(buf1.equals(buf2));
// Prints: true
console.log(buf1.equals(buf3));
// Prints: false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `otherBuffer` | `Uint8Array` | A `Buffer` or Uint8Array with which to compare `buf`. |

#### Returns

`boolean`

#### Defined in

[dist/types.d.ts:1812](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1812)

___

### fill

▸ **fill**(`value`, `offset?`, `end?`, `encoding?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Fills `buf` with the specified `value`. If the `offset` and `end` are not given,
the entire `buf` will be filled:

```js
import { Buffer } from 'buffer';

// Fill a `Buffer` with the ASCII character 'h'.

const b = Buffer.allocUnsafe(50).fill('h');

console.log(b.toString());
// Prints: hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
```

`value` is coerced to a `uint32` value if it is not a string, `Buffer`, or
integer. If the resulting integer is greater than `255` (decimal), `buf` will be
filled with `value &#x26; 255`.

If the final write of a `fill()` operation falls on a multi-byte character,
then only the bytes of that character that fit into `buf` are written:

```js
import { Buffer } from 'buffer';

// Fill a `Buffer` with character that takes up two bytes in UTF-8.

console.log(Buffer.allocUnsafe(5).fill('\u0222'));
// Prints: <Buffer c8 a2 c8 a2 c8>
```

If `value` contains invalid characters, it is truncated; if no valid
fill data remains, an exception is thrown:

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(5);

console.log(buf.fill('a'));
// Prints: <Buffer 61 61 61 61 61>
console.log(buf.fill('aazz', 'hex'));
// Prints: <Buffer aa aa aa aa aa>
console.log(buf.fill('zz', 'hex'));
// Throws an exception.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | The value with which to fill `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to fill `buf`. |
| `end?` | `number` | Where to stop filling `buf` (not inclusive). |
| `encoding?` | `BufferEncoding` | The encoding for `value` if `value` is a string. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

A reference to `buf`.

#### Inherited from

Uint8Array.fill

#### Defined in

[buffer.d.ts:1823](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1823)

▸ **fill**(`value`, `offset?`, `end?`, `encoding?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Fills `buf` with the specified `value`. If the `offset` and `end` are not given,
the entire `buf` will be filled:

```js
import { Buffer } from 'buffer';

// Fill a `Buffer` with the ASCII character 'h'.

const b = Buffer.allocUnsafe(50).fill('h');

console.log(b.toString());
// Prints: hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
```

`value` is coerced to a `uint32` value if it is not a string, `Buffer`, or
integer. If the resulting integer is greater than `255` (decimal), `buf` will be
filled with `value &#x26; 255`.

If the final write of a `fill()` operation falls on a multi-byte character,
then only the bytes of that character that fit into `buf` are written:

```js
import { Buffer } from 'buffer';

// Fill a `Buffer` with character that takes up two bytes in UTF-8.

console.log(Buffer.allocUnsafe(5).fill('\u0222'));
// Prints: <Buffer c8 a2 c8 a2 c8>
```

If `value` contains invalid characters, it is truncated; if no valid
fill data remains, an exception is thrown:

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(5);

console.log(buf.fill('a'));
// Prints: <Buffer 61 61 61 61 61>
console.log(buf.fill('aazz', 'hex'));
// Prints: <Buffer aa aa aa aa aa>
console.log(buf.fill('zz', 'hex'));
// Throws an exception.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | The value with which to fill `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to fill `buf`. |
| `end?` | `number` | Where to stop filling `buf` (not inclusive). |
| `encoding?` | `BufferEncoding` | The encoding for `value` if `value` is a string. |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

A reference to `buf`.

#### Inherited from

Uint8Array.fill

#### Defined in

[dist/types.d.ts:3069](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3069)

___

### includes

▸ **includes**(`value`, `byteOffset?`, `encoding?`): `boolean`

Equivalent to `buf.indexOf() !== -1`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this is a buffer');

console.log(buf.includes('this'));
// Prints: true
console.log(buf.includes('is'));
// Prints: true
console.log(buf.includes(Buffer.from('a buffer')));
// Prints: true
console.log(buf.includes(97));
// Prints: true (97 is the decimal ASCII value for 'a')
console.log(buf.includes(Buffer.from('a buffer example')));
// Prints: false
console.log(buf.includes(Buffer.from('a buffer example').slice(0, 8)));
// Prints: true
console.log(buf.includes('this', 4));
// Prints: false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) | What to search for. |
| `byteOffset?` | `number` | Where to begin searching in `buf`. If negative, then offset is calculated from the end of `buf`. |
| `encoding?` | `BufferEncoding` | If `value` is a string, this is its encoding. |

#### Returns

`boolean`

`true` if `value` was found in `buf`, `false` otherwise.

#### Inherited from

Uint8Array.includes

#### Defined in

[buffer.d.ts:2024](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L2024)

▸ **includes**(`value`, `byteOffset?`, `encoding?`): `boolean`

Equivalent to `buf.indexOf() !== -1`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this is a buffer');

console.log(buf.includes('this'));
// Prints: true
console.log(buf.includes('is'));
// Prints: true
console.log(buf.includes(Buffer.from('a buffer')));
// Prints: true
console.log(buf.includes(97));
// Prints: true (97 is the decimal ASCII value for 'a')
console.log(buf.includes(Buffer.from('a buffer example')));
// Prints: false
console.log(buf.includes(Buffer.from('a buffer example').slice(0, 8)));
// Prints: true
console.log(buf.includes('this', 4));
// Prints: false
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) | What to search for. |
| `byteOffset?` | `number` | Where to begin searching in `buf`. If negative, then offset is calculated from the end of `buf`. |
| `encoding?` | `BufferEncoding` | If `value` is a string, this is its encoding. |

#### Returns

`boolean`

`true` if `value` was found in `buf`, `false` otherwise.

#### Inherited from

Uint8Array.includes

#### Defined in

[dist/types.d.ts:3270](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3270)

___

### indexOf

▸ **indexOf**(`value`, `byteOffset?`, `encoding?`): `number`

If `value` is:

* a string, `value` is interpreted according to the character encoding in`encoding`.
* a `Buffer` or [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), `value` will be used in its entirety.
To compare a partial `Buffer`, use `buf.subarray`.
* a number, `value` will be interpreted as an unsigned 8-bit integer
value between `0` and `255`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this is a buffer');

console.log(buf.indexOf('this'));
// Prints: 0
console.log(buf.indexOf('is'));
// Prints: 2
console.log(buf.indexOf(Buffer.from('a buffer')));
// Prints: 8
console.log(buf.indexOf(97));
// Prints: 8 (97 is the decimal ASCII value for 'a')
console.log(buf.indexOf(Buffer.from('a buffer example')));
// Prints: -1
console.log(buf.indexOf(Buffer.from('a buffer example').slice(0, 8)));
// Prints: 8

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'utf16le');

console.log(utf16Buffer.indexOf('\u03a3', 0, 'utf16le'));
// Prints: 4
console.log(utf16Buffer.indexOf('\u03a3', -4, 'utf16le'));
// Prints: 6
```

If `value` is not a string, number, or `Buffer`, this method will throw a`TypeError`. If `value` is a number, it will be coerced to a valid byte value,
an integer between 0 and 255.

If `byteOffset` is not a number, it will be coerced to a number. If the result
of coercion is `NaN` or `0`, then the entire buffer will be searched. This
behavior matches [`String.prototype.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).

```js
import { Buffer } from 'buffer';

const b = Buffer.from('abcdef');

// Passing a value that's a number, but not a valid byte.
// Prints: 2, equivalent to searching for 99 or 'c'.
console.log(b.indexOf(99.9));
console.log(b.indexOf(256 + 99));

// Passing a byteOffset that coerces to NaN or 0.
// Prints: 1, searching the whole buffer.
console.log(b.indexOf('b', undefined));
console.log(b.indexOf('b', {}));
console.log(b.indexOf('b', null));
console.log(b.indexOf('b', []));
```

If `value` is an empty string or empty `Buffer` and `byteOffset` is less
than `buf.length`, `byteOffset` will be returned. If `value` is empty and`byteOffset` is at least `buf.length`, `buf.length` will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | What to search for. |
| `byteOffset?` | `number` | Where to begin searching in `buf`. If negative, then offset is calculated from the end of `buf`. |
| `encoding?` | `BufferEncoding` | If `value` is a string, this is the encoding used to determine the binary representation of the string that will be searched for in `buf`. |

#### Returns

`number`

The index of the first occurrence of `value` in `buf`, or `-1` if `buf` does not contain `value`.

#### Inherited from

Uint8Array.indexOf

#### Defined in

[buffer.d.ts:1896](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1896)

▸ **indexOf**(`value`, `byteOffset?`, `encoding?`): `number`

If `value` is:

* a string, `value` is interpreted according to the character encoding in`encoding`.
* a `Buffer` or [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), `value` will be used in its entirety.
To compare a partial `Buffer`, use `buf.subarray`.
* a number, `value` will be interpreted as an unsigned 8-bit integer
value between `0` and `255`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this is a buffer');

console.log(buf.indexOf('this'));
// Prints: 0
console.log(buf.indexOf('is'));
// Prints: 2
console.log(buf.indexOf(Buffer.from('a buffer')));
// Prints: 8
console.log(buf.indexOf(97));
// Prints: 8 (97 is the decimal ASCII value for 'a')
console.log(buf.indexOf(Buffer.from('a buffer example')));
// Prints: -1
console.log(buf.indexOf(Buffer.from('a buffer example').slice(0, 8)));
// Prints: 8

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'utf16le');

console.log(utf16Buffer.indexOf('\u03a3', 0, 'utf16le'));
// Prints: 4
console.log(utf16Buffer.indexOf('\u03a3', -4, 'utf16le'));
// Prints: 6
```

If `value` is not a string, number, or `Buffer`, this method will throw a`TypeError`. If `value` is a number, it will be coerced to a valid byte value,
an integer between 0 and 255.

If `byteOffset` is not a number, it will be coerced to a number. If the result
of coercion is `NaN` or `0`, then the entire buffer will be searched. This
behavior matches [`String.prototype.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).

```js
import { Buffer } from 'buffer';

const b = Buffer.from('abcdef');

// Passing a value that's a number, but not a valid byte.
// Prints: 2, equivalent to searching for 99 or 'c'.
console.log(b.indexOf(99.9));
console.log(b.indexOf(256 + 99));

// Passing a byteOffset that coerces to NaN or 0.
// Prints: 1, searching the whole buffer.
console.log(b.indexOf('b', undefined));
console.log(b.indexOf('b', {}));
console.log(b.indexOf('b', null));
console.log(b.indexOf('b', []));
```

If `value` is an empty string or empty `Buffer` and `byteOffset` is less
than `buf.length`, `byteOffset` will be returned. If `value` is empty and`byteOffset` is at least `buf.length`, `buf.length` will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | What to search for. |
| `byteOffset?` | `number` | Where to begin searching in `buf`. If negative, then offset is calculated from the end of `buf`. |
| `encoding?` | `BufferEncoding` | If `value` is a string, this is the encoding used to determine the binary representation of the string that will be searched for in `buf`. |

#### Returns

`number`

The index of the first occurrence of `value` in `buf`, or `-1` if `buf` does not contain `value`.

#### Inherited from

Uint8Array.indexOf

#### Defined in

[dist/types.d.ts:3142](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3142)

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of `buf` keys (indices).

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

for (const key of buf.keys()) {
  console.log(key);
}
// Prints:
//   0
//   1
//   2
//   3
//   4
//   5
```

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Uint8Array.keys

#### Defined in

[buffer.d.ts:2049](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L2049)

▸ **keys**(): `IterableIterator`<`number`\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of `buf` keys (indices).

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

for (const key of buf.keys()) {
  console.log(key);
}
// Prints:
//   0
//   1
//   2
//   3
//   4
//   5
```

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Uint8Array.keys

#### Defined in

[dist/types.d.ts:3295](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3295)

___

### lastIndexOf

▸ **lastIndexOf**(`value`, `byteOffset?`, `encoding?`): `number`

Identical to `buf.indexOf()`, except the last occurrence of `value` is found
rather than the first occurrence.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this buffer is a buffer');

console.log(buf.lastIndexOf('this'));
// Prints: 0
console.log(buf.lastIndexOf('buffer'));
// Prints: 17
console.log(buf.lastIndexOf(Buffer.from('buffer')));
// Prints: 17
console.log(buf.lastIndexOf(97));
// Prints: 15 (97 is the decimal ASCII value for 'a')
console.log(buf.lastIndexOf(Buffer.from('yolo')));
// Prints: -1
console.log(buf.lastIndexOf('buffer', 5));
// Prints: 5
console.log(buf.lastIndexOf('buffer', 4));
// Prints: -1

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'utf16le');

console.log(utf16Buffer.lastIndexOf('\u03a3', undefined, 'utf16le'));
// Prints: 6
console.log(utf16Buffer.lastIndexOf('\u03a3', -5, 'utf16le'));
// Prints: 4
```

If `value` is not a string, number, or `Buffer`, this method will throw a`TypeError`. If `value` is a number, it will be coerced to a valid byte value,
an integer between 0 and 255.

If `byteOffset` is not a number, it will be coerced to a number. Any arguments
that coerce to `NaN`, like `{}` or `undefined`, will search the whole buffer.
This behavior matches [`String.prototype.lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf).

```js
import { Buffer } from 'buffer';

const b = Buffer.from('abcdef');

// Passing a value that's a number, but not a valid byte.
// Prints: 2, equivalent to searching for 99 or 'c'.
console.log(b.lastIndexOf(99.9));
console.log(b.lastIndexOf(256 + 99));

// Passing a byteOffset that coerces to NaN.
// Prints: 1, searching the whole buffer.
console.log(b.lastIndexOf('b', undefined));
console.log(b.lastIndexOf('b', {}));

// Passing a byteOffset that coerces to 0.
// Prints: -1, equivalent to passing 0.
console.log(b.lastIndexOf('b', null));
console.log(b.lastIndexOf('b', []));
```

If `value` is an empty string or empty `Buffer`, `byteOffset` will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | What to search for. |
| `byteOffset?` | `number` | - |
| `encoding?` | `BufferEncoding` | If `value` is a string, this is the encoding used to determine the binary representation of the string that will be searched for in `buf`. |

#### Returns

`number`

The index of the last occurrence of `value` in `buf`, or `-1` if `buf` does not contain `value`.

#### Inherited from

Uint8Array.lastIndexOf

#### Defined in

[buffer.d.ts:1967](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1967)

▸ **lastIndexOf**(`value`, `byteOffset?`, `encoding?`): `number`

Identical to `buf.indexOf()`, except the last occurrence of `value` is found
rather than the first occurrence.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('this buffer is a buffer');

console.log(buf.lastIndexOf('this'));
// Prints: 0
console.log(buf.lastIndexOf('buffer'));
// Prints: 17
console.log(buf.lastIndexOf(Buffer.from('buffer')));
// Prints: 17
console.log(buf.lastIndexOf(97));
// Prints: 15 (97 is the decimal ASCII value for 'a')
console.log(buf.lastIndexOf(Buffer.from('yolo')));
// Prints: -1
console.log(buf.lastIndexOf('buffer', 5));
// Prints: 5
console.log(buf.lastIndexOf('buffer', 4));
// Prints: -1

const utf16Buffer = Buffer.from('\u039a\u0391\u03a3\u03a3\u0395', 'utf16le');

console.log(utf16Buffer.lastIndexOf('\u03a3', undefined, 'utf16le'));
// Prints: 6
console.log(utf16Buffer.lastIndexOf('\u03a3', -5, 'utf16le'));
// Prints: 4
```

If `value` is not a string, number, or `Buffer`, this method will throw a`TypeError`. If `value` is a number, it will be coerced to a valid byte value,
an integer between 0 and 255.

If `byteOffset` is not a number, it will be coerced to a number. Any arguments
that coerce to `NaN`, like `{}` or `undefined`, will search the whole buffer.
This behavior matches [`String.prototype.lastIndexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf).

```js
import { Buffer } from 'buffer';

const b = Buffer.from('abcdef');

// Passing a value that's a number, but not a valid byte.
// Prints: 2, equivalent to searching for 99 or 'c'.
console.log(b.lastIndexOf(99.9));
console.log(b.lastIndexOf(256 + 99));

// Passing a byteOffset that coerces to NaN.
// Prints: 1, searching the whole buffer.
console.log(b.lastIndexOf('b', undefined));
console.log(b.lastIndexOf('b', {}));

// Passing a byteOffset that coerces to 0.
// Prints: -1, equivalent to passing 0.
console.log(b.lastIndexOf('b', null));
console.log(b.lastIndexOf('b', []));
```

If `value` is an empty string or empty `Buffer`, `byteOffset` will be returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` \| `number` \| `Uint8Array` | What to search for. |
| `byteOffset?` | `number` | - |
| `encoding?` | `BufferEncoding` | If `value` is a string, this is the encoding used to determine the binary representation of the string that will be searched for in `buf`. |

#### Returns

`number`

The index of the last occurrence of `value` in `buf`, or `-1` if `buf` does not contain `value`.

#### Inherited from

Uint8Array.lastIndexOf

#### Defined in

[dist/types.d.ts:3213](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3213)

___

### readBigInt64BE

▸ **readBigInt64BE**(`offset?`): `bigint`

Reads a signed, big-endian 64-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed
values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`bigint`

#### Defined in

[buffer.d.ts:1012](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1012)

▸ **readBigInt64BE**(`offset?`): `bigint`

Reads a signed, big-endian 64-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed
values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`bigint`

#### Defined in

[dist/types.d.ts:2258](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2258)

___

### readBigInt64LE

▸ **readBigInt64LE**(`offset?`): `bigint`

Reads a signed, little-endian 64-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed
values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`bigint`

#### Defined in

[buffer.d.ts:1020](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1020)

▸ **readBigInt64LE**(`offset?`): `bigint`

Reads a signed, little-endian 64-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed
values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`bigint`

#### Defined in

[dist/types.d.ts:2266](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2266)

___

### readBigUInt64BE

▸ **readBigUInt64BE**(`offset?`): `bigint`

Reads an unsigned, big-endian 64-bit integer from `buf` at the specified`offset`.

This function is also available under the `readBigUint64BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigUInt64BE(0));
// Prints: 4294967295n
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`bigint`

#### Defined in

[buffer.d.ts:980](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L980)

▸ **readBigUInt64BE**(`offset?`): `bigint`

Reads an unsigned, big-endian 64-bit integer from `buf` at the specified`offset`.

This function is also available under the `readBigUint64BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigUInt64BE(0));
// Prints: 4294967295n
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`bigint`

#### Defined in

[dist/types.d.ts:2226](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2226)

___

### readBigUInt64LE

▸ **readBigUInt64LE**(`offset?`): `bigint`

Reads an unsigned, little-endian 64-bit integer from `buf` at the specified`offset`.

This function is also available under the `readBigUint64LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigUInt64LE(0));
// Prints: 18446744069414584320n
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`bigint`

#### Defined in

[buffer.d.ts:1000](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1000)

▸ **readBigUInt64LE**(`offset?`): `bigint`

Reads an unsigned, little-endian 64-bit integer from `buf` at the specified`offset`.

This function is also available under the `readBigUint64LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x00, 0x00, 0x00, 0x00, 0xff, 0xff, 0xff, 0xff]);

console.log(buf.readBigUInt64LE(0));
// Prints: 18446744069414584320n
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`bigint`

#### Defined in

[dist/types.d.ts:2246](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2246)

___

### readBigUint64BE

▸ **readBigUint64BE**(`offset?`): `bigint`

**`Alias`**

Buffer.readBigUInt64BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

[buffer.d.ts:984](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L984)

▸ **readBigUint64BE**(`offset?`): `bigint`

**`Alias`**

Buffer.readBigUInt64BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

[dist/types.d.ts:2230](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2230)

___

### readBigUint64LE

▸ **readBigUint64LE**(`offset?`): `bigint`

**`Alias`**

Buffer.readBigUInt64LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

[buffer.d.ts:1004](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1004)

▸ **readBigUint64LE**(`offset?`): `bigint`

**`Alias`**

Buffer.readBigUInt64LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`bigint`

#### Defined in

[dist/types.d.ts:2250](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2250)

___

### readDoubleBE

▸ **readDoubleBE**(`offset?`): `number`

Reads a 64-bit, big-endian double from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(buf.readDoubleBE(0));
// Prints: 8.20788039913184e-304
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1370](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1370)

▸ **readDoubleBE**(`offset?`): `number`

Reads a 64-bit, big-endian double from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(buf.readDoubleBE(0));
// Prints: 8.20788039913184e-304
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2616](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2616)

___

### readDoubleLE

▸ **readDoubleLE**(`offset?`): `number`

Reads a 64-bit, little-endian double from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(buf.readDoubleLE(0));
// Prints: 5.447603722011605e-270
console.log(buf.readDoubleLE(1));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1356](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1356)

▸ **readDoubleLE**(`offset?`): `number`

Reads a 64-bit, little-endian double from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(buf.readDoubleLE(0));
// Prints: 5.447603722011605e-270
console.log(buf.readDoubleLE(1));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2602](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2602)

___

### readFloatBE

▸ **readFloatBE**(`offset?`): `number`

Reads a 32-bit, big-endian float from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4]);

console.log(buf.readFloatBE(0));
// Prints: 2.387939260590663e-38
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1340](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1340)

▸ **readFloatBE**(`offset?`): `number`

Reads a 32-bit, big-endian float from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4]);

console.log(buf.readFloatBE(0));
// Prints: 2.387939260590663e-38
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2586](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2586)

___

### readFloatLE

▸ **readFloatLE**(`offset?`): `number`

Reads a 32-bit, little-endian float from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4]);

console.log(buf.readFloatLE(0));
// Prints: 1.539989614439558e-36
console.log(buf.readFloatLE(1));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1326](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1326)

▸ **readFloatLE**(`offset?`): `number`

Reads a 32-bit, little-endian float from `buf` at the specified `offset`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, 2, 3, 4]);

console.log(buf.readFloatLE(0));
// Prints: 1.539989614439558e-36
console.log(buf.readFloatLE(1));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2572](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2572)

___

### readInt16BE

▸ **readInt16BE**(`offset?`): `number`

Reads a signed, big-endian 16-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 5]);

console.log(buf.readInt16BE(0));
// Prints: 5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1276](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1276)

▸ **readInt16BE**(`offset?`): `number`

Reads a signed, big-endian 16-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 5]);

console.log(buf.readInt16BE(0));
// Prints: 5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2522](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2522)

___

### readInt16LE

▸ **readInt16LE**(`offset?`): `number`

Reads a signed, little-endian 16-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 5]);

console.log(buf.readInt16LE(0));
// Prints: 1280
console.log(buf.readInt16LE(1));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1260](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1260)

▸ **readInt16LE**(`offset?`): `number`

Reads a signed, little-endian 16-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 5]);

console.log(buf.readInt16LE(0));
// Prints: 1280
console.log(buf.readInt16LE(1));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2506](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2506)

___

### readInt32BE

▸ **readInt32BE**(`offset?`): `number`

Reads a signed, big-endian 32-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 0, 0, 5]);

console.log(buf.readInt32BE(0));
// Prints: 5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1310](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1310)

▸ **readInt32BE**(`offset?`): `number`

Reads a signed, big-endian 32-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 0, 0, 5]);

console.log(buf.readInt32BE(0));
// Prints: 5
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2556](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2556)

___

### readInt32LE

▸ **readInt32LE**(`offset?`): `number`

Reads a signed, little-endian 32-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 0, 0, 5]);

console.log(buf.readInt32LE(0));
// Prints: 83886080
console.log(buf.readInt32LE(1));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1294](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1294)

▸ **readInt32LE**(`offset?`): `number`

Reads a signed, little-endian 32-bit integer from `buf` at the specified`offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0, 0, 0, 5]);

console.log(buf.readInt32LE(0));
// Prints: 83886080
console.log(buf.readInt32LE(1));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2540](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2540)

___

### readInt8

▸ **readInt8**(`offset?`): `number`

Reads a signed 8-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([-1, 5]);

console.log(buf.readInt8(0));
// Prints: -1
console.log(buf.readInt8(1));
// Prints: 5
console.log(buf.readInt8(2));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 1`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1242](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1242)

▸ **readInt8**(`offset?`): `number`

Reads a signed 8-bit integer from `buf` at the specified `offset`.

Integers read from a `Buffer` are interpreted as two's complement signed values.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([-1, 5]);

console.log(buf.readInt8(0));
// Prints: -1
console.log(buf.readInt8(1));
// Prints: 5
console.log(buf.readInt8(2));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 1`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2488](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2488)

___

### readIntBE

▸ **readIntBE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as a big-endian, two's complement signed value
supporting up to 48 bits of accuracy.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readIntBE(0, 6).toString(16));
// Prints: 1234567890ab
console.log(buf.readIntBE(1, 6).toString(16));
// Throws ERR_OUT_OF_RANGE.
console.log(buf.readIntBE(1, 0).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1110](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1110)

▸ **readIntBE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as a big-endian, two's complement signed value
supporting up to 48 bits of accuracy.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readIntBE(0, 6).toString(16));
// Prints: 1234567890ab
console.log(buf.readIntBE(1, 6).toString(16));
// Throws ERR_OUT_OF_RANGE.
console.log(buf.readIntBE(1, 0).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2356](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2356)

___

### readIntLE

▸ **readIntLE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as a little-endian, two's complement signed value
supporting up to 48 bits of accuracy.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readIntLE(0, 6).toString(16));
// Prints: -546f87a9cbee
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1088](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1088)

▸ **readIntLE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as a little-endian, two's complement signed value
supporting up to 48 bits of accuracy.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readIntLE(0, 6).toString(16));
// Prints: -546f87a9cbee
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2334](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2334)

___

### readUInt16BE

▸ **readUInt16BE**(`offset?`): `number`

Reads an unsigned, big-endian 16-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint16BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56]);

console.log(buf.readUInt16BE(0).toString(16));
// Prints: 1234
console.log(buf.readUInt16BE(1).toString(16));
// Prints: 3456
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1176](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1176)

▸ **readUInt16BE**(`offset?`): `number`

Reads an unsigned, big-endian 16-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint16BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56]);

console.log(buf.readUInt16BE(0).toString(16));
// Prints: 1234
console.log(buf.readUInt16BE(1).toString(16));
// Prints: 3456
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2422](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2422)

___

### readUInt16LE

▸ **readUInt16LE**(`offset?`): `number`

Reads an unsigned, little-endian 16-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint16LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56]);

console.log(buf.readUInt16LE(0).toString(16));
// Prints: 3412
console.log(buf.readUInt16LE(1).toString(16));
// Prints: 5634
console.log(buf.readUInt16LE(2).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1154](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1154)

▸ **readUInt16LE**(`offset?`): `number`

Reads an unsigned, little-endian 16-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint16LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56]);

console.log(buf.readUInt16LE(0).toString(16));
// Prints: 3412
console.log(buf.readUInt16LE(1).toString(16));
// Prints: 5634
console.log(buf.readUInt16LE(2).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2400](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2400)

___

### readUInt32BE

▸ **readUInt32BE**(`offset?`): `number`

Reads an unsigned, big-endian 32-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint32BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

console.log(buf.readUInt32BE(0).toString(16));
// Prints: 12345678
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1218](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1218)

▸ **readUInt32BE**(`offset?`): `number`

Reads an unsigned, big-endian 32-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint32BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

console.log(buf.readUInt32BE(0).toString(16));
// Prints: 12345678
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2464](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2464)

___

### readUInt32LE

▸ **readUInt32LE**(`offset?`): `number`

Reads an unsigned, little-endian 32-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint32LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

console.log(buf.readUInt32LE(0).toString(16));
// Prints: 78563412
console.log(buf.readUInt32LE(1).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1198](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1198)

▸ **readUInt32LE**(`offset?`): `number`

Reads an unsigned, little-endian 32-bit integer from `buf` at the specified`offset`.

This function is also available under the `readUint32LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78]);

console.log(buf.readUInt32LE(0).toString(16));
// Prints: 78563412
console.log(buf.readUInt32LE(1).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2444](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2444)

___

### readUInt8

▸ **readUInt8**(`offset?`): `number`

Reads an unsigned 8-bit integer from `buf` at the specified `offset`.

This function is also available under the `readUint8` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, -2]);

console.log(buf.readUInt8(0));
// Prints: 1
console.log(buf.readUInt8(1));
// Prints: 254
console.log(buf.readUInt8(2));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 1`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1130](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1130)

▸ **readUInt8**(`offset?`): `number`

Reads an unsigned 8-bit integer from `buf` at the specified `offset`.

This function is also available under the `readUint8` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([1, -2]);

console.log(buf.readUInt8(0));
// Prints: 1
console.log(buf.readUInt8(1));
// Prints: 254
console.log(buf.readUInt8(2));
// Throws ERR_OUT_OF_RANGE.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset?` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - 1`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2376](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2376)

___

### readUIntBE

▸ **readUIntBE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as an unsigned big-endian integer supporting
up to 48 bits of accuracy.

This function is also available under the `readUintBE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readUIntBE(0, 6).toString(16));
// Prints: 1234567890ab
console.log(buf.readUIntBE(1, 6).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1066](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1066)

▸ **readUIntBE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as an unsigned big-endian integer supporting
up to 48 bits of accuracy.

This function is also available under the `readUintBE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readUIntBE(0, 6).toString(16));
// Prints: 1234567890ab
console.log(buf.readUIntBE(1, 6).toString(16));
// Throws ERR_OUT_OF_RANGE.
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2312](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2312)

___

### readUIntLE

▸ **readUIntLE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as an unsigned, little-endian integer supporting
up to 48 bits of accuracy.

This function is also available under the `readUintLE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readUIntLE(0, 6).toString(16));
// Prints: ab9078563412
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1040](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1040)

▸ **readUIntLE**(`offset`, `byteLength`): `number`

Reads `byteLength` number of bytes from `buf` at the specified `offset`and interprets the result as an unsigned, little-endian integer supporting
up to 48 bits of accuracy.

This function is also available under the `readUintLE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x12, 0x34, 0x56, 0x78, 0x90, 0xab]);

console.log(buf.readUIntLE(0, 6).toString(16));
// Prints: ab9078563412
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | Number of bytes to skip before starting to read. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to read. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2286](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2286)

___

### readUint16BE

▸ **readUint16BE**(`offset?`): `number`

**`Alias`**

Buffer.readUInt16BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1180](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1180)

▸ **readUint16BE**(`offset?`): `number`

**`Alias`**

Buffer.readUInt16BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2426](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2426)

___

### readUint16LE

▸ **readUint16LE**(`offset?`): `number`

**`Alias`**

Buffer.readUInt16LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1158](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1158)

▸ **readUint16LE**(`offset?`): `number`

**`Alias`**

Buffer.readUInt16LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2404](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2404)

___

### readUint32BE

▸ **readUint32BE**(`offset?`): `number`

**`Alias`**

Buffer.readUInt32BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1222](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1222)

▸ **readUint32BE**(`offset?`): `number`

**`Alias`**

Buffer.readUInt32BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2468](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2468)

___

### readUint32LE

▸ **readUint32LE**(`offset?`): `number`

**`Alias`**

Buffer.readUInt32LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1202](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1202)

▸ **readUint32LE**(`offset?`): `number`

**`Alias`**

Buffer.readUInt32LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2448](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2448)

___

### readUint8

▸ **readUint8**(`offset?`): `number`

**`Alias`**

Buffer.readUInt8

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1134](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1134)

▸ **readUint8**(`offset?`): `number`

**`Alias`**

Buffer.readUInt8

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2380](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2380)

___

### readUintBE

▸ **readUintBE**(`offset`, `byteLength`): `number`

**`Alias`**

Buffer.readUIntBE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1070](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1070)

▸ **readUintBE**(`offset`, `byteLength`): `number`

**`Alias`**

Buffer.readUIntBE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2316](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2316)

___

### readUintLE

▸ **readUintLE**(`offset`, `byteLength`): `number`

**`Alias`**

Buffer.readUIntLE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1044](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1044)

▸ **readUintLE**(`offset`, `byteLength`): `number`

**`Alias`**

Buffer.readUIntLE

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2290](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2290)

___

### reverse

▸ **reverse**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

Uint8Array.reverse

#### Defined in

[buffer.d.ts:1371](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1371)

▸ **reverse**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

Uint8Array.reverse

#### Defined in

[dist/types.d.ts:2617](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2617)

___

### slice

▸ **slice**(`start?`, `end?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Returns a new `Buffer` that references the same memory as the original, but
offset and cropped by the `start` and `end` indices.

This method is not compatible with the `Uint8Array.prototype.slice()`,
which is a superclass of `Buffer`. To copy the slice, use`Uint8Array.prototype.slice()`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

const copiedBuf = Uint8Array.prototype.slice.call(buf);
copiedBuf[0]++;
console.log(copiedBuf.toString());
// Prints: cuffer

console.log(buf.toString());
// Prints: buffer

// With buf.slice(), the original buffer is modified.
const notReallyCopiedBuf = buf.slice();
notReallyCopiedBuf[0]++;
console.log(notReallyCopiedBuf.toString());
// Prints: cuffer
console.log(buf.toString());
// Also prints: cuffer (!)
```

**`Deprecated`**

Use `subarray` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | Where the new `Buffer` will start. |
| `end?` | `number` | Where the new `Buffer` will end (not inclusive). |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

Uint8Array.slice

#### Defined in

[buffer.d.ts:717](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L717)

▸ **slice**(`start?`, `end?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Returns a new `Buffer` that references the same memory as the original, but
offset and cropped by the `start` and `end` indices.

This method is not compatible with the `Uint8Array.prototype.slice()`,
which is a superclass of `Buffer`. To copy the slice, use`Uint8Array.prototype.slice()`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

const copiedBuf = Uint8Array.prototype.slice.call(buf);
copiedBuf[0]++;
console.log(copiedBuf.toString());
// Prints: cuffer

console.log(buf.toString());
// Prints: buffer

// With buf.slice(), the original buffer is modified.
const notReallyCopiedBuf = buf.slice();
notReallyCopiedBuf[0]++;
console.log(notReallyCopiedBuf.toString());
// Prints: cuffer
console.log(buf.toString());
// Also prints: cuffer (!)
```

**`Deprecated`**

Use `subarray` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | Where the new `Buffer` will start. |
| `end?` | `number` | Where the new `Buffer` will end (not inclusive). |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

Uint8Array.slice

#### Defined in

[dist/types.d.ts:1963](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1963)

___

### subarray

▸ **subarray**(`start?`, `end?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Returns a new `Buffer` that references the same memory as the original, but
offset and cropped by the `start` and `end` indices.

Specifying `end` greater than `buf.length` will return the same result as
that of `end` equal to `buf.length`.

This method is inherited from [`TypedArray.prototype.subarray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray).

Modifying the new `Buffer` slice will modify the memory in the original `Buffer`because the allocated memory of the two objects overlap.

```js
import { Buffer } from 'buffer';

// Create a `Buffer` with the ASCII alphabet, take a slice, and modify one byte
// from the original `Buffer`.

const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

const buf2 = buf1.subarray(0, 3);

console.log(buf2.toString('ascii', 0, buf2.length));
// Prints: abc

buf1[0] = 33;

console.log(buf2.toString('ascii', 0, buf2.length));
// Prints: !bc
```

Specifying negative indexes causes the slice to be generated relative to the
end of `buf` rather than the beginning.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

console.log(buf.subarray(-6, -1).toString());
// Prints: buffe
// (Equivalent to buf.subarray(0, 5).)

console.log(buf.subarray(-6, -2).toString());
// Prints: buff
// (Equivalent to buf.subarray(0, 4).)

console.log(buf.subarray(-5, -2).toString());
// Prints: uff
// (Equivalent to buf.subarray(1, 4).)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | Where the new `Buffer` will start. |
| `end?` | `number` | Where the new `Buffer` will end (not inclusive). |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

Uint8Array.subarray

#### Defined in

[buffer.d.ts:776](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L776)

▸ **subarray**(`start?`, `end?`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Returns a new `Buffer` that references the same memory as the original, but
offset and cropped by the `start` and `end` indices.

Specifying `end` greater than `buf.length` will return the same result as
that of `end` equal to `buf.length`.

This method is inherited from [`TypedArray.prototype.subarray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray).

Modifying the new `Buffer` slice will modify the memory in the original `Buffer`because the allocated memory of the two objects overlap.

```js
import { Buffer } from 'buffer';

// Create a `Buffer` with the ASCII alphabet, take a slice, and modify one byte
// from the original `Buffer`.

const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

const buf2 = buf1.subarray(0, 3);

console.log(buf2.toString('ascii', 0, buf2.length));
// Prints: abc

buf1[0] = 33;

console.log(buf2.toString('ascii', 0, buf2.length));
// Prints: !bc
```

Specifying negative indexes causes the slice to be generated relative to the
end of `buf` rather than the beginning.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

console.log(buf.subarray(-6, -1).toString());
// Prints: buffe
// (Equivalent to buf.subarray(0, 5).)

console.log(buf.subarray(-6, -2).toString());
// Prints: buff
// (Equivalent to buf.subarray(0, 4).)

console.log(buf.subarray(-5, -2).toString());
// Prints: uff
// (Equivalent to buf.subarray(1, 4).)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | Where the new `Buffer` will start. |
| `end?` | `number` | Where the new `Buffer` will end (not inclusive). |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

Uint8Array.subarray

#### Defined in

[dist/types.d.ts:2022](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2022)

___

### swap16

▸ **swap16**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Interprets `buf` as an array of unsigned 16-bit integers and swaps the
byte order _in-place_. Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 2.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap16();

console.log(buf1);
// Prints: <Buffer 02 01 04 03 06 05 08 07>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap16();
// Throws ERR_INVALID_BUFFER_SIZE.
```

One convenient use of `buf.swap16()` is to perform a fast in-place conversion
between UTF-16 little-endian and UTF-16 big-endian:

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('This is little-endian UTF-16', 'utf16le');
buf.swap16(); // Convert to big-endian UTF-16 text.
```

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

A reference to `buf`.

#### Defined in

[buffer.d.ts:1406](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1406)

▸ **swap16**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Interprets `buf` as an array of unsigned 16-bit integers and swaps the
byte order _in-place_. Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 2.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap16();

console.log(buf1);
// Prints: <Buffer 02 01 04 03 06 05 08 07>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap16();
// Throws ERR_INVALID_BUFFER_SIZE.
```

One convenient use of `buf.swap16()` is to perform a fast in-place conversion
between UTF-16 little-endian and UTF-16 big-endian:

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('This is little-endian UTF-16', 'utf16le');
buf.swap16(); // Convert to big-endian UTF-16 text.
```

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

A reference to `buf`.

#### Defined in

[dist/types.d.ts:2652](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2652)

___

### swap32

▸ **swap32**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Interprets `buf` as an array of unsigned 32-bit integers and swaps the
byte order _in-place_. Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 4.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap32();

console.log(buf1);
// Prints: <Buffer 04 03 02 01 08 07 06 05>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap32();
// Throws ERR_INVALID_BUFFER_SIZE.
```

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

A reference to `buf`.

#### Defined in

[buffer.d.ts:1431](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1431)

▸ **swap32**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Interprets `buf` as an array of unsigned 32-bit integers and swaps the
byte order _in-place_. Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 4.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap32();

console.log(buf1);
// Prints: <Buffer 04 03 02 01 08 07 06 05>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap32();
// Throws ERR_INVALID_BUFFER_SIZE.
```

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

A reference to `buf`.

#### Defined in

[dist/types.d.ts:2677](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2677)

___

### swap64

▸ **swap64**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Interprets `buf` as an array of 64-bit numbers and swaps byte order _in-place_.
Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 8.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap64();

console.log(buf1);
// Prints: <Buffer 08 07 06 05 04 03 02 01>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap64();
// Throws ERR_INVALID_BUFFER_SIZE.
```

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

A reference to `buf`.

#### Defined in

[buffer.d.ts:1456](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1456)

▸ **swap64**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Interprets `buf` as an array of 64-bit numbers and swaps byte order _in-place_.
Throws `ERR_INVALID_BUFFER_SIZE` if `buf.length` is not a multiple of 8.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

console.log(buf1);
// Prints: <Buffer 01 02 03 04 05 06 07 08>

buf1.swap64();

console.log(buf1);
// Prints: <Buffer 08 07 06 05 04 03 02 01>

const buf2 = Buffer.from([0x1, 0x2, 0x3]);

buf2.swap64();
// Throws ERR_INVALID_BUFFER_SIZE.
```

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

A reference to `buf`.

#### Defined in

[dist/types.d.ts:2702](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2702)

___

### toJSON

▸ **toJSON**(): `Object`

Returns a JSON representation of `buf`. [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) implicitly calls
this function when stringifying a `Buffer` instance.

`Buffer.from()` accepts objects in the format returned from this method.
In particular, `Buffer.from(buf.toJSON())` works like `Buffer.from(buf)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json);
// Prints: {"type":"Buffer","data":[1,2,3,4,5]}

const copy = JSON.parse(json, (key, value) => {
  return value &#x26;&#x26; value.type === 'Buffer' ?
    Buffer.from(value) :
    value;
});

console.log(copy);
// Prints: <Buffer 01 02 03 04 05>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `number`[] |
| `type` | ``"Buffer"`` |

#### Defined in

[buffer.d.ts:545](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L545)

▸ **toJSON**(): `Object`

Returns a JSON representation of `buf`. [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) implicitly calls
this function when stringifying a `Buffer` instance.

`Buffer.from()` accepts objects in the format returned from this method.
In particular, `Buffer.from(buf.toJSON())` works like `Buffer.from(buf)`.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

console.log(json);
// Prints: {"type":"Buffer","data":[1,2,3,4,5]}

const copy = JSON.parse(json, (key, value) => {
  return value &#x26;&#x26; value.type === 'Buffer' ?
    Buffer.from(value) :
    value;
});

console.log(copy);
// Prints: <Buffer 01 02 03 04 05>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `data` | `number`[] |
| `type` | ``"Buffer"`` |

#### Defined in

[dist/types.d.ts:1791](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1791)

___

### toString

▸ **toString**(`encoding?`, `start?`, `end?`): `string`

Decodes `buf` to a string according to the specified character encoding in`encoding`. `start` and `end` may be passed to decode only a subset of `buf`.

If `encoding` is `'utf8'` and a byte sequence in the input is not valid UTF-8,
then each invalid byte is replaced with the replacement character `U+FFFD`.

The maximum length of a string instance (in UTF-16 code units) is available
as constants.MAX_STRING_LENGTH.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

console.log(buf1.toString('utf8'));
// Prints: abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('utf8', 0, 5));
// Prints: abcde

const buf2 = Buffer.from('tést');

console.log(buf2.toString('hex'));
// Prints: 74c3a97374
console.log(buf2.toString('utf8', 0, 3));
// Prints: té
console.log(buf2.toString(undefined, 0, 3));
// Prints: té
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding?` | `BufferEncoding` | The character encoding to use. |
| `start?` | `number` | The byte offset to start decoding at. |
| `end?` | `number` | The byte offset to stop decoding at (not inclusive). |

#### Returns

`string`

#### Inherited from

Uint8Array.toString

#### Defined in

[buffer.d.ts:516](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L516)

▸ **toString**(`encoding?`, `start?`, `end?`): `string`

Decodes `buf` to a string according to the specified character encoding in`encoding`. `start` and `end` may be passed to decode only a subset of `buf`.

If `encoding` is `'utf8'` and a byte sequence in the input is not valid UTF-8,
then each invalid byte is replaced with the replacement character `U+FFFD`.

The maximum length of a string instance (in UTF-16 code units) is available
as constants.MAX_STRING_LENGTH.

```js
import { Buffer } from 'buffer';

const buf1 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i++) {
  // 97 is the decimal ASCII value for 'a'.
  buf1[i] = i + 97;
}

console.log(buf1.toString('utf8'));
// Prints: abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('utf8', 0, 5));
// Prints: abcde

const buf2 = Buffer.from('tést');

console.log(buf2.toString('hex'));
// Prints: 74c3a97374
console.log(buf2.toString('utf8', 0, 3));
// Prints: té
console.log(buf2.toString(undefined, 0, 3));
// Prints: té
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding?` | `BufferEncoding` | The character encoding to use. |
| `start?` | `number` | The byte offset to start decoding at. |
| `end?` | `number` | The byte offset to stop decoding at (not inclusive). |

#### Returns

`string`

#### Inherited from

Uint8Array.toString

#### Defined in

[dist/types.d.ts:1762](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1762)

___

### values

▸ **values**(): `IterableIterator`<`number`\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) for `buf` values (bytes). This function is
called automatically when a `Buffer` is used in a `for..of` statement.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

for (const value of buf.values()) {
  console.log(value);
}
// Prints:
//   98
//   117
//   102
//   102
//   101
//   114

for (const value of buf) {
  console.log(value);
}
// Prints:
//   98
//   117
//   102
//   102
//   101
//   114
```

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Uint8Array.values

#### Defined in

[buffer.d.ts:2082](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L2082)

▸ **values**(): `IterableIterator`<`number`\>

Creates and returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) for `buf` values (bytes). This function is
called automatically when a `Buffer` is used in a `for..of` statement.

```js
import { Buffer } from 'buffer';

const buf = Buffer.from('buffer');

for (const value of buf.values()) {
  console.log(value);
}
// Prints:
//   98
//   117
//   102
//   102
//   101
//   114

for (const value of buf) {
  console.log(value);
}
// Prints:
//   98
//   117
//   102
//   102
//   101
//   114
```

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Uint8Array.values

#### Defined in

[dist/types.d.ts:3328](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3328)

___

### write

▸ **write**(`string`, `encoding?`): `number`

Writes `string` to `buf` at `offset` according to the character encoding in`encoding`. The `length` parameter is the number of bytes to write. If `buf` did
not contain enough space to fit the entire string, only part of `string` will be
written. However, partially encoded characters will not be written.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(256);

const len = buf.write('\u00bd + \u00bc = \u00be', 0);

console.log(`${len} bytes: ${buf.toString('utf8', 0, len)}`);
// Prints: 12 bytes: ½ + ¼ = ¾

const buffer = Buffer.alloc(10);

const length = buffer.write('abcd', 8);

console.log(`${length} bytes: ${buffer.toString('utf8', 8, 10)}`);
// Prints: 2 bytes : ab
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | String to write to `buf`. |
| `encoding?` | `BufferEncoding` | The character encoding of `string`. |

#### Returns

`number`

Number of bytes written.

#### Defined in

[buffer.d.ts:471](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L471)

▸ **write**(`string`, `offset`, `encoding?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `offset` | `number` |
| `encoding?` | `BufferEncoding` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:472](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L472)

▸ **write**(`string`, `offset`, `length`, `encoding?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `offset` | `number` |
| `length` | `number` |
| `encoding?` | `BufferEncoding` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:473](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L473)

▸ **write**(`string`, `encoding?`): `number`

Writes `string` to `buf` at `offset` according to the character encoding in`encoding`. The `length` parameter is the number of bytes to write. If `buf` did
not contain enough space to fit the entire string, only part of `string` will be
written. However, partially encoded characters will not be written.

```js
import { Buffer } from 'buffer';

const buf = Buffer.alloc(256);

const len = buf.write('\u00bd + \u00bc = \u00be', 0);

console.log(`${len} bytes: ${buf.toString('utf8', 0, len)}`);
// Prints: 12 bytes: ½ + ¼ = ¾

const buffer = Buffer.alloc(10);

const length = buffer.write('abcd', 8);

console.log(`${length} bytes: ${buffer.toString('utf8', 8, 10)}`);
// Prints: 2 bytes : ab
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | String to write to `buf`. |
| `encoding?` | `BufferEncoding` | The character encoding of `string`. |

#### Returns

`number`

Number of bytes written.

#### Defined in

[dist/types.d.ts:1717](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1717)

▸ **write**(`string`, `offset`, `encoding?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `offset` | `number` |
| `encoding?` | `BufferEncoding` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:1718](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1718)

▸ **write**(`string`, `offset`, `length`, `encoding?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `offset` | `number` |
| `length` | `number` |
| `encoding?` | `BufferEncoding` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:1719](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1719)

___

### writeBigInt64BE

▸ **writeBigInt64BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigInt64BE(0x0102030405060708n, 0);

console.log(buf);
// Prints: <Buffer 01 02 03 04 05 06 07 08>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:796](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L796)

▸ **writeBigInt64BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigInt64BE(0x0102030405060708n, 0);

console.log(buf);
// Prints: <Buffer 01 02 03 04 05 06 07 08>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2042](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2042)

___

### writeBigInt64LE

▸ **writeBigInt64LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigInt64LE(0x0102030405060708n, 0);

console.log(buf);
// Prints: <Buffer 08 07 06 05 04 03 02 01>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:816](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L816)

▸ **writeBigInt64LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigInt64LE(0x0102030405060708n, 0);

console.log(buf);
// Prints: <Buffer 08 07 06 05 04 03 02 01>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2062](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2062)

___

### writeBigUInt64BE

▸ **writeBigUInt64BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.

This function is also available under the `writeBigUint64BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigUInt64BE(0xdecafafecacefaden, 0);

console.log(buf);
// Prints: <Buffer de ca fa fe ca ce fa de>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:836](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L836)

▸ **writeBigUInt64BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.

This function is also available under the `writeBigUint64BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigUInt64BE(0xdecafafecacefaden, 0);

console.log(buf);
// Prints: <Buffer de ca fa fe ca ce fa de>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2082](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2082)

___

### writeBigUInt64LE

▸ **writeBigUInt64LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigUInt64LE(0xdecafafecacefaden, 0);

console.log(buf);
// Prints: <Buffer de fa ce ca fe fa ca de>
```

This function is also available under the `writeBigUint64LE` alias.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:860](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L860)

▸ **writeBigUInt64LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeBigUInt64LE(0xdecafafecacefaden, 0);

console.log(buf);
// Prints: <Buffer de fa ce ca fe fa ca de>
```

This function is also available under the `writeBigUint64LE` alias.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `bigint` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy: `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2106](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2106)

___

### writeBigUint64BE

▸ **writeBigUint64BE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeBigUInt64BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:840](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L840)

▸ **writeBigUint64BE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeBigUInt64BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2086](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2086)

___

### writeBigUint64LE

▸ **writeBigUint64LE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeBigUInt64LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:864](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L864)

▸ **writeBigUint64LE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeBigUInt64LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `bigint` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2110](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2110)

___

### writeDoubleBE

▸ **writeDoubleBE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a JavaScript number. Behavior is undefined when `value` is anything
other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeDoubleBE(123.456, 0);

console.log(buf);
// Prints: <Buffer 40 5e dd 2f 1a 9f be 77>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1770](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1770)

▸ **writeDoubleBE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a JavaScript number. Behavior is undefined when `value` is anything
other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeDoubleBE(123.456, 0);

console.log(buf);
// Prints: <Buffer 40 5e dd 2f 1a 9f be 77>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:3016](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3016)

___

### writeDoubleLE

▸ **writeDoubleLE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a JavaScript number. Behavior is undefined when `value` is anything
other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeDoubleLE(123.456, 0);

console.log(buf);
// Prints: <Buffer 77 be 9f 1a 2f dd 5e 40>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1751](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1751)

▸ **writeDoubleLE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a JavaScript number. Behavior is undefined when `value` is anything
other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(8);

buf.writeDoubleLE(123.456, 0);

console.log(buf);
// Prints: <Buffer 77 be 9f 1a 2f dd 5e 40>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 8`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2997](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2997)

___

### writeFloatBE

▸ **writeFloatBE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. Behavior is
undefined when `value` is anything other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeFloatBE(0xcafebabe, 0);

console.log(buf);
// Prints: <Buffer 4f 4a fe bb>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1732](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1732)

▸ **writeFloatBE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. Behavior is
undefined when `value` is anything other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeFloatBE(0xcafebabe, 0);

console.log(buf);
// Prints: <Buffer 4f 4a fe bb>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2978](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2978)

___

### writeFloatLE

▸ **writeFloatLE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. Behavior is
undefined when `value` is anything other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeFloatLE(0xcafebabe, 0);

console.log(buf);
// Prints: <Buffer bb fe 4a 4f>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1713](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1713)

▸ **writeFloatLE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. Behavior is
undefined when `value` is anything other than a JavaScript number.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeFloatLE(0xcafebabe, 0);

console.log(buf);
// Prints: <Buffer bb fe 4a 4f>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2959](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2959)

___

### writeInt16BE

▸ **writeInt16BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.  The `value`must be a valid signed 16-bit integer. Behavior is undefined when `value` is
anything other than a signed 16-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt16BE(0x0102, 0);

console.log(buf);
// Prints: <Buffer 01 02>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1652](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1652)

▸ **writeInt16BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian.  The `value`must be a valid signed 16-bit integer. Behavior is undefined when `value` is
anything other than a signed 16-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt16BE(0x0102, 0);

console.log(buf);
// Prints: <Buffer 01 02>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2898](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2898)

___

### writeInt16LE

▸ **writeInt16LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian.  The `value`must be a valid signed 16-bit integer. Behavior is undefined when `value` is
anything other than a signed 16-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt16LE(0x0304, 0);

console.log(buf);
// Prints: <Buffer 04 03>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1631](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1631)

▸ **writeInt16LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian.  The `value`must be a valid signed 16-bit integer. Behavior is undefined when `value` is
anything other than a signed 16-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt16LE(0x0304, 0);

console.log(buf);
// Prints: <Buffer 04 03>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2877](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2877)

___

### writeInt32BE

▸ **writeInt32BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid signed 32-bit integer. Behavior is undefined when `value` is
anything other than a signed 32-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt32BE(0x01020304, 0);

console.log(buf);
// Prints: <Buffer 01 02 03 04>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1694](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1694)

▸ **writeInt32BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid signed 32-bit integer. Behavior is undefined when `value` is
anything other than a signed 32-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt32BE(0x01020304, 0);

console.log(buf);
// Prints: <Buffer 01 02 03 04>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2940](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2940)

___

### writeInt32LE

▸ **writeInt32LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid signed 32-bit integer. Behavior is undefined when `value` is
anything other than a signed 32-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt32LE(0x05060708, 0);

console.log(buf);
// Prints: <Buffer 08 07 06 05>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1673](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1673)

▸ **writeInt32LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid signed 32-bit integer. Behavior is undefined when `value` is
anything other than a signed 32-bit integer.

The `value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeInt32LE(0x05060708, 0);

console.log(buf);
// Prints: <Buffer 08 07 06 05>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2919](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2919)

___

### writeInt8

▸ **writeInt8**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset`. `value` must be a valid
signed 8-bit integer. Behavior is undefined when `value` is anything other than
a signed 8-bit integer.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt8(2, 0);
buf.writeInt8(-2, 1);

console.log(buf);
// Prints: <Buffer 02 fe>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 1`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1610](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1610)

▸ **writeInt8**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset`. `value` must be a valid
signed 8-bit integer. Behavior is undefined when `value` is anything other than
a signed 8-bit integer.

`value` is interpreted and written as a two's complement signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(2);

buf.writeInt8(2, 0);
buf.writeInt8(-2, 1);

console.log(buf);
// Prints: <Buffer 02 fe>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 1`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2856](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2856)

___

### writeIntBE

▸ **writeIntBE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as big-endian. Supports up to 48 bits of accuracy. Behavior is undefined when`value` is anything other than a
signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeIntBE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer 12 34 56 78 90 ab>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:964](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L964)

▸ **writeIntBE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as big-endian. Supports up to 48 bits of accuracy. Behavior is undefined when`value` is anything other than a
signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeIntBE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer 12 34 56 78 90 ab>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2210](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2210)

___

### writeIntLE

▸ **writeIntLE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as little-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than a signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeIntLE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer ab 90 78 56 34 12>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:942](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L942)

▸ **writeIntLE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as little-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than a signed integer.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeIntLE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer ab 90 78 56 34 12>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2188](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2188)

___

### writeUInt16BE

▸ **writeUInt16BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid unsigned 16-bit integer. Behavior is undefined when `value`is anything other than an
unsigned 16-bit integer.

This function is also available under the `writeUint16BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt16BE(0xdead, 0);
buf.writeUInt16BE(0xbeef, 2);

console.log(buf);
// Prints: <Buffer de ad be ef>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1533](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1533)

▸ **writeUInt16BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid unsigned 16-bit integer. Behavior is undefined when `value`is anything other than an
unsigned 16-bit integer.

This function is also available under the `writeUint16BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt16BE(0xdead, 0);
buf.writeUInt16BE(0xbeef, 2);

console.log(buf);
// Prints: <Buffer de ad be ef>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2779](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2779)

___

### writeUInt16LE

▸ **writeUInt16LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid unsigned 16-bit integer. Behavior is undefined when `value` is
anything other than an unsigned 16-bit integer.

This function is also available under the `writeUint16LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt16LE(0xdead, 0);
buf.writeUInt16LE(0xbeef, 2);

console.log(buf);
// Prints: <Buffer ad de ef be>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1507](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1507)

▸ **writeUInt16LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid unsigned 16-bit integer. Behavior is undefined when `value` is
anything other than an unsigned 16-bit integer.

This function is also available under the `writeUint16LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt16LE(0xdead, 0);
buf.writeUInt16LE(0xbeef, 2);

console.log(buf);
// Prints: <Buffer ad de ef be>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 2`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2753](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2753)

___

### writeUInt32BE

▸ **writeUInt32BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid unsigned 32-bit integer. Behavior is undefined when `value`is anything other than an
unsigned 32-bit integer.

This function is also available under the `writeUint32BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt32BE(0xfeedface, 0);

console.log(buf);
// Prints: <Buffer fe ed fa ce>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1583](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1583)

▸ **writeUInt32BE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as big-endian. The `value`must be a valid unsigned 32-bit integer. Behavior is undefined when `value`is anything other than an
unsigned 32-bit integer.

This function is also available under the `writeUint32BE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt32BE(0xfeedface, 0);

console.log(buf);
// Prints: <Buffer fe ed fa ce>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2829](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2829)

___

### writeUInt32LE

▸ **writeUInt32LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid unsigned 32-bit integer. Behavior is undefined when `value` is
anything other than an unsigned 32-bit integer.

This function is also available under the `writeUint32LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt32LE(0xfeedface, 0);

console.log(buf);
// Prints: <Buffer ce fa ed fe>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1558](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1558)

▸ **writeUInt32LE**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset` as little-endian. The `value`must be a valid unsigned 32-bit integer. Behavior is undefined when `value` is
anything other than an unsigned 32-bit integer.

This function is also available under the `writeUint32LE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt32LE(0xfeedface, 0);

console.log(buf);
// Prints: <Buffer ce fa ed fe>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 4`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2804](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2804)

___

### writeUInt8

▸ **writeUInt8**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset`. `value` must be a
valid unsigned 8-bit integer. Behavior is undefined when `value` is anything
other than an unsigned 8-bit integer.

This function is also available under the `writeUint8` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt8(0x3, 0);
buf.writeUInt8(0x4, 1);
buf.writeUInt8(0x23, 2);
buf.writeUInt8(0x42, 3);

console.log(buf);
// Prints: <Buffer 03 04 23 42>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 1`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:1481](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1481)

▸ **writeUInt8**(`value`, `offset?`): `number`

Writes `value` to `buf` at the specified `offset`. `value` must be a
valid unsigned 8-bit integer. Behavior is undefined when `value` is anything
other than an unsigned 8-bit integer.

This function is also available under the `writeUint8` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(4);

buf.writeUInt8(0x3, 0);
buf.writeUInt8(0x4, 1);
buf.writeUInt8(0x23, 2);
buf.writeUInt8(0x42, 3);

console.log(buf);
// Prints: <Buffer 03 04 23 42>
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset?` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - 1`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2727](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2727)

___

### writeUIntBE

▸ **writeUIntBE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as big-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than an unsigned integer.

This function is also available under the `writeUintBE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeUIntBE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer 12 34 56 78 90 ab>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:916](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L916)

▸ **writeUIntBE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as big-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than an unsigned integer.

This function is also available under the `writeUintBE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeUIntBE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer 12 34 56 78 90 ab>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2162](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2162)

___

### writeUIntLE

▸ **writeUIntLE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as little-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than an unsigned integer.

This function is also available under the `writeUintLE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeUIntLE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer ab 90 78 56 34 12>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[buffer.d.ts:888](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L888)

▸ **writeUIntLE**(`value`, `offset`, `byteLength`): `number`

Writes `byteLength` bytes of `value` to `buf` at the specified `offset`as little-endian. Supports up to 48 bits of accuracy. Behavior is undefined
when `value` is anything other than an unsigned integer.

This function is also available under the `writeUintLE` alias.

```js
import { Buffer } from 'buffer';

const buf = Buffer.allocUnsafe(6);

buf.writeUIntLE(0x1234567890ab, 0, 6);

console.log(buf);
// Prints: <Buffer ab 90 78 56 34 12>
```

Note: as of Bun v0.1.2, this is not implemented yet.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Number to be written to `buf`. |
| `offset` | `number` | Number of bytes to skip before starting to write. Must satisfy `0 <= offset <= buf.length - byteLength`. |
| `byteLength` | `number` | Number of bytes to write. Must satisfy `0 < byteLength <= 6`. |

#### Returns

`number`

`offset` plus the number of bytes written.

#### Defined in

[dist/types.d.ts:2134](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2134)

___

### writeUint16BE

▸ **writeUint16BE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt16BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1537](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1537)

▸ **writeUint16BE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt16BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2783](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2783)

___

### writeUint16LE

▸ **writeUint16LE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt16LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1511](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1511)

▸ **writeUint16LE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt16LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2757](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2757)

___

### writeUint32BE

▸ **writeUint32BE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt32BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1587](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1587)

▸ **writeUint32BE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt32BE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2833](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2833)

___

### writeUint32LE

▸ **writeUint32LE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt32LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1562](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1562)

▸ **writeUint32LE**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt32LE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2808](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2808)

___

### writeUint8

▸ **writeUint8**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt8

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:1485](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L1485)

▸ **writeUint8**(`value`, `offset?`): `number`

**`Alias`**

Buffer.writeUInt8

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset?` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2731](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2731)

___

### writeUintBE

▸ **writeUintBE**(`value`, `offset`, `byteLength`): `number`

**`Alias`**

Buffer.writeUIntBE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:920](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L920)

▸ **writeUintBE**(`value`, `offset`, `byteLength`): `number`

**`Alias`**

Buffer.writeUIntBE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2166](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2166)

___

### writeUintLE

▸ **writeUintLE**(`value`, `offset`, `byteLength`): `number`

**`Alias`**

Buffer.writeUIntLE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

[buffer.d.ts:892](https://github.com/valgaze/bun-types/blob/6f8dbf8/buffer.d.ts#L892)

▸ **writeUintLE**(`value`, `offset`, `byteLength`): `number`

**`Alias`**

Buffer.writeUIntLE

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `offset` | `number` |
| `byteLength` | `number` |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:2138](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L2138)
