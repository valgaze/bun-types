[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md) / Zlib

# Interface: Zlib

["zlib"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/zlib_.md).Zlib

## Hierarchy

- **`Zlib`**

  ↳ [`BrotliCompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gzip-1.md)

  ↳ [`Gunzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Gunzip-1.md)

  ↳ [`Deflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Deflate-1.md)

  ↳ [`Inflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Unzip-1.md)

  ↳ [`BrotliCompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Gzip-1.md)

  ↳ [`Gunzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Gunzip-1.md)

  ↳ [`Deflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Deflate-1.md)

  ↳ [`Inflate`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_zlib_.Unzip-1.md)

## Table of contents

### Properties

- [bytesRead](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md#bytesread)
- [bytesWritten](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md#byteswritten)
- [shell](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md#shell)

### Methods

- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/zlib_.Zlib.md#flush)

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
