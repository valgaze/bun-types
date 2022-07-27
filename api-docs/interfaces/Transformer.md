[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / Transformer

# Interface: Transformer<I, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `any` |
| `O` | `any` |

## Table of contents

### Properties

- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#flush)
- [readableType](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#readabletype)
- [start](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#start)
- [transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#transform)
- [writableType](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Transformer.md#writabletype)

## Properties

### flush

• `Optional` **flush**: [`TransformerFlushCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/TransformerFlushCallback.md)<`O`\>

#### Defined in

[globals.d.ts:1965](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1965)

[dist/types.d.ts:10535](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10535)

___

### readableType

• `Optional` **readableType**: `undefined`

#### Defined in

[globals.d.ts:1966](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1966)

[dist/types.d.ts:10536](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10536)

___

### start

• `Optional` **start**: [`TransformerStartCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/TransformerStartCallback.md)<`O`\>

#### Defined in

[globals.d.ts:1967](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1967)

[dist/types.d.ts:10537](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10537)

___

### transform

• `Optional` **transform**: [`TransformerTransformCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/TransformerTransformCallback.md)<`I`, `O`\>

#### Defined in

[globals.d.ts:1968](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1968)

[dist/types.d.ts:10538](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10538)

___

### writableType

• `Optional` **writableType**: `undefined`

#### Defined in

[globals.d.ts:1969](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1969)

[dist/types.d.ts:10539](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10539)
