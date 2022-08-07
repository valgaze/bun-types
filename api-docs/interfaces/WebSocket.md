[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / WebSocket

# Interface: WebSocket

Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.

## Hierarchy

- [`EventTarget`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#eventtarget)

  ↳ **`WebSocket`**

## Table of contents

### Properties

- [CLOSED](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#closed)
- [CLOSING](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#closing)
- [CONNECTING](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#connecting)
- [OPEN](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#open)
- [binaryType](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#binarytype)
- [bufferedAmount](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#bufferedamount)
- [extensions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#extensions)
- [onclose](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#onclose)
- [onerror](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#onerror)
- [onmessage](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#onmessage)
- [onopen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#onopen)
- [protocol](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#protocol)
- [readyState](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#readystate)
- [url](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#url)

### Methods

- [addEventListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#addeventlistener)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#close)
- [dispatchEvent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#dispatchevent)
- [removeEventListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#removeeventlistener)
- [send](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocket.md#send)

## Properties

### CLOSED

• `Readonly` **CLOSED**: `number`

___

### CLOSING

• `Readonly` **CLOSING**: `number`

___

### CONNECTING

• `Readonly` **CONNECTING**: `number`

___

### OPEN

• `Readonly` **OPEN**: `number`

___

### binaryType

• **binaryType**: `BinaryType`

Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:

Can be set, to change how binary data is returned. The default is "blob".

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.

If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)

___

### extensions

• `Readonly` **extensions**: `string`

Returns the extensions selected by the server, if any.

___

### onclose

• **onclose**: (`this`: [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket), `ev`: [`CloseEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#closeevent)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket) |
| `ev` | [`CloseEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#closeevent) |

##### Returns

`any`

___

### onerror

• **onerror**: (`this`: [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket), `ev`: [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket) |
| `ev` | [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event) |

##### Returns

`any`

___

### onmessage

• **onmessage**: (`this`: [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket), `ev`: [`MessageEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#messageevent)<`any`\>) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket) |
| `ev` | [`MessageEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#messageevent)<`any`\> |

##### Returns

`any`

___

### onopen

• **onopen**: (`this`: [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket), `ev`: [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket) |
| `ev` | [`Event`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#event) |

##### Returns

`any`

___

### protocol

• `Readonly` **protocol**: `string`

Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.

___

### readyState

• `Readonly` **readyState**: `number`

Returns the state of the WebSocket object's connection. It can have the values described below.

___

### url

• `Readonly` **url**: `string`

Returns the URL that was used to establish the WebSocket connection.

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket), `ev`: [`WebSocketEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

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

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket), `ev`: [`WebSocketEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

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

___

### close

▸ **close**(`code?`, `reason?`): `void`

Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

▸ **close**(`code?`, `reason?`): `void`

Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

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

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket), `ev`: [`WebSocketEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

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

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#websocket), `ev`: [`WebSocketEventMap`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

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

___

### send

▸ **send**(`data`): `void`

Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Blob` \| `ArrayBufferLike` \| `ArrayBufferView` |

#### Returns

`void`

▸ **send**(`data`): `void`

Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Blob` \| `ArrayBufferLike` \| `ArrayBufferView` |

#### Returns

`void`