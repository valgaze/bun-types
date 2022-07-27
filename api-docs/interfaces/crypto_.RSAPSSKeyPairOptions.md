[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / RSAPSSKeyPairOptions

# Interface: RSAPSSKeyPairOptions<PubF, PrivF\>

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).RSAPSSKeyPairOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `PubF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |
| `PrivF` | extends [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat) |

## Table of contents

### Properties

- [hashAlgorithm](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md#hashalgorithm)
- [mgf1HashAlgorithm](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md#mgf1hashalgorithm)
- [modulusLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md#moduluslength)
- [privateKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md#privatekeyencoding)
- [publicExponent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md#publicexponent)
- [publicKeyEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md#publickeyencoding)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.RSAPSSKeyPairOptions.md#saltlength)

## Properties

### hashAlgorithm

• `Optional` **hashAlgorithm**: `string`

Name of the message digest

#### Defined in

[crypto.d.ts:2569](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2569)

[dist/types.d.ts:18588](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18588)

___

### mgf1HashAlgorithm

• `Optional` **mgf1HashAlgorithm**: `string`

Name of the message digest used by MGF1

#### Defined in

[crypto.d.ts:2573](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2573)

[dist/types.d.ts:18592](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18592)

___

### modulusLength

• **modulusLength**: `number`

Key size in bits

#### Defined in

[crypto.d.ts:2560](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2560)

[dist/types.d.ts:18579](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18579)

___

### privateKeyEncoding

• **privateKeyEncoding**: [`BasePrivateKeyEncodingOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.BasePrivateKeyEncodingOptions.md)<`PrivF`\> & { `type`: ``"pkcs8"``  }

#### Defined in

[crypto.d.ts:2582](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2582)

[dist/types.d.ts:18601](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18601)

___

### publicExponent

• `Optional` **publicExponent**: `number`

Public exponent

**`Default`**

0x10001

#### Defined in

[crypto.d.ts:2565](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2565)

[dist/types.d.ts:18584](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18584)

___

### publicKeyEncoding

• **publicKeyEncoding**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `format` | `PubF` |
| `type` | ``"spki"`` |

#### Defined in

[crypto.d.ts:2578](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2578)

[dist/types.d.ts:18597](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18597)

___

### saltLength

• `Optional` **saltLength**: `string`

Minimal salt length in bytes

#### Defined in

[crypto.d.ts:2577](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2577)

[dist/types.d.ts:18596](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L18596)
