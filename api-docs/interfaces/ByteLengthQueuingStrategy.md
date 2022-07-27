[bun-types](../README.md) / [Exports](../modules.md) / ByteLengthQueuingStrategy

# Interface: ByteLengthQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](QueuingStrategy.md)<`ArrayBufferView`\>

  ↳ **`ByteLengthQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](ByteLengthQueuingStrategy.md#highwatermark)
- [size](ByteLengthQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Inherited from

[QueuingStrategy](QueuingStrategy.md).[highWaterMark](QueuingStrategy.md#highwatermark)

#### Defined in

[globals.d.ts:1716](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1716)

[dist/types.d.ts:10286](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10286)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](QueuingStrategySize.md)<`ArrayBufferView`\>

#### Inherited from

[QueuingStrategy](QueuingStrategy.md).[size](QueuingStrategy.md#size)

#### Defined in

[globals.d.ts:1717](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1717)

[dist/types.d.ts:10287](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10287)
