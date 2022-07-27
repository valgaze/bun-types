[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md) / WritableOptions

# Interface: WritableOptions

["node:stream"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_stream_.md).WritableOptions

## Hierarchy

- [`StreamOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md)<[`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)\>

  ↳ **`WritableOptions`**

## Table of contents

### Properties

- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#autodestroy)
- [decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#decodestrings)
- [defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#defaultencoding)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#emitclose)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#objectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#signal)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#destroy)
- [final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#final)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#write)
- [writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_stream_.WritableOptions.md#writev)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L43)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Defined in

[stream.d.ts:494](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L494)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Defined in

[stream.d.ts:495](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L495)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L34)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L36)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L639)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#construct)

#### Defined in

[stream.d.ts:37](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L37)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.StreamOptions.md#destroy)

#### Defined in

[stream.d.ts:38](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L38)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:510](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L510)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:496](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L496)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Writable.md)<`any`\> |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:502](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L502)
