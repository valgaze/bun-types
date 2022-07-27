[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / CipherInfo

# Interface: CipherInfo

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).CipherInfo

## Table of contents

### Properties

- [blockSize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md#blocksize)
- [ivLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md#ivlength)
- [keyLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md#keylength)
- [mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md#mode)
- [name](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md#name)
- [nid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherInfo.md#nid)

## Properties

### blockSize

• `Optional` **blockSize**: `number`

The block size of the cipher in bytes.
This property is omitted when mode is 'stream'.

#### Defined in

[crypto.d.ts:3492](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3492)

[dist/types.d.ts:19511](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19511)

___

### ivLength

• `Optional` **ivLength**: `number`

The expected or default initialization vector length in bytes.
This property is omitted if the cipher does not use an initialization vector.

#### Defined in

[crypto.d.ts:3497](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3497)

[dist/types.d.ts:19516](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19516)

___

### keyLength

• **keyLength**: `number`

The expected or default key length in bytes.

#### Defined in

[crypto.d.ts:3501](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3501)

[dist/types.d.ts:19520](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19520)

___

### mode

• **mode**: [`CipherMode`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ciphermode)

The cipher mode.

#### Defined in

[crypto.d.ts:3505](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3505)

[dist/types.d.ts:19524](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19524)

___

### name

• **name**: `string`

The name of the cipher.

#### Defined in

[crypto.d.ts:3483](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3483)

[dist/types.d.ts:19502](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19502)

___

### nid

• **nid**: `number`

The nid of the cipher.

#### Defined in

[crypto.d.ts:3487](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3487)

[dist/types.d.ts:19506](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19506)
