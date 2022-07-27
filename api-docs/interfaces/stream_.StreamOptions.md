[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md) / StreamOptions

# Interface: StreamOptions<T\>

["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md).StreamOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md) |

## Hierarchy

- [`Abortable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md)

  ↳ **`StreamOptions`**

  ↳↳ [`ReadableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md)

  ↳↳ [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md)

  ↳↳ [`ReadableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.ReadableOptions.md)

  ↳↳ [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md)

## Table of contents

### Properties

- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#autodestroy)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#emitclose)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#objectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#signal)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#destroy)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Defined in

[stream.d.ts:43](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L43)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Defined in

[stream.d.ts:34](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L34)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Defined in

[stream.d.ts:35](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Defined in

[stream.d.ts:36](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L36)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L639)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:37](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L37)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:38](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L38)
