[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "bun"

# Namespace: "bun"

Bun.js runtime APIs

**`Example`**

```js
import {file} from 'bun';

// Log the file to the console
const input = await file('/path/to/file.txt').text();
console.log(input);
```

This module aliases `globalThis.Bun`.

## Table of contents

### Classes

- [ArrayBufferSink](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.ArrayBufferSink.md)
- [CryptoHashInterface](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.CryptoHashInterface.md)
- [MD4](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.MD4.md)
- [MD5](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.MD5.md)
- [SHA1](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA1.md)
- [SHA224](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA224.md)
- [SHA256](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA256.md)
- [SHA384](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA384.md)
- [SHA512](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512.md)
- [SHA512\_256](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.SHA512_256.md)
- [Transpiler](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.Transpiler.md)

### Interfaces

- [EditorOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.EditorOptions.md)
- [Errorlike](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Errorlike.md)
- [FileBlob](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)
- [Hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Hash.md)
- [HeapSnapshot](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.HeapSnapshot.md)
- [Import](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Import.md)
- [MMapOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.MMapOptions.md)
- [SSLAdvancedOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md)
- [SSLOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLOptions.md)
- [ServeOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.ServeOptions.md)
- [Server](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md)
- [SystemError](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SystemError.md)
- [TranspilerOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md)
- [unsafe](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.unsafe.md)

### Type Aliases

- [DigestEncoding](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#digestencoding)
- [JavaScriptLoader](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#javascriptloader)
- [MacroMap](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#macromap)
- [Platform](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#platform)
- [SSLServeOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#sslserveoptions)
- [Serve](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#serve)

### Variables

- [enableANSIColors](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#enableansicolors)
- [main](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#main)
- [stderr](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#stderr)
- [stdin](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#stdin)
- [stdout](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#stdout)
- [unsafe](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#unsafe)

### Functions

- [allocUnsafe](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#allocunsafe)
- [concatArrayBuffers](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#concatarraybuffers)
- [escapeHTML](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#escapehtml)
- [file](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#file)
- [fileURLToPath](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#fileurltopath)
- [gc](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#gc)
- [generateHeapSnapshot](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#generateheapsnapshot)
- [hash](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#hash)
- [inspect](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#inspect)
- [mmap](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#mmap)
- [nanoseconds](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#nanoseconds)
- [openInEditor](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#openineditor)
- [pathToFileURL](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#pathtofileurl)
- [readableStreamToArray](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoarray)
- [readableStreamToArrayBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoarraybuffer)
- [readableStreamToBlob](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoblob)
- [readableStreamToJSON](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtojson)
- [readableStreamToText](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtotext)
- [resolve](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#resolve)
- [resolveSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#resolvesync)
- [serve](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#serve-1)
- [sha](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#sha)
- [shrink](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#shrink)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#write)

## Type Aliases

### DigestEncoding

Ƭ **DigestEncoding**: ``"hex"`` \| ``"base64"``

#### Defined in

[bun.d.ts:961](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L961)

___

### JavaScriptLoader

Ƭ **JavaScriptLoader**: ``"jsx"`` \| ``"js"`` \| ``"ts"`` \| ``"tsx"``

#### Defined in

[bun.d.ts:467](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L467)

___

### MacroMap

Ƭ **MacroMap**: `Record`<`string`, `Record`<`string`, `string`\>\>

This lets you use macros as regular imports

**`Example`**

```
  {
    "react-relay": {
      "graphql": "bun-macro-relay/bun-macro-relay.tsx"
    }
  }
 ```

#### Defined in

[bun.d.ts:406](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L406)

___

### Platform

Ƭ **Platform**: ``"bun"`` \| ``"browser"`` \| ``"node"`` \| ``"neutral"``

#### Defined in

[bun.d.ts:452](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L452)

___

### SSLServeOptions

Ƭ **SSLServeOptions**: [`ServeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.ServeOptions.md) & [`SSLOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLOptions.md) & [`SSLAdvancedOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md) & { `serverNames`: `Record`<`string`, [`SSLOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLOptions.md) & [`SSLAdvancedOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md)\>  }

#### Defined in

[bun.d.ts:757](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L757)

___

### Serve

Ƭ **Serve**: [`SSLServeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#sslserveoptions) \| [`ServeOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.ServeOptions.md)

#### Defined in

[bun.d.ts:802](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L802)

## Variables

### enableANSIColors

• `Const` **enableANSIColors**: `boolean`

Are ANSI colors enabled for stdin and stdout?

Used for [log](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/console.md#log)

#### Defined in

[bun.d.ts:968](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L968)

___

### main

• `Const` **main**: `string`

What script launched bun?

Absolute file path

**`Example`**

```ts
"/never-gonna-give-you-up.js"
```

#### Defined in

[bun.d.ts:977](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L977)

___

### stderr

• `Const` **stderr**: [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

Write to stderr

#### Defined in

[bun.d.ts:926](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L926)

___

### stdin

• `Const` **stdin**: [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

Read from stdin

This is read-only

#### Defined in

[bun.d.ts:932](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L932)

___

### stdout

• `Const` **stdout**: [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

Write to stdout

#### Defined in

[bun.d.ts:924](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L924)

___

### unsafe

• **unsafe**: [`unsafe`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#unsafe)

#### Defined in

[bun.d.ts:934](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L934)

[bun.d.ts:959](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L959)

## Functions

### allocUnsafe

▸ **allocUnsafe**(`size`): `Uint8Array`

Allocate a new [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) without zeroing the bytes.

This can be 3.5x faster than `new Uint8Array(size)`, but if you send uninitialized memory to your users (even unintentionally), it can potentially leak anything recently in memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[bun.d.ts:879](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L879)

▸ **allocUnsafe**(`size`): `Uint8Array`

Allocate a new [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) without zeroing the bytes.

This can be 3.5x faster than `new Uint8Array(size)`, but if you send uninitialized memory to your users (even unintentionally), it can potentially leak anything recently in memory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`Uint8Array`

#### Defined in

[dist/types.d.ts:889](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L889)

___

### concatArrayBuffers

▸ **concatArrayBuffers**(`buffers`): `ArrayBuffer`

Concatenate an array of typed arrays into a single `ArrayBuffer`. This is a fast path.

You can do this manually if you'd like, but this function will generally
be a little faster.

If you want a `Uint8Array` instead, consider `Buffer.concat`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffers` | (`ArrayBufferLike` \| `ArrayBufferView`)[] | An array of typed arrays to concatenate. |

#### Returns

`ArrayBuffer`

An `ArrayBuffer` with the data from all the buffers.

Here is similar code to do it manually, except about 30% slower:
```js
  var chunks = [...];
  var size = 0;
  for (const chunk of chunks) {
    size += chunk.byteLength;
  }
  var buffer = new ArrayBuffer(size);
  var view = new Uint8Array(buffer);
  var offset = 0;
  for (const chunk of chunks) {
    view.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return buffer;
```

This function is faster because it uses uninitialized memory when copying. Since the entire
length of the buffer is known, it is safe to use uninitialized memory.

#### Defined in

[bun.d.ts:216](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L216)

▸ **concatArrayBuffers**(`buffers`): `ArrayBuffer`

Concatenate an array of typed arrays into a single `ArrayBuffer`. This is a fast path.

You can do this manually if you'd like, but this function will generally
be a little faster.

If you want a `Uint8Array` instead, consider `Buffer.concat`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffers` | (`ArrayBufferLike` \| `ArrayBufferView`)[] | An array of typed arrays to concatenate. |

#### Returns

`ArrayBuffer`

An `ArrayBuffer` with the data from all the buffers.

Here is similar code to do it manually, except about 30% slower:
```js
  var chunks = [...];
  var size = 0;
  for (const chunk of chunks) {
    size += chunk.byteLength;
  }
  var buffer = new ArrayBuffer(size);
  var view = new Uint8Array(buffer);
  var offset = 0;
  for (const chunk of chunks) {
    view.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return buffer;
```

This function is faster because it uses uninitialized memory when copying. Since the entire
length of the buffer is known, it is safe to use uninitialized memory.

#### Defined in

[dist/types.d.ts:226](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L226)

___

### escapeHTML

▸ **escapeHTML**(`input`): `string`

Escape the following characters in a string:

- `"` becomes `"&quot;"`
- `&` becomes `"&amp;"`
- `'` becomes `"&#x27;"`
- `<` becomes `"&lt;"`
- `>` becomes `"&gt;"`

This function is optimized for large input. On an M1X, it processes 480 MB/s -
20 GB/s, depending on how much data is being escaped and whether there is non-ascii
text.

Non-string types will be converted to a string before escaping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `number` \| `boolean` \| `object` |

#### Returns

`string`

#### Defined in

[bun.d.ts:291](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L291)

▸ **escapeHTML**(`input`): `string`

Escape the following characters in a string:

- `"` becomes `"&quot;"`
- `&` becomes `"&amp;"`
- `'` becomes `"&#x27;"`
- `<` becomes `"&lt;"`
- `>` becomes `"&gt;"`

This function is optimized for large input. On an M1X, it processes 480 MB/s -
20 GB/s, depending on how much data is being escaped and whether there is non-ascii
text.

Non-string types will be converted to a string before escaping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` \| `number` \| `boolean` \| `object` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:301](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L301)

___

### file

▸ **file**(`path`, `options?`): [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.
- `type` is auto-set based on the file extension when possible

**`Example`**

```js
const file = Bun.file("./hello.json");
console.log(file.type); // "application/json"
console.log(await file.json()); // { hello: "world" }
```

**`Example`**

```js
await Bun.write(
  Bun.file("./hello.txt"),
  "Hello, world!"
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file (lazily loaded) |
| `options?` | [`BlobPropertyBag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

#### Defined in

[bun.d.ts:830](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L830)

▸ **file**(`path`, `options?`): [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

`Blob` that leverages the fastest system calls available to operate on files.

This Blob is lazy. It won't do any work until you read from it. Errors propagate as promise rejections.

`Blob.size` will not be valid until the contents of the file are read at least once.
`Blob.type` will have a default set based on the file extension

**`Example`**

```js
const file = Bun.file(new TextEncoder.encode("./hello.json"));
console.log(file.type); // "application/json"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Uint8Array` \| `ArrayBufferLike` | The path to the file as a byte buffer (the buffer is copied) |
| `options?` | [`BlobPropertyBag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

#### Defined in

[bun.d.ts:849](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L849)

▸ **file**(`fileDescriptor`, `options?`): [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.

**`Example`**

```js
const file = Bun.file(fd);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileDescriptor` | `number` | The file descriptor of the file |
| `options?` | [`BlobPropertyBag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

#### Defined in

[bun.d.ts:869](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L869)

▸ **file**(`path`, `options?`): [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.
- `type` is auto-set based on the file extension when possible

**`Example`**

```js
const file = Bun.file("./hello.json");
console.log(file.type); // "application/json"
console.log(await file.json()); // { hello: "world" }
```

**`Example`**

```js
await Bun.write(
  Bun.file("./hello.txt"),
  "Hello, world!"
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to the file (lazily loaded) |
| `options?` | [`BlobPropertyBag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

#### Defined in

[dist/types.d.ts:840](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L840)

▸ **file**(`path`, `options?`): [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

`Blob` that leverages the fastest system calls available to operate on files.

This Blob is lazy. It won't do any work until you read from it. Errors propagate as promise rejections.

`Blob.size` will not be valid until the contents of the file are read at least once.
`Blob.type` will have a default set based on the file extension

**`Example`**

```js
const file = Bun.file(new TextEncoder.encode("./hello.json"));
console.log(file.type); // "application/json"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `Uint8Array` \| `ArrayBufferLike` | The path to the file as a byte buffer (the buffer is copied) |
| `options?` | [`BlobPropertyBag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

#### Defined in

[dist/types.d.ts:859](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L859)

▸ **file**(`fileDescriptor`, `options?`): [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

[`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) powered by the fastest system calls available for operating on files.

This Blob is lazy. That means it won't do any work until you read from it.

- `size` will not be valid until the contents of the file are read at least once.

**`Example`**

```js
const file = Bun.file(fd);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileDescriptor` | `number` | The file descriptor of the file |
| `options?` | [`BlobPropertyBag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/BlobPropertyBag.md) | - |

#### Returns

[`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md)

#### Defined in

[dist/types.d.ts:879](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L879)

___

### fileURLToPath

▸ **fileURLToPath**(`url`): `string`

Convert a [URL](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URL.md) to a filesystem path.

**`Throws`**

If the URL is not a URL.

**`Example`**

```js
const path = Bun.fileURLToPath(new URL("file:///foo/bar.txt"));
console.log(path); // "/foo/bar.txt"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#url) | The URL to convert. |

#### Returns

`string`

A filesystem path.

#### Defined in

[bun.d.ts:321](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L321)

▸ **fileURLToPath**(`url`): `string`

Convert a [URL](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URL.md) to a filesystem path.

**`Throws`**

If the URL is not a URL.

**`Example`**

```js
const path = Bun.fileURLToPath(new URL("file:///foo/bar.txt"));
console.log(path); // "/foo/bar.txt"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#url) | The URL to convert. |

#### Returns

`string`

A filesystem path.

#### Defined in

[dist/types.d.ts:331](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L331)

___

### gc

▸ **gc**(`force`): `void`

Manually trigger the garbage collector

This does two things:
1. It tells JavaScriptCore to run the garbage collector
2. It tells [mimalloc](https://github.com/microsoft/mimalloc) to clean up fragmented memory. Mimalloc manages the heap not used in JavaScriptCore.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | `boolean` | Synchronously run the garbage collector |

#### Returns

`void`

#### Defined in

[bun.d.ts:988](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L988)

▸ **gc**(`force`): `void`

Manually trigger the garbage collector

This does two things:
1. It tells JavaScriptCore to run the garbage collector
2. It tells [mimalloc](https://github.com/microsoft/mimalloc) to clean up fragmented memory. Mimalloc manages the heap not used in JavaScriptCore.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `force` | `boolean` | Synchronously run the garbage collector |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:998](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L998)

___

### generateHeapSnapshot

▸ **generateHeapSnapshot**(): [`HeapSnapshot`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.HeapSnapshot.md)

Generate a heap snapshot for seeing where the heap is being used

#### Returns

[`HeapSnapshot`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.HeapSnapshot.md)

#### Defined in

[bun.d.ts:1025](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1025)

▸ **generateHeapSnapshot**(): [`HeapSnapshot`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.HeapSnapshot.md)

Generate a heap snapshot for seeing where the heap is being used

#### Returns

[`HeapSnapshot`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.HeapSnapshot.md)

#### Defined in

[dist/types.d.ts:1035](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1035)

___

### hash

▸ **hash**(`data`, `seed?`): `number` \| `bigint`

Hash a string or array buffer using Wyhash

This is not a cryptographic hash function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `ArrayBuffer` \| `ArrayBufferView` | The data to hash. |
| `seed?` | `number` | The seed to use. |

#### Returns

`number` \| `bigint`

#### Defined in

[bun.d.ts:415](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L415)

___

### inspect

▸ **inspect**(...`args`): `string`

Pretty-print an object the same as [log](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/console.md#log) to a `string`

Supports JSX

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

#### Defined in

[bun.d.ts:888](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L888)

▸ **inspect**(...`args`): `string`

Pretty-print an object the same as [log](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/console.md#log) to a `string`

Supports JSX

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:898](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L898)

___

### mmap

▸ **mmap**(`path`, `opts?`): `Uint8Array`

Open a file as a live-updating `Uint8Array` without copying memory
- Writing to the array writes to the file.
- Reading from the array reads from the file.

This uses the [`mmap()`](https://man7.org/linux/man-pages/man2/mmap.2.html) syscall under the hood.

---

This API inherently has some rough edges:
- It does not support empty files. It will throw a `SystemError` with `EINVAL`
- Usage on shared/networked filesystems is discouraged. It will be very slow.
- If you delete or truncate the file, that will crash bun. This is called a segmentation fault.

---

To close the file, set the array to `null` and it will be garbage collected eventually.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `opts?` | [`MMapOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.MMapOptions.md) |

#### Returns

`Uint8Array`

#### Defined in

[bun.d.ts:921](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L921)

▸ **mmap**(`path`, `opts?`): `Uint8Array`

Open a file as a live-updating `Uint8Array` without copying memory
- Writing to the array writes to the file.
- Reading from the array reads from the file.

This uses the [`mmap()`](https://man7.org/linux/man-pages/man2/mmap.2.html) syscall under the hood.

---

This API inherently has some rough edges:
- It does not support empty files. It will throw a `SystemError` with `EINVAL`
- Usage on shared/networked filesystems is discouraged. It will be very slow.
- If you delete or truncate the file, that will crash bun. This is called a segmentation fault.

---

To close the file, set the array to `null` and it will be garbage collected eventually.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `opts?` | [`MMapOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.MMapOptions.md) |

#### Returns

`Uint8Array`

#### Defined in

[dist/types.d.ts:931](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L931)

___

### nanoseconds

▸ **nanoseconds**(): `number`

Nanoseconds since Bun.js was started as an integer.

This uses a high-resolution monotonic system timer.

After 14 weeks of consecutive uptime, this function
wraps

#### Returns

`number`

#### Defined in

[bun.d.ts:1020](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1020)

▸ **nanoseconds**(): `number`

Nanoseconds since Bun.js was started as an integer.

This uses a high-resolution monotonic system timer.

After 14 weeks of consecutive uptime, this function
wraps

#### Returns

`number`

#### Defined in

[dist/types.d.ts:1030](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1030)

___

### openInEditor

▸ **openInEditor**(`path`, `options?`): `void`

Open a file in your local editor. Auto-detects via `$VISUAL` || `$EDITOR`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to open |
| `options?` | [`EditorOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.EditorOptions.md) | - |

#### Returns

`void`

#### Defined in

[bun.d.ts:1037](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1037)

▸ **openInEditor**(`path`, `options?`): `void`

Open a file in your local editor. Auto-detects via `$VISUAL` || `$EDITOR`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to open |
| `options?` | [`EditorOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.EditorOptions.md) | - |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:1047](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1047)

___

### pathToFileURL

▸ **pathToFileURL**(`path`): [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#url)

Convert a filesystem path to a file:// URL.

**`Example`**

```js
const url = Bun.pathToFileURL("/foo/bar.txt");
console.log(url.href); // "file:///foo/bar.txt"
```

Internally, this function uses WebKit's URL API to
convert the path to a file:// URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert. |

#### Returns

[`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#url)

A [URL](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URL.md) with the file:// scheme.

#### Defined in

[bun.d.ts:308](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L308)

▸ **pathToFileURL**(`path`): [`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#url)

Convert a filesystem path to a file:// URL.

**`Example`**

```js
const url = Bun.pathToFileURL("/foo/bar.txt");
console.log(url.href); // "file:///foo/bar.txt"
```

Internally, this function uses WebKit's URL API to
convert the path to a file:// URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path to convert. |

#### Returns

[`URL`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#url)

A [URL](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/URL.md) with the file:// scheme.

#### Defined in

[dist/types.d.ts:318](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L318)

___

### readableStreamToArray

▸ **readableStreamToArray**<`T`\>(`stream`): `Promise`<`T`[]\> \| `T`[]

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume |

#### Returns

`Promise`<`T`[]\> \| `T`[]

A promise that resolves with the chunks as an array

#### Defined in

[bun.d.ts:272](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L272)

▸ **readableStreamToArray**<`T`\>(`stream`): `Promise`<`T`[]\> \| `T`[]

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume |

#### Returns

`Promise`<`T`[]\> \| `T`[]

A promise that resolves with the chunks as an array

#### Defined in

[dist/types.d.ts:282](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L282)

___

### readableStreamToArrayBuffer

▸ **readableStreamToArrayBuffer**(`stream`): `Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single ArrayBuffer.

Each chunk must be a TypedArray or an ArrayBuffer. If you need to support
chunks of different types, consider [readableStreamToBlob](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoblob)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

A promise that resolves with the concatenated chunks or the concatenated chunks as an `ArrayBuffer`.

#### Defined in

[bun.d.ts:231](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L231)

▸ **readableStreamToArrayBuffer**(`stream`): `Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single ArrayBuffer.

Each chunk must be a TypedArray or an ArrayBuffer. If you need to support
chunks of different types, consider [readableStreamToBlob](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoblob)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`ArrayBuffer`\> \| `ArrayBuffer`

A promise that resolves with the concatenated chunks or the concatenated chunks as an `ArrayBuffer`.

#### Defined in

[dist/types.d.ts:241](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L241)

___

### readableStreamToBlob

▸ **readableStreamToBlob**(`stream`): `Promise`<`Blob`\>

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single Blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`Blob`\>

A promise that resolves with the concatenated chunks as a Blob.

#### Defined in

[bun.d.ts:243](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L243)

▸ **readableStreamToBlob**(`stream`): `Promise`<`Blob`\>

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single Blob.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`Blob`\>

A promise that resolves with the concatenated chunks as a Blob.

#### Defined in

[dist/types.d.ts:253](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L253)

___

### readableStreamToJSON

▸ **readableStreamToJSON**(`stream`): `Promise`<`any`\>

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single string and parse as JSON. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`any`\>

A promise that resolves with the concatenated chunks as a String.

#### Defined in

[bun.d.ts:263](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L263)

▸ **readableStreamToJSON**(`stream`): `Promise`<`any`\>

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single string and parse as JSON. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`any`\>

A promise that resolves with the concatenated chunks as a String.

#### Defined in

[dist/types.d.ts:273](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L273)

___

### readableStreamToText

▸ **readableStreamToText**(`stream`): `Promise`<`string`\>

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single string. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`string`\>

A promise that resolves with the concatenated chunks as a String.

#### Defined in

[bun.d.ts:253](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L253)

▸ **readableStreamToText**(`stream`): `Promise`<`string`\>

Consume all data from a [ReadableStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableStream.md) until it closes or errors.

Concatenate the chunks into a single string. Chunks must be a TypedArray or an ArrayBuffer. If you need to support chunks of different types, consider [readableStreamToBlob](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#readablestreamtoblob).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`any`\> | The stream to consume. |

#### Returns

`Promise`<`string`\>

A promise that resolves with the concatenated chunks as a String.

#### Defined in

[dist/types.d.ts:263](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L263)

___

### resolve

▸ **resolve**(`moduleId`, `parent`): `Promise`<`string`\>

Resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

For now, use the sync version. There is zero performance benefit to using this async version. It exists for future-proofing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[bun.d.ts:77](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L77)

▸ **resolve**(`moduleId`, `parent`): `Promise`<`string`\>

Resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

For now, use the sync version. There is zero performance benefit to using this async version. It exists for future-proofing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[dist/types.d.ts:87](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L87)

___

### resolveSync

▸ **resolveSync**(`moduleId`, `parent`): `string`

Synchronously resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`string`

#### Defined in

[bun.d.ts:67](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L67)

▸ **resolveSync**(`moduleId`, `parent`): `string`

Synchronously resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:77](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L77)

___

### serve

▸ **serve**(`options`): [`Server`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md)

Start a fast HTTP server.

**`Example`**

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response("Hello World!");
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```
-----

**`Example`**

Send a file

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response(Bun.file("./package.json"));
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Serve`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#serve) | Server options (port defaults to $PORT \|\| 8080)  ----- |

#### Returns

[`Server`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md)

#### Defined in

[bun.d.ts:59](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L59)

▸ **serve**(`options`): [`Server`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md)

Start a fast HTTP server.

**`Example`**

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response("Hello World!");
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```
-----

**`Example`**

Send a file

```ts
Bun.serve({
  fetch(req: Request): Response | Promise<Response> {
    return new Response(Bun.file("./package.json"));
  },

  // Optional port number - the default value is 3000
  port: process.env.PORT || 3000,
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Serve`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#serve) | Server options (port defaults to $PORT \|\| 8080)  ----- |

#### Returns

[`Server`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Server.md)

#### Defined in

[dist/types.d.ts:69](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L69)

___

### sha

▸ **sha**(`input`, `hashInto?`): `Uint8Array`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `hashInto?` | `Uint8Array` | optional `Uint8Array` to write the hash to. 32 bytes minimum.  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`Uint8Array`

#### Defined in

[bun.d.ts:1107](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1107)

▸ **sha**(`input`, `encoding`): `string`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `encoding` | [`DigestEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`string`

#### Defined in

[bun.d.ts:1127](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1127)

▸ **sha**(`input`, `hashInto?`): `Uint8Array`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `hashInto?` | `Uint8Array` | optional `Uint8Array` to write the hash to. 32 bytes minimum.  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`Uint8Array`

#### Defined in

[dist/types.d.ts:1117](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1117)

▸ **sha**(`input`, `encoding`): `string`

Hash `input` using [SHA-2 512/256](https://en.wikipedia.org/wiki/SHA-2#Comparison_of_SHA_functions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `StringOrBuffer` | `string`, `Uint8Array`, or `ArrayBuffer` to hash. `Uint8Array` or `ArrayBuffer` will be faster |
| `encoding` | [`DigestEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#digestencoding) | `DigestEncoding` to return the hash in  This hashing function balances speed with cryptographic strength. This does not encrypt or decrypt data.  The implementation uses [BoringSSL](https://boringssl.googlesource.com/boringssl) (used in Chromium & Go)  The equivalent `openssl` command is:  ```bash # You will need OpenSSL 3 or later openssl sha512-256 /path/to/file ``` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:1137](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1137)

___

### shrink

▸ **shrink**(): `void`

The next time JavaScriptCore is idle, clear unused memory and attempt to reduce the heap size.

#### Returns

`void`

#### Defined in

[bun.d.ts:1030](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L1030)

▸ **shrink**(): `void`

The next time JavaScriptCore is idle, clear unused memory and attempt to reduce the heap size.

#### Returns

`void`

#### Defined in

[dist/types.d.ts:1040](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L1040)

___

### write

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) \| `PathLike` | The file or file path to write to |
| `input` | `string` \| `Blob` \| `TypedArray` \| `BlobPart`[] | The data to copy into `destination`. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:90](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L90)

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | `Response` | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:106](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L106)

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | `PathLike` | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | `Response` | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:123](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L123)

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:148](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L148)

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | `PathLike` | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[bun.d.ts:173](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L173)

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) \| `PathLike` | The file or file path to write to |
| `input` | `string` \| `Blob` \| `TypedArray` \| `BlobPart`[] | The data to copy into `destination`. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[dist/types.d.ts:100](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L100)

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | `Response` | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[dist/types.d.ts:116](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L116)

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Persist a Response body to disk.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | `PathLike` | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | `Response` | `Response` object |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[dist/types.d.ts:133](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L133)

▸ **write**(`destination`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) | The file to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[dist/types.d.ts:158](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L158)

▸ **write**(`destinationPath`, `input`): `Promise`<`number`\>

Use the fastest syscalls available to copy from `input` into `destination`.

If `destination` exists, it must be a regular file or symlink to a file.

On Linux, this uses `copy_file_range`.

On macOS, when the destination doesn't already exist, this uses
[`clonefile()`](https://www.manpagez.com/man/2/clonefile/) and falls
back to [`fcopyfile()`](https://www.manpagez.com/man/2/fcopyfile/)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destinationPath` | `PathLike` | The file path to write to. If the file doesn't exist, it will be created and if the file does exist, it will be overwritten. If `input`'s size is less than `destination`'s size, `destination` will be truncated. |
| `input` | [`FileBlob`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.FileBlob.md) | The file to copy from. |

#### Returns

`Promise`<`number`\>

A promise that resolves with the number of bytes written.

#### Defined in

[dist/types.d.ts:183](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L183)
