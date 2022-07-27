[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / ED25519KeyPairOptions

# Interface: ED25519KeyPairOptions<PubF, PrivF\>

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).ED25519KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.ED25519KeyPairOptions.md#publickeyencoding)

## Properties

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2624](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2624)

[dist/types.d.ts:18643](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18643)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2620](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2620)

[dist/types.d.ts:18639](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18639)
