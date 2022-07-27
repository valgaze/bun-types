[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md) / Writable

# Class: Writable<W\>

["stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md).Writable

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Hierarchy

- [`Stream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md)

  ↳ **`Writable`**

  ↳↳ [`Sign`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Sign.md)

  ↳↳ [`Verify`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Verify.md)

  ↳↳ [`Sign`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_crypto_.Sign.md)

  ↳↳ [`Verify`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_crypto_.Verify.md)

## Implements

- [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)

## Implemented by

- [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md)
- [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Duplex.md)

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#constructor)

### Properties

- [destroyed](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#destroyed)
- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#locked)
- [writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#writable)
- [writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#writablecorked)
- [writableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#writableended)
- [writableFinished](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#writablefinished)
- [writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#writablehighwatermark)
- [writableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#writablelength)
- [writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#writableobjectmode)
- [captureRejectionSymbol](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#capturerejectionsymbol)
- [captureRejections](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#capturerejections)
- [defaultMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#defaultmaxlisteners)
- [errorMonitor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#errormonitor)

### Methods

- [\_construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#_construct)
- [\_destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#_destroy)
- [\_final](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#_final)
- [\_write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#_write)
- [\_writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#_writev)
- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#abort)
- [addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#addlistener)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#close)
- [cork](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#cork)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#destroy)
- [emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#emit)
- [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#end)
- [eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#eventnames)
- [getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#getmaxlisteners)
- [getWriter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#getwriter)
- [listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#listenercount)
- [listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#listeners)
- [off](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#off)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#on)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#once)
- [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#pipe)
- [prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#prependlistener)
- [prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#prependoncelistener)
- [rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#rawlisteners)
- [removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#removealllisteners)
- [removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#removelistener)
- [setDefaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#setdefaultencoding)
- [setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#setmaxlisteners)
- [uncork](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#uncork)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#write)
- [getEventListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#geteventlisteners)
- [listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#listenercount-1)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#on-1)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#once-1)
- [setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Writable**<`W`\>(`opts?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md) |

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#constructor)

#### Defined in

[stream.d.ts:554](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L554)

## Properties

### destroyed

• **destroyed**: `boolean`

Is `true` after `writable.destroy()` has been called.

#### Defined in

[stream.d.ts:553](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L553)

___

### locked

• `Readonly` **locked**: `boolean`

#### Implementation of

WritableStream.locked

#### Defined in

[stream.d.ts:513](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L513)

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

#### Defined in

[stream.d.ts:521](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L521)

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Defined in

[stream.d.ts:549](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L549)

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Defined in

[stream.d.ts:526](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L526)

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

#### Defined in

[stream.d.ts:530](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L530)

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Defined in

[stream.d.ts:534](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L534)

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Defined in

[stream.d.ts:540](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L540)

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

#### Defined in

[stream.d.ts:544](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L544)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md#capturerejectionsymbol)

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[captureRejectionSymbol](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#capturerejectionsymbol)

#### Defined in

[events.d.ts:624](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L624)

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[captureRejections](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#capturerejections)

#### Defined in

[events.d.ts:628](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L628)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[defaultMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#defaultmaxlisteners)

#### Defined in

[events.d.ts:629](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L629)

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Hash.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[errorMonitor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#errormonitor)

#### Defined in

[events.d.ts:623](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L623)

## Methods

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:567](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L567)

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:568](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L568)

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:572](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L572)

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:555](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L555)

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:560](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L560)

___

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Implementation of

WritableStream.abort

#### Defined in

[stream.d.ts:514](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L514)

___

### addListener

▸ **addListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#addlistener)

#### Defined in

[stream.d.ts:739](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L739)

▸ **addListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:740](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L740)

▸ **addListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:741](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L741)

▸ **addListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:742](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L742)

▸ **addListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:743](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L743)

▸ **addListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:744](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L744)

▸ **addListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:745](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L745)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

WritableStream.close

#### Defined in

[stream.d.ts:515](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L515)

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#uncork) or [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

#### Defined in

[stream.d.ts:679](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L679)

___

### destroy

▸ **destroy**(`error?`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to`write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Optional, an error to emit with `'error'` event. |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Defined in

[stream.d.ts:728](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L728)

___

### emit

▸ **emit**(`event`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#emit)

#### Defined in

[stream.d.ts:749](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L749)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:750](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L750)

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:751](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L751)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:752](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L752)

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\> |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:753](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L753)

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\> |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:754](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L754)

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:755](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L755)

___

### end

▸ **end**(`cb?`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#write) method after calling [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Defined in

[stream.d.ts:663](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L663)

▸ **end**(`chunk`, `cb?`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Defined in

[stream.d.ts:664](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L664)

▸ **end**(`chunk`, `encoding`, `cb?`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Defined in

[stream.d.ts:665](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L665)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#eventnames)

#### Defined in

[events.d.ts:376](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L376)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#defaultmaxlisteners).

#### Returns

`number`

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#getmaxlisteners)

#### Defined in

[events.d.ts:234](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L234)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`W`\>

#### Implementation of

WritableStream.getWriter

#### Defined in

[stream.d.ts:516](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L516)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#listenercount)

#### Defined in

[events.d.ts:320](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L320)

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#listeners)

#### Defined in

[events.d.ts:246](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L246)

___

### off

▸ **off**(`eventName`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[off](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#off)

#### Defined in

[events.d.ts:210](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L210)

___

### on

▸ **on**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#on)

#### Defined in

[stream.d.ts:756](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L756)

▸ **on**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:757](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L757)

▸ **on**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:758](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L758)

▸ **on**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:759](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L759)

▸ **on**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:760](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L760)

▸ **on**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:761](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L761)

▸ **on**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:762](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L762)

___

### once

▸ **once**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#once)

#### Defined in

[stream.d.ts:763](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L763)

▸ **once**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:764](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L764)

▸ **once**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:765](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L765)

▸ **once**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:766](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L766)

▸ **once**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:767](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L767)

▸ **once**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:768](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L768)

▸ **once**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:769](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L769)

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#pipe)

#### Defined in

[stream.d.ts:22](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L22)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#prependlistener)

#### Defined in

[stream.d.ts:770](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L770)

▸ **prependListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:771](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L771)

▸ **prependListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:772](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L772)

▸ **prependListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:773](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L773)

▸ **prependListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:774](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L774)

▸ **prependListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:775](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L775)

▸ **prependListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:776](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L776)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#prependoncelistener)

#### Defined in

[stream.d.ts:780](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L780)

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:781](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L781)

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:782](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L782)

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:783](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L783)

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:784](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L784)

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:788](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L788)

▸ **prependOnceListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:792](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L792)

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#rawlisteners)

#### Defined in

[events.d.ts:275](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L275)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#removealllisteners)

#### Defined in

[events.d.ts:220](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L220)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#removelistener)

#### Defined in

[stream.d.ts:796](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L796)

▸ **removeListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:797](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L797)

▸ **removeListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:798](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L798)

▸ **removeListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:799](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L799)

▸ **removeListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:800](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L800)

▸ **removeListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:801](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L801)

▸ **removeListener**(`event`, `listener`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:802](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L802)

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The new default encoding |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Defined in

[stream.d.ts:641](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L641)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`W`\>

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#setmaxlisteners)

#### Defined in

[events.d.ts:229](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L229)

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using`process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

#### Defined in

[stream.d.ts:712](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L712)

___

### write

▸ **write**(`chunk`, `callback?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `callback?` | (`error`: `Error`) => `void` | Callback for when this chunk of data is flushed. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Defined in

[stream.d.ts:628](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L628)

▸ **write**(`chunk`, `encoding`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

#### Defined in

[stream.d.ts:632](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L632)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) \| `DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[getEventListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#geteventlisteners)

#### Defined in

[events.d.ts:590](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L590)

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#listenercount-1)

#### Defined in

[events.d.ts:560](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L560)

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | [`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#on-1)

#### Defined in

[events.d.ts:540](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L540)

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#once-1)

#### Defined in

[events.d.ts:473](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L473)

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#once-1)

#### Defined in

[events.d.ts:478](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L478)

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | ([`EventEmitter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/events_.EventEmitter-1.md) \| `DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#setmaxlisteners-1)

#### Defined in

[events.d.ts:610](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L610)
