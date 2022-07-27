[bun-types](../README.md) / [Exports](../modules.md) / ["crypto"](../modules/crypto_.md) / ECKeyPairOptions

# Interface: ECKeyPairOptions<PubF, PrivF\>

["crypto"](../modules/crypto_.md).ECKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [namedCurve](crypto_.ECKeyPairOptions.md#namedcurve)
- [privateKeyEncoding](crypto_.ECKeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](crypto_.ECKeyPairOptions.md#publickeyencoding)

## Properties

### namedCurve

• **namedCurve**: `string`

Name of the curve to use.

#### Defined in

[crypto.d.ts:2607](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2607)

[dist/types.d.ts:18626](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18626)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"`` \| ``"sec1"``  }

#### Defined in

[crypto.d.ts:2612](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2612)

[dist/types.d.ts:18631](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18631)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"pkcs1"`` \| ``"spki"`` |

#### Defined in

[crypto.d.ts:2608](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2608)

[dist/types.d.ts:18627](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18627)
