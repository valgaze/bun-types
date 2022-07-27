[bun-types](../README.md) / [Exports](../modules.md) / ["bun"](../modules/bun_.md) / SHA224

# Class: SHA224

["bun"](../modules/bun_.md).SHA224

This class only exists in types

## Hierarchy

- [`CryptoHashInterface`](bun_.CryptoHashInterface.md)<[`SHA224`](bun_.SHA224.md)\>

  ↳ **`SHA224`**

## Table of contents

### Constructors

- [constructor](bun_.SHA224.md#constructor)

### Properties

- [byteLength](bun_.SHA224.md#bytelength)

### Methods

- [digest](bun_.SHA224.md#digest)
- [update](bun_.SHA224.md#update)
- [hash](bun_.SHA224.md#hash)

## Constructors

### constructor

• **new SHA224**()

#### Overrides

[CryptoHashInterface](bun_.CryptoHashInterface.md).[constructor](bun_.CryptoHashInterface.md#constructor)

#### Defined in

[bun.d.ts:1159](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1159)

## Properties

### byteLength

▪ `Static` `Readonly` **byteLength**: ``28``

The number of bytes the hash will produce

#### Defined in

[bun.d.ts:1164](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1164)

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

▸ **update**(`data`): [`SHA224`](bun_.SHA224.md)

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StringOrBuffer` |

#### Returns

[`SHA224`](bun_.SHA224.md)

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
