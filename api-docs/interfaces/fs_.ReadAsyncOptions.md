[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md) / ReadAsyncOptions

# Interface: ReadAsyncOptions<TBuffer\>

["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md).ReadAsyncOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `ArrayBufferView` |

## Hierarchy

- [`ReadSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md)

  ↳ **`ReadAsyncOptions`**

## Table of contents

### Properties

- [buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadAsyncOptions.md#buffer)
- [length](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadAsyncOptions.md#length)
- [offset](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadAsyncOptions.md#offset)
- [position](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadAsyncOptions.md#position)

## Properties

### buffer

• `Optional` **buffer**: `TBuffer`

#### Defined in

[fs.d.ts:2221](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L2221)

[dist/types.d.ts:7075](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L7075)

___

### length

• `Optional` **length**: `number`

**`Default`**

`length of buffer`

#### Inherited from

[ReadSyncOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md).[length](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md#length)

#### Defined in

[fs.d.ts:2213](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L2213)

[dist/types.d.ts:7067](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L7067)

___

### offset

• `Optional` **offset**: `number`

**`Default`**

0

#### Inherited from

[ReadSyncOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md).[offset](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md#offset)

#### Defined in

[fs.d.ts:2209](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L2209)

[dist/types.d.ts:7063](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L7063)

___

### position

• `Optional` **position**: [`ReadPosition`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md#readposition)

**`Default`**

null

#### Inherited from

[ReadSyncOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md).[position](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.ReadSyncOptions.md#position)

#### Defined in

[fs.d.ts:2217](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L2217)

[dist/types.d.ts:7071](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L7071)
