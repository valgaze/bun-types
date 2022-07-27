[bun-types](../README.md) / [Exports](../modules.md) / ["bun"](../modules/bun_.md) / ArrayBufferSink

# Class: ArrayBufferSink

["bun"](../modules/bun_.md).ArrayBufferSink

Fast incremental writer that becomes an `ArrayBuffer` on end().

## Table of contents

### Constructors

- [constructor](bun_.ArrayBufferSink.md#constructor)

### Methods

- [end](bun_.ArrayBufferSink.md#end)
- [flush](bun_.ArrayBufferSink.md#flush)
- [start](bun_.ArrayBufferSink.md#start)
- [write](bun_.ArrayBufferSink.md#write)

## Constructors

### constructor

• **new ArrayBufferSink**()

#### Defined in

[bun.d.ts:327](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L327)

## Methods

### end

▸ **end**(): `Uint8Array` \| `ArrayBuffer`

#### Returns

`Uint8Array` \| `ArrayBuffer`

#### Defined in

[bun.d.ts:354](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L354)

___

### flush

▸ **flush**(): `number` \| `Uint8Array` \| `ArrayBuffer`

Flush the internal buffer

If [start](bun_.ArrayBufferSink.md#start) was passed a `stream` option, this will return a `ArrayBuffer`
If [start](bun_.ArrayBufferSink.md#start) was passed a `stream` option and `asUint8Array`, this will return a `Uint8Array`
Otherwise, this will return the number of bytes written since the last flush

This API might change later to separate Uint8ArraySink and ArrayBufferSink

#### Returns

`number` \| `Uint8Array` \| `ArrayBuffer`

#### Defined in

[bun.d.ts:353](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L353)

___

### start

▸ **start**(`options?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.asUint8Array?` | `boolean` | - |
| `options.highWaterMark?` | `number` | Preallocate an internal buffer of this size This can significantly improve performance when the chunk size is small |
| `options.stream?` | `boolean` | On [flush](bun_.ArrayBufferSink.md#flush), return the written data as a `Uint8Array`. Writes will restart from the beginning of the buffer. |

#### Returns

`void`

#### Defined in

[bun.d.ts:329](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L329)

___

### write

▸ **write**(`chunk`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `string` \| `ArrayBuffer` \| `ArrayBufferView` |

#### Returns

`number`

#### Defined in

[bun.d.ts:343](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L343)
