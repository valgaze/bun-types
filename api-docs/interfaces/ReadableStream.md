[bun-types](../README.md) / [Exports](../modules.md) / ReadableStream

# Interface: ReadableStream<R\>

This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object.

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Table of contents

### Properties

- [locked](ReadableStream.md#locked)

### Methods

- [cancel](ReadableStream.md#cancel)
- [forEach](ReadableStream.md#foreach)
- [getReader](ReadableStream.md#getreader)
- [pipeThrough](ReadableStream.md#pipethrough)
- [pipeTo](ReadableStream.md#pipeto)
- [tee](ReadableStream.md#tee)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

[globals.d.ts:1674](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1674)

[dist/types.d.ts:10244](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10244)

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

[globals.d.ts:1675](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1675)

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10245](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10245)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](../modules.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1686](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1686)

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](../modules.md#readablestream)<`R`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10256](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10256)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules.md#readablestreamdefaultreader)<`R`\>

#### Defined in

[globals.d.ts:1676](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1676)

▸ **getReader**(): [`ReadableStreamDefaultReader`](../modules.md#readablestreamdefaultreader)<`R`\>

#### Returns

[`ReadableStreamDefaultReader`](../modules.md#readablestreamdefaultreader)<`R`\>

#### Defined in

[dist/types.d.ts:10246](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10246)

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
| `transform` | [`ReadableWritablePair`](ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules.md#readablestream)<`T`\>

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
| `transform` | [`ReadableWritablePair`](ReadableWritablePair.md)<`T`, `R`\> |
| `options?` | [`StreamPipeOptions`](StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](../modules.md#readablestream)<`T`\>

#### Defined in

[dist/types.d.ts:10247](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10247)

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1681](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1681)

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](../modules.md#writablestream)<`R`\> |
| `options?` | [`StreamPipeOptions`](StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10251](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10251)

___

### tee

▸ **tee**(): [[`ReadableStream`](../modules.md#readablestream)<`R`\>, [`ReadableStream`](../modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules.md#readablestream)<`R`\>, [`ReadableStream`](../modules.md#readablestream)<`R`\>]

#### Defined in

[globals.d.ts:1685](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1685)

▸ **tee**(): [[`ReadableStream`](../modules.md#readablestream)<`R`\>, [`ReadableStream`](../modules.md#readablestream)<`R`\>]

#### Returns

[[`ReadableStream`](../modules.md#readablestream)<`R`\>, [`ReadableStream`](../modules.md#readablestream)<`R`\>]

#### Defined in

[dist/types.d.ts:10255](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10255)
