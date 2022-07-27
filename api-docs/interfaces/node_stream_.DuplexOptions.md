[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md) / DuplexOptions

# Interface: DuplexOptions

["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md).DuplexOptions

## Hierarchy

- [`ReadableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md)

- [`WritableOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md)

  ↳ **`DuplexOptions`**

## Table of contents

### Properties

- [allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#allowhalfopen)
- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#autodestroy)
- [decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#decodestrings)
- [defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#defaultencoding)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#emitclose)
- [encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#encoding)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#objectmode)
- [readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#readablehighwatermark)
- [readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#readableobjectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#signal)
- [writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#writablecorked)
- [writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#writablehighwatermark)
- [writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#writableobjectmode)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#destroy)
- [final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#final)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#read)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#write)
- [writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.DuplexOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Defined in

[stream.d.ts:808](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L808)

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L43)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#decodestrings)

#### Defined in

[stream.d.ts:494](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L494)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#defaultencoding)

#### Defined in

[stream.d.ts:495](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L495)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L34)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Inherited from

[ReadableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md).[encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md#encoding)

#### Defined in

[stream.d.ts:46](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L46)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L36)

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Defined in

[stream.d.ts:811](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L811)

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Defined in

[stream.d.ts:809](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L809)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L639)

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Defined in

[stream.d.ts:813](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L813)

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Defined in

[stream.d.ts:812](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L812)

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Defined in

[stream.d.ts:810](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L810)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#construct)

#### Defined in

[stream.d.ts:814](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L814)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#destroy)

#### Defined in

[stream.d.ts:831](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L831)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#final)

#### Defined in

[stream.d.ts:830](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L830)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[ReadableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md).[read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.ReadableOptions.md#read)

#### Defined in

[stream.d.ts:815](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L815)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#write)

#### Defined in

[stream.d.ts:816](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L816)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Duplex`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Duplex.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[WritableOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md).[writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.WritableOptions.md#writev)

#### Defined in

[stream.d.ts:822](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L822)
