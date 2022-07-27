[bun-types](../README.md) / [Exports](../modules.md) / ["stream"](../modules/stream_.md) / WritableOptions

# Interface: WritableOptions

["stream"](../modules/stream_.md).WritableOptions

## Hierarchy

- [`StreamOptions`](stream_.StreamOptions.md)<[`Writable`](../classes/stream_.Writable.md)\>

  ↳ **`WritableOptions`**

  ↳↳ [`DuplexOptions`](stream_.DuplexOptions.md)

  ↳↳ [`DuplexOptions`](node_stream_.DuplexOptions.md)

## Table of contents

### Properties

- [autoDestroy](stream_.WritableOptions.md#autodestroy)
- [decodeStrings](stream_.WritableOptions.md#decodestrings)
- [defaultEncoding](stream_.WritableOptions.md#defaultencoding)
- [emitClose](stream_.WritableOptions.md#emitclose)
- [highWaterMark](stream_.WritableOptions.md#highwatermark)
- [objectMode](stream_.WritableOptions.md#objectmode)
- [signal](stream_.WritableOptions.md#signal)

### Methods

- [construct](stream_.WritableOptions.md#construct)
- [destroy](stream_.WritableOptions.md#destroy)
- [final](stream_.WritableOptions.md#final)
- [write](stream_.WritableOptions.md#write)
- [writev](stream_.WritableOptions.md#writev)

## Properties

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[autoDestroy](stream_.StreamOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L43)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Defined in

[stream.d.ts:494](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L494)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Defined in

[stream.d.ts:495](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L495)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[emitClose](stream_.StreamOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L34)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[highWaterMark](stream_.StreamOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[objectMode](stream_.StreamOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L36)

___

### signal

• `Optional` **signal**: [`AbortSignal`](../modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[signal](stream_.StreamOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/5e53f27/events.d.ts#L639)

## Methods

### construct

▸ `Optional` **construct**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/stream_.Writable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[construct](stream_.StreamOptions.md#construct)

#### Defined in

[stream.d.ts:37](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L37)

___

### destroy

▸ `Optional` **destroy**(`this`, `error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/stream_.Writable.md)<`any`\> |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[StreamOptions](stream_.StreamOptions.md).[destroy](stream_.StreamOptions.md#destroy)

#### Defined in

[stream.d.ts:38](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L38)

___

### final

▸ `Optional` **final**(`this`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/stream_.Writable.md)<`any`\> |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:510](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L510)

___

### write

▸ `Optional` **write**(`this`, `chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/stream_.Writable.md)<`any`\> |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:496](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L496)

___

### writev

▸ `Optional` **writev**(`this`, `chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Writable`](../classes/stream_.Writable.md)<`any`\> |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[stream.d.ts:502](https://github.com/valgaze/bun-types/blob/5e53f27/stream.d.ts#L502)
