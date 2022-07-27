[bun-types](../README.md) / [Exports](../modules.md) / WebSocket

# Interface: WebSocket

Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.

## Hierarchy

- [`EventTarget`](../modules.md#eventtarget)

  ↳ **`WebSocket`**

## Table of contents

### Properties

- [CLOSED](WebSocket.md#closed)
- [CLOSING](WebSocket.md#closing)
- [CONNECTING](WebSocket.md#connecting)
- [OPEN](WebSocket.md#open)
- [binaryType](WebSocket.md#binarytype)
- [bufferedAmount](WebSocket.md#bufferedamount)
- [extensions](WebSocket.md#extensions)
- [onclose](WebSocket.md#onclose)
- [onerror](WebSocket.md#onerror)
- [onmessage](WebSocket.md#onmessage)
- [onopen](WebSocket.md#onopen)
- [protocol](WebSocket.md#protocol)
- [readyState](WebSocket.md#readystate)
- [url](WebSocket.md#url)

### Methods

- [addEventListener](WebSocket.md#addeventlistener)
- [close](WebSocket.md#close)
- [dispatchEvent](WebSocket.md#dispatchevent)
- [removeEventListener](WebSocket.md#removeeventlistener)
- [send](WebSocket.md#send)

## Properties

### CLOSED

• `Readonly` **CLOSED**: `number`

#### Defined in

[globals.d.ts:1381](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1381)

[dist/types.d.ts:9951](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9951)

___

### CLOSING

• `Readonly` **CLOSING**: `number`

#### Defined in

[globals.d.ts:1382](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1382)

[dist/types.d.ts:9952](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9952)

___

### CONNECTING

• `Readonly` **CONNECTING**: `number`

#### Defined in

[globals.d.ts:1383](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1383)

[dist/types.d.ts:9953](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9953)

___

### OPEN

• `Readonly` **OPEN**: `number`

#### Defined in

[globals.d.ts:1384](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1384)

[dist/types.d.ts:9954](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9954)

___

### binaryType

• **binaryType**: `BinaryType`

Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:

Can be set, to change how binary data is returned. The default is "blob".

#### Defined in

[globals.d.ts:1358](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1358)

[dist/types.d.ts:9928](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9928)

___

### bufferedAmount

• `Readonly` **bufferedAmount**: `number`

Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.

If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)

#### Defined in

[globals.d.ts:1364](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1364)

[dist/types.d.ts:9934](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9934)

___

### extensions

• `Readonly` **extensions**: `string`

Returns the extensions selected by the server, if any.

#### Defined in

[globals.d.ts:1366](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1366)

[dist/types.d.ts:9936](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9936)

___

### onclose

• **onclose**: (`this`: [`WebSocket`](../modules.md#websocket), `ev`: [`CloseEvent`](../modules.md#closeevent)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](../modules.md#websocket) |
| `ev` | [`CloseEvent`](../modules.md#closeevent) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1367](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1367)

[dist/types.d.ts:9937](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9937)

___

### onerror

• **onerror**: (`this`: [`WebSocket`](../modules.md#websocket), `ev`: [`Event`](../modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](../modules.md#websocket) |
| `ev` | [`Event`](../modules.md#event) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1368](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1368)

[dist/types.d.ts:9938](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9938)

___

### onmessage

• **onmessage**: (`this`: [`WebSocket`](../modules.md#websocket), `ev`: [`MessageEvent`](../modules.md#messageevent)<`any`\>) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](../modules.md#websocket) |
| `ev` | [`MessageEvent`](../modules.md#messageevent)<`any`\> |

##### Returns

`any`

#### Defined in

[globals.d.ts:1369](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1369)

[dist/types.d.ts:9939](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9939)

___

### onopen

• **onopen**: (`this`: [`WebSocket`](../modules.md#websocket), `ev`: [`Event`](../modules.md#event)) => `any`

#### Type declaration

▸ (`this`, `ev`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`WebSocket`](../modules.md#websocket) |
| `ev` | [`Event`](../modules.md#event) |

##### Returns

`any`

#### Defined in

[globals.d.ts:1370](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1370)

[dist/types.d.ts:9940](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9940)

___

### protocol

• `Readonly` **protocol**: `string`

Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.

#### Defined in

[globals.d.ts:1372](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1372)

[dist/types.d.ts:9942](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9942)

___

### readyState

• `Readonly` **readyState**: `number`

Returns the state of the WebSocket object's connection. It can have the values described below.

#### Defined in

[globals.d.ts:1374](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1374)

[dist/types.d.ts:9944](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9944)

___

### url

• `Readonly` **url**: `string`

Returns the URL that was used to establish the WebSocket connection.

#### Defined in

[globals.d.ts:1376](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1376)

[dist/types.d.ts:9946](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9946)

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](../modules.md#websocket), `ev`: [`WebSocketEventMap`](WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[globals.d.ts:1385](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1385)

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

[globals.d.ts:1390](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1390)

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](../modules.md#websocket), `ev`: [`WebSocketEventMap`](WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

[dist/types.d.ts:9955](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9955)

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

[dist/types.d.ts:9960](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9960)

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

#### Defined in

[globals.d.ts:1378](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1378)

▸ **close**(`code?`, `reason?`): `void`

Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:9948](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9948)

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
| `K` | extends keyof [`WebSocketEventMap`](WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](../modules.md#websocket), `ev`: [`WebSocketEventMap`](WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[globals.d.ts:1395](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1395)

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

[globals.d.ts:1400](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1400)

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WebSocketEventMap`](WebSocketEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`WebSocket`](../modules.md#websocket), `ev`: [`WebSocketEventMap`](WebSocketEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

[dist/types.d.ts:9965](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9965)

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

[dist/types.d.ts:9970](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9970)

___

### send

▸ **send**(`data`): `void`

Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `ArrayBufferLike` \| `Blob` \| `ArrayBufferView` |

#### Returns

`void`

#### Defined in

[globals.d.ts:1380](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1380)

▸ **send**(`data`): `void`

Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `ArrayBufferLike` \| `Blob` \| `ArrayBufferView` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:9950](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9950)
