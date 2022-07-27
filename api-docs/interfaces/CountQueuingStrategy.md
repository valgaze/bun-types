[bun-types](../README.md) / [Exports](../modules.md) / CountQueuingStrategy

# Interface: CountQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](QueuingStrategy.md)

  ↳ **`CountQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](CountQueuingStrategy.md#highwatermark)
- [size](CountQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Inherited from

[QueuingStrategy](QueuingStrategy.md).[highWaterMark](QueuingStrategy.md#highwatermark)

#### Defined in

[globals.d.ts:1951](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1951)

[dist/types.d.ts:10521](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10521)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](QueuingStrategySize.md)<`any`\>

#### Inherited from

[QueuingStrategy](QueuingStrategy.md).[size](QueuingStrategy.md#size)

#### Defined in

[globals.d.ts:1952](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1952)

[dist/types.d.ts:10522](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10522)
