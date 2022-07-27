[bun-types](../README.md) / [Exports](../modules.md) / ["bun"](../modules/bun_.md) / MD5

# Class: MD5

["bun"](../modules/bun_.md).MD5

This class only exists in types

## Hierarchy

- [`CryptoHashInterface`](bun_.CryptoHashInterface.md)<[`MD5`](bun_.MD5.md)\>

  ↳ **`MD5`**

## Table of contents

### Constructors

- [constructor](bun_.MD5.md#constructor)

### Properties

- [byteLength](bun_.MD5.md#bytelength)

### Methods

- [digest](bun_.MD5.md#digest)
- [update](bun_.MD5.md#update)
- [hash](bun_.MD5.md#hash)

## Constructors

### constructor

• **new MD5**()

#### Overrides

[CryptoHashInterface](bun_.CryptoHashInterface.md).[constructor](bun_.CryptoHashInterface.md#constructor)

#### Defined in

[bun.d.ts:1143](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1143)

## Properties

### byteLength

▪ `Static` `Readonly` **byteLength**: ``16``

The number of bytes the hash will produce

#### Defined in

[bun.d.ts:1148](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1148)

## Methods

### digest

▸ **digest**(`encoding`): `string`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`DigestEncoding`](../modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in. If none is provided, it will return a `Uint8Array`. |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](bun_.CryptoHashInterface.md).[digest](bun_.CryptoHashInterface.md#digest)

#### Defined in

[bun.d.ts:1061](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1061)

▸ **digest**(`hashInto?`): `TypedArray`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashInto?` | `TypedArray` | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

`TypedArray`

#### Inherited from

[CryptoHashInterface](bun_.CryptoHashInterface.md).[digest](bun_.CryptoHashInterface.md#digest)

#### Defined in

[bun.d.ts:1068](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1068)

___

### update

▸ **update**(`data`): [`MD5`](bun_.MD5.md)

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StringOrBuffer` |

#### Returns

[`MD5`](bun_.MD5.md)

#### Inherited from

[CryptoHashInterface](bun_.CryptoHashInterface.md).[update](bun_.CryptoHashInterface.md#update)

#### Defined in

[bun.d.ts:1054](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1054)

___

### hash

▸ `Static` **hash**(`input`, `hashInto?`): `TypedArray`

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `hashInto?` | `TypedArray` | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

`TypedArray`

#### Inherited from

[CryptoHashInterface](bun_.CryptoHashInterface.md).[hash](bun_.CryptoHashInterface.md#hash)

#### Defined in

[bun.d.ts:1077](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1077)

▸ `Static` **hash**(`input`, `encoding`): `string`

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `encoding` | [`DigestEncoding`](../modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](bun_.CryptoHashInterface.md).[hash](bun_.CryptoHashInterface.md#hash)

#### Defined in

[bun.d.ts:1086](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1086)
