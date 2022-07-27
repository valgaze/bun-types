[bun-types](../README.md) / [Exports](../modules.md) / ["stream"](../modules/stream_.md) / StreamOptions

# Interface: StreamOptions<T\>

["stream"](../modules/stream_.md).StreamOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Stream`](../classes/stream_.Stream.md) |

## Hierarchy

- [`Abortable`](events_.EventEmitter.Abortable.md)

  ↳ **`StreamOptions`**

  ↳↳ [`ReadableOptions`](stream_.ReadableOptions.md)

  ↳↳ [`WritableOptions`](stream_.WritableOptions.md)

  ↳↳ [`ReadableOptions`](node_stream_.ReadableOptions.md)

  ↳↳ [`WritableOptions`](node_stream_.WritableOptions.md)

## Table of contents

### Properties

- [autoDestroy](stream_.StreamOptions.md#autodestroy)
- [emitClose](stream_.StreamOptions.md#emitclose)
- [highWaterMark](stream_.StreamOptions.md#highwatermark)
- [objectMode](stream_.StreamOptions.md#objectmode)
- [signal](stream_.StreamOptions.md#signal)

### Methods

- [construct](stream_.StreamOptions.md#construct)
- [destroy](stream_.StreamOptions.md#destroy)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Defined in

[stream.d.ts:43](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L43)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Defined in

[stream.d.ts:34](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L34)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Defined in

[stream.d.ts:35](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Defined in

[stream.d.ts:36](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L36)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](events_.EventEmitter.Abortable.md).[signal](events_.EventEmitter.Abortable.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/5e53f27/events.d.ts#L639)

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

[stream.d.ts:37](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L37)

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

[stream.d.ts:38](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L38)
