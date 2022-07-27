[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / VerifyPublicKeyInput

# Interface: VerifyPublicKeyInput

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).VerifyPublicKeyInput

## Hierarchy

- [`PublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md)

- [`SigningOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md)

  ↳ **`VerifyPublicKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#dsaencoding)
- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#format)
- [key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#key)
- [padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#padding)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#saltlength)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md#type)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#dsaencoding)

#### Defined in

[crypto.d.ts:1360](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1360)

[dist/types.d.ts:17379](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17379)

___

### format

• `Optional` **format**: [`KeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#keyformat)

#### Inherited from

[PublicKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md).[format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md#format)

#### Defined in

[crypto.d.ts:1257](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1257)

[dist/types.d.ts:17276](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17276)

___

### key

• **key**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[PublicKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md).[key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md#key)

#### Defined in

[crypto.d.ts:1256](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1256)

[dist/types.d.ts:17275](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17275)

___

### padding

• `Optional` **padding**: `number`

**`See`**

crypto.constants.RSA_PKCS1_PADDING

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#padding)

#### Defined in

[crypto.d.ts:1358](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1358)

[dist/types.d.ts:17377](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17377)

___

### saltLength

• `Optional` **saltLength**: `number`

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#saltlength)

#### Defined in

[crypto.d.ts:1359](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1359)

[dist/types.d.ts:17378](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17378)

___

### type

• `Optional` **type**: ``"pkcs1"`` \| ``"spki"``

#### Inherited from

[PublicKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md).[type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PublicKeyInput.md#type)

#### Defined in

[crypto.d.ts:1258](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1258)

[dist/types.d.ts:17277](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17277)
