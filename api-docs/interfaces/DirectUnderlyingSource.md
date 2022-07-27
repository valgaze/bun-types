[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / DirectUnderlyingSource

# Interface: DirectUnderlyingSource<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/DirectUnderlyingSource.md#cancel)
- [pull](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/DirectUnderlyingSource.md#pull)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/DirectUnderlyingSource.md#type)

## Properties

### cancel

• `Optional` **cancel**: [`UnderlyingSourceCancelCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSourceCancelCallback.md)

#### Defined in

[globals.d.ts:1879](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1879)

[dist/types.d.ts:10449](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10449)

___

### pull

• **pull**: (`controller`: [`ReadableStreamDirectController`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDirectController.md)) => `void` \| `PromiseLike`<`void`\>

#### Type declaration

▸ (`controller`): `void` \| `PromiseLike`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `controller` | [`ReadableStreamDirectController`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDirectController.md) |

##### Returns

`void` \| `PromiseLike`<`void`\>

#### Defined in

[globals.d.ts:1880](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1880)

[dist/types.d.ts:10450](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10450)

___

### type

• **type**: ``"direct"``

#### Defined in

[globals.d.ts:1883](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1883)

[dist/types.d.ts:10453](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10453)
