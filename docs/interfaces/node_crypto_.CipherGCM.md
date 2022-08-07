[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / CipherGCM

# Interface: CipherGCM

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).CipherGCM

Instances of the `Cipher` class are used to encrypt data. The class can be
used in one of two ways:

* As a `stream` that is both readable and writable, where plain unencrypted
data is written to produce encrypted data on the readable side, or
* Using the `cipher.update()` and `cipher.final()` methods to produce
the encrypted data.

The [createCipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md#createcipher) or [createCipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md#createcipheriv) methods are
used to create `Cipher` instances. `Cipher` objects are not to be created
directly using the `new` keyword.

Example: Using `Cipher` objects as streams:

```js
const {
  scrypt,
  randomFill,
  createCipheriv
} = await import('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) => {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) => {
    if (err) throw err;

    // Once we have the key and iv, we can create and use the cipher...
    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = '';
    cipher.setEncoding('hex');

    cipher.on('data', (chunk) => encrypted += chunk);
    cipher.on('end', () => console.log(encrypted));

    cipher.write('some clear text data');
    cipher.end();
  });
});
```

Example: Using `Cipher` and piped streams:

```js
import {
  createReadStream,
  createWriteStream,
} from 'fs';

import {
  pipeline
} from 'stream';

const {
  scrypt,
  randomFill,
  createCipheriv
} = await import('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) => {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) => {
    if (err) throw err;

    const cipher = createCipheriv(algorithm, key, iv);

    const input = createReadStream('test.js');
    const output = createWriteStream('test.enc');

    pipeline(input, cipher, output, (err) => {
      if (err) throw err;
    });
  });
});
```

Example: Using the `cipher.update()` and `cipher.final()` methods:

```js
const {
  scrypt,
  randomFill,
  createCipheriv
} = await import('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';

// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
scrypt(password, 'salt', 24, (err, key) => {
  if (err) throw err;
  // Then, we'll generate a random initialization vector
  randomFill(new Uint8Array(16), (err, iv) => {
    if (err) throw err;

    const cipher = createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
  });
});
```

## Hierarchy

- [`Cipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md)

  ↳ **`CipherGCM`**

## Table of contents

### Properties

- [allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#allowhalfopen)
- [destroyed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#destroyed)
- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#locked)
- [readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#readable)
- [readableAborted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#readableaborted)
- [readableEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#readableencoding)
- [readableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#readableended)
- [readableFlowing](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#readableflowing)
- [readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#readablehighwatermark)
- [readableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#readablelength)
- [readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#readableobjectmode)
- [writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#writable)
- [writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#writablecorked)
- [writableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#writableended)
- [writableFinished](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#writablefinished)
- [writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#writablehighwatermark)
- [writableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#writablelength)
- [writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#writableobjectmode)

### Methods

- [[asyncIterator]](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#[asynciterator])
- [\_construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_construct)
- [\_destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_destroy)
- [\_final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_final)
- [\_flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_flush)
- [\_read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_read)
- [\_transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_transform)
- [\_write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_write)
- [\_writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_writev)
- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#abort)
- [addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#addlistener)
- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#cancel)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#close)
- [cork](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#cork)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#destroy)
- [emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#emit)
- [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#end)
- [eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#eventnames)
- [final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#final)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#foreach)
- [getAuthTag](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#getauthtag)
- [getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#getmaxlisteners)
- [getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#getreader)
- [getWriter](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#getwriter)
- [isPaused](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#ispaused)
- [listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#listenercount)
- [listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#listeners)
- [off](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#off)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#on)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#once)
- [pause](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#pause)
- [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#pipe)
- [pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#pipethrough)
- [pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#pipeto)
- [prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#prependlistener)
- [prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#prependoncelistener)
- [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#push)
- [rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#rawlisteners)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#read)
- [removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#removealllisteners)
- [removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#removelistener)
- [resume](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#resume)
- [setAAD](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#setaad)
- [setAutoPadding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#setautopadding)
- [setDefaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#setdefaultencoding)
- [setEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#setencoding)
- [setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#setmaxlisteners)
- [tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#tee)
- [uncork](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#uncork)
- [unpipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#unpipe)
- [unshift](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#unshift)
- [update](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#update)
- [wrap](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#wrap)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#write)

## Properties

### allowHalfOpen

• **allowHalfOpen**: `boolean`

If `false` then the stream will automatically end the writable side when the
readable side ends. Set initially by the `allowHalfOpen` constructor option,
which defaults to `false`.

This can be changed manually to change the half-open behavior of an existing`Duplex` stream instance, but must be changed before the `'end'` event is
emitted.

**`Since`**

v0.9.4

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#allowhalfopen)

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[destroyed](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#destroyed)

___

### locked

• `Readonly` **locked**: `boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#locked)

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#readable)

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[readableAborted](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#readableaborted)

___

### readableEncoding

• `Readonly` **readableEncoding**: `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[readableEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#readableencoding)

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[readableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#readableended)

___

### readableFlowing

• `Readonly` **readableFlowing**: `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[readableFlowing](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#readableflowing)

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#readablehighwatermark)

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[readableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#readablelength)

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#readableobjectmode)

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#writable)

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#writablecorked)

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[writableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#writableended)

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[writableFinished](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#writablefinished)

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#writablehighwatermark)

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[writableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#writablelength)

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#writableobjectmode)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[[asyncIterator]](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#[asynciterator])

___

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[_construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#_construct)

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `callback` | (`error`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[_destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#_destroy)

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[_final](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#_final)

___

### \_flush

▸ **_flush**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`TransformCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#transformcallback) |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[_flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#_flush)

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[_read](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#_read)

___

### \_transform

▸ **_transform**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | [`TransformCallback`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/stream_.md#transformcallback) |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[_transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#_transform)

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[_write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#_write)

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[_writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#_writev)

___

### abort

▸ **abort**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#abort)

___

### addListener

▸ **addListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#addlistener)

▸ **addListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#addlistener)

▸ **addListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#addlistener)

▸ **addListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#addlistener)

▸ **addListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#addlistener)

▸ **addListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#addlistener)

▸ **addListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#addlistener)

▸ **addListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#addlistener)

___

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#cancel)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[close](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#close)

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#uncork) or [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[cork](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#cork)

___

### destroy

▸ **destroy**(`error?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Error which will be passed as payload in `'error'` event |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#destroy)

___

### emit

▸ **emit**(`event`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#emit)

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#emit)

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#emit)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#emit)

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#emit)

___

### end

▸ **end**(`cb?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#write) method after calling [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#end)

▸ **end**(`chunk`, `cb?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#end)

▸ **end**(`chunk`, `encoding?`, `cb?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#end)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#eventnames)

___

### final

▸ **final**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Once the `cipher.final()` method has been called, the `Cipher` object can no
longer be used to encrypt data. Attempts to call `cipher.final()` more than
once will result in an error being thrown.

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Any remaining enciphered contents. If `outputEncoding` is specified, a string is returned. If an `outputEncoding` is not provided, a [Buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Buffer.md) is returned.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[final](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#final)

▸ **final**(`outputEncoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputEncoding` | `BufferEncoding` |

#### Returns

`string`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[final](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#final)

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `any`, `key`: `number`, `parent`: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#foreach)

___

### getAuthTag

▸ **getAuthTag**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

▸ **getAuthTag**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#getmaxlisteners)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#getreader)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[getWriter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#getwriter)

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[isPaused](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#ispaused)

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#listenercount)

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#listeners)

___

### off

▸ **off**(`eventName`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[off](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#off)

___

### on

▸ **on**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#on)

▸ **on**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#on)

▸ **on**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#on)

▸ **on**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#on)

▸ **on**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#on)

▸ **on**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#on)

▸ **on**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#on)

▸ **on**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#on)

___

### once

▸ **once**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#once)

▸ **once**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#once)

▸ **once**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#once)

▸ **once**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#once)

▸ **once**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#once)

▸ **once**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#once)

▸ **once**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#once)

▸ **once**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#once)

___

### pause

▸ **pause**(): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[pause](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#pause)

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#pipe)

___

### pipeThrough

▸ **pipeThrough**<`T`\>(`transform`, `options?`): [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform` | [`ReadableWritablePair`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md)<`T`, `any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`T`\>

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#pipethrough)

___

### pipeTo

▸ **pipeTo**(`destination`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> |
| `options?` | [`StreamPipeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/StreamPipeOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#pipeto)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependlistener)

▸ **prependListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Adds a **one-time**`listener` function for the event named `eventName` to the_beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"close"`` | The name of the event. |
| `listener` | () => `void` | The callback function |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependoncelistener)

▸ **prependOnceListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#prependoncelistener)

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[push](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#push)

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#rawlisteners)

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[read](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#read)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removelistener)

▸ **removeListener**(`event`, `listener`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#removelistener)

___

### resume

▸ **resume**(): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[resume](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#resume)

___

### setAAD

▸ **setAAD**(`buffer`, `options?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBufferView` |
| `options?` | `Object` |
| `options.plaintextLength` | `number` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

▸ **setAAD**(`buffer`, `options?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBufferView` |
| `options?` | `Object` |
| `options.plaintextLength` | `number` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

___

### setAutoPadding

▸ **setAutoPadding**(`autoPadding?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

When using block encryption algorithms, the `Cipher` class will automatically
add padding to the input data to the appropriate block size. To disable the
default padding call `cipher.setAutoPadding(false)`.

When `autoPadding` is `false`, the length of the entire input data must be a
multiple of the cipher's block size or `cipher.final()` will throw an error.
Disabling automatic padding is useful for non-standard padding, for instance
using `0x0` instead of PKCS padding.

The `cipher.setAutoPadding()` method must be called before `cipher.final()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `autoPadding?` | `boolean` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

for method chaining.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[setAutoPadding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#setautopadding)

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The new default encoding |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[setDefaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#setdefaultencoding)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The encoding to use. |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[setEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#setencoding)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#setmaxlisteners)

___

### tee

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#tee)

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using`process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[uncork](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#uncork)

___

### unpipe

▸ **unpipe**(`destination?`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`any`\> | Optional specific stream to unpipe |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[unpipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#unpipe)

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | `BufferEncoding` | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[unshift](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#unshift)

___

### update

▸ **update**(`data`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Updates the cipher with `data`. If the `inputEncoding` argument is given,
the `data`argument is a string using the specified encoding. If the `inputEncoding`argument is not given, `data` must be a `Buffer`, `TypedArray`, or`DataView`. If `data` is a `Buffer`,
`TypedArray`, or `DataView`, then`inputEncoding` is ignored.

The `outputEncoding` specifies the output format of the enciphered
data. If the `outputEncoding`is specified, a string using the specified encoding is returned. If no`outputEncoding` is provided, a `Buffer` is returned.

The `cipher.update()` method can be called multiple times with new data until `cipher.final()` is called. Calling `cipher.update()` after `cipher.final()` will result in an error being
thrown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#update)

▸ **update**(`data`, `inputEncoding`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `inputEncoding` | [`Encoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#encoding) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#update)

▸ **update**(`data`, `inputEncoding`, `outputEncoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBufferView` |
| `inputEncoding` | `undefined` |
| `outputEncoding` | [`Encoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#encoding) |

#### Returns

`string`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#update)

▸ **update**(`data`, `inputEncoding`, `outputEncoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `inputEncoding` | [`Encoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#encoding) |
| `outputEncoding` | [`Encoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#encoding) |

#### Returns

`string`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#update)

___

### wrap

▸ **wrap**(`stream`): [`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | An "old style" readable stream |

#### Returns

[`CipherGCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.CipherGCM.md)

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[wrap](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#wrap)

___

### write

▸ **write**(`chunk`, `encoding?`, `cb?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.CipherGCM.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `encoding?` | `BufferEncoding` | Callback for when this chunk of data is flushed. |
| `cb?` | (`error`: `Error`) => `void` | - |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#write)

▸ **write**(`chunk`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[Cipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md).[write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Cipher.md#write)