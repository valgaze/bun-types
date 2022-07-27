[bun-types](../README.md) / [Exports](../modules.md) / ["node:crypto"](../modules/node_crypto_.md) / SignPrivateKeyInput

# Interface: SignPrivateKeyInput

["node:crypto"](../modules/node_crypto_.md).SignPrivateKeyInput

## Hierarchy

- [`PrivateKeyInput`](crypto_.PrivateKeyInput.md)

- [`SigningOptions`](crypto_.SigningOptions.md)

  ↳ **`SignPrivateKeyInput`**

## Table of contents

### Properties

- [dsaEncoding](node_crypto_.SignPrivateKeyInput.md#dsaencoding)
- [format](node_crypto_.SignPrivateKeyInput.md#format)
- [key](node_crypto_.SignPrivateKeyInput.md#key)
- [padding](node_crypto_.SignPrivateKeyInput.md#padding)
- [passphrase](node_crypto_.SignPrivateKeyInput.md#passphrase)
- [saltLength](node_crypto_.SignPrivateKeyInput.md#saltlength)
- [type](node_crypto_.SignPrivateKeyInput.md#type)

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

[PrivateKeyInput](crypto_.PrivateKeyInput.md).[format](crypto_.PrivateKeyInput.md#format)

#### Defined in

[crypto.d.ts:1251](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1251)

[dist/types.d.ts:17270](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17270)

___

### key

• **key**: `string` \| [`Buffer`](../modules/buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](crypto_.PrivateKeyInput.md).[key](crypto_.PrivateKeyInput.md#key)

#### Defined in

[crypto.d.ts:1250](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1250)

[dist/types.d.ts:17269](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17269)

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

### passphrase

• `Optional` **passphrase**: `string` \| [`Buffer`](../modules/buffer_.md#buffer)

#### Inherited from

[PrivateKeyInput](crypto_.PrivateKeyInput.md).[passphrase](crypto_.PrivateKeyInput.md#passphrase)

#### Defined in

[crypto.d.ts:1253](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1253)

[dist/types.d.ts:17272](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17272)

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

• `Optional` **type**: ``"pkcs1"`` \| ``"pkcs8"`` \| ``"sec1"``

#### Inherited from

[PrivateKeyInput](crypto_.PrivateKeyInput.md).[type](crypto_.PrivateKeyInput.md#type)

#### Defined in

[crypto.d.ts:1252](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1252)

[dist/types.d.ts:17271](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L17271)
