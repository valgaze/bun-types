[bun-types](../README.md) / [Exports](../modules.md) / ["crypto"](../modules/crypto_.md) / VerifyPublicKeyInput

# Interface: VerifyPublicKeyInput

["crypto"](../modules/crypto_.md).VerifyPublicKeyInput

## Hierarchy

- [`PublicKeyInput`](crypto_.PublicKeyInput.md)

- [`SigningOptions`](crypto_.SigningOptions.md)

  ↳ **`VerifyPublicKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](crypto_.VerifyPublicKeyInput.md#dsaencoding)
- [format](crypto_.VerifyPublicKeyInput.md#format)
- [key](crypto_.VerifyPublicKeyInput.md#key)
- [padding](crypto_.VerifyPublicKeyInput.md#padding)
- [saltLength](crypto_.VerifyPublicKeyInput.md#saltlength)
- [type](crypto_.VerifyPublicKeyInput.md#type)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](../modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](crypto_.SigningOptions.md).[dsaEncoding](crypto_.SigningOptions.md#dsaencoding)

#### Defined in

[crypto.d.ts:1360](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1360)

[dist/types.d.ts:17379](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17379)

___

### format

• `Optional` **format**: [`KeyFormat`](../modules/crypto_.md#keyformat)

#### Inherited from

[PublicKeyInput](crypto_.PublicKeyInput.md).[format](crypto_.PublicKeyInput.md#format)

#### Defined in

[crypto.d.ts:1257](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1257)

[dist/types.d.ts:17276](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17276)

___

### key

• **key**: `string` \| [`Buffer`](../modules/buffer_.md#buffer)

#### Inherited from

[PublicKeyInput](crypto_.PublicKeyInput.md).[key](crypto_.PublicKeyInput.md#key)

#### Defined in

[crypto.d.ts:1256](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1256)

[dist/types.d.ts:17275](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17275)

___

### padding

• `Optional` **padding**: `number`

**`See`**

crypto.constants.RSA_PKCS1_PADDING

#### Inherited from

[SigningOptions](crypto_.SigningOptions.md).[padding](crypto_.SigningOptions.md#padding)

#### Defined in

[crypto.d.ts:1358](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1358)

[dist/types.d.ts:17377](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17377)

___

### saltLength

• `Optional` **saltLength**: `number`

#### Inherited from

[SigningOptions](crypto_.SigningOptions.md).[saltLength](crypto_.SigningOptions.md#saltlength)

#### Defined in

[crypto.d.ts:1359](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1359)

[dist/types.d.ts:17378](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17378)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"spki"``

#### Inherited from

[PublicKeyInput](crypto_.PublicKeyInput.md).[type](crypto_.PublicKeyInput.md#type)

#### Defined in

[crypto.d.ts:1258](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1258)

[dist/types.d.ts:17277](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17277)
