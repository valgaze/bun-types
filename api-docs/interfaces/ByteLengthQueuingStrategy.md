[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ByteLengthQueuingStrategy

# Interface: ByteLengthQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md)<`ArrayBufferView`\>

  ↳ **`ByteLengthQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ByteLengthQueuingStrategy.md#highwatermark)
- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ByteLengthQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Inherited from

[QueuingStrategy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#highwatermark)

#### Defined in

[globals.d.ts:1716](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1716)

[dist/types.d.ts:10286](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10286)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategySize.md)<`ArrayBufferView`\>

#### Inherited from

[QueuingStrategy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md).[size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#size)

#### Defined in

[globals.d.ts:1717](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1717)

[dist/types.d.ts:10287](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10287)
