[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / ECKeyPairOptions

# Interface: ECKeyPairOptions<PubF, PrivF\>

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).ECKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [namedCurve](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.ECKeyPairOptions.md#namedcurve)
- [privateKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.ECKeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.ECKeyPairOptions.md#publickeyencoding)

## Properties

### namedCurve

• **namedCurve**: `string`

Name of the curve to use.

#### Defined in

[crypto.d.ts:2607](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2607)

[dist/types.d.ts:18626](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18626)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"`` \| ``"sec1"``  }

#### Defined in

[crypto.d.ts:2612](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2612)

[dist/types.d.ts:18631](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18631)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"pkcs1"`` \| ``"spki"`` |

#### Defined in

[crypto.d.ts:2608](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2608)

[dist/types.d.ts:18627](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18627)
