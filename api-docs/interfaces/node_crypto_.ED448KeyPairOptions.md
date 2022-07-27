[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / ED448KeyPairOptions

# Interface: ED448KeyPairOptions<PubF, PrivF\>

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).ED448KeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [privateKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.ED448KeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.ED448KeyPairOptions.md#publickeyencoding)

## Properties

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2636](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2636)

[dist/types.d.ts:18655](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18655)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2632](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2632)

[dist/types.d.ts:18651](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18651)
