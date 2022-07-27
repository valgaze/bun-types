[bun-types](../README.md) / [Exports](../modules.md) / ["crypto"](../modules/crypto_.md) / RSAKeyPairOptions

# Interface: RSAKeyPairOptions<PubF, PrivF\>

["crypto"](../modules/crypto_.md).RSAKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](../modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [modulusLength](crypto_.RSAKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](crypto_.RSAKeyPairOptions.md#privatekeyencoding)
- [publicExponent](crypto_.RSAKeyPairOptions.md#publicexponent)
- [publicKeyEncoding](crypto_.RSAKeyPairOptions.md#publickeyencoding)

## Properties

### modulusLength

• **modulusLength**: `number`

Key size in bits

#### Defined in

[crypto.d.ts:2539](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2539)

[dist/types.d.ts:18558](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18558)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs1"`` \| ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2549](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2549)

[dist/types.d.ts:18568](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18568)

___

### publicExponent

• `Optional` **publicExponent**: `number`

Public exponent

**`Default`**

0x10001

#### Defined in

[crypto.d.ts:2544](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2544)

[dist/types.d.ts:18563](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18563)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"pkcs1"`` \| ``"spki"`` |

#### Defined in

[crypto.d.ts:2545](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L2545)

[dist/types.d.ts:18564](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L18564)
