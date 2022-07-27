[bun-types](../README.md) / [Exports](../modules.md) / ["events"](../modules/events_.md) / [EventEmitter](../modules/events_.EventEmitter.md) / Abortable

# Interface: Abortable

["events"](../modules/events_.md).[EventEmitter](../modules/events_.EventEmitter.md).Abortable

## Hierarchy

- **`Abortable`**

  ↳ [`StreamOptions`](stream_.StreamOptions.md)

  ↳ [`FinishedOptions`](stream_.FinishedOptions.md)

  ↳ [`StreamOptions`](node_stream_.StreamOptions.md)

  ↳ [`FinishedOptions`](node_stream_.FinishedOptions.md)

## Table of contents

### Properties

- [signal](events_.EventEmitter.Abortable.md#signal)

## Properties

### signal

• `Optional` **signal**: [`AbortSignal`](../modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/5e53f27/events.d.ts#L639)
