[bun-types](../README.md) / [Exports](../modules.md) / ReadWriteStream

# Interface: ReadWriteStream

## Hierarchy

- [`ReadableStream`](../modules.md#readablestream)

- [`WritableStream`](../modules.md#writablestream)

  ↳ **`ReadWriteStream`**

## Table of contents

### Properties

- [locked](ReadWriteStream.md#locked)

### Methods

- [abort](ReadWriteStream.md#abort)
- [cancel](ReadWriteStream.md#cancel)
- [close](ReadWriteStream.md#close)
- [forEach](ReadWriteStream.md#foreach)
- [getReader](ReadWriteStream.md#getreader)
- [getWriter](ReadWriteStream.md#getwriter)
- [pipeThrough](ReadWriteStream.md#pipethrough)
- [pipeTo](ReadWriteStream.md#pipeto)
- [tee](ReadWriteStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Inherited from

ReadableStream.locked

#### Defined in

[globals.d.ts:1674](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1674)

[dist/types.d.ts:10244](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10244)

## Methods

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.abort

#### Defined in

[globals.d.ts:1784](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1784)

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.abort

#### Defined in

[dist/types.d.ts:10354](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10354)

___

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.cancel

#### Defined in

[globals.d.ts:1675](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1675)

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.cancel

#### Defined in

[dist/types.d.ts:10245](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10245)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.close

#### Defined in

[globals.d.ts:1785](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1785)

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.close

#### Defined in

[dist/types.d.ts:10355](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10355)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](../modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

#### Defined in

[globals.d.ts:1686](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1686)

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](../modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

#### Defined in

[dist/types.d.ts:10256](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10256)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

#### Defined in

[globals.d.ts:1676](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1676)

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

#### Defined in

[dist/types.d.ts:10246](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10246)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

#### Defined in

[globals.d.ts:1786](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1786)

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

#### Defined in

[dist/types.d.ts:10356](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10356)

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

#### Defined in

[globals.d.ts:1677](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1677)

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](../modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

#### Defined in

[dist/types.d.ts:10247](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10247)

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

#### Defined in

[globals.d.ts:1681](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1681)

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

#### Defined in

[dist/types.d.ts:10251](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10251)

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules.md#readablestream)<`any`\>, [`ReadableStream`](../modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](../modules.md#readablestream)<`any`\>, [`ReadableStream`](../modules.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee

#### Defined in

[globals.d.ts:1685](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1685)

▸ **tee**(): [[`ReadableStream`](../modules.md#readablestream)<`any`\>, [`ReadableStream`](../modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](../modules.md#readablestream)<`any`\>, [`ReadableStream`](../modules.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee

#### Defined in

[dist/types.d.ts:10255](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10255)
