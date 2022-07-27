[bun-types](../README.md) / [Exports](../modules.md) / ["node:fs"](../modules/node_fs_.md) / MakeDirectoryOptions

# Interface: MakeDirectoryOptions

["node:fs"](../modules/node_fs_.md).MakeDirectoryOptions

## Table of contents

### Properties

- [mode](node_fs_.MakeDirectoryOptions.md#mode)
- [recursive](node_fs_.MakeDirectoryOptions.md#recursive)

## Properties

### mode

• `Optional` **mode**: [`Mode`](../modules/fs_.md#mode)

A file mode. If a string is passed, it is parsed as an octal integer. If not specified

**`Default`**

0o777

#### Defined in

[fs.d.ts:1351](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1351)

[dist/types.d.ts:6205](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6205)

___

### recursive

• `Optional` **recursive**: `boolean`

Indicates whether parent folders should be created.
If a folder was created, the path to the first created folder will be returned.

**`Default`**

false

#### Defined in

[fs.d.ts:1346](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1346)

[dist/types.d.ts:6200](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6200)
