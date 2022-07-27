[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md) / TransformOptions

# Interface: TransformOptions

["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md).TransformOptions

## Hierarchy

- [`DuplexOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md)

  ↳ **`TransformOptions`**

## Table of contents

### Properties

- [allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#allowhalfopen)
- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#autodestroy)
- [decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#decodestrings)
- [defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#defaultencoding)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#emitclose)
- [encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#encoding)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#objectmode)
- [readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#readablehighwatermark)
- [readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#readableobjectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#signal)
- [writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#writablecorked)
- [writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#writablehighwatermark)
- [writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#writableobjectmode)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#destroy)
- [final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#final)
- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#flush)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#read)
- [transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#transform)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#write)
- [writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.TransformOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#allowhalfopen)

#### Defined in

[stream.d.ts:808](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L808)

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L43)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#decodestrings)

#### Defined in

[stream.d.ts:494](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L494)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#defaultencoding)

#### Defined in

[stream.d.ts:495](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L495)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L34)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#encoding)

#### Defined in

[stream.d.ts:46](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L46)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L36)

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#readablehighwatermark)

#### Defined in

[stream.d.ts:811](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L811)

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#readableobjectmode)

#### Defined in

[stream.d.ts:809](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L809)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L639)

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#writablecorked)

#### Defined in

[stream.d.ts:813](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L813)

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#writablehighwatermark)

#### Defined in

[stream.d.ts:812](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L812)

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Inherited from

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#writableobjectmode)

#### Defined in

[stream.d.ts:810](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L810)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Transform.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#construct)

#### Defined in

[stream.d.ts:936](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L936)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Transform.md) |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#destroy)

#### Defined in

[stream.d.ts:956](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L956)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Transform.md) |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#final)

#### Defined in

[stream.d.ts:955](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L955)

___

### flush

▸ `Optional` **flush**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Transform.md) |
| `callback` | [`TransformCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#transformcallback) |

#### Returns

`void`

#### Defined in

[stream.d.ts:967](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L967)

___

### read

▸ `Optional` **read**(`this`, `size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Transform.md) |
| `size` | `number` |

#### Returns

`void`

#### Overrides

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#read)

#### Defined in

[stream.d.ts:940](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L940)

___

### transform

▸ `Optional` **transform**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Transform.md) |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | [`TransformCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#transformcallback) |

#### Returns

`void`

#### Defined in

[stream.d.ts:961](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L961)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Transform.md) |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#write)

#### Defined in

[stream.d.ts:941](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L941)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Transform`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Transform.md) |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Overrides

[DuplexOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md).[writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.DuplexOptions.md#writev)

#### Defined in

[stream.d.ts:947](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L947)
