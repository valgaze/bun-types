[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / SHA512

# Class: SHA512

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).SHA512

This class only exists in types

## Hierarchy

- [`CryptoHashInterface`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md)<[`SHA512`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md)\>

  ↳ **`SHA512`**

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md#constructor)

### Properties

- [byteLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md#bytelength)

### Methods

- [digest](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md#digest)
- [update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md#update)
- [hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md#hash)

## Constructors

### constructor

• **new SHA512**()

#### Overrides

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#constructor)

#### Defined in

[bun.d.ts:1167](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1167)

## Properties

### byteLength

▪ `Static` `Readonly` **byteLength**: ``64``

The number of bytes the hash will produce

#### Defined in

[bun.d.ts:1172](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1172)

## Methods

### digest

▸ **digest**(`encoding`): `string`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | [`DigestEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in. If none is provided, it will return a `Uint8Array`. |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[digest](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#digest)

#### Defined in

[bun.d.ts:1061](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1061)

▸ **digest**(`hashInto?`): `TypedArray`

Finalize the hash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hashInto?` | `TypedArray` | `TypedArray` to write the hash into. Faster than creating a new one each time |

#### Returns

`TypedArray`

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[digest](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#digest)

#### Defined in

[bun.d.ts:1068](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1068)

___

### update

▸ **update**(`data`): [`SHA512`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md)

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StringOrBuffer` |

#### Returns

[`SHA512`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md)

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#update)

#### Defined in

[bun.d.ts:1054](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1054)

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

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#hash)

#### Defined in

[bun.d.ts:1077](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1077)

▸ `Static` **hash**(`input`, `encoding`): `string`

Run the hash over the given data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` is faster. |
| `encoding` | [`DigestEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in |

#### Returns

`string`

#### Inherited from

[CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md).[hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md#hash)

#### Defined in

[bun.d.ts:1086](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1086)