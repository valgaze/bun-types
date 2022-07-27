[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`ReadableStreamGenericReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamDefaultReader`**

## Table of contents

### Properties

- [closed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDefaultReader.md#closed)

### Methods

- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDefaultReader.md#cancel)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDefaultReader.md#read)
- [releaseLock](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamDefaultReader.md#releaselock)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Inherited from

[ReadableStreamGenericReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md).[closed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md#closed)

#### Defined in

[globals.d.ts:1757](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1757)

[dist/types.d.ts:10327](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10327)

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ReadableStreamGenericReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md).[cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md#cancel)

#### Defined in

[globals.d.ts:1758](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1758)

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ReadableStreamGenericReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md).[cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStreamGenericReader.md#cancel)

#### Defined in

[dist/types.d.ts:10328](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10328)

___

### read

▸ **read**(): `Promise`<`ReadableStreamDefaultReadResult`<`R`\>\>

#### Returns

`Promise`<`ReadableStreamDefaultReadResult`<`R`\>\>

#### Defined in

[globals.d.ts:1747](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1747)

▸ **read**(): `Promise`<`ReadableStreamDefaultReadResult`<`R`\>\>

#### Returns

`Promise`<`ReadableStreamDefaultReadResult`<`R`\>\>

#### Defined in

[dist/types.d.ts:10317](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10317)

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:1748](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1748)

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10318](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10318)
