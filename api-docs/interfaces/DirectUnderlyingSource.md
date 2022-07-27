[bun-types](../README.md) / [Exports](../modules.md) / DirectUnderlyingSource

# Interface: DirectUnderlyingSource<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [cancel](DirectUnderlyingSource.md#cancel)
- [pull](DirectUnderlyingSource.md#pull)
- [type](DirectUnderlyingSource.md#type)

## Properties

### cancel

• `Optional` **cancel**: [`UnderlyingSourceCancelCallback`](UnderlyingSourceCancelCallback.md)

#### Defined in

[globals.d.ts:1879](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1879)

[dist/types.d.ts:10449](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10449)

___

### pull

• **pull**: (`controller`: [`ReadableStreamDirectController`](ReadableStreamDirectController.md)) => `void` \| `PromiseLike`<`void`\>

#### Type declaration

▸ (`controller`): `void` \| `PromiseLike`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | [`ReadableStreamDirectController`](ReadableStreamDirectController.md) |

##### Returns

`void` \| `PromiseLike`<`void`\>

#### Defined in

[globals.d.ts:1880](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1880)

[dist/types.d.ts:10450](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10450)

___

### type

• **type**: ``"direct"``

#### Defined in

[globals.d.ts:1883](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1883)

[dist/types.d.ts:10453](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10453)
