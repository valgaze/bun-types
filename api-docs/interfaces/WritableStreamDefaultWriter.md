[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / WritableStreamDefaultWriter

# Interface: WritableStreamDefaultWriter<W\>

This Streams API interface is the object returned by WritableStream.getWriter() and once created locks the < writer to the WritableStream ensuring that no other streams can write to the underlying sink.

## Type parameters

| Name | Type |
| :------ | :------ |
| `W` | `any` |

## Table of contents

### Properties

- [closed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStreamDefaultWriter.md#closed)
- [desiredSize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStreamDefaultWriter.md#desiredsize)
- [ready](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStreamDefaultWriter.md#ready)

### Methods

- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStreamDefaultWriter.md#abort)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStreamDefaultWriter.md#close)
- [releaseLock](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStreamDefaultWriter.md#releaselock)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WritableStreamDefaultWriter.md#write)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Defined in

[globals.d.ts:1809](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1809)

[dist/types.d.ts:10379](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10379)

___

### desiredSize

• `Readonly` **desiredSize**: `number`

#### Defined in

[globals.d.ts:1810](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1810)

[dist/types.d.ts:10380](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10380)

___

### ready

• `Readonly` **ready**: `Promise`<`undefined`\>

#### Defined in

[globals.d.ts:1811](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1811)

[dist/types.d.ts:10381](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10381)

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

[globals.d.ts:1812](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1812)

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10382](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10382)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1813](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1813)

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10383](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10383)

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:1814](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1814)

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10384](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10384)

___

### write

▸ **write**(`chunk?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `W` |

#### Returns

`Promise`<`void`\>

#### Defined in

[globals.d.ts:1815](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1815)

▸ **write**(`chunk?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk?` | `W` |

#### Returns

`Promise`<`void`\>

#### Defined in

[dist/types.d.ts:10385](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10385)
