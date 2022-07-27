[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / HashOptions

# Interface: HashOptions

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).HashOptions

## Hierarchy

- [`TransformOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md)

  ↳ **`HashOptions`**

## Table of contents

### Properties

- [allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#allowhalfopen)
- [autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#autodestroy)
- [decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#decodestrings)
- [defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#defaultencoding)
- [emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#emitclose)
- [encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#encoding)
- [highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#highwatermark)
- [objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#objectmode)
- [outputLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#outputlength)
- [readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#readablehighwatermark)
- [readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#readableobjectmode)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#signal)
- [writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#writablecorked)
- [writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#writablehighwatermark)
- [writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#writableobjectmode)

### Methods

- [construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#construct)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#destroy)
- [final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#final)
- [flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#flush)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#read)
- [transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#transform)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#write)
- [writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.HashOptions.md#writev)

## Properties

### allowHalfOpen

• `Optional` **allowHalfOpen**: `boolean`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#allowhalfopen)

#### Defined in

[stream.d.ts:808](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L808)

___

### autoDestroy

• `Optional` **autoDestroy**: `boolean`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[autoDestroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#autodestroy)

#### Defined in

[stream.d.ts:43](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L43)

___

### decodeStrings

• `Optional` **decodeStrings**: `boolean`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[decodeStrings](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#decodestrings)

#### Defined in

[stream.d.ts:494](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L494)

___

### defaultEncoding

• `Optional` **defaultEncoding**: `BufferEncoding`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[defaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#defaultencoding)

#### Defined in

[stream.d.ts:495](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L495)

___

### emitClose

• `Optional` **emitClose**: `boolean`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[emitClose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#emitclose)

#### Defined in

[stream.d.ts:34](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L34)

___

### encoding

• `Optional` **encoding**: `BufferEncoding`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[encoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#encoding)

#### Defined in

[stream.d.ts:46](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L46)

___

### highWaterMark

• `Optional` **highWaterMark**: `number`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[highWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#highwatermark)

#### Defined in

[stream.d.ts:35](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L35)

___

### objectMode

• `Optional` **objectMode**: `boolean`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[objectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#objectmode)

#### Defined in

[stream.d.ts:36](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L36)

___

### outputLength

• `Optional` **outputLength**: `number`

For XOF hash functions such as `shake256`, the
outputLength option can be used to specify the desired output length in bytes.

#### Defined in

[crypto.d.ts:185](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L185)

[dist/types.d.ts:16204](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L16204)

___

### readableHighWaterMark

• `Optional` **readableHighWaterMark**: `number`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#readablehighwatermark)

#### Defined in

[stream.d.ts:811](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L811)

___

### readableObjectMode

• `Optional` **readableObjectMode**: `boolean`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#readableobjectmode)

#### Defined in

[stream.d.ts:809](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L809)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

When provided the corresponding `AbortController` can be used to cancel an asynchronous action.

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#signal)

#### Defined in

[events.d.ts:639](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L639)

___

### writableCorked

• `Optional` **writableCorked**: `number`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#writablecorked)

#### Defined in

[stream.d.ts:813](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L813)

___

### writableHighWaterMark

• `Optional` **writableHighWaterMark**: `number`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#writablehighwatermark)

#### Defined in

[stream.d.ts:812](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L812)

___

### writableObjectMode

• `Optional` **writableObjectMode**: `boolean`

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#writableobjectmode)

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

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#construct)

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

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#destroy)

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

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#final)

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

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#flush)

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

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#read)

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

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#transform)

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

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#write)

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

#### Inherited from

[TransformOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md).[writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/stream_.TransformOptions.md#writev)

#### Defined in

[stream.d.ts:947](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L947)
