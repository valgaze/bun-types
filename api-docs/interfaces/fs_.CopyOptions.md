[bun-types](../README.md) / [Exports](../modules.md) / ["fs"](../modules/fs_.md) / CopyOptions

# Interface: CopyOptions

["fs"](../modules/fs_.md).CopyOptions

## Table of contents

### Properties

- [dereference](fs_.CopyOptions.md#dereference)
- [errorOnExist](fs_.CopyOptions.md#erroronexist)
- [force](fs_.CopyOptions.md#force)
- [preserveTimestamps](fs_.CopyOptions.md#preservetimestamps)
- [recursive](fs_.CopyOptions.md#recursive)

### Methods

- [filter](fs_.CopyOptions.md#filter)

## Properties

### dereference

• `Optional` **dereference**: `boolean`

Dereference symlinks

**`Default`**

false

#### Defined in

[fs.d.ts:3561](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3561)

[dist/types.d.ts:8415](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8415)

___

### errorOnExist

• `Optional` **errorOnExist**: `boolean`

When `force` is `false`, and the destination
exists, throw an error.

**`Default`**

false

#### Defined in

[fs.d.ts:3567](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3567)

[dist/types.d.ts:8421](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8421)

___

### force

• `Optional` **force**: `boolean`

Overwrite existing file or directory. _The copy
operation will ignore errors if you set this to false and the destination
exists. Use the `errorOnExist` option to change this behavior.

**`Default`**

true

#### Defined in

[fs.d.ts:3579](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3579)

[dist/types.d.ts:8433](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8433)

___

### preserveTimestamps

• `Optional` **preserveTimestamps**: `boolean`

When `true` timestamps from `src` will
be preserved.

**`Default`**

false

#### Defined in

[fs.d.ts:3585](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3585)

[dist/types.d.ts:8439](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8439)

___

### recursive

• `Optional` **recursive**: `boolean`

Copy directories recursively.

**`Default`**

false

#### Defined in

[fs.d.ts:3590](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3590)

[dist/types.d.ts:8444](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8444)

## Methods

### filter

▸ `Optional` **filter**(`source`, `destination`): `boolean`

function to filter copied files/directories. Return
`true` to copy the item, `false` to ignore it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`boolean`

#### Defined in

[fs.d.ts:3572](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3572)

▸ `Optional` **filter**(`source`, `destination`): `boolean`

function to filter copied files/directories. Return
`true` to copy the item, `false` to ignore it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |
| `destination` | `string` |

#### Returns

`boolean`

#### Defined in

[dist/types.d.ts:8426](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8426)
