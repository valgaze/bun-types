[bun-types](../README.md) / [Exports](../modules.md) / ["url"](../modules/url_.md) / URLSearchParams

# Interface: URLSearchParams

["url"](../modules/url_.md).URLSearchParams

## Table of contents

### Methods

- [append](url_.URLSearchParams.md#append)
- [delete](url_.URLSearchParams.md#delete)
- [forEach](url_.URLSearchParams.md#foreach)
- [get](url_.URLSearchParams.md#get)
- [getAll](url_.URLSearchParams.md#getall)
- [has](url_.URLSearchParams.md#has)
- [set](url_.URLSearchParams.md#set)
- [sort](url_.URLSearchParams.md#sort)
- [toString](url_.URLSearchParams.md#tostring)

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

[url.d.ts:325](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L325)

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

[dist/types.d.ts:20154](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20154)

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

[url.d.ts:327](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L327)

▸ **delete**(`name`): `void`

Deletes the given search parameter, and its associated value, from the list of all search parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:20156](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20156)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](url_.URLSearchParams.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[url.d.ts:339](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L339)

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`URLSearchParams`](url_.URLSearchParams.md)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:20168](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20168)

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

[url.d.ts:329](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L329)

▸ **get**(`name`): `string`

Returns the first value associated to the given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:20158](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20158)

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

[url.d.ts:331](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L331)

▸ **getAll**(`name`): `string`[]

Returns all the values association with a given search parameter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`[]

#### Defined in

[dist/types.d.ts:20160](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20160)

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

[url.d.ts:333](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L333)

▸ **has**(`name`): `boolean`

Returns a Boolean indicating if such a search parameter exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[dist/types.d.ts:20162](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20162)

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

[url.d.ts:335](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L335)

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

[dist/types.d.ts:20164](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20164)

___

### sort

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

[url.d.ts:336](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L336)

▸ **sort**(): `void`

#### Returns

`void`

#### Defined in

[dist/types.d.ts:20165](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20165)

___

### toString

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

#### Defined in

[url.d.ts:338](https://github.com/valgaze/bun-types/blob/5e53f27/url.d.ts#L338)

▸ **toString**(): `string`

Returns a string containing a query string suitable for use in a URL. Does not include the question mark.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:20167](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20167)
