[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md) / FinishedOptions

# Interface: FinishedOptions

["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md).FinishedOptions

## Hierarchy

- [`Abortable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md)

  ↳ **`FinishedOptions`**

## Table of contents

### Properties

- [error](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.FinishedOptions.md#error)
- [readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.FinishedOptions.md#readable)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.FinishedOptions.md#signal)
- [writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.FinishedOptions.md#writable)

## Properties

### error

• `Optional` **error**: `boolean`

#### Defined in

[stream.d.ts:1043](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L1043)

___

### readable

• `Optional` **readable**: `boolean`

#### Defined in

[stream.d.ts:1044](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L1044)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[Abortable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/events_.EventEmitter.Abortable.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L639)

___

### writable

• `Optional` **writable**: `boolean`

#### Defined in

[stream.d.ts:1045](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L1045)
