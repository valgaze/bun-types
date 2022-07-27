[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / SigningOptions

# Interface: SigningOptions

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).SigningOptions

## Hierarchy

- **`SigningOptions`**

  ↳ [`SignPrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignPrivateKeyInput.md)

  ↳ [`SignKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md)

  ↳ [`VerifyPublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyPublicKeyInput.md)

  ↳ [`VerifyKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.VerifyKeyObjectInput.md)

  ↳ [`SignPrivateKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.SignPrivateKeyInput.md)

  ↳ [`SignKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.SignKeyObjectInput.md)

  ↳ [`VerifyPublicKeyInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyPublicKeyInput.md)

  ↳ [`VerifyKeyObjectInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.VerifyKeyObjectInput.md)

## Table of contents

### Properties

- [dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#dsaencoding)
- [padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#padding)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#saltlength)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#dsaencoding)

#### Defined in

[crypto.d.ts:1360](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1360)

[dist/types.d.ts:17379](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17379)

___

### padding

• `Optional` **padding**: `number`

**`See`**

crypto.constants.RSA_PKCS1_PADDING

#### Defined in

[crypto.d.ts:1358](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1358)

[dist/types.d.ts:17377](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17377)

___

### saltLength

• `Optional` **saltLength**: `number`

#### Defined in

[crypto.d.ts:1359](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1359)

[dist/types.d.ts:17378](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17378)
