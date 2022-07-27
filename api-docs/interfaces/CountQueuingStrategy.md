[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / CountQueuingStrategy

# Interface: CountQueuingStrategy

This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams.

## Hierarchy

- [`QueuingStrategy`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md)

  ↳ **`CountQueuingStrategy`**

## Table of contents

### Properties

- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/CountQueuingStrategy.md#highwatermark)
- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/CountQueuingStrategy.md#size)

## Properties

### highWaterMark

• `Readonly` **highWaterMark**: `number`

#### Inherited from

[QueuingStrategy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#highwatermark)

#### Defined in

[globals.d.ts:1951](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1951)

[dist/types.d.ts:10521](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10521)

___

### size

• `Readonly` **size**: [`QueuingStrategySize`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategySize.md)<`any`\>

#### Inherited from

[QueuingStrategy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md).[size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#size)

#### Defined in

[globals.d.ts:1952](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1952)

[dist/types.d.ts:10522](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10522)
