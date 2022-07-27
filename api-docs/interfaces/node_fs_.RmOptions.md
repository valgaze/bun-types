[bun-types](../README.md) / [Exports](../modules.md) / ["node:fs"](../modules/node_fs_.md) / RmOptions

# Interface: RmOptions

["node:fs"](../modules/node_fs_.md).RmOptions

## Table of contents

### Properties

- [force](node_fs_.RmOptions.md#force)
- [maxRetries](node_fs_.RmOptions.md#maxretries)
- [recursive](node_fs_.RmOptions.md#recursive)
- [retryDelay](node_fs_.RmOptions.md#retrydelay)

## Properties

### force

• `Optional` **force**: `boolean`

When `true`, exceptions will be ignored if `path` does not exist.

**`Default`**

false

#### Defined in

[fs.d.ts:1317](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1317)

[dist/types.d.ts:6171](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6171)

___

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

[fs.d.ts:1326](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1326)

[dist/types.d.ts:6180](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6180)

___

### recursive

• `Optional` **recursive**: `boolean`

If `true`, perform a recursive directory removal. In
recursive mode, operations are retried on failure.

**`Default`**

false

#### Defined in

[fs.d.ts:1332](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1332)

[dist/types.d.ts:6186](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6186)

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`Default`**

100

#### Defined in

[fs.d.ts:1338](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L1338)

[dist/types.d.ts:6192](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L6192)
