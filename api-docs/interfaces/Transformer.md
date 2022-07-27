[bun-types](../README.md) / [Exports](../modules.md) / Transformer

# Interface: Transformer<I, O\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `any` |
| `O` | `any` |

## Table of contents

### Properties

- [flush](Transformer.md#flush)
- [readableType](Transformer.md#readabletype)
- [start](Transformer.md#start)
- [transform](Transformer.md#transform)
- [writableType](Transformer.md#writabletype)

## Properties

### flush

• `Optional` **flush**: [`TransformerFlushCallback`](TransformerFlushCallback.md)<`O`\>

#### Defined in

[globals.d.ts:1965](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1965)

[dist/types.d.ts:10535](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10535)

___

### readableType

• `Optional` **readableType**: `undefined`

#### Defined in

[globals.d.ts:1966](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1966)

[dist/types.d.ts:10536](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10536)

___

### start

• `Optional` **start**: [`TransformerStartCallback`](TransformerStartCallback.md)<`O`\>

#### Defined in

[globals.d.ts:1967](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1967)

[dist/types.d.ts:10537](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10537)

___

### transform

• `Optional` **transform**: [`TransformerTransformCallback`](TransformerTransformCallback.md)<`I`, `O`\>

#### Defined in

[globals.d.ts:1968](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1968)

[dist/types.d.ts:10538](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10538)

___

### writableType

• `Optional` **writableType**: `undefined`

#### Defined in

[globals.d.ts:1969](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1969)

[dist/types.d.ts:10539](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10539)
