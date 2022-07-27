[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun:ffi"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md) / CString

# Class: CString

["bun:ffi"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md).CString

Get a string from a UTF-8 encoded C string
If `byteLength` is not provided, the string is assumed to be null-terminated.

**`Example`**

```js
var ptr = lib.symbols.getVersion();
console.log(new CString(ptr));
```

**`Example`**

```js
var ptr = lib.symbols.getVersion();
// print the first 4 characters
console.log(new CString(ptr, 0, 4));
```

While there are some checks to catch invalid pointers, this is a difficult
thing to do safely. Passing an invalid pointer can crash the program and
reading beyond the bounds of the pointer will crash the program or cause
undefined behavior. Use with care!

## Hierarchy

- `String`

  ↳ **`CString`**

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_ffi_.CString.md#constructor)

### Properties

- [byteLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_ffi_.CString.md#bytelength)
- [byteOffset](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_ffi_.CString.md#byteoffset)
- [ptr](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_ffi_.CString.md#ptr)

### Accessors

- [arrayBuffer](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_ffi_.CString.md#arraybuffer)

## Constructors

### constructor

• **new CString**(`ptr`, `byteOffset?`, `byteLength?`)

Get a string from a UTF-8 encoded C string
If `byteLength` is not provided, the string is assumed to be null-terminated.

**`Example`**

```js
var ptr = lib.symbols.getVersion();
console.log(new CString(ptr));
```

**`Example`**

```js
var ptr = lib.symbols.getVersion();
// print the first 4 characters
console.log(new CString(ptr, 0, 4));
```

While there are some checks to catch invalid pointers, this is a difficult
thing to do safely. Passing an invalid pointer can crash the program and
reading beyond the bounds of the pointer will crash the program or cause
undefined behavior. Use with care!

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ptr` | `number` | The pointer to the C string |
| `byteOffset?` | `number` | bytes to skip before reading |
| `byteLength?` | `number` | bytes to read |

#### Overrides

String.constructor

#### Defined in

[ffi.d.ts:717](https://github.com/valgaze/bun-types/blob/6f8dbf8/ffi.d.ts#L717)

## Properties

### byteLength

• `Optional` **byteLength**: `number`

#### Defined in

[ffi.d.ts:728](https://github.com/valgaze/bun-types/blob/6f8dbf8/ffi.d.ts#L728)

___

### byteOffset

• `Optional` **byteOffset**: `number`

#### Defined in

[ffi.d.ts:727](https://github.com/valgaze/bun-types/blob/6f8dbf8/ffi.d.ts#L727)

___

### ptr

• **ptr**: `number`

The ptr to the C string

This `CString` instance is a clone of the string, so it
is safe to continue using this instance after the `ptr` has been
freed.

#### Defined in

[ffi.d.ts:726](https://github.com/valgaze/bun-types/blob/6f8dbf8/ffi.d.ts#L726)

## Accessors

### arrayBuffer

• `get` **arrayBuffer**(): `ArrayBuffer`

Get the [ptr](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md#ptr) as an `ArrayBuffer`

`null` or empty ptrs returns an `ArrayBuffer` with `byteLength` 0

#### Returns

`ArrayBuffer`

#### Defined in

[ffi.d.ts:735](https://github.com/valgaze/bun-types/blob/6f8dbf8/ffi.d.ts#L735)
