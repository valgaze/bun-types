[bun-types](../README.md) / [Exports](../modules.md) / AbortController

# Interface: AbortController

A controller object that allows you to abort one or more DOM requests as and when desired.

## Table of contents

### Properties

- [signal](AbortController.md#signal)

### Methods

- [abort](AbortController.md#abort)

## Properties

### signal

• `Readonly` **signal**: [`AbortSignal`](../modules.md#abortsignal)

Returns the AbortSignal object associated with this object.

#### Defined in

[globals.d.ts:1117](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1117)

[dist/types.d.ts:9687](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9687)

## Methods

### abort

▸ **abort**(): `void`

Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.

#### Returns

`void`

#### Defined in

[globals.d.ts:1121](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1121)

▸ **abort**(): `void`

Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.

#### Returns

`void`

#### Defined in

[dist/types.d.ts:9691](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9691)
