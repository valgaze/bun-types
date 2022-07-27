[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / SignPrivateKeyInput

# Interface: SignPrivateKeyInput

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).SignPrivateKeyInput

## Hierarchy

- [`PrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md)

- [`SigningOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md)

  ↳ **`SignPrivateKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#dsaencoding)
- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#format)
- [key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#key)
- [padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#padding)
- [passphrase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#passphrase)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#saltlength)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md#type)

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

[PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md).[format](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#format)

#### Defined in

[crypto.d.ts:1251](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1251)

[dist/types.d.ts:17270](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17270)

___

### key

• **key**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md).[key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#key)

#### Defined in

[crypto.d.ts:1250](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1250)

[dist/types.d.ts:17269](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17269)

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

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md).[passphrase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#passphrase)

#### Defined in

[crypto.d.ts:1253](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1253)

[dist/types.d.ts:17272](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17272)

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

• `Optional` **type**: ``"pkcs1"`` \| ``"pkcs8"`` \| ``"sec1"``

#### Inherited from

[PrivateKeyInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md).[type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.PrivateKeyInput.md#type)

#### Defined in

[crypto.d.ts:1252](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1252)

[dist/types.d.ts:17271](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17271)
