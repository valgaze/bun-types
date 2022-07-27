[bun-types](../README.md) / [Exports](../modules.md) / ["fs"](../modules/fs_.md) / OpenDirOptions

# Interface: OpenDirOptions

["fs"](../modules/fs_.md).OpenDirOptions

## Table of contents

### Properties

- [bufferSize](fs_.OpenDirOptions.md#buffersize)
- [encoding](fs_.OpenDirOptions.md#encoding)

## Properties

### bufferSize

• `Optional` **bufferSize**: `number`

Number of directory entries that are buffered
internally when reading from the directory. Higher values lead to better
performance but higher memory usage.

**`Default`**

32

#### Defined in

[fs.d.ts:3538](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3538)

[dist/types.d.ts:8392](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8392)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Defined in

[fs.d.ts:3531](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3531)

[dist/types.d.ts:8385](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8385)
