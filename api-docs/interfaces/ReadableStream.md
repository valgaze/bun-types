[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ReadableStream

# Interface: ReadableStream<R\>

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#locked)

### Methods

- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#cancel)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#foreach)
- [getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#getreader)
- [pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#pipethrough)
- [pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#pipeto)
- [tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

[globals.d.ts:1674](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1674)

[dist/types.d.ts:10244](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10244)

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1675](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1675)

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10245](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10245)

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

#### Defined in

[globals.d.ts:1686](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1686)

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10256](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10256)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

#### Defined in

[globals.d.ts:1676](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1676)

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`R`\>

#### Defined in

[dist/types.d.ts:10246](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10246)

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
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Defined in

[dist/types.d.ts:10247](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10247)

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

#### Defined in

[globals.d.ts:1681](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1681)

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10251](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10251)

___

### tee

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

#### Defined in

[globals.d.ts:1685](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1685)

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>]

#### Defined in

[dist/types.d.ts:10255](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10255)
