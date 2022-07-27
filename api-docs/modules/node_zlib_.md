[bun-types](../README.md) / [Exports](../modules.md) / "node:zlib"

# Namespace: "node:zlib"

## Table of contents

### Namespaces

- [brotliCompress](node_zlib_.brotliCompress.md)
- [brotliDecompress](node_zlib_.brotliDecompress.md)
- [constants](node_zlib_.constants.md)
- [deflate](node_zlib_.deflate.md)
- [deflateRaw](node_zlib_.deflateRaw.md)
- [gunzip](node_zlib_.gunzip.md)
- [gzip](node_zlib_.gzip.md)
- [inflate](node_zlib_.inflate.md)
- [inflateRaw](node_zlib_.inflateRaw.md)
- [unzip](node_zlib_.unzip.md)

### Interfaces

- [BrotliCompress](../interfaces/node_zlib_.BrotliCompress-1.md)
- [BrotliDecompress](../interfaces/node_zlib_.BrotliDecompress-1.md)
- [BrotliOptions](../interfaces/node_zlib_.BrotliOptions.md)
- [Deflate](../interfaces/node_zlib_.Deflate-1.md)
- [DeflateRaw](../interfaces/node_zlib_.DeflateRaw-1.md)
- [Gunzip](../interfaces/node_zlib_.Gunzip-1.md)
- [Gzip](../interfaces/node_zlib_.Gzip-1.md)
- [Inflate](../interfaces/node_zlib_.Inflate-1.md)
- [InflateRaw](../interfaces/node_zlib_.InflateRaw-1.md)
- [Unzip](../interfaces/node_zlib_.Unzip-1.md)
- [Zlib](../interfaces/node_zlib_.Zlib.md)
- [ZlibOptions](../interfaces/node_zlib_.ZlibOptions.md)
- [ZlibParams](../interfaces/node_zlib_.ZlibParams.md)
- [ZlibReset](../interfaces/node_zlib_.ZlibReset.md)

### Type Aliases

- [CompressCallback](node_zlib_.md#compresscallback)
- [InputType](node_zlib_.md#inputtype)

### Variables

- [Z\_ASCII](node_zlib_.md#z_ascii)
- [Z\_BEST\_COMPRESSION](node_zlib_.md#z_best_compression)
- [Z\_BEST\_SPEED](node_zlib_.md#z_best_speed)
- [Z\_BINARY](node_zlib_.md#z_binary)
- [Z\_BLOCK](node_zlib_.md#z_block)
- [Z\_BUF\_ERROR](node_zlib_.md#z_buf_error)
- [Z\_DATA\_ERROR](node_zlib_.md#z_data_error)
- [Z\_DEFAULT\_COMPRESSION](node_zlib_.md#z_default_compression)
- [Z\_DEFAULT\_STRATEGY](node_zlib_.md#z_default_strategy)
- [Z\_DEFLATED](node_zlib_.md#z_deflated)
- [Z\_ERRNO](node_zlib_.md#z_errno)
- [Z\_FILTERED](node_zlib_.md#z_filtered)
- [Z\_FINISH](node_zlib_.md#z_finish)
- [Z\_FIXED](node_zlib_.md#z_fixed)
- [Z\_FULL\_FLUSH](node_zlib_.md#z_full_flush)
- [Z\_HUFFMAN\_ONLY](node_zlib_.md#z_huffman_only)
- [Z\_MEM\_ERROR](node_zlib_.md#z_mem_error)
- [Z\_NEED\_DICT](node_zlib_.md#z_need_dict)
- [Z\_NO\_COMPRESSION](node_zlib_.md#z_no_compression)
- [Z\_NO\_FLUSH](node_zlib_.md#z_no_flush)
- [Z\_OK](node_zlib_.md#z_ok)
- [Z\_PARTIAL\_FLUSH](node_zlib_.md#z_partial_flush)
- [Z\_RLE](node_zlib_.md#z_rle)
- [Z\_STREAM\_END](node_zlib_.md#z_stream_end)
- [Z\_STREAM\_ERROR](node_zlib_.md#z_stream_error)
- [Z\_SYNC\_FLUSH](node_zlib_.md#z_sync_flush)
- [Z\_TEXT](node_zlib_.md#z_text)
- [Z\_TREES](node_zlib_.md#z_trees)
- [Z\_UNKNOWN](node_zlib_.md#z_unknown)
- [Z\_VERSION\_ERROR](node_zlib_.md#z_version_error)

### Functions

- [brotliCompress](node_zlib_.md#brotlicompress)
- [brotliCompressSync](node_zlib_.md#brotlicompresssync)
- [brotliDecompress](node_zlib_.md#brotlidecompress)
- [brotliDecompressSync](node_zlib_.md#brotlidecompresssync)
- [createBrotliCompress](node_zlib_.md#createbrotlicompress)
- [createBrotliDecompress](node_zlib_.md#createbrotlidecompress)
- [createDeflate](node_zlib_.md#createdeflate)
- [createDeflateRaw](node_zlib_.md#createdeflateraw)
- [createGunzip](node_zlib_.md#creategunzip)
- [createGzip](node_zlib_.md#creategzip)
- [createInflate](node_zlib_.md#createinflate)
- [createInflateRaw](node_zlib_.md#createinflateraw)
- [createUnzip](node_zlib_.md#createunzip)
- [deflate](node_zlib_.md#deflate)
- [deflateRaw](node_zlib_.md#deflateraw)
- [deflateRawSync](node_zlib_.md#deflaterawsync)
- [deflateSync](node_zlib_.md#deflatesync)
- [gunzip](node_zlib_.md#gunzip)
- [gunzipSync](node_zlib_.md#gunzipsync)
- [gzip](node_zlib_.md#gzip)
- [gzipSync](node_zlib_.md#gzipsync)
- [inflate](node_zlib_.md#inflate)
- [inflateRaw](node_zlib_.md#inflateraw)
- [inflateRawSync](node_zlib_.md#inflaterawsync)
- [inflateSync](node_zlib_.md#inflatesync)
- [unzip](node_zlib_.md#unzip)
- [unzipSync](node_zlib_.md#unzipsync)

## Type Aliases

### CompressCallback

Ƭ **CompressCallback**: (`error`: `Error` \| ``null``, `result`: [`Buffer`](buffer_.md#buffer)) => `void`

#### Type declaration

▸ (`error`, `result`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` \| ``null`` |
| `result` | [`Buffer`](buffer_.md#buffer) |

##### Returns

`void`

#### Defined in

[zlib.d.ts:205](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L205)

___

### InputType

Ƭ **InputType**: `string` \| `ArrayBuffer` \| `ArrayBufferView`

#### Defined in

[zlib.d.ts:204](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L204)

## Variables

### Z\_ASCII

• `Const` **Z\_ASCII**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:546](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L546)

___

### Z\_BEST\_COMPRESSION

• `Const` **Z\_BEST\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_BEST_COMPRESSION`

#### Defined in

[zlib.d.ts:527](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L527)

___

### Z\_BEST\_SPEED

• `Const` **Z\_BEST\_SPEED**: `number`

**`Deprecated`**

Use `constants.Z_BEST_SPEED`

#### Defined in

[zlib.d.ts:525](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L525)

___

### Z\_BINARY

• `Const` **Z\_BINARY**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:542](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L542)

___

### Z\_BLOCK

• `Const` **Z\_BLOCK**: `number`

**`Deprecated`**

Use `constants.Z_BLOCK`

#### Defined in

[zlib.d.ts:498](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L498)

___

### Z\_BUF\_ERROR

• `Const` **Z\_BUF\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_BUF_ERROR`

#### Defined in

[zlib.d.ts:518](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L518)

___

### Z\_DATA\_ERROR

• `Const` **Z\_DATA\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_DATA_ERROR`

#### Defined in

[zlib.d.ts:514](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L514)

___

### Z\_DEFAULT\_COMPRESSION

• `Const` **Z\_DEFAULT\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_DEFAULT_COMPRESSION`

#### Defined in

[zlib.d.ts:529](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L529)

___

### Z\_DEFAULT\_STRATEGY

• `Const` **Z\_DEFAULT\_STRATEGY**: `number`

**`Deprecated`**

Use `constants.Z_DEFAULT_STRATEGY`

#### Defined in

[zlib.d.ts:540](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L540)

___

### Z\_DEFLATED

• `Const` **Z\_DEFLATED**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:550](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L550)

___

### Z\_ERRNO

• `Const` **Z\_ERRNO**: `number`

**`Deprecated`**

Use `constants.Z_ERRNO`

#### Defined in

[zlib.d.ts:510](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L510)

___

### Z\_FILTERED

• `Const` **Z\_FILTERED**: `number`

**`Deprecated`**

Use `constants.Z_FILTERED`

#### Defined in

[zlib.d.ts:532](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L532)

___

### Z\_FINISH

• `Const` **Z\_FINISH**: `number`

**`Deprecated`**

Use `constants.Z_FINISH`

#### Defined in

[zlib.d.ts:496](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L496)

___

### Z\_FIXED

• `Const` **Z\_FIXED**: `number`

**`Deprecated`**

Use `constants.Z_FIXED`

#### Defined in

[zlib.d.ts:538](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L538)

___

### Z\_FULL\_FLUSH

• `Const` **Z\_FULL\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_FULL_FLUSH`

#### Defined in

[zlib.d.ts:494](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L494)

___

### Z\_HUFFMAN\_ONLY

• `Const` **Z\_HUFFMAN\_ONLY**: `number`

**`Deprecated`**

Use `constants.Z_HUFFMAN_ONLY`

#### Defined in

[zlib.d.ts:534](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L534)

___

### Z\_MEM\_ERROR

• `Const` **Z\_MEM\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_MEM_ERROR`

#### Defined in

[zlib.d.ts:516](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L516)

___

### Z\_NEED\_DICT

• `Const` **Z\_NEED\_DICT**: `number`

**`Deprecated`**

Use `constants.Z_NEED_DICT`

#### Defined in

[zlib.d.ts:508](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L508)

___

### Z\_NO\_COMPRESSION

• `Const` **Z\_NO\_COMPRESSION**: `number`

**`Deprecated`**

Use `constants.Z_NO_COMPRESSION`

#### Defined in

[zlib.d.ts:523](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L523)

___

### Z\_NO\_FLUSH

• `Const` **Z\_NO\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_NO_FLUSH`

#### Defined in

[zlib.d.ts:488](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L488)

___

### Z\_OK

• `Const` **Z\_OK**: `number`

**`Deprecated`**

Use `constants.Z_OK`

#### Defined in

[zlib.d.ts:504](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L504)

___

### Z\_PARTIAL\_FLUSH

• `Const` **Z\_PARTIAL\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_PARTIAL_FLUSH`

#### Defined in

[zlib.d.ts:490](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L490)

___

### Z\_RLE

• `Const` **Z\_RLE**: `number`

**`Deprecated`**

Use `constants.Z_RLE`

#### Defined in

[zlib.d.ts:536](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L536)

___

### Z\_STREAM\_END

• `Const` **Z\_STREAM\_END**: `number`

**`Deprecated`**

Use `constants.Z_STREAM_END`

#### Defined in

[zlib.d.ts:506](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L506)

___

### Z\_STREAM\_ERROR

• `Const` **Z\_STREAM\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_STREAM_ERROR`

#### Defined in

[zlib.d.ts:512](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L512)

___

### Z\_SYNC\_FLUSH

• `Const` **Z\_SYNC\_FLUSH**: `number`

**`Deprecated`**

Use `constants.Z_SYNC_FLUSH`

#### Defined in

[zlib.d.ts:492](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L492)

___

### Z\_TEXT

• `Const` **Z\_TEXT**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:544](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L544)

___

### Z\_TREES

• `Const` **Z\_TREES**: `number`

**`Deprecated`**

Use `constants.Z_TREES`

#### Defined in

[zlib.d.ts:500](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L500)

___

### Z\_UNKNOWN

• `Const` **Z\_UNKNOWN**: `number`

**`Deprecated`**

#### Defined in

[zlib.d.ts:548](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L548)

___

### Z\_VERSION\_ERROR

• `Const` **Z\_VERSION\_ERROR**: `number`

**`Deprecated`**

Use `constants.Z_VERSION_ERROR`

#### Defined in

[zlib.d.ts:520](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L520)

## Functions

### brotliCompress

▸ **brotliCompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:208](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L208)

▸ **brotliCompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:213](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L213)

▸ **brotliCompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21429](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21429)

▸ **brotliCompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21434](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21434)

___

### brotliCompressSync

▸ **brotliCompressSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Compress a chunk of data with `BrotliCompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:223](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L223)

▸ **brotliCompressSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Compress a chunk of data with `BrotliCompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21444](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21444)

___

### brotliDecompress

▸ **brotliDecompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:226](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L226)

▸ **brotliDecompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:231](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L231)

▸ **brotliDecompress**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21447](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21447)

▸ **brotliDecompress**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21452](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21452)

___

### brotliDecompressSync

▸ **brotliDecompressSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `BrotliDecompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:241](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L241)

▸ **brotliDecompressSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `BrotliDecompress`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21462](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21462)

___

### createBrotliCompress

▸ **createBrotliCompress**(`options?`): [`BrotliCompress`](../interfaces/zlib_.BrotliCompress-1.md)

Creates and returns a new `BrotliCompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`BrotliCompress`](../interfaces/zlib_.BrotliCompress-1.md)

#### Defined in

[zlib.d.ts:164](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L164)

▸ **createBrotliCompress**(`options?`): [`BrotliCompress`](../interfaces/zlib_.BrotliCompress-1.md)

Creates and returns a new `BrotliCompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`BrotliCompress`](../interfaces/zlib_.BrotliCompress-1.md)

#### Defined in

[dist/types.d.ts:21385](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21385)

___

### createBrotliDecompress

▸ **createBrotliDecompress**(`options?`): [`BrotliDecompress`](../interfaces/zlib_.BrotliDecompress-1.md)

Creates and returns a new `BrotliDecompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`BrotliDecompress`](../interfaces/zlib_.BrotliDecompress-1.md)

#### Defined in

[zlib.d.ts:168](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L168)

▸ **createBrotliDecompress**(`options?`): [`BrotliDecompress`](../interfaces/zlib_.BrotliDecompress-1.md)

Creates and returns a new `BrotliDecompress` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BrotliOptions`](../interfaces/zlib_.BrotliOptions.md) |

#### Returns

[`BrotliDecompress`](../interfaces/zlib_.BrotliDecompress-1.md)

#### Defined in

[dist/types.d.ts:21389](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21389)

___

### createDeflate

▸ **createDeflate**(`options?`): [`Deflate`](../interfaces/zlib_.Deflate-1.md)

Creates and returns a new `Deflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Deflate`](../interfaces/zlib_.Deflate-1.md)

#### Defined in

[zlib.d.ts:181](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L181)

▸ **createDeflate**(`options?`): [`Deflate`](../interfaces/zlib_.Deflate-1.md)

Creates and returns a new `Deflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Deflate`](../interfaces/zlib_.Deflate-1.md)

#### Defined in

[dist/types.d.ts:21402](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21402)

___

### createDeflateRaw

▸ **createDeflateRaw**(`options?`): [`DeflateRaw`](../interfaces/zlib_.DeflateRaw-1.md)

Creates and returns a new `DeflateRaw` object.

An upgrade of zlib from 1.2.8 to 1.2.11 changed behavior when `windowBits`is set to 8 for raw deflate streams. zlib would automatically set `windowBits`to 9 if was initially set to 8\. Newer
versions of zlib will throw an exception,
so Node.js restored the original behavior of upgrading a value of 8 to 9,
since passing `windowBits = 9` to zlib actually results in a compressed stream
that effectively uses an 8-bit window only.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`DeflateRaw`](../interfaces/zlib_.DeflateRaw-1.md)

#### Defined in

[zlib.d.ts:195](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L195)

▸ **createDeflateRaw**(`options?`): [`DeflateRaw`](../interfaces/zlib_.DeflateRaw-1.md)

Creates and returns a new `DeflateRaw` object.

An upgrade of zlib from 1.2.8 to 1.2.11 changed behavior when `windowBits`is set to 8 for raw deflate streams. zlib would automatically set `windowBits`to 9 if was initially set to 8\. Newer
versions of zlib will throw an exception,
so Node.js restored the original behavior of upgrading a value of 8 to 9,
since passing `windowBits = 9` to zlib actually results in a compressed stream
that effectively uses an 8-bit window only.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`DeflateRaw`](../interfaces/zlib_.DeflateRaw-1.md)

#### Defined in

[dist/types.d.ts:21416](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21416)

___

### createGunzip

▸ **createGunzip**(`options?`): [`Gunzip`](../interfaces/zlib_.Gunzip-1.md)

Creates and returns a new `Gunzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Gunzip`](../interfaces/zlib_.Gunzip-1.md)

#### Defined in

[zlib.d.ts:177](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L177)

▸ **createGunzip**(`options?`): [`Gunzip`](../interfaces/zlib_.Gunzip-1.md)

Creates and returns a new `Gunzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Gunzip`](../interfaces/zlib_.Gunzip-1.md)

#### Defined in

[dist/types.d.ts:21398](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21398)

___

### createGzip

▸ **createGzip**(`options?`): [`Gzip`](../interfaces/zlib_.Gzip-1.md)

Creates and returns a new `Gzip` object.
See `example`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Gzip`](../interfaces/zlib_.Gzip-1.md)

#### Defined in

[zlib.d.ts:173](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L173)

▸ **createGzip**(`options?`): [`Gzip`](../interfaces/zlib_.Gzip-1.md)

Creates and returns a new `Gzip` object.
See `example`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Gzip`](../interfaces/zlib_.Gzip-1.md)

#### Defined in

[dist/types.d.ts:21394](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21394)

___

### createInflate

▸ **createInflate**(`options?`): [`Inflate`](../interfaces/zlib_.Inflate-1.md)

Creates and returns a new `Inflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Inflate`](../interfaces/zlib_.Inflate-1.md)

#### Defined in

[zlib.d.ts:185](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L185)

▸ **createInflate**(`options?`): [`Inflate`](../interfaces/zlib_.Inflate-1.md)

Creates and returns a new `Inflate` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Inflate`](../interfaces/zlib_.Inflate-1.md)

#### Defined in

[dist/types.d.ts:21406](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21406)

___

### createInflateRaw

▸ **createInflateRaw**(`options?`): [`InflateRaw`](../interfaces/zlib_.InflateRaw-1.md)

Creates and returns a new `InflateRaw` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`InflateRaw`](../interfaces/zlib_.InflateRaw-1.md)

#### Defined in

[zlib.d.ts:199](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L199)

▸ **createInflateRaw**(`options?`): [`InflateRaw`](../interfaces/zlib_.InflateRaw-1.md)

Creates and returns a new `InflateRaw` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`InflateRaw`](../interfaces/zlib_.InflateRaw-1.md)

#### Defined in

[dist/types.d.ts:21420](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21420)

___

### createUnzip

▸ **createUnzip**(`options?`): [`Unzip`](../interfaces/zlib_.Unzip-1.md)

Creates and returns a new `Unzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Unzip`](../interfaces/zlib_.Unzip-1.md)

#### Defined in

[zlib.d.ts:203](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L203)

▸ **createUnzip**(`options?`): [`Unzip`](../interfaces/zlib_.Unzip-1.md)

Creates and returns a new `Unzip` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Unzip`](../interfaces/zlib_.Unzip-1.md)

#### Defined in

[dist/types.d.ts:21424](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21424)

___

### deflate

▸ **deflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:247](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L247)

▸ **deflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:248](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L248)

▸ **deflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21468](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21468)

▸ **deflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21469](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21469)

___

### deflateRaw

▸ **deflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:265](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L265)

▸ **deflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:266](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L266)

▸ **deflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21486](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21486)

▸ **deflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21487](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21487)

___

### deflateRawSync

▸ **deflateRawSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Compress a chunk of data with `DeflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:280](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L280)

▸ **deflateRawSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Compress a chunk of data with `DeflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21501](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21501)

___

### deflateSync

▸ **deflateSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Compress a chunk of data with `Deflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:262](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L262)

▸ **deflateSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Compress a chunk of data with `Deflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21483](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21483)

___

### gunzip

▸ **gunzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:301](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L301)

▸ **gunzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:302](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L302)

▸ **gunzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21522](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21522)

▸ **gunzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21523](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21523)

___

### gunzipSync

▸ **gunzipSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `Gunzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:316](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L316)

▸ **gunzipSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `Gunzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21537](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21537)

___

### gzip

▸ **gzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:283](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L283)

▸ **gzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:284](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L284)

▸ **gzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21504](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21504)

▸ **gzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21505](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21505)

___

### gzipSync

▸ **gzipSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Compress a chunk of data with `Gzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:298](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L298)

▸ **gzipSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Compress a chunk of data with `Gzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21519](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21519)

___

### inflate

▸ **inflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:319](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L319)

▸ **inflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:320](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L320)

▸ **inflate**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21540](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21540)

▸ **inflate**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21541](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21541)

___

### inflateRaw

▸ **inflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:337](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L337)

▸ **inflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:338](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L338)

▸ **inflateRaw**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21558](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21558)

▸ **inflateRaw**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21559](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21559)

___

### inflateRawSync

▸ **inflateRawSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `InflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:352](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L352)

▸ **inflateRawSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `InflateRaw`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21573](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21573)

___

### inflateSync

▸ **inflateSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `Inflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:334](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L334)

▸ **inflateSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `Inflate`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21555](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21555)

___

### unzip

▸ **unzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:355](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L355)

▸ **unzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[zlib.d.ts:356](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L356)

▸ **unzip**(`buf`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21576](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21576)

▸ **unzip**(`buf`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |
| `callback` | [`CompressCallback`](zlib_.md#compresscallback) |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:21577](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21577)

___

### unzipSync

▸ **unzipSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `Unzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[zlib.d.ts:370](https://github.com/valgaze/bun-types/blob/5e53f27/zlib.d.ts#L370)

▸ **unzipSync**(`buf`, `options?`): [`Buffer`](buffer_.md#buffer)

Decompress a chunk of data with `Unzip`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | [`InputType`](zlib_.md#inputtype) |
| `options?` | [`ZlibOptions`](../interfaces/zlib_.ZlibOptions.md) |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:21591](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L21591)
