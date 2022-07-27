[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun:ffi"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md) / Library

# Interface: Library

["bun:ffi"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_ffi_.md).Library

## Table of contents

### Properties

- [symbols](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md#symbols)

### Methods

- [close](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_ffi_.Library.md#close)

## Properties

### symbols

• **symbols**: `Record`<`string`, `CallableFunction` & { `native`: `CallableFunction`  }\>

#### Defined in

[ffi.d.ts:454](https://github.com/valgaze/bun-types/blob/6f8dbf8/ffi.d.ts#L454)

[dist/types.d.ts:3792](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3792)

## Methods

### close

▸ **close**(): `void`

`dlclose` the library, unloading the symbols and freeing allocated memory.

Once called, the library is no longer usable.

Calling a function from a library that has been closed is undefined behavior.

#### Returns

`void`

#### Defined in

[ffi.d.ts:471](https://github.com/valgaze/bun-types/blob/6f8dbf8/ffi.d.ts#L471)

▸ **close**(): `void`

`dlclose` the library, unloading the symbols and freeing allocated memory.

Once called, the library is no longer usable.

Calling a function from a library that has been closed is undefined behavior.

#### Returns

`void`

#### Defined in

[dist/types.d.ts:3809](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L3809)