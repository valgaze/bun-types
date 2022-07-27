[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md) / Readable

# Class: Readable<R\>

["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md).Readable

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`Stream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md)

  ↳ **`Readable`**

## Implements

- [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#constructor)

### Properties

- [destroyed](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#destroyed)
- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#locked)
- [readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#readable)
- [readableAborted](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#readableaborted)
- [readableEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#readableencoding)
- [readableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#readableended)
- [readableFlowing](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#readableflowing)
- [readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#readablehighwatermark)
- [readableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#readablelength)
- [readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#readableobjectmode)
- [captureRejectionSymbol](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#capturerejectionsymbol)
- [captureRejections](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#capturerejections)
- [defaultMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#defaultmaxlisteners)
- [errorMonitor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#errormonitor)

### Methods

- [[asyncIterator]](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#[asynciterator])
- [\_construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#_construct)
- [\_destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#_destroy)
- [\_read](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#_read)
- [addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#addlistener)
- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#cancel)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#destroy)
- [emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#emit)
- [eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#eventnames)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#foreach)
- [getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#getmaxlisteners)
- [getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#getreader)
- [isPaused](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#ispaused)
- [listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#listenercount)
- [listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#listeners)
- [off](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#off)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#on)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#once)
- [pause](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#pause)
- [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#pipe)
- [pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#pipethrough)
- [pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#pipeto)
- [prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#prependlistener)
- [prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#prependoncelistener)
- [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#push)
- [rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#rawlisteners)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#read)
- [removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#removealllisteners)
- [removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#removelistener)
- [resume](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#resume)
- [setEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#setencoding)
- [setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#setmaxlisteners)
- [tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#tee)
- [unpipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#unpipe)
- [unshift](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#unshift)
- [wrap](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#wrap)
- [from](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#from)
- [getEventListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#geteventlisteners)
- [isDisturbed](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#isdisturbed)
- [listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#listenercount-1)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#on-1)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#once-1)
- [setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Readable**<`R`\>(`opts?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ReadableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md) |

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#constructor)

#### Defined in

[stream.d.ts:122](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L122)

## Properties

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

#### Defined in

[stream.d.ts:121](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L121)

___

### locked

• `Readonly` **locked**: `boolean`

#### Implementation of

ReadableStream.locked

#### Defined in

[stream.d.ts:50](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L50)

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Defined in

[stream.d.ts:90](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L90)

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Defined in

[stream.d.ts:85](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L85)

___

### readableEncoding

• `Readonly` **readableEncoding**: `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

#### Defined in

[stream.d.ts:94](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L94)

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

#### Defined in

[stream.d.ts:98](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L98)

___

### readableFlowing

• `Readonly` **readableFlowing**: `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

#### Defined in

[stream.d.ts:103](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L103)

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Defined in

[stream.d.ts:107](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L107)

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Defined in

[stream.d.ts:113](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L113)

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

#### Defined in

[stream.d.ts:117](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L117)

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

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Defined in

[stream.d.ts:491](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L491)

___

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:123](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L123)

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

[stream.d.ts:397](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L397)

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Defined in

[stream.d.ts:124](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L124)

___

### addListener

▸ **addListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#addlistener)

#### Defined in

[stream.d.ts:423](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L423)

▸ **addListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:424](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L424)

▸ **addListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:425](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L425)

▸ **addListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:426](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L426)

▸ **addListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:427](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L427)

▸ **addListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:428](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L428)

▸ **addListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:429](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L429)

▸ **addListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.addListener

#### Defined in

[stream.d.ts:430](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L430)

___

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Implementation of

ReadableStream.cancel

#### Defined in

[stream.d.ts:51](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L51)

___

### destroy

▸ **destroy**(`error?`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Error which will be passed as payload in `'error'` event |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Defined in

[stream.d.ts:411](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L411)

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

[stream.d.ts:434](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L434)

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:435](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L435)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:436](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L436)

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

[stream.d.ts:437](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L437)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:438](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L438)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:439](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L439)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Overrides

Stream.emit

#### Defined in

[stream.d.ts:440](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L440)

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

[stream.d.ts:441](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L441)

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

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Implementation of

ReadableStream.forEach

#### Defined in

[stream.d.ts:62](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L62)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#defaultmaxlisteners).

#### Returns

`number`

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#getmaxlisteners)

#### Defined in

[events.d.ts:234](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L234)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

#### Implementation of

ReadableStream.getReader

#### Defined in

[stream.d.ts:52](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L52)

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

#### Defined in

[stream.d.ts:279](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L279)

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

▸ **off**(`eventName`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[off](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#off)

#### Defined in

[events.d.ts:210](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L210)

___

### on

▸ **on**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

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

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#on)

#### Defined in

[stream.d.ts:442](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L442)

▸ **on**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:443](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L443)

▸ **on**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:444](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L444)

▸ **on**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:445](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L445)

▸ **on**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:446](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L446)

▸ **on**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:447](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L447)

▸ **on**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:448](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L448)

▸ **on**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.on

#### Defined in

[stream.d.ts:449](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L449)

___

### once

▸ **once**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

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

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#once)

#### Defined in

[stream.d.ts:450](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L450)

▸ **once**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:451](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L451)

▸ **once**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:452](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L452)

▸ **once**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:453](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L453)

▸ **once**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:454](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L454)

▸ **once**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:455](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L455)

▸ **once**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:456](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L456)

▸ **once**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.once

#### Defined in

[stream.d.ts:457](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L457)

___

### pause

▸ **pause**(): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Defined in

[stream.d.ts:245](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L245)

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

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Implementation of

ReadableStream.pipeThrough

#### Defined in

[stream.d.ts:53](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L53)

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

ReadableStream.pipeTo

#### Defined in

[stream.d.ts:57](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L57)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

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

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#prependlistener)

#### Defined in

[stream.d.ts:458](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L458)

▸ **prependListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:459](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L459)

▸ **prependListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:460](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L460)

▸ **prependListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:461](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L461)

▸ **prependListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:462](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L462)

▸ **prependListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:463](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L463)

▸ **prependListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:464](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L464)

▸ **prependListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependListener

#### Defined in

[stream.d.ts:465](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L465)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

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

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#prependoncelistener)

#### Defined in

[stream.d.ts:469](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L469)

▸ **prependOnceListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:470](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L470)

▸ **prependOnceListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:471](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L471)

▸ **prependOnceListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:472](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L472)

▸ **prependOnceListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:473](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L473)

▸ **prependOnceListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:474](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L474)

▸ **prependOnceListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:475](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L475)

▸ **prependOnceListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.prependOnceListener

#### Defined in

[stream.d.ts:476](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L476)

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`boolean`

#### Defined in

[stream.d.ts:396](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L396)

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

### read

▸ **read**(`size?`): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Defined in

[stream.d.ts:200](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L200)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

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

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#removealllisteners)

#### Defined in

[events.d.ts:220](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L220)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

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

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#removelistener)

#### Defined in

[stream.d.ts:480](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L480)

▸ **removeListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:481](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L481)

▸ **removeListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:482](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L482)

▸ **removeListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:483](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L483)

▸ **removeListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:484](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L484)

▸ **removeListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:485](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L485)

▸ **removeListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:486](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L486)

▸ **removeListener**(`event`, `listener`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Overrides

Stream.removeListener

#### Defined in

[stream.d.ts:487](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L487)

___

### resume

▸ **resume**(): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Defined in

[stream.d.ts:263](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L263)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The encoding to use. |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Defined in

[stream.d.ts:224](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L224)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

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

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Inherited from

[Stream](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md).[setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Stream.md#setmaxlisteners)

#### Defined in

[events.d.ts:229](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L229)

___

### tee

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

#### Implementation of

ReadableStream.tee

#### Defined in

[stream.d.ts:61](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L61)

___

### unpipe

▸ **unpipe**(`destination?`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> | Optional specific stream to unpipe |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Defined in

[stream.d.ts:305](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L305)

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | `BufferEncoding` | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

#### Defined in

[stream.d.ts:370](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L370)

___

### wrap

▸ **wrap**(`stream`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_stream_.Readable.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | An "old style" readable stream |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`R`\>

#### Defined in

[stream.d.ts:395](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L395)

___

### from

▸ `Static` **from**(`iterable`, `options?`): [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>

A utility method for creating Readable Streams out of iterators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`any`\> \| `AsyncIterable`<`any`\> |
| `options?` | [`ReadableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md) |

#### Returns

[`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>

#### Defined in

[stream.d.ts:73](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L73)

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

### isDisturbed

▸ `Static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> \| [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\> |

#### Returns

`boolean`

#### Defined in

[stream.d.ts:80](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L80)

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
