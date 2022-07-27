[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / QueuingStrategy

# Interface: QueuingStrategy<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

## Hierarchy

- **`QueuingStrategy`**

  ↳ [`ByteLengthQueuingStrategy`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ByteLengthQueuingStrategy.md)

  ↳ [`CountQueuingStrategy`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/CountQueuingStrategy.md)

## Table of contents

### Properties

- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#highwatermark)
- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategy.md#size)

## Properties

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Defined in

[globals.d.ts:1701](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1701)

[dist/types.d.ts:10271](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10271)

___

### size

• `Optional` **size**: [`QueuingStrategySize`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/QueuingStrategySize.md)<`T`\>

#### Defined in

[globals.d.ts:1702](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1702)

[dist/types.d.ts:10272](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10272)
