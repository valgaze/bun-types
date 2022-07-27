[bun-types](../README.md) / [Exports](../modules.md) / AbortSignal

# Interface: AbortSignal

A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object.

## Hierarchy

- [`EventTarget`](../modules.md#eventtarget)

  ↳ **`AbortSignal`**

## Table of contents

### Properties

- [aborted](AbortSignal.md#aborted)
- [onabort](AbortSignal.md#onabort)

### Methods

- [addEventListener](AbortSignal.md#addeventlistener)
- [dispatchEvent](AbortSignal.md#dispatchevent)
- [removeEventListener](AbortSignal.md#removeeventlistener)

## Properties

### aborted

• `Readonly` **aborted**: `boolean`

Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.

#### Defined in

[globals.d.ts:1524](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1524)

[dist/types.d.ts:10094](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10094)

___

### onabort

• **onabort**: (`this`: [`AbortSignal`](../modules.md#abortsignal), `ev`: [`Event`](../modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbortSignal`](../modules.md#abortsignal) |
| `ev` | [`Event`](../modules.md#event) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1525](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1525)

[dist/types.d.ts:10095](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10095)

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
| `listener` | (`this`: [`AbortSignal`](../modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[globals.d.ts:1526](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1526)

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[globals.d.ts:1531](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1531)

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](../modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[dist/types.d.ts:10096](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10096)

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[dist/types.d.ts:10101](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10101)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

[globals.d.ts:1162](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1162)

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

[dist/types.d.ts:9732](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9732)

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
| `listener` | (`this`: [`AbortSignal`](../modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[globals.d.ts:1536](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1536)

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`EventListenerOptions`](EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[globals.d.ts:1541](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1541)

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbortSignal`](../modules.md#abortsignal), `ev`: [`AbortSignalEventMap`](AbortSignalEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[dist/types.d.ts:10106](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10106)

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListenerOrEventListenerObject` |
| `options?` | `boolean` \| [`EventListenerOptions`](EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[dist/types.d.ts:10111](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10111)
