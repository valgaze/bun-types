[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:https"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_https_.md) / ClientRequest

# Class: ClientRequest

["node:https"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_https_.md).ClientRequest

This object is created internally and returned from [request](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_https_.md#request). It
represents an _in-progress_ request whose header has already been queued. The
header is still mutable using the `setHeader(name, value)`,`getHeader(name)`, `removeHeader(name)` API. The actual header will
be sent along with the first data chunk or when calling `request.end()`.

To get the response, add a listener for `'response'` to the request object.`'response'` will be emitted from the request object when the response
headers have been received. The `'response'` event is executed with one
argument which is an instance of [IncomingMessage](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.IncomingMessage.md).

During the `'response'` event, one can add listeners to the
response object; particularly to listen for the `'data'` event.

If no `'response'` handler is added, then the response will be
entirely discarded. However, if a `'response'` event handler is added,
then the data from the response object **must** be consumed, either by
calling `response.read()` whenever there is a `'readable'` event, or
by adding a `'data'` handler, or by calling the `.resume()` method.
Until the data is consumed, the `'end'` event will not fire. Also, until
the data is read it will consume memory that can eventually lead to a
'process out of memory' error.

For backward compatibility, `res` will only emit `'error'` if there is an`'error'` listener registered.

Node.js does not check whether Content-Length and the length of the
body which has been transmitted are equal or not.

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#constructor)

### Properties

- [aborted](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#aborted)
- [host](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#host)
- [maxHeadersCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#maxheaderscount)
- [method](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#method)
- [path](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#path)
- [protocol](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#protocol)
- [reusedSocket](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#reusedsocket)

### Methods

- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#abort)
- [addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#addlistener)
- [flushHeaders](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#flushheaders)
- [getHeader](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#getheader)
- [getRawHeaderNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#getrawheadernames)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#on)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#once)
- [prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#prependlistener)
- [prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#prependoncelistener)
- [removeHeader](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#removeheader)
- [setHeader](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#setheader)
- [setNoDelay](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#setnodelay)
- [setSocketKeepAlive](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#setsocketkeepalive)
- [setTimeout](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_https_.ClientRequest.md#settimeout)

## Constructors

### constructor

• **new ClientRequest**(`url`, `cb?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#url) \| [`ClientRequestArgs`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/http_.ClientRequestArgs.md) |
| `cb?` | (`res`: [`IncomingMessage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.IncomingMessage.md)) => `void` |

#### Defined in

[http.d.ts:239](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L239)

## Properties

### aborted

• **aborted**: `boolean`

The `request.aborted` property will be `true` if the request has
been aborted.

**`Deprecated`**

Since v17.0.0,v16.12.0 - Check `destroyed` instead.

#### Defined in

[http.d.ts:176](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L176)

___

### host

• **host**: `string`

The request host.

#### Defined in

[http.d.ts:180](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L180)

___

### maxHeadersCount

• **maxHeadersCount**: `number`

Limits maximum response headers count. If set to 0, no limit will be applied.

#### Defined in

[http.d.ts:238](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L238)

___

### method

• **method**: `string`

The request method.

#### Defined in

[http.d.ts:246](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L246)

___

### path

• **path**: `string`

The request path.

#### Defined in

[http.d.ts:250](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L250)

___

### protocol

• **protocol**: `string`

The request protocol.

#### Defined in

[http.d.ts:184](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L184)

___

### reusedSocket

• **reusedSocket**: `boolean`

When sending request through a keep-alive enabled agent, the underlying socket
might be reused. But if server closes connection at unfortunate time, client
may run into a 'ECONNRESET' error.

```js
const http = require('http');

// Server has a 5 seconds keep-alive timeout by default
http
  .createServer((req, res) => {
    res.write('hello\n');
    res.end();
  })
  .listen(3000);

setInterval(() => {
  // Adapting a keep-alive agent
  http.get('http://localhost:3000', { agent }, (res) => {
    res.on('data', (data) => {
      // Do nothing
    });
  });
}, 5000); // Sending request on 5s interval so it's easy to hit idle timeout
```

By marking a request whether it reused socket or not, we can do
automatic error retry base on it.

```js
const http = require('http');
const agent = new http.Agent({ keepAlive: true });

function retriableRequest() {
  const req = http
    .get('http://localhost:3000', { agent }, (res) => {
      // ...
    })
    .on('error', (err) => {
      // Check if retry is needed
      if (req.reusedSocket &#x26;&#x26; err.code === 'ECONNRESET') {
        retriableRequest();
      }
    });
}

retriableRequest();
```

#### Defined in

[http.d.ts:234](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L234)

## Methods

### abort

▸ **abort**(): `void`

Marks the request as aborting. Calling this will cause remaining data
in the response to be dropped and the socket to be destroyed.

**`Deprecated`**

Since v14.1.0,v13.14.0 - Use `destroy` instead.

#### Returns

`void`

#### Defined in

[http.d.ts:256](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L256)

___

### addListener

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:323](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L323)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:324](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L324)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:325](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L325)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:329](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L329)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:333](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L333)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:334](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L334)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:335](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L335)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:336](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L336)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:337](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L337)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:338](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L338)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:339](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L339)

▸ **addListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:343](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L343)

___

### flushHeaders

▸ **flushHeaders**(): `void`

Compulsorily flushes the message headers

For efficiency reason, Node.js normally buffers the message headers
until `outgoingMessage.end()` is called or the first chunk of message data
is written. It then tries to pack the headers and data into a single TCP
packet.

It is usually desired (it saves a TCP round-trip), but not when the first
data is not sent until possibly much later. `outgoingMessage.flushHeaders()`bypasses the optimization and kickstarts the request.

#### Returns

`void`

#### Defined in

[http.d.ts:298](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L298)

___

### getHeader

▸ **getHeader**(`name`): `string` \| `number` \| `string`[]

Gets the value of HTTP header with the given name. If such a name doesn't
exist in message, it will be `undefined`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of header |

#### Returns

`string` \| `number` \| `string`[]

#### Defined in

[http.d.ts:277](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L277)

___

### getRawHeaderNames

▸ **getRawHeaderNames**(): `string`[]

Returns an array containing the unique names of the current outgoing raw
headers. Header names are returned with their exact casing being set.

```js
request.setHeader('Foo', 'bar');
request.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headerNames = request.getRawHeaderNames();
// headerNames === ['Foo', 'Set-Cookie']
```

#### Returns

`string`[]

#### Defined in

[http.d.ts:319](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L319)

___

### on

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:350](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L350)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:351](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L351)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:352](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L352)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:353](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L353)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:354](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L354)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:355](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L355)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:356](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L356)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:357](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L357)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:358](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L358)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:359](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L359)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:360](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L360)

▸ **on**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:361](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L361)

___

### once

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:365](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L365)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:366](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L366)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:367](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L367)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:371](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L371)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:375](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L375)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:376](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L376)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:377](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L377)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:378](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L378)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:379](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L379)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:380](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L380)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:381](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L381)

▸ **once**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:382](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L382)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:386](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L386)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:387](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L387)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:388](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L388)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:392](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L392)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:396](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L396)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:397](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L397)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:398](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L398)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:399](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L399)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:400](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L400)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:401](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L401)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:405](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L405)

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:409](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L409)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:416](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L416)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:417](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L417)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/http_.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:418](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L418)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:422](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L422)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:426](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L426)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:427](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L427)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:428](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L428)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:429](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L429)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:430](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L430)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:431](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L431)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: [`Readable`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/stream_.Readable.md)<`any`\>) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:435](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L435)

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:439](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L439)

___

### removeHeader

▸ **removeHeader**(`name`): `void`

Removes a header that is queued for implicit sending.

```js
outgoingMessage.removeHeader('Content-Encoding');
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |

#### Returns

`void`

#### Defined in

[http.d.ts:286](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L286)

___

### setHeader

▸ **setHeader**(`name`, `value`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

Sets a single header value for the header object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |
| `value` | `string` \| `number` \| readonly `string`[] | Header value |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:268](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L268)

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): `void`

Once a socket is assigned to this request and is connected `socket.setNoDelay()` will be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

`void`

#### Defined in

[http.d.ts:302](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L302)

___

### setSocketKeepAlive

▸ **setSocketKeepAlive**(`enable?`, `initialDelay?`): `void`

Once a socket is assigned to this request and is connected `socket.setKeepAlive()` will be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

`void`

#### Defined in

[http.d.ts:306](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L306)

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

Once a socket is assigned to this request and is connected `socket.setTimeout()` will be called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | Milliseconds before a request times out. |
| `callback?` | () => `void` | Optional function to be called when a timeout occurs. Same as binding to the `'timeout'` event. |

#### Returns

[`ClientRequest`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/http_.ClientRequest.md)

#### Defined in

[http.d.ts:262](https://github.com/valgaze/bun-types/blob/6f8dbf8/http.d.ts#L262)
