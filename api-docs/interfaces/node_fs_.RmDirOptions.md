[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_fs_.md) / RmDirOptions

# Interface: RmDirOptions

["node:fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_fs_.md).RmDirOptions

## Table of contents

### Properties

- [maxRetries](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_fs_.RmDirOptions.md#maxretries)
- [recursive](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_fs_.RmDirOptions.md#recursive)
- [retryDelay](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_fs_.RmDirOptions.md#retrydelay)

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

[fs.d.ts:1258](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L1258)

[dist/types.d.ts:6112](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L6112)

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

[fs.d.ts:1268](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L1268)

[dist/types.d.ts:6122](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L6122)

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`Default`**

100

#### Defined in

[fs.d.ts:1274](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L1274)

[dist/types.d.ts:6128](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L6128)
