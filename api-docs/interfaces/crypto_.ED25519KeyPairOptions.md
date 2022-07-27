[bun-types](../README.md) / [Exports](../modules.md) / ["crypto"](../modules/crypto_.md) / ED25519KeyPairOptions

# Interface: ED25519KeyPairOptions<PubF, PrivF\>

["crypto"](../modules/crypto_.md).ED25519KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](crypto_.ED25519KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](crypto_.ED25519KeyPairOptions.md#publickeyencoding)

## Properties

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2624](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2624)

[dist/types.d.ts:18643](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18643)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2620](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2620)

[dist/types.d.ts:18639](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18639)
