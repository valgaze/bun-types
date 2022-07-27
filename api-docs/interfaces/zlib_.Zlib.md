[bun-types](../README.md) / [Exports](../modules.md) / ["zlib"](../modules/zlib_.md) / Zlib

# Interface: Zlib

["zlib"](../modules/zlib_.md).Zlib

## Hierarchy

- **`Zlib`**

  ↳ [`BrotliCompress`](zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](zlib_.Gzip-1.md)

  ↳ [`Gunzip`](zlib_.Gunzip-1.md)

  ↳ [`Deflate`](zlib_.Deflate-1.md)

  ↳ [`Inflate`](zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](zlib_.Unzip-1.md)

  ↳ [`BrotliCompress`](node_zlib_.BrotliCompress-1.md)

  ↳ [`BrotliDecompress`](node_zlib_.BrotliDecompress-1.md)

  ↳ [`Gzip`](node_zlib_.Gzip-1.md)

  ↳ [`Gunzip`](node_zlib_.Gunzip-1.md)

  ↳ [`Deflate`](node_zlib_.Deflate-1.md)

  ↳ [`Inflate`](node_zlib_.Inflate-1.md)

  ↳ [`DeflateRaw`](node_zlib_.DeflateRaw-1.md)

  ↳ [`InflateRaw`](node_zlib_.InflateRaw-1.md)

  ↳ [`Unzip`](node_zlib_.Unzip-1.md)

## Table of contents

### Properties

- [bytesRead](zlib_.Zlib.md#bytesread)
- [bytesWritten](zlib_.Zlib.md#byteswritten)
- [shell](zlib_.Zlib.md#shell)

### Methods

- [flush](zlib_.Zlib.md#flush)

## Properties

### bytesRead

• `Readonly` **bytesRead**: `number`

**`Deprecated`**

Use bytesWritten instead.

#### Defined in

[zlib.d.ts:140](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L140)

[dist/types.d.ts:21361](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21361)

___

### bytesWritten

• `Readonly` **bytesWritten**: `number`

#### Defined in

[zlib.d.ts:141](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L141)

[dist/types.d.ts:21362](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21362)

___

### shell

• `Optional` **shell**: `string` \| `boolean`

#### Defined in

[zlib.d.ts:142](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L142)

[dist/types.d.ts:21363](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21363)

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

[zlib.d.ts:143](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L143)

▸ **flush**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[zlib.d.ts:144](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L144)

▸ **flush**(`kind?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `kind?` | `number` |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21364](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21364)

▸ **flush**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21365](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21365)
