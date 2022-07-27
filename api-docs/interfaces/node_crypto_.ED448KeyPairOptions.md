[bun-types](../README.md) / [Exports](../modules.md) / ["node:crypto"](../modules/node_crypto_.md) / ED448KeyPairOptions

# Interface: ED448KeyPairOptions<PubF, PrivF\>

["node:crypto"](../modules/node_crypto_.md).ED448KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](node_crypto_.ED448KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](node_crypto_.ED448KeyPairOptions.md#publickeyencoding)

## Properties

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2636](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2636)

[dist/types.d.ts:18655](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18655)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2632](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2632)

[dist/types.d.ts:18651](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18651)
