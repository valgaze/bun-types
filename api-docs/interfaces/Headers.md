[bun-types](../README.md) / [Exports](../modules.md) / Headers

# Interface: Headers

This Fetch API interface allows you to perform various actions on HTTP
request and response headers. These actions include retrieving, setting,
adding to, and removing. A Headers object has an associated header list,
which is initially empty and consists of zero or more name and value
pairs.

You can add to this using methods like append()

In all methods of this interface, header names are matched by
case-insensitive byte sequence.

## Table of contents

### Methods

- [append](Headers.md#append)
- [delete](Headers.md#delete)
- [entries](Headers.md#entries)
- [forEach](Headers.md#foreach)
- [get](Headers.md#get)
- [has](Headers.md#has)
- [keys](Headers.md#keys)
- [set](Headers.md#set)
- [values](Headers.md#values)

## Methods

### append

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:272](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L272)

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8842](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8842)

___

### delete

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:273](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L273)

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8843](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8843)

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

#### Defined in

[globals.d.ts:277](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L277)

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

#### Defined in

[dist/types.d.ts:8847](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8847)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`Headers`](../modules.md#headers)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[globals.d.ts:280](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L280)

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`Headers`](../modules.md#headers)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8850](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8850)

___

### get

▸ **get**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[globals.d.ts:274](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L274)

▸ **get**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:8844](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8844)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[globals.d.ts:275](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L275)

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[dist/types.d.ts:8845](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8845)

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[globals.d.ts:278](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L278)

▸ **keys**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[dist/types.d.ts:8848](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8848)

___

### set

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:276](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L276)

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8846](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8846)

___

### values

▸ **values**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[globals.d.ts:279](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L279)

▸ **values**(): `IterableIterator`<`string`\>

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[dist/types.d.ts:8849](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8849)
