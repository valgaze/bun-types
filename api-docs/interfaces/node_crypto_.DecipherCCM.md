[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / DecipherCCM

# Interface: DecipherCCM

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).DecipherCCM

Instances of the `Decipher` class are used to decrypt data. The class can be
used in one of two ways:

* As a `stream` that is both readable and writable, where plain encrypted
data is written to produce unencrypted data on the readable side, or
* Using the `decipher.update()` and `decipher.final()` methods to
produce the unencrypted data.

The [createDecipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md#createdecipher) or [createDecipheriv](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md#createdecipheriv) methods are
used to create `Decipher` instances. `Decipher` objects are not to be created
directly using the `new` keyword.

Example: Using `Decipher` objects as streams:

```js
import { Buffer } from 'buffer';
const {
  scryptSync,
  createDecipheriv
} = await import('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Key length is dependent on the algorithm. In this case for aes192, it is
// 24 bytes (192 bits).
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

let decrypted = '';
decipher.on('readable', () => {
  while (null !== (chunk = decipher.read())) {
    decrypted += chunk.toString('utf8');
  }
});
decipher.on('end', () => {
  console.log(decrypted);
  // Prints: some clear text data
});

// Encrypted with same algorithm, key and iv.
const encrypted =
  'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
decipher.write(encrypted, 'hex');
decipher.end();
```

Example: Using `Decipher` and piped streams:

```js
import {
  createReadStream,
  createWriteStream,
} from 'fs';
import { Buffer } from 'buffer';
const {
  scryptSync,
  createDecipheriv
} = await import('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

const input = createReadStream('test.enc');
const output = createWriteStream('test.js');

input.pipe(decipher).pipe(output);
```

Example: Using the `decipher.update()` and `decipher.final()` methods:

```js
import { Buffer } from 'buffer';
const {
  scryptSync,
  createDecipheriv
} = await import('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Use the async `crypto.scrypt()` instead.
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = createDecipheriv(algorithm, key, iv);

// Encrypted using same algorithm, key and iv.
const encrypted =
  'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
// Prints: some clear text data
```

## Hierarchy

- [`Decipher`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md)

  ↳ **`DecipherCCM`**

## Table of contents

### Properties

- [allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#allowhalfopen)
- [destroyed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#destroyed)
- [locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#locked)
- [readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#readable)
- [readableAborted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#readableaborted)
- [readableEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#readableencoding)
- [readableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#readableended)
- [readableFlowing](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#readableflowing)
- [readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#readablehighwatermark)
- [readableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#readablelength)
- [readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#readableobjectmode)
- [writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#writable)
- [writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#writablecorked)
- [writableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#writableended)
- [writableFinished](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#writablefinished)
- [writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#writablehighwatermark)
- [writableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#writablelength)
- [writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#writableobjectmode)

### Methods

- [[asyncIterator]](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#[asynciterator])
- [\_construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_construct)
- [\_destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_destroy)
- [\_final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_final)
- [\_flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_flush)
- [\_read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_read)
- [\_transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_transform)
- [\_write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_write)
- [\_writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_writev)
- [abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#abort)
- [addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#addlistener)
- [cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#cancel)
- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#close)
- [cork](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#cork)
- [destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#destroy)
- [emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#emit)
- [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#end)
- [eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#eventnames)
- [final](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#final)
- [forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#foreach)
- [getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#getmaxlisteners)
- [getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#getreader)
- [getWriter](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#getwriter)
- [isPaused](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#ispaused)
- [listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#listenercount)
- [listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#listeners)
- [off](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#off)
- [on](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#on)
- [once](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#once)
- [pause](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#pause)
- [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#pipe)
- [pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#pipethrough)
- [pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#pipeto)
- [prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#prependlistener)
- [prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#prependoncelistener)
- [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#push)
- [rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#rawlisteners)
- [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#read)
- [removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#removealllisteners)
- [removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#removelistener)
- [resume](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#resume)
- [setAAD](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#setaad)
- [setAuthTag](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#setauthtag)
- [setAutoPadding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#setautopadding)
- [setDefaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#setdefaultencoding)
- [setEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#setencoding)
- [setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#setmaxlisteners)
- [tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#tee)
- [uncork](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#uncork)
- [unpipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#unpipe)
- [unshift](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#unshift)
- [update](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#update)
- [wrap](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#wrap)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#write)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[allowHalfOpen](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#allowhalfopen)

#### Defined in

[stream.d.ts:863](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L863)

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[destroyed](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#destroyed)

#### Defined in

[stream.d.ts:121](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L121)

___

### locked

• `Readonly` **locked**: `boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[locked](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#locked)

#### Defined in

[stream.d.ts:50](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L50)

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#readable)

#### Defined in

[stream.d.ts:90](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L90)

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[readableAborted](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#readableaborted)

#### Defined in

[stream.d.ts:85](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L85)

___

### readableEncoding

• `Readonly` **readableEncoding**: `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[readableEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#readableencoding)

#### Defined in

[stream.d.ts:94](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L94)

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[readableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#readableended)

#### Defined in

[stream.d.ts:98](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L98)

___

### readableFlowing

• `Readonly` **readableFlowing**: `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[readableFlowing](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#readableflowing)

#### Defined in

[stream.d.ts:103](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L103)

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[readableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#readablehighwatermark)

#### Defined in

[stream.d.ts:107](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L107)

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[readableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#readablelength)

#### Defined in

[stream.d.ts:113](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L113)

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[readableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#readableobjectmode)

#### Defined in

[stream.d.ts:117](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L117)

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#writable)

#### Defined in

[stream.d.ts:847](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L847)

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[writableCorked](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#writablecorked)

#### Defined in

[stream.d.ts:853](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L853)

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[writableEnded](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#writableended)

#### Defined in

[stream.d.ts:848](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L848)

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[writableFinished](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#writablefinished)

#### Defined in

[stream.d.ts:849](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L849)

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[writableHighWaterMark](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#writablehighwatermark)

#### Defined in

[stream.d.ts:850](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L850)

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[writableLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#writablelength)

#### Defined in

[stream.d.ts:851](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L851)

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[writableObjectMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#writableobjectmode)

#### Defined in

[stream.d.ts:852](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L852)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[[asyncIterator]](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#[asynciterator])

#### Defined in

[stream.d.ts:491](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L491)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[_construct](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#_construct)

#### Defined in

[stream.d.ts:123](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L123)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[_destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#_destroy)

#### Defined in

[stream.d.ts:913](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L913)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[_final](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#_final)

#### Defined in

[stream.d.ts:917](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L917)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[_flush](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#_flush)

#### Defined in

[stream.d.ts:987](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L987)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[_read](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#_read)

#### Defined in

[stream.d.ts:124](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L124)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[_transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#_transform)

#### Defined in

[stream.d.ts:982](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L982)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[_write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#_write)

#### Defined in

[stream.d.ts:901](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L901)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[_writev](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#_writev)

#### Defined in

[stream.d.ts:906](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L906)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[abort](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#abort)

#### Defined in

[stream.d.ts:865](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L865)

___

### addListener

▸ **addListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#addlistener)

#### Defined in

[stream.d.ts:423](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L423)

▸ **addListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#addlistener)

#### Defined in

[stream.d.ts:424](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L424)

▸ **addListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#addlistener)

#### Defined in

[stream.d.ts:425](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L425)

▸ **addListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#addlistener)

#### Defined in

[stream.d.ts:426](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L426)

▸ **addListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#addlistener)

#### Defined in

[stream.d.ts:427](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L427)

▸ **addListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#addlistener)

#### Defined in

[stream.d.ts:428](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L428)

▸ **addListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#addlistener)

#### Defined in

[stream.d.ts:429](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L429)

▸ **addListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[addListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#addlistener)

#### Defined in

[stream.d.ts:430](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L430)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[cancel](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#cancel)

#### Defined in

[stream.d.ts:51](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L51)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[close](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#close)

#### Defined in

[stream.d.ts:866](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L866)

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#uncork) or [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#end) methods are called.

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[cork](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#cork)

#### Defined in

[stream.d.ts:931](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L931)

___

### destroy

▸ **destroy**(`error?`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[destroy](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#destroy)

#### Defined in

[stream.d.ts:411](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L411)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#emit)

#### Defined in

[stream.d.ts:434](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L434)

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#emit)

#### Defined in

[stream.d.ts:435](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L435)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#emit)

#### Defined in

[stream.d.ts:436](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L436)

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#emit)

#### Defined in

[stream.d.ts:437](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L437)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#emit)

#### Defined in

[stream.d.ts:438](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L438)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#emit)

#### Defined in

[stream.d.ts:439](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L439)

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#emit)

#### Defined in

[stream.d.ts:440](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L440)

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[emit](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#emit)

#### Defined in

[stream.d.ts:441](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L441)

___

### end

▸ **end**(`cb?`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#write) method after calling [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#end) will raise an error.

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#end)

#### Defined in

[stream.d.ts:928](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L928)

▸ **end**(`chunk`, `cb?`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#end)

#### Defined in

[stream.d.ts:929](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L929)

▸ **end**(`chunk`, `encoding?`, `cb?`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#end)

#### Defined in

[stream.d.ts:930](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L930)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[eventNames](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#eventnames)

#### Defined in

[events.d.ts:376](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L376)

___

### final

▸ **final**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Once the `decipher.final()` method has been called, the `Decipher` object can
no longer be used to decrypt data. Attempts to call `decipher.final()` more
than once will result in an error being thrown.

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Any remaining deciphered contents. If `outputEncoding` is specified, a string is returned. If an `outputEncoding` is not provided, a [Buffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Buffer.md) is returned.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[final](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#final)

#### Defined in

[crypto.d.ts:1207](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1207)

▸ **final**(`outputEncoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputEncoding` | `BufferEncoding` |

#### Returns

`string`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[final](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#final)

#### Defined in

[crypto.d.ts:1208](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1208)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[forEach](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#foreach)

#### Defined in

[stream.d.ts:62](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L62)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

#### Returns

`number`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[getMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#getmaxlisteners)

#### Defined in

[events.d.ts:234](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L234)

___

### getReader

▸ **getReader**(): [`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Returns

[`ReadableStreamDefaultReader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestreamdefaultreader)<`any`\>

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[getReader](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#getreader)

#### Defined in

[stream.d.ts:52](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L52)

___

### getWriter

▸ **getWriter**(): [`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Returns

[`WritableStreamDefaultWriter`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestreamdefaultwriter)<`any`\>

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[getWriter](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#getwriter)

#### Defined in

[stream.d.ts:867](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L867)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[isPaused](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#ispaused)

#### Defined in

[stream.d.ts:279](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L279)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[listenerCount](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#listenercount)

#### Defined in

[events.d.ts:320](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L320)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[listeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#listeners)

#### Defined in

[events.d.ts:246](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L246)

___

### off

▸ **off**(`eventName`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[off](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#off)

#### Defined in

[events.d.ts:210](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L210)

___

### on

▸ **on**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#on)

#### Defined in

[stream.d.ts:442](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L442)

▸ **on**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#on)

#### Defined in

[stream.d.ts:443](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L443)

▸ **on**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#on)

#### Defined in

[stream.d.ts:444](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L444)

▸ **on**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#on)

#### Defined in

[stream.d.ts:445](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L445)

▸ **on**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#on)

#### Defined in

[stream.d.ts:446](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L446)

▸ **on**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#on)

#### Defined in

[stream.d.ts:447](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L447)

▸ **on**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#on)

#### Defined in

[stream.d.ts:448](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L448)

▸ **on**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[on](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#on)

#### Defined in

[stream.d.ts:449](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L449)

___

### once

▸ **once**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#once)

#### Defined in

[stream.d.ts:450](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L450)

▸ **once**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#once)

#### Defined in

[stream.d.ts:451](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L451)

▸ **once**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#once)

#### Defined in

[stream.d.ts:452](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L452)

▸ **once**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#once)

#### Defined in

[stream.d.ts:453](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L453)

▸ **once**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#once)

#### Defined in

[stream.d.ts:454](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L454)

▸ **once**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#once)

#### Defined in

[stream.d.ts:455](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L455)

▸ **once**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#once)

#### Defined in

[stream.d.ts:456](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L456)

▸ **once**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[once](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#once)

#### Defined in

[stream.d.ts:457](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L457)

___

### pause

▸ **pause**(): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[pause](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#pause)

#### Defined in

[stream.d.ts:245](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L245)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#pipe)

#### Defined in

[stream.d.ts:22](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L22)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[pipeThrough](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#pipethrough)

#### Defined in

[stream.d.ts:53](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L53)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[pipeTo](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#pipeto)

#### Defined in

[stream.d.ts:57](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L57)

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependlistener)

#### Defined in

[stream.d.ts:458](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L458)

▸ **prependListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependlistener)

#### Defined in

[stream.d.ts:459](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L459)

▸ **prependListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependlistener)

#### Defined in

[stream.d.ts:460](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L460)

▸ **prependListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependlistener)

#### Defined in

[stream.d.ts:461](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L461)

▸ **prependListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependlistener)

#### Defined in

[stream.d.ts:462](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L462)

▸ **prependListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependlistener)

#### Defined in

[stream.d.ts:463](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L463)

▸ **prependListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependlistener)

#### Defined in

[stream.d.ts:464](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L464)

▸ **prependListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependlistener)

#### Defined in

[stream.d.ts:465](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L465)

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependoncelistener)

#### Defined in

[stream.d.ts:469](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L469)

▸ **prependOnceListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependoncelistener)

#### Defined in

[stream.d.ts:470](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L470)

▸ **prependOnceListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependoncelistener)

#### Defined in

[stream.d.ts:471](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L471)

▸ **prependOnceListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependoncelistener)

#### Defined in

[stream.d.ts:472](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L472)

▸ **prependOnceListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependoncelistener)

#### Defined in

[stream.d.ts:473](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L473)

▸ **prependOnceListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependoncelistener)

#### Defined in

[stream.d.ts:474](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L474)

▸ **prependOnceListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependoncelistener)

#### Defined in

[stream.d.ts:475](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L475)

▸ **prependOnceListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[prependOnceListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#prependoncelistener)

#### Defined in

[stream.d.ts:476](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L476)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[push](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#push)

#### Defined in

[stream.d.ts:396](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L396)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[rawListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#rawlisteners)

#### Defined in

[events.d.ts:275](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L275)

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

Calling [read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[read](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#read)

#### Defined in

[stream.d.ts:200](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L200)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeAllListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removealllisteners)

#### Defined in

[events.d.ts:220](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L220)

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removelistener)

#### Defined in

[stream.d.ts:480](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L480)

▸ **removeListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removelistener)

#### Defined in

[stream.d.ts:481](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L481)

▸ **removeListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removelistener)

#### Defined in

[stream.d.ts:482](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L482)

▸ **removeListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removelistener)

#### Defined in

[stream.d.ts:483](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L483)

▸ **removeListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removelistener)

#### Defined in

[stream.d.ts:484](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L484)

▸ **removeListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removelistener)

#### Defined in

[stream.d.ts:485](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L485)

▸ **removeListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removelistener)

#### Defined in

[stream.d.ts:486](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L486)

▸ **removeListener**(`event`, `listener`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[removeListener](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#removelistener)

#### Defined in

[stream.d.ts:487](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L487)

___

### resume

▸ **resume**(): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[resume](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#resume)

#### Defined in

[stream.d.ts:263](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L263)

___

### setAAD

▸ **setAAD**(`buffer`, `options`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBufferView` |
| `options` | `Object` |
| `options.plaintextLength` | `number` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Defined in

[crypto.d.ts:1224](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1224)

▸ **setAAD**(`buffer`, `options`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBufferView` |
| `options` | `Object` |
| `options.plaintextLength` | `number` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Defined in

[dist/types.d.ts:17243](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17243)

___

### setAuthTag

▸ **setAuthTag**(`buffer`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBufferView` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Defined in

[crypto.d.ts:1223](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1223)

▸ **setAuthTag**(`buffer`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBufferView` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Defined in

[dist/types.d.ts:17242](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L17242)

___

### setAutoPadding

▸ **setAutoPadding**(`auto_padding?`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

When data has been encrypted without standard block padding, calling`decipher.setAutoPadding(false)` will disable automatic padding to prevent `decipher.final()` from checking for and
removing padding.

Turning auto padding off will only work if the input data's length is a
multiple of the ciphers block size.

The `decipher.setAutoPadding()` method must be called before `decipher.final()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `auto_padding?` | `boolean` |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

for method chaining.

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[setAutoPadding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#setautopadding)

#### Defined in

[crypto.d.ts:1220](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1220)

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The new default encoding |

#### Returns

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[setDefaultEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#setdefaultencoding)

#### Defined in

[stream.d.ts:927](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L927)

___

### setEncoding

▸ **setEncoding**(`encoding`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[setEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#setencoding)

#### Defined in

[stream.d.ts:224](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L224)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[setMaxListeners](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#setmaxlisteners)

#### Defined in

[events.d.ts:229](https://github.com/valgaze/bun-types/blob/6f8dbf8/events.d.ts#L229)

___

### tee

▸ **tee**(): [[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Returns

[[`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>, [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\>]

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[tee](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#tee)

#### Defined in

[stream.d.ts:61](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L61)

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#cork) was called.

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[uncork](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#uncork)

#### Defined in

[stream.d.ts:932](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L932)

___

### unpipe

▸ **unpipe**(`destination?`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#pipe) method.

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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[unpipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#unpipe)

#### Defined in

[stream.d.ts:305](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L305)

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

Unlike [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#push) will reset the reading state appropriately,
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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[unshift](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#unshift)

#### Defined in

[stream.d.ts:370](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L370)

___

### update

▸ **update**(`data`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Updates the decipher with `data`. If the `inputEncoding` argument is given,
the `data`argument is a string using the specified encoding. If the `inputEncoding`argument is not given, `data` must be a `Buffer`. If `data` is a `Buffer` then `inputEncoding` is
ignored.

The `outputEncoding` specifies the output format of the enciphered
data. If the `outputEncoding`is specified, a string using the specified encoding is returned. If no`outputEncoding` is provided, a `Buffer` is returned.

The `decipher.update()` method can be called multiple times with new data until `decipher.final()` is called. Calling `decipher.update()` after `decipher.final()` will result in an error
being thrown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#update)

#### Defined in

[crypto.d.ts:1188](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1188)

▸ **update**(`data`, `inputEncoding`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `inputEncoding` | [`Encoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#encoding) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#update)

#### Defined in

[crypto.d.ts:1189](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1189)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#update)

#### Defined in

[crypto.d.ts:1190](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1190)

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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[update](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#update)

#### Defined in

[crypto.d.ts:1195](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L1195)

___

### wrap

▸ **wrap**(`stream`): [`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
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

[`DecipherCCM`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.DecipherCCM.md)

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[wrap](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#wrap)

#### Defined in

[stream.d.ts:395](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L395)

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
recommended to encapsulate the logic into a `Readable` and use [pipe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.DecipherCCM.md#pipe). However, if calling `write()` is preferred, it is
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

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#write)

#### Defined in

[stream.d.ts:918](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L918)

▸ **write**(`chunk`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | (`error`: `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[Decipher](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md).[write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.Decipher.md#write)

#### Defined in

[stream.d.ts:923](https://github.com/valgaze/bun-types/blob/6f8dbf8/stream.d.ts#L923)
