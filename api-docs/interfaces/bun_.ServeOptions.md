[bun-types](../README.md) / [Exports](../modules.md) / ["bun"](../modules/bun_.md) / ServeOptions

# Interface: ServeOptions

["bun"](../modules/bun_.md).ServeOptions

## Table of contents

### Properties

- [baseURI](bun_.ServeOptions.md#baseuri)
- [development](bun_.ServeOptions.md#development)
- [error](bun_.ServeOptions.md#error)
- [hostname](bun_.ServeOptions.md#hostname)
- [maxRequestBodySize](bun_.ServeOptions.md#maxrequestbodysize)
- [port](bun_.ServeOptions.md#port)

### Methods

- [fetch](bun_.ServeOptions.md#fetch)

## Properties

### baseURI

• `Optional` **baseURI**: `string`

What URI should be used to make Request.url absolute?

By default, looks at [hostname](bun_.ServeOptions.md#hostname), [port](bun_.ServeOptions.md#port), and whether or not SSL is enabled to generate one

**`Example`**

```js
"http://my-app.com"
```

**`Example`**

```js
"https://wongmjane.com/"
```

This should be the public, absolute URL – include the protocol and [hostname](bun_.ServeOptions.md#hostname). If the port isn't 80 or 443, then include the [port](bun_.ServeOptions.md#port) too.

**`Example`**

```ts
"http://localhost:3000"
```

#### Defined in

[bun.d.ts:696](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L696)

[dist/types.d.ts:706](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L706)

___

### development

• `Optional` **development**: `boolean`

Render contextual errors? This enables bun's error page

**`Default`**

process.env.NODE_ENV !== 'production'

#### Defined in

[bun.d.ts:708](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L708)

[dist/types.d.ts:718](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L718)

___

### error

• `Optional` **error**: (`this`: [`Server`](bun_.Server.md), `request`: [`Errorlike`](bun_.Errorlike.md)) => `Response` \| `Promise`<`Response`\> \| `Promise`<`undefined`\>

#### Type declaration

▸ (`this`, `request`): `Response` \| `Promise`<`Response`\> \| `Promise`<`undefined`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Server`](bun_.Server.md) |
| `request` | [`Errorlike`](bun_.Errorlike.md) |

##### Returns

`Response` \| `Promise`<`Response`\> \| `Promise`<`undefined`\>

#### Defined in

[bun.d.ts:718](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L718)

[dist/types.d.ts:728](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L728)

___

### hostname

• `Optional` **hostname**: `string`

What hostname should the server listen on?

**`Default`**

```js
"0.0.0.0" // listen on all interfaces
```

**`Example`**

```js
"127.0.0.1" // Only listen locally
```

**`Example`**

```js
"remix.run" // Only listen on remix.run
````

note: hostname should not include a {@link port}

#### Defined in

[bun.d.ts:673](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L673)

[dist/types.d.ts:683](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L683)

___

### maxRequestBodySize

• `Optional` **maxRequestBodySize**: `number`

What is the maximum size of a request body? (in bytes)

**`Default`**

1024 * 1024 * 128 // 128MB

#### Defined in

[bun.d.ts:702](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L702)

[dist/types.d.ts:712](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L712)

___

### port

• `Optional` **port**: `string` \| `number`

What port should the server listen on?

**`Default`**

process.env.PORT || "3000"

#### Defined in

[bun.d.ts:653](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L653)

[dist/types.d.ts:663](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L663)

## Methods

### fetch

▸ **fetch**(`this`, `request`): `Response` \| `Promise`<`Response`\>

Handle HTTP requests

Respond to Request objects with a Response object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Server`](bun_.Server.md) |
| `request` | `Request` |

#### Returns

`Response` \| `Promise`<`Response`\>

#### Defined in

[bun.d.ts:716](https://github.com/valgaze/bun-types/blob/5e53f27/bun.d.ts#L716)

▸ **fetch**(`this`, `request`): `Response` \| `Promise`<`Response`\>

Handle HTTP requests

Respond to Request objects with a Response object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Server`](bun_.Server.md) |
| `request` | `Request` |

#### Returns

`Response` \| `Promise`<`Response`\>

#### Defined in

[dist/types.d.ts:726](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L726)
