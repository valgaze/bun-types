[bun-types](../README.md) / [Exports](../modules.md) / "bun:ffi"

# Namespace: "bun:ffi"

`bun:ffi` lets you efficiently call C functions & FFI functions from JavaScript
 without writing bindings yourself.

```js
import {dlopen, CString, ptr} from 'bun:ffi';

const lib = dlopen('libsqlite3', {
});
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

## Table of contents

### Enumerations

- [FFIType](../enums/bun_ffi_.FFIType.md)

### Classes

- [CString](../classes/bun_ffi_.CString.md)

### Interfaces

- [FFIFunction](../interfaces/bun_ffi_.FFIFunction.md)
- [Library](../interfaces/bun_ffi_.Library.md)

### Type Aliases

- [FFITypeOrString](bun_ffi_.md#ffitypeorstring)
- [Symbols](bun_ffi_.md#symbols)

### Variables

- [suffix](bun_ffi_.md#suffix)

### Functions

- [CFunction](bun_ffi_.md#cfunction)
- [dlopen](bun_ffi_.md#dlopen)
- [linkSymbols](bun_ffi_.md#linksymbols)
- [ptr](bun_ffi_.md#ptr)
- [toArrayBuffer](bun_ffi_.md#toarraybuffer)
- [toBuffer](bun_ffi_.md#tobuffer)
- [viewSource](bun_ffi_.md#viewsource)

## Type Aliases

### FFITypeOrString

Ƭ **FFITypeOrString**: [`FFIType`](../enums/bun_ffi_.FFIType.md) \| ``"char"`` \| ``"int8_t"`` \| ``"i8"`` \| ``"uint8_t"`` \| ``"u8"`` \| ``"int16_t"`` \| ``"i16"`` \| ``"uint16_t"`` \| ``"u16"`` \| ``"int32_t"`` \| ``"i32"`` \| ``"int"`` \| ``"uint32_t"`` \| ``"u32"`` \| ``"int64_t"`` \| ``"i64"`` \| ``"uint64_t"`` \| ``"u64"`` \| ``"double"`` \| ``"f64"`` \| ``"float"`` \| ``"f32"`` \| ``"bool"`` \| ``"ptr"`` \| ``"pointer"`` \| ``"void"`` \| ``"cstring"``

#### Defined in

[ffi.d.ts:348](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L348)

___

### Symbols

Ƭ **Symbols**: `Record`<`string`, [`FFIFunction`](../interfaces/bun_ffi_.FFIFunction.md)\>

#### Defined in

[ffi.d.ts:443](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L443)

## Variables

### suffix

• `Const` **suffix**: `string`

Platform-specific file extension name for dynamic libraries

"." is not included

**`Example`**

```js
"dylib" // macOS
```

**`Example`**

```js
"so" // linux
```

#### Defined in

[ffi.d.ts:762](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L762)

## Functions

### CFunction

▸ **CFunction**(`fn`): `CallableFunction` & { `close`: () => `void`  }

Turn a native library's function pointer into a JavaScript function

Libraries using Node-API & bun:ffi in the same module could use this to skip an extra dlopen() step.

**`Example`**

```js
import {CFunction} from 'bun:ffi';

const getVersion = new CFunction({
  returns: "cstring",
  args: [],
  ptr: myNativeLibraryGetVersion,
});
getVersion();
getVersion.close();
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`FFIFunction`](../interfaces/bun_ffi_.FFIFunction.md) & { `ptr`: `number` \| `bigint`  } | [FFIFunction](../interfaces/bun_ffi_.FFIFunction.md) declaration. `ptr` is required |

#### Returns

`CallableFunction` & { `close`: () => `void`  }

#### Defined in

[ffi.d.ts:530](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L530)

▸ **CFunction**(`fn`): `CallableFunction` & { `close`: () => `void`  }

Turn a native library's function pointer into a JavaScript function

Libraries using Node-API & bun:ffi in the same module could use this to skip an extra dlopen() step.

**`Example`**

```js
import {CFunction} from 'bun:ffi';

const getVersion = new CFunction({
  returns: "cstring",
  args: [],
  ptr: myNativeLibraryGetVersion,
});
getVersion();
getVersion.close();
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | [`FFIFunction`](../interfaces/bun_ffi_.FFIFunction.md) & { `ptr`: `number` \| `bigint`  } | [FFIFunction](../interfaces/bun_ffi_.FFIFunction.md) declaration. `ptr` is required |

#### Returns

`CallableFunction` & { `close`: () => `void`  }

#### Defined in

[dist/types.d.ts:3868](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L3868)

___

### dlopen

▸ **dlopen**(`name`, `symbols`): [`Library`](../interfaces/bun_ffi_.Library.md)

Open a library using `"bun:ffi"`

**`Example`**

```js
import {dlopen} from 'bun:ffi';

const lib = dlopen("duckdb.dylib", {
  get_version: {
    returns: "cstring",
    args: [],
  },
});
lib.symbols.get_version();
// "1.0.0"
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the library or file path. This will be passed to `dlopen()` |
| `symbols` | [`Symbols`](bun_ffi_.md#symbols) | Map of symbols to load where the key is the symbol name and the value is the [FFIFunction](../interfaces/bun_ffi_.FFIFunction.md) |

#### Returns

[`Library`](../interfaces/bun_ffi_.Library.md)

#### Defined in

[ffi.d.ts:501](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L501)

▸ **dlopen**(`name`, `symbols`): [`Library`](../interfaces/bun_ffi_.Library.md)

Open a library using `"bun:ffi"`

**`Example`**

```js
import {dlopen} from 'bun:ffi';

const lib = dlopen("duckdb.dylib", {
  get_version: {
    returns: "cstring",
    args: [],
  },
});
lib.symbols.get_version();
// "1.0.0"
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the library or file path. This will be passed to `dlopen()` |
| `symbols` | [`Symbols`](bun_ffi_.md#symbols) | Map of symbols to load where the key is the symbol name and the value is the [FFIFunction](../interfaces/bun_ffi_.FFIFunction.md) |

#### Returns

[`Library`](../interfaces/bun_ffi_.Library.md)

#### Defined in

[dist/types.d.ts:3839](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L3839)

___

### linkSymbols

▸ **linkSymbols**(`symbols`): [`Library`](../interfaces/bun_ffi_.Library.md)

Link a map of symbols to JavaScript functions

This lets you use native libraries that were already loaded somehow. You usually will want [dlopen](bun_ffi_.md#dlopen) instead.

You could use this with Node-API to skip loading a second time.

**`Example`**

```js
import { linkSymbols } from "bun:ffi";

const [majorPtr, minorPtr, patchPtr] = getVersionPtrs();

const lib = linkSymbols({
  // Unlike with dlopen(), the names here can be whatever you want
  getMajor: {
    returns: "cstring",
    args: [],

    // Since this doesn't use dlsym(), you have to provide a valid ptr
    // That ptr could be a number or a bigint
    // An invalid pointer will crash your program.
    ptr: majorPtr,
  },
  getMinor: {
    returns: "cstring",
    args: [],
    ptr: minorPtr,
  },
  getPatch: {
    returns: "cstring",
    args: [],
    ptr: patchPtr,
  },
});

const [major, minor, patch] = [
  lib.symbols.getMajor(),
  lib.symbols.getMinor(),
  lib.symbols.getPatch(),
];
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbols` | [`Symbols`](bun_ffi_.md#symbols) | Map of symbols to load where the key is the symbol name and the value is the [FFIFunction](../interfaces/bun_ffi_.FFIFunction.md) |

#### Returns

[`Library`](../interfaces/bun_ffi_.Library.md)

#### Defined in

[ffi.d.ts:591](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L591)

▸ **linkSymbols**(`symbols`): [`Library`](../interfaces/bun_ffi_.Library.md)

Link a map of symbols to JavaScript functions

This lets you use native libraries that were already loaded somehow. You usually will want [dlopen](bun_ffi_.md#dlopen) instead.

You could use this with Node-API to skip loading a second time.

**`Example`**

```js
import { linkSymbols } from "bun:ffi";

const [majorPtr, minorPtr, patchPtr] = getVersionPtrs();

const lib = linkSymbols({
  // Unlike with dlopen(), the names here can be whatever you want
  getMajor: {
    returns: "cstring",
    args: [],

    // Since this doesn't use dlsym(), you have to provide a valid ptr
    // That ptr could be a number or a bigint
    // An invalid pointer will crash your program.
    ptr: majorPtr,
  },
  getMinor: {
    returns: "cstring",
    args: [],
    ptr: minorPtr,
  },
  getPatch: {
    returns: "cstring",
    args: [],
    ptr: patchPtr,
  },
});

const [major, minor, patch] = [
  lib.symbols.getMajor(),
  lib.symbols.getMinor(),
  lib.symbols.getPatch(),
];
```

This is powered by just-in-time compiling C wrappers
that convert JavaScript types to C types and back. Internally,
bun uses [tinycc](https://github.com/TinyCC/tinycc), so a big thanks
goes to Fabrice Bellard and TinyCC maintainers for making this possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `symbols` | [`Symbols`](bun_ffi_.md#symbols) | Map of symbols to load where the key is the symbol name and the value is the [FFIFunction](../interfaces/bun_ffi_.FFIFunction.md) |

#### Returns

[`Library`](../interfaces/bun_ffi_.Library.md)

#### Defined in

[dist/types.d.ts:3929](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L3929)

___

### ptr

▸ **ptr**(`view`, `byteOffset?`): `number`

Get the pointer backing a TypedArray or ArrayBuffer

Use this to pass TypedArray or ArrayBuffer to C functions.

This is for use with FFI functions. For performance reasons, FFI will
not automatically convert typed arrays to C pointers.

**`Example`**

From JavaScript:
```js
const array = new Uint8Array(10);
const rawPtr = ptr(array);
myFFIFunction(rawPtr);
```
To C:
```c
void myFFIFunction(char* rawPtr) {
 // Do something with rawPtr
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | `ArrayBufferLike` \| `TypedArray` \| `DataView` | the typed array or array buffer to get the pointer for |
| `byteOffset?` | `number` | optional offset into the view in bytes |

#### Returns

`number`

#### Defined in

[ffi.d.ts:661](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L661)

▸ **ptr**(`view`, `byteOffset?`): `number`

Get the pointer backing a TypedArray or ArrayBuffer

Use this to pass TypedArray or ArrayBuffer to C functions.

This is for use with FFI functions. For performance reasons, FFI will
not automatically convert typed arrays to C pointers.

**`Example`**

From JavaScript:
```js
const array = new Uint8Array(10);
const rawPtr = ptr(array);
myFFIFunction(rawPtr);
```
To C:
```c
void myFFIFunction(char* rawPtr) {
 // Do something with rawPtr
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | `ArrayBufferLike` \| `TypedArray` \| `DataView` | the typed array or array buffer to get the pointer for |
| `byteOffset?` | `number` | optional offset into the view in bytes |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:3999](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L3999)

___

### toArrayBuffer

▸ **toArrayBuffer**(`ptr`, `byteOffset?`, `byteLength?`): `ArrayBuffer`

Read a pointer as an ArrayBuffer

If `byteLength` is not provided, the pointer is assumed to be 0-terminated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The memory address to read |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read  While there are some checks to catch invalid pointers, this is a difficult thing to do safely. Passing an invalid pointer can crash the program and reading beyond the bounds of the pointer will crash the program or cause undefined behavior. Use with care! |

#### Returns

`ArrayBuffer`

#### Defined in

[ffi.d.ts:628](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L628)

▸ **toArrayBuffer**(`ptr`, `byteOffset?`, `byteLength?`): `ArrayBuffer`

Read a pointer as an ArrayBuffer

If `byteLength` is not provided, the pointer is assumed to be 0-terminated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The memory address to read |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read  While there are some checks to catch invalid pointers, this is a difficult thing to do safely. Passing an invalid pointer can crash the program and reading beyond the bounds of the pointer will crash the program or cause undefined behavior. Use with care! |

#### Returns

`ArrayBuffer`

#### Defined in

[dist/types.d.ts:3966](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L3966)

___

### toBuffer

▸ **toBuffer**(`ptr`, `byteOffset?`, `byteLength?`): [`Buffer`](buffer_.md#buffer)

Read a pointer as a [Buffer](../interfaces/Buffer.md)

If `byteLength` is not provided, the pointer is assumed to be 0-terminated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The memory address to read |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read  While there are some checks to catch invalid pointers, this is a difficult thing to do safely. Passing an invalid pointer can crash the program and reading beyond the bounds of the pointer will crash the program or cause undefined behavior. Use with care! |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[ffi.d.ts:608](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L608)

▸ **toBuffer**(`ptr`, `byteOffset?`, `byteLength?`): [`Buffer`](buffer_.md#buffer)

Read a pointer as a [Buffer](../interfaces/Buffer.md)

If `byteLength` is not provided, the pointer is assumed to be 0-terminated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The memory address to read |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read  While there are some checks to catch invalid pointers, this is a difficult thing to do safely. Passing an invalid pointer can crash the program and reading beyond the bounds of the pointer will crash the program or cause undefined behavior. Use with care! |

#### Returns

[`Buffer`](buffer_.md#buffer)

#### Defined in

[dist/types.d.ts:3946](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L3946)

___

### viewSource

▸ **viewSource**(`symbols`, `is_callback?`): `string`[]

View the generated C code for FFI bindings

You probably won't need this unless there's a bug in the FFI bindings
generator or you're just curious.

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbols` | [`Symbols`](bun_ffi_.md#symbols) |
| `is_callback?` | ``false`` |

#### Returns

`string`[]

#### Defined in

[ffi.d.ts:744](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L744)

▸ **viewSource**(`callback`, `is_callback`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`FFIFunction`](../interfaces/bun_ffi_.FFIFunction.md) |
| `is_callback` | ``true`` |

#### Returns

`string`

#### Defined in

[ffi.d.ts:745](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L745)

▸ **viewSource**(`symbols`, `is_callback?`): `string`[]

View the generated C code for FFI bindings

You probably won't need this unless there's a bug in the FFI bindings
generator or you're just curious.

#### Parameters

| Name | Type |
| :------ | :------ |
| `symbols` | [`Symbols`](bun_ffi_.md#symbols) |
| `is_callback?` | ``false`` |

#### Returns

`string`[]

#### Defined in

[dist/types.d.ts:4082](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L4082)

▸ **viewSource**(`callback`, `is_callback`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`FFIFunction`](../interfaces/bun_ffi_.FFIFunction.md) |
| `is_callback` | ``true`` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:4083](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L4083)
