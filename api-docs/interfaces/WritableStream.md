[bun-types](../README.md) / [Exports](../modules.md) / WritableStream

# Interface: WritableStream<W\>

This Streams API interface provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [locked](WritableStream.md#locked)

### Methods

- [abort](WritableStream.md#abort)
- [close](WritableStream.md#close)
- [getWriter](WritableStream.md#getwriter)

## Properties

### locked

• `Readonly` **locked**: `boolean`

#### Defined in

[globals.d.ts:1783](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1783)

[dist/types.d.ts:10353](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10353)

## Methods

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1784](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1784)

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10354](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10354)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1785](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1785)

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10355](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10355)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules.md#writablestreamdefaultwriter)<`W`\>

#### Defined in

[globals.d.ts:1786](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1786)

▸ **getWriter**(): [`WritableStreamDefaultWriter`](../modules.md#writablestreamdefaultwriter)<`W`\>

#### Returns

[`WritableStreamDefaultWriter`](../modules.md#writablestreamdefaultwriter)<`W`\>

#### Defined in

[dist/types.d.ts:10356](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10356)
