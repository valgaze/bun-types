[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / RequestInit

# Interface: RequestInit

## Table of contents

### Properties

- [body](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#body)
- [cache](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#cache)
- [credentials](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#credentials)
- [headers](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#headers)
- [integrity](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#integrity)
- [keepalive](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#keepalive)
- [method](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#method)
- [mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#mode)
- [redirect](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#redirect)
- [referrer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#referrer)
- [referrerPolicy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#referrerpolicy)
- [signal](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#signal)
- [window](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/RequestInit.md#window)

## Properties

### body

• `Optional` **body**: `BodyInit`

A BodyInit object or null to set request's body.

#### Defined in

[globals.d.ts:547](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L547)

[dist/types.d.ts:9117](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9117)

___

### cache

• `Optional` **cache**: `RequestCache`

A string indicating how the request will interact with the browser's cache to set request's cache.

Note: as of Bun v0.0.74, this is not implemented yet.

#### Defined in

[globals.d.ts:553](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L553)

[dist/types.d.ts:9123](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9123)

___

### credentials

• `Optional` **credentials**: `RequestCredentials`

A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.

#### Defined in

[globals.d.ts:557](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L557)

[dist/types.d.ts:9127](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9127)

___

### headers

• `Optional` **headers**: `HeadersInit`

A Headers object, an object literal, or an array of two-item arrays to set request's headers.

#### Defined in

[globals.d.ts:561](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L561)

[dist/types.d.ts:9131](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9131)

___

### integrity

• `Optional` **integrity**: `string`

A cryptographic hash of the resource to be fetched by request. Sets request's integrity.

Note: as of Bun v0.0.74, this is not implemented yet.

#### Defined in

[globals.d.ts:567](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L567)

[dist/types.d.ts:9137](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9137)

___

### keepalive

• `Optional` **keepalive**: `boolean`

A boolean to set request's keepalive.

Note: as of Bun v0.0.74, this is not implemented yet.

#### Defined in

[globals.d.ts:573](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L573)

[dist/types.d.ts:9143](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9143)

___

### method

• `Optional` **method**: `string`

A string to set request's method.

#### Defined in

[globals.d.ts:577](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L577)

[dist/types.d.ts:9147](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9147)

___

### mode

• `Optional` **mode**: `RequestMode`

A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.

#### Defined in

[globals.d.ts:581](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L581)

[dist/types.d.ts:9151](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9151)

___

### redirect

• `Optional` **redirect**: `RequestRedirect`

A string indicating whether request follows redirects, results in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.

#### Defined in

[globals.d.ts:585](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L585)

[dist/types.d.ts:9155](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9155)

___

### referrer

• `Optional` **referrer**: `string`

A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.

#### Defined in

[globals.d.ts:589](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L589)

[dist/types.d.ts:9159](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9159)

___

### referrerPolicy

• `Optional` **referrerPolicy**: `ReferrerPolicy`

A referrer policy to set request's referrerPolicy.

#### Defined in

[globals.d.ts:593](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L593)

[dist/types.d.ts:9163](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9163)

___

### signal

• `Optional` **signal**: [`AbortSignal`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#abortsignal)

An AbortSignal to set request's signal.

Note: as of Bun v0.0.74, this is not implemented yet.

#### Defined in

[globals.d.ts:599](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L599)

[dist/types.d.ts:9169](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9169)

___

### window

• `Optional` **window**: `any`

Can only be null. Used to disassociate request from any Window.

This does nothing in Bun

#### Defined in

[globals.d.ts:605](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L605)

[dist/types.d.ts:9175](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L9175)
