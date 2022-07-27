[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / unsafe

# Interface: unsafe

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).unsafe

## Table of contents

### Methods

- [arrayBufferToString](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.unsafe.md#arraybuffertostring)
- [segfault](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.unsafe.md#segfault)

## Methods

### arrayBufferToString

▸ **arrayBufferToString**(`buffer`): `string`

Cast bytes to a `String` without copying. This is the fastest way to get a `String` from a `Uint8Array` or `ArrayBuffer`.

**Only use this for ASCII strings**. If there are non-ascii characters, your application may crash and/or very confusing bugs will happen such as `"foo" !== "foo"`.

**The input buffer must not be garbage collected**. That means you will need to hold on to it for the duration of the string's lifetime.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Uint8Array` \| `ArrayBufferLike` |

#### Returns

`string`

#### Defined in

[bun.d.ts:943](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L943)

▸ **arrayBufferToString**(`buffer`): `string`

Cast bytes to a `String` without copying. This is the fastest way to get a `String` from a `Uint16Array`

**The input must be a UTF-16 encoded string**. This API does no validation whatsoever.

**The input buffer must not be garbage collected**. That means you will need to hold on to it for the duration of the string's lifetime.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Uint16Array` |

#### Returns

`string`

#### Defined in

[bun.d.ts:954](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L954)

___

### segfault

▸ **segfault**(): `void`

Mock bun's segfault handler. You probably don't want to use this

#### Returns

`void`

#### Defined in

[bun.d.ts:957](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L957)
