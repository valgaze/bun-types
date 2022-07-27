[bun-types](../README.md) / [Exports](../modules.md) / ["bun"](../modules/bun_.md) / CryptoHashInterface

# Class: CryptoHashInterface<T\>

["bun"](../modules/bun_.md).CryptoHashInterface

This class only exists in types

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`CryptoHashInterface`**

  ↳ [`SHA1`](bun_.SHA1.md)

  ↳ [`MD5`](bun_.MD5.md)

  ↳ [`MD4`](bun_.MD4.md)

  ↳ [`SHA224`](bun_.SHA224.md)

  ↳ [`SHA512`](bun_.SHA512.md)

  ↳ [`SHA384`](bun_.SHA384.md)

  ↳ [`SHA256`](bun_.SHA256.md)

  ↳ [`SHA512_256`](bun_.SHA512_256.md)

## Table of contents

### Constructors

- [constructor](bun_.CryptoHashInterface.md#constructor)

### Methods

- [digest](bun_.CryptoHashInterface.md#digest)
- [update](bun_.CryptoHashInterface.md#update)
- [hash](bun_.CryptoHashInterface.md#hash)

## Constructors

### constructor

• **new CryptoHashInterface**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

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

#### Defined in

[bun.d.ts:1068](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1068)

___

### update

▸ **update**(`data`): `T`

Update the hash with data

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StringOrBuffer` |

#### Returns

`T`

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

#### Defined in

[bun.d.ts:1086](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L1086)
