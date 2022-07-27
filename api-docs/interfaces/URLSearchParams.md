[bun-types](../README.md) / [Exports](../modules.md) / URLSearchParams

# Interface: URLSearchParams

## Table of contents

### Methods

- [append](URLSearchParams.md#append)
- [delete](URLSearchParams.md#delete)
- [entries](URLSearchParams.md#entries)
- [forEach](URLSearchParams.md#foreach)
- [get](URLSearchParams.md#get)
- [getAll](URLSearchParams.md#getall)
- [has](URLSearchParams.md#has)
- [keys](URLSearchParams.md#keys)
- [set](URLSearchParams.md#set)
- [sort](URLSearchParams.md#sort)
- [toString](URLSearchParams.md#tostring)
- [values](URLSearchParams.md#values)

## Methods

### append

▸ **append**(`name`, `value`): `void`

Appends a specified key/value pair as a new search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1439](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1439)

▸ **append**(`name`, `value`): `void`

Appends a specified key/value pair as a new search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10009](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10009)

___

### delete

▸ **delete**(`name`): `void`

Deletes the given search parameter, and its associated value, from the list of all search parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1441](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1441)

▸ **delete**(`name`): `void`

Deletes the given search parameter, and its associated value, from the list of all search parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10011](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10011)

___

### entries

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

#### Defined in

[globals.d.ts:1451](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1451)

▸ **entries**(): `IterableIterator`<[`string`, `string`]\>

#### Returns

`IterableIterator`<[`string`, `string`]\>

#### Defined in

[dist/types.d.ts:10021](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10021)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](../modules.md#urlsearchparams)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1456](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1456)

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](../modules.md#urlsearchparams)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10026](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10026)

___

### get

▸ **get**(`name`): `string`

Returns the first value associated to the given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[globals.d.ts:1443](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1443)

▸ **get**(`name`): `string`

Returns the first value associated to the given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10013](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10013)

___

### getAll

▸ **getAll**(`name`): `string`[]

Returns all the values association with a given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

#### Defined in

[globals.d.ts:1445](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1445)

▸ **getAll**(`name`): `string`[]

Returns all the values association with a given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

#### Defined in

[dist/types.d.ts:10015](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10015)

___

### has

▸ **has**(`name`): `boolean`

Returns a Boolean indicating if such a search parameter exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[globals.d.ts:1447](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1447)

▸ **has**(`name`): `boolean`

Returns a Boolean indicating if such a search parameter exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[dist/types.d.ts:10017](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10017)

___

### keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[globals.d.ts:1453](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1453)

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all keys of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[dist/types.d.ts:10023](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10023)

___

### set

▸ **set**(`name`, `value`): `void`

Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1449](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1449)

▸ **set**(`name`, `value`): `void`

Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10019](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10019)

___

### sort

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

[globals.d.ts:1450](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1450)

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10020](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10020)

___

### toString

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

#### Defined in

[globals.d.ts:1461](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1461)

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10031](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10031)

___

### values

▸ **values**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[globals.d.ts:1455](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1455)

▸ **values**(): `IterableIterator`<`string`\>

Returns an iterator allowing to go through all values of the key/value pairs of this search parameter.

#### Returns

`IterableIterator`<`string`\>

#### Defined in

[dist/types.d.ts:10025](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10025)
