[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / Server

# Interface: Server

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).Server

HTTP & HTTPS Server

To start the server, see [serve](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#serve-1)

Often, you don't need to interact with this object directly. It exists to help you with the following tasks:
- Stop the server
- How many requests are currently being handled?

For performance, Bun pre-allocates most of the data for 2048 concurrent requests.
That means starting a new server allocates about 500 KB of memory. Try to
avoid starting and stopping the server often (unless it's a new instance of bun).

Powered by a fork of [uWebSockets](https://github.com/uNetworking/uWebSockets). Thank you @alexhultman.

## Table of contents

### Properties

- [development](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#development)
- [hostname](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#hostname)
- [pendingRequests](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#pendingrequests)
- [port](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#port)

### Methods

- [stop](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md#stop)

## Properties

### development

• `Readonly` **development**: `boolean`

#### Defined in

[bun.d.ts:799](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L799)

[dist/types.d.ts:809](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L809)

___

### hostname

• `Readonly` **hostname**: `string`

#### Defined in

[bun.d.ts:798](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L798)

[dist/types.d.ts:808](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L808)

___

### pendingRequests

• `Readonly` **pendingRequests**: `number`

How many requests are in-flight right now?

#### Defined in

[bun.d.ts:796](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L796)

[dist/types.d.ts:806](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L806)

___

### port

• `Readonly` **port**: `number`

#### Defined in

[bun.d.ts:797](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L797)

[dist/types.d.ts:807](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L807)

## Methods

### stop

▸ **stop**(): `void`

Stop listening to prevent new connections from being accepted.

It does not close existing connections.

It may take a second or two to actually stop.

#### Returns

`void`

#### Defined in

[bun.d.ts:791](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L791)

▸ **stop**(): `void`

Stop listening to prevent new connections from being accepted.

It does not close existing connections.

It may take a second or two to actually stop.

#### Returns

`void`

#### Defined in

[dist/types.d.ts:801](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L801)
