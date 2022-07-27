[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / UnderlyingSink

# Interface: UnderlyingSink<W\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#abort)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#close)
- [start](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#start)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#type)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSink.md#write)

## Properties

### abort

• `Optional` **abort**: [`UnderlyingSinkAbortCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSinkAbortCallback.md)

#### Defined in

[globals.d.ts:1864](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1864)

[dist/types.d.ts:10434](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10434)

___

### close

• `Optional` **close**: [`UnderlyingSinkCloseCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSinkCloseCallback.md)

#### Defined in

[globals.d.ts:1865](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1865)

[dist/types.d.ts:10435](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10435)

___

### start

• `Optional` **start**: [`UnderlyingSinkStartCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSinkStartCallback.md)

#### Defined in

[globals.d.ts:1866](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1866)

[dist/types.d.ts:10436](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10436)

___

### type

• `Optional` **type**: ``"default"`` \| ``"bytes"``

#### Defined in

[globals.d.ts:1867](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1867)

[dist/types.d.ts:10437](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10437)

___

### write

• `Optional` **write**: [`UnderlyingSinkWriteCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/UnderlyingSinkWriteCallback.md)<`W`\>

#### Defined in

[globals.d.ts:1868](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1868)

[dist/types.d.ts:10438](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10438)
