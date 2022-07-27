[bun-types](../README.md) / [Exports](../modules.md) / ["node:stream"](../modules/node_stream_.md) / ReadableOptions

# Interface: ReadableOptions

["node:stream"](../modules/node_stream_.md).ReadableOptions

## Hierarchy

- [`StreamOptions`](stream_.StreamOptions.md)<[`Readable`](../classes/stream_.Readable.md)\>

  ↳ **`ReadableOptions`**

## Table of contents

### Properties

- [autoDestroy](node_stream_.ReadableOptions.md#autodestroy)
- [emitClose](node_stream_.ReadableOptions.md#emitclose)
- [encoding](node_stream_.ReadableOptions.md#encoding)
- [highWaterMark](node_stream_.ReadableOptions.md#highwatermark)
- [objectMode](node_stream_.ReadableOptions.md#objectmode)
- [signal](node_stream_.ReadableOptions.md#signal)

### Methods

- [construct](node_stream_.ReadableOptions.md#construct)
- [destroy](node_stream_.ReadableOptions.md#destroy)
- [read](node_stream_.ReadableOptions.md#read)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[autoDestroy](stream_.StreamOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L43)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[emitClose](stream_.StreamOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L34)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Defined in

[stream.d.ts:46](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L46)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[highWaterMark](stream_.StreamOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[objectMode](stream_.StreamOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L36)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[signal](stream_.StreamOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/5e53f27/events.d.ts#L639)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/stream_.Readable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[construct](stream_.StreamOptions.md#construct)

#### Defined in

[stream.d.ts:37](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L37)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/stream_.Readable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[destroy](stream_.StreamOptions.md#destroy)

#### Defined in

[stream.d.ts:38](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L38)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Readable`](../classes/stream_.Readable.md)<`any`\> |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[stream.d.ts:47](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L47)
