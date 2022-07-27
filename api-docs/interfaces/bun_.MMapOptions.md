[bun-types](../README.md) / [Exports](../modules.md) / ["bun"](../modules/bun_.md) / MMapOptions

# Interface: MMapOptions

["bun"](../modules/bun_.md).MMapOptions

## Table of contents

### Properties

- [shared](bun_.MMapOptions.md#shared)
- [sync](bun_.MMapOptions.md#sync)

## Properties

### shared

• `Optional` **shared**: `boolean`

Allow other processes to see results instantly?
This enables MAP_SHARED. If false, it enables MAP_PRIVATE.

**`Default`**

true

#### Defined in

[bun.d.ts:900](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L900)

[dist/types.d.ts:910](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L910)

___

### sync

• `Optional` **sync**: `boolean`

Sets MAP_SYNC flag on Linux. Ignored on macOS due to lack of support.

#### Defined in

[bun.d.ts:894](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L894)

[dist/types.d.ts:904](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L904)
