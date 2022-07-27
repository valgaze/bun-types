[bun-types](../README.md) / [Exports](../modules.md) / ["crypto"](../modules/crypto_.md) / X448KeyPairOptions

# Interface: X448KeyPairOptions<PubF, PrivF\>

["crypto"](../modules/crypto_.md).X448KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](crypto_.X448KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](crypto_.X448KeyPairOptions.md#publickeyencoding)

## Properties

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2660](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2660)

[dist/types.d.ts:18679](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18679)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2656](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2656)

[dist/types.d.ts:18675](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18675)
