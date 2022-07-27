[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ReadWriteStream

# Interface: ReadWriteStream

## Hierarchy

- [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)

- [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)

  ↳ **`ReadWriteStream`**

## Table of contents

### Properties

- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#locked)

### Methods

- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#abort)
- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#cancel)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#close)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#foreach)
- [getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#getreader)
- [getWriter](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#getwriter)
- [pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#pipethrough)
- [pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#pipeto)
- [tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadWriteStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Inherited from

ReadableStream.locked

#### Defined in

[globals.d.ts:1674](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1674)

[dist/types.d.ts:10244](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10244)

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

[globals.d.ts:1784](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1784)

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

[dist/types.d.ts:10354](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10354)

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

[globals.d.ts:1675](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1675)

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

[dist/types.d.ts:10245](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10245)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.close

#### Defined in

[globals.d.ts:1785](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1785)

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

WritableStream.close

#### Defined in

[dist/types.d.ts:10355](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10355)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

#### Defined in

[globals.d.ts:1686](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1686)

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

ReadableStream.forEach

#### Defined in

[dist/types.d.ts:10256](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10256)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

#### Defined in

[globals.d.ts:1676](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1676)

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

ReadableStream.getReader

#### Defined in

[dist/types.d.ts:10246](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10246)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

#### Defined in

[globals.d.ts:1786](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1786)

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

WritableStream.getWriter

#### Defined in

[dist/types.d.ts:10356](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10356)

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
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

#### Defined in

[globals.d.ts:1677](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1677)

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Inherited from

ReadableStream.pipeThrough

#### Defined in

[dist/types.d.ts:10247](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10247)

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

#### Defined in

[globals.d.ts:1681](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1681)

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

ReadableStream.pipeTo

#### Defined in

[dist/types.d.ts:10251](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10251)

___

### tee

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee

#### Defined in

[globals.d.ts:1685](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1685)

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Inherited from

ReadableStream.tee

#### Defined in

[dist/types.d.ts:10255](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10255)
