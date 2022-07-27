[bun-types](../README.md) / [Exports](../modules.md) / ["crypto"](../modules/crypto_.md) / X25519KeyPairOptions

# Interface: X25519KeyPairOptions<PubF, PrivF\>

["crypto"](../modules/crypto_.md).X25519KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](crypto_.X25519KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](crypto_.X25519KeyPairOptions.md#publickeyencoding)

## Properties

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2648](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2648)

[dist/types.d.ts:18667](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18667)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2644](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2644)

[dist/types.d.ts:18663](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18663)
