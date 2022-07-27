[bun-types](../README.md) / [Exports](../modules.md) / ["node:stream"](../modules/node_stream_.md) / FinishedOptions

# Interface: FinishedOptions

["node:stream"](../modules/node_stream_.md).FinishedOptions

## Hierarchy

- [`Abortable`](events_.EventEmitter.Abortable.md)

  ↳ **`FinishedOptions`**

## Table of contents

### Properties

- [error](node_stream_.FinishedOptions.md#error)
- [readable](node_stream_.FinishedOptions.md#readable)
- [signal](node_stream_.FinishedOptions.md#signal)
- [writable](node_stream_.FinishedOptions.md#writable)

## Properties

### error

• `Optional` **error**: `boolean`

#### Defined in

[stream.d.ts:1043](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L1043)

___

### readable

• `Optional` **readable**: `boolean`

#### Defined in

[stream.d.ts:1044](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L1044)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](events_.EventEmitter.Abortable.md).[signal](events_.EventEmitter.Abortable.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/5e53f27/events.d.ts#L639)

___

### writable

• `Optional` **writable**: `boolean`

#### Defined in

[stream.d.ts:1045](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L1045)
