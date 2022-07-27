[bun-types](../README.md) / [Exports](../modules.md) / ["node:crypto"](../modules/node_crypto_.md) / DSAKeyPairOptions

# Interface: DSAKeyPairOptions<PubF, PrivF\>

["node:crypto"](../modules/node_crypto_.md).DSAKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [divisorLength](node_crypto_.DSAKeyPairOptions.md#divisorlength)
- [modulusLength](node_crypto_.DSAKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](node_crypto_.DSAKeyPairOptions.md#privatekeyencoding)
- [publicKeyEncoding](node_crypto_.DSAKeyPairOptions.md#publickeyencoding)

## Properties

### divisorLength

• **divisorLength**: `number`

Size of q in bits

#### Defined in

[crypto.d.ts:2594](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2594)

[dist/types.d.ts:18613](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18613)

___

### modulusLength

• **modulusLength**: `number`

Key size in bits

#### Defined in

[crypto.d.ts:2590](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2590)

[dist/types.d.ts:18609](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18609)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2599](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2599)

[dist/types.d.ts:18618](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18618)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2595](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2595)

[dist/types.d.ts:18614](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18614)
