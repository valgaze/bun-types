[bun-types](../README.md) / [Exports](../modules.md) / ["node:fs"](../modules/node_fs_.md) / RmDirOptions

# Interface: RmDirOptions

["node:fs"](../modules/node_fs_.md).RmDirOptions

## Table of contents

### Properties

- [maxRetries](node_fs_.RmDirOptions.md#maxretries)
- [recursive](node_fs_.RmDirOptions.md#recursive)
- [retryDelay](node_fs_.RmDirOptions.md#retrydelay)

## Properties

### maxRetries

• `Optional` **maxRetries**: `number`

If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
`EPERM` error is encountered, Node.js will retry the operation with a linear
backoff wait of `retryDelay` ms longer on each try. This option represents the
number of retries. This option is ignored if the `recursive` option is not
`true`.

**`Default`**

0

#### Defined in

[fs.d.ts:1258](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1258)

[dist/types.d.ts:6112](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6112)

___

### recursive

• `Optional` **recursive**: `boolean`

**`Deprecated`**

since v14.14.0 In future versions of Node.js and will trigger a warning
`fs.rmdir(path, { recursive: true })` will throw if `path` does not exist or is a file.
Use `fs.rm(path, { recursive: true, force: true })` instead.

If `true`, perform a recursive directory removal. In
recursive mode operations are retried on failure.

**`Default`**

false

#### Defined in

[fs.d.ts:1268](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1268)

[dist/types.d.ts:6122](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6122)

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`Default`**

100

#### Defined in

[fs.d.ts:1274](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1274)

[dist/types.d.ts:6128](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6128)
