[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / AbortSignal

# Interface: AbortSignal

A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object.

## Hierarchy

- [`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)

  ↳ **`AbortSignal`**

## Table of contents

### Properties

- [aborted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#aborted)
- [onabort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#onabort)

### Methods

- [addEventListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#addeventlistener)
- [dispatchEvent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#dispatchevent)
- [removeEventListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignal.md#removeeventlistener)

## Properties

### aborted

• `Readonly` **aborted**: `boolean`

Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.

#### Defined in

[globals.d.ts:1524](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1524)

[dist/types.d.ts:10094](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10094)

___

### onabort

• **onabort**: (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal) |
| `ev` | [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1525](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1525)

[dist/types.d.ts:10095](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10095)

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[globals.d.ts:1526](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1526)

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[globals.d.ts:1531](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1531)

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[dist/types.d.ts:10096](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10096)

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[dist/types.d.ts:10101](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10101)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

[globals.d.ts:1162](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1162)

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

[dist/types.d.ts:9732](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9732)

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[globals.d.ts:1536](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1536)

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[globals.d.ts:1541](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1541)

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[dist/types.d.ts:10106](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10106)

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[dist/types.d.ts:10111](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10111)
