[bun-types](../README.md) / [Exports](../modules.md) / ["crypto"](../modules/crypto_.md) / CipherInfo

# Interface: CipherInfo

["crypto"](../modules/crypto_.md).CipherInfo

## Table of contents

### Properties

- [blockSize](crypto_.CipherInfo.md#blocksize)
- [ivLength](crypto_.CipherInfo.md#ivlength)
- [keyLength](crypto_.CipherInfo.md#keylength)
- [mode](crypto_.CipherInfo.md#mode)
- [name](crypto_.CipherInfo.md#name)
- [nid](crypto_.CipherInfo.md#nid)

## Properties

### blockSize

• `Optional` **blockSize**: `number`

The block size of the cipher in bytes.
This property is omitted when mode is 'stream'.

#### Defined in

[crypto.d.ts:3492](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3492)

[dist/types.d.ts:19511](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19511)

___

### ivLength

• `Optional` **ivLength**: `number`

The expected or default initialization vector length in bytes.
This property is omitted if the cipher does not use an initialization vector.

#### Defined in

[crypto.d.ts:3497](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3497)

[dist/types.d.ts:19516](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19516)

___

### keyLength

• **keyLength**: `number`

The expected or default key length in bytes.

#### Defined in

[crypto.d.ts:3501](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3501)

[dist/types.d.ts:19520](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19520)

___

### mode

• **mode**: [`CipherMode`](../modules/crypto_.md#ciphermode)

The cipher mode.

#### Defined in

[crypto.d.ts:3505](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3505)

[dist/types.d.ts:19524](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19524)

___

### name

• **name**: `string`

The name of the cipher.

#### Defined in

[crypto.d.ts:3483](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3483)

[dist/types.d.ts:19502](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19502)

___

### nid

• **nid**: `number`

The nid of the cipher.

#### Defined in

[crypto.d.ts:3487](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3487)

[dist/types.d.ts:19506](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19506)
