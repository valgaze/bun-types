[bun-types](../README.md) / [Exports](../modules.md) / UnderlyingSink

# Interface: UnderlyingSink<W\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [abort](UnderlyingSink.md#abort)
- [close](UnderlyingSink.md#close)
- [start](UnderlyingSink.md#start)
- [type](UnderlyingSink.md#type)
- [write](UnderlyingSink.md#write)

## Properties

### abort

• `Optional` **abort**: [`UnderlyingSinkAbortCallback`](UnderlyingSinkAbortCallback.md)

#### Defined in

[globals.d.ts:1864](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1864)

[dist/types.d.ts:10434](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10434)

___

### close

• `Optional` **close**: [`UnderlyingSinkCloseCallback`](UnderlyingSinkCloseCallback.md)

#### Defined in

[globals.d.ts:1865](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1865)

[dist/types.d.ts:10435](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10435)

___

### start

• `Optional` **start**: [`UnderlyingSinkStartCallback`](UnderlyingSinkStartCallback.md)

#### Defined in

[globals.d.ts:1866](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1866)

[dist/types.d.ts:10436](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10436)

___

### type

• `Optional` **type**: ``"default"`` \| ``"bytes"``

#### Defined in

[globals.d.ts:1867](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1867)

[dist/types.d.ts:10437](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10437)

___

### write

• `Optional` **write**: [`UnderlyingSinkWriteCallback`](UnderlyingSinkWriteCallback.md)<`W`\>

#### Defined in

[globals.d.ts:1868](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1868)

[dist/types.d.ts:10438](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10438)
