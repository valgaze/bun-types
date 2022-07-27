[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / SignKeyObjectInput

# Interface: SignKeyObjectInput

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).SignKeyObjectInput

## Hierarchy

- [`SigningOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md)

  ↳ **`SignKeyObjectInput`**

## Table of contents

### Properties

- [dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md#dsaencoding)
- [key](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md#key)
- [padding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md#padding)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SignKeyObjectInput.md#saltlength)

## Properties

### dsaEncoding

• `Optional` **dsaEncoding**: [`DSAEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#dsaencoding)

#### Inherited from

[SigningOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md).[dsaEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SigningOptions.md#dsaencoding)

#### Defined in

[crypto.d.ts:1360](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1360)

[dist/types.d.ts:17379](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17379)

___

### key

• **key**: [`KeyObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.KeyObject.md)

#### Defined in

[crypto.d.ts:1364](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1364)

[dist/types.d.ts:17383](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17383)

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
