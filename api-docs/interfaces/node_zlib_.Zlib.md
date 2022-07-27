[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_zlib_.md) / Zlib

# Interface: Zlib

["node:zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_zlib_.md).Zlib

## Table of contents

### Properties

- [bytesRead](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Zlib.md#bytesread)
- [bytesWritten](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Zlib.md#byteswritten)
- [shell](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Zlib.md#shell)

### Methods

- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Zlib.md#flush)

## Properties

### bytesRead

• `Readonly` **bytesRead**: `number`

**`Deprecated`**

Use bytesWritten instead.

#### Defined in

[zlib.d.ts:140](https://github.com/valgaze/bun-types/blob/6f8dbf8/zlib.d.ts#L140)

[dist/types.d.ts:21361](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L21361)

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

#### Defined in

[zlib.d.ts:141](https://github.com/valgaze/bun-types/blob/6f8dbf8/zlib.d.ts#L141)

[dist/types.d.ts:21362](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L21362)

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Defined in

[zlib.d.ts:142](https://github.com/valgaze/bun-types/blob/6f8dbf8/zlib.d.ts#L142)

[dist/types.d.ts:21363](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L21363)

## Methods

### flush

▸ **flush**(`kind?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind?` | `number` |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[zlib.d.ts:143](https://github.com/valgaze/bun-types/blob/6f8dbf8/zlib.d.ts#L143)

▸ **flush**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[zlib.d.ts:144](https://github.com/valgaze/bun-types/blob/6f8dbf8/zlib.d.ts#L144)

▸ **flush**(`kind?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind?` | `number` |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21364](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L21364)

▸ **flush**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21365](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L21365)
