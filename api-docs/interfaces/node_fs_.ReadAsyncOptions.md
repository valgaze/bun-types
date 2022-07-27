[bun-types](../README.md) / [Exports](../modules.md) / ["node:fs"](../modules/node_fs_.md) / ReadAsyncOptions

# Interface: ReadAsyncOptions<TBuffer\>

["node:fs"](../modules/node_fs_.md).ReadAsyncOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

## Hierarchy

- [`ReadSyncOptions`](fs_.ReadSyncOptions.md)

  ↳ **`ReadAsyncOptions`**

## Table of contents

### Properties

- [buffer](node_fs_.ReadAsyncOptions.md#buffer)
- [length](node_fs_.ReadAsyncOptions.md#length)
- [offset](node_fs_.ReadAsyncOptions.md#offset)
- [position](node_fs_.ReadAsyncOptions.md#position)

## Properties

### buffer

• `Optional` **buffer**: `TBuffer`

#### Defined in

[fs.d.ts:2221](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2221)

[dist/types.d.ts:7075](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7075)

___

### length

• `Optional` **length**: `number`

**`Default`**

`length of buffer`

#### Inherited from

[ReadSyncOptions](fs_.ReadSyncOptions.md).[length](fs_.ReadSyncOptions.md#length)

#### Defined in

[fs.d.ts:2213](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2213)

[dist/types.d.ts:7067](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7067)

___

### offset

• `Optional` **offset**: `number`

**`Default`**

0

#### Inherited from

[ReadSyncOptions](fs_.ReadSyncOptions.md).[offset](fs_.ReadSyncOptions.md#offset)

#### Defined in

[fs.d.ts:2209](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2209)

[dist/types.d.ts:7063](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7063)

___

### position

• `Optional` **position**: [`ReadPosition`](../modules/fs_.md#readposition)

**`Default`**

null

#### Inherited from

[ReadSyncOptions](fs_.ReadSyncOptions.md).[position](fs_.ReadSyncOptions.md#position)

#### Defined in

[fs.d.ts:2217](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2217)

[dist/types.d.ts:7071](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7071)
