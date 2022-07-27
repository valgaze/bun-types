[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "path"

# Namespace: "path"

The `path` module provides utilities for working with file and directory paths.
It can be accessed using:

```js
import path  from 'path';
```

## Table of contents

### References

- [posix](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#posix)
- [win32](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#win32)

### Interfaces

- [FormatInputPathObject](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/path_.FormatInputPathObject.md)
- [ParsedPath](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/path_.ParsedPath.md)

### Variables

- [delimiter](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#delimiter)
- [sep](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#sep)

### Functions

- [basename](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#basename)
- [dirname](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#dirname)
- [extname](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#extname)
- [format](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#format)
- [isAbsolute](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#isabsolute)
- [join](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#join)
- [normalize](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#normalize)
- [parse](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#parse)
- [relative](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#relative)
- [resolve](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#resolve)
- [toNamespacedPath](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_.md#tonamespacedpath)

## References

### posix

Renames and re-exports [&quot;path/posix&quot;](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_posix_.md)

___

### win32

Renames and re-exports [&quot;path/win32&quot;](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/path_win32_.md)

## Variables

### delimiter

• **delimiter**: `string`

The platform-specific file delimiter. ';' or ':'.

#### Defined in

[path.d.ts:124](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L124)

[dist/types.d.ts:10686](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10686)

___

### sep

• **sep**: `string`

The platform-specific file separator. '\\' or '/'.

#### Defined in

[path.d.ts:120](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L120)

[dist/types.d.ts:10682](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10682)

## Functions

### basename

▸ **basename**(`p`, `ext?`): `string`

Return the last portion of a path. Similar to the Unix basename command.
Often used to extract the file name from a fully qualified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |
| `ext?` | `string` | optionally, an extension to remove from the result. |

#### Returns

`string`

#### Defined in

[path.d.ts:109](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L109)

▸ **basename**(`p`, `ext?`): `string`

Return the last portion of a path. Similar to the Unix basename command.
Often used to extract the file name from a fully qualified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |
| `ext?` | `string` | optionally, an extension to remove from the result. |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10671](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10671)

___

### dirname

▸ **dirname**(`p`): `string`

Return the directory name of a path. Similar to the Unix dirname command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |

#### Returns

`string`

#### Defined in

[path.d.ts:101](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L101)

▸ **dirname**(`p`): `string`

Return the directory name of a path. Similar to the Unix dirname command.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10663](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10663)

___

### extname

▸ **extname**(`p`): `string`

Return the extension of the path, from the last '.' to end of string in the last portion of the path.
If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |

#### Returns

`string`

#### Defined in

[path.d.ts:116](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L116)

▸ **extname**(`p`): `string`

Return the extension of the path, from the last '.' to end of string in the last portion of the path.
If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | the path to evaluate. |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10678](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10678)

___

### format

▸ **format**(`pP`): `string`

Returns a path string from an object - the opposite of parse().

#### Parameters

| Name | Type |
| :------ | :------ |
| `pP` | [`FormatInputPathObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/path_posix_.FormatInputPathObject.md) |

#### Returns

`string`

#### Defined in

[path.d.ts:136](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L136)

▸ **format**(`pP`): `string`

Returns a path string from an object - the opposite of parse().

#### Parameters

| Name | Type |
| :------ | :------ |
| `pP` | [`FormatInputPathObject`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/path_posix_.FormatInputPathObject.md) |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10698](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10698)

___

### isAbsolute

▸ **isAbsolute**(`p`): `boolean`

Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

`boolean`

#### Defined in

[path.d.ts:90](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L90)

▸ **isAbsolute**(`p`): `boolean`

Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

`boolean`

#### Defined in

[dist/types.d.ts:10652](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10652)

___

### join

▸ **join**(...`paths`): `string`

Join all arguments together and normalize the resulting path.
Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | paths to join. |

#### Returns

`string`

#### Defined in

[path.d.ts:71](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L71)

▸ **join**(...`paths`): `string`

Join all arguments together and normalize the resulting path.
Arguments must be strings. In v0.8, non-string arguments were silently ignored. In v0.10 and up, an exception is thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | paths to join. |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10633](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10633)

___

### normalize

▸ **normalize**(`p`): `string`

Normalize a string path, reducing '..' and '.' parts.
When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | string path to normalize. |

#### Returns

`string`

#### Defined in

[path.d.ts:64](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L64)

▸ **normalize**(`p`): `string`

Normalize a string path, reducing '..' and '.' parts.
When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | `string` | string path to normalize. |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10626](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10626)

___

### parse

▸ **parse**(`p`): [`ParsedPath`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/path_posix_.ParsedPath.md)

Returns an object from a path string - the opposite of format().

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

[`ParsedPath`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/path_posix_.ParsedPath.md)

#### Defined in

[path.d.ts:130](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L130)

▸ **parse**(`p`): [`ParsedPath`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/path_posix_.ParsedPath.md)

Returns an object from a path string - the opposite of format().

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `string` |

#### Returns

[`ParsedPath`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/path_posix_.ParsedPath.md)

#### Defined in

[dist/types.d.ts:10692](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10692)

___

### relative

▸ **relative**(`from`, `to`): `string`

Solve the relative path from {from} to {to}.
At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`

#### Defined in

[path.d.ts:95](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L95)

▸ **relative**(`from`, `to`): `string`

Solve the relative path from {from} to {to}.
At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10657](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10657)

___

### resolve

▸ **resolve**(...`pathSegments`): `string`

The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.

Starting from leftmost {from} parameter, resolves {to} to an absolute path.

If {to} isn't already absolute, {from} arguments are prepended in right to left order,
until an absolute path is found. If after using all {from} paths still no absolute path is found,
the current working directory is used as well. The resulting path is normalized,
and trailing slashes are removed unless the path gets resolved to the root directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...pathSegments` | `string`[] | string paths to join.  Non-string arguments are ignored. |

#### Returns

`string`

#### Defined in

[path.d.ts:84](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L84)

▸ **resolve**(...`pathSegments`): `string`

The right-most parameter is considered {to}.  Other parameters are considered an array of {from}.

Starting from leftmost {from} parameter, resolves {to} to an absolute path.

If {to} isn't already absolute, {from} arguments are prepended in right to left order,
until an absolute path is found. If after using all {from} paths still no absolute path is found,
the current working directory is used as well. The resulting path is normalized,
and trailing slashes are removed unless the path gets resolved to the root directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...pathSegments` | `string`[] | string paths to join.  Non-string arguments are ignored. |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10646](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10646)

___

### toNamespacedPath

▸ **toNamespacedPath**(`path`): `string`

On Windows systems only, returns an equivalent namespace-prefixed path for the given path.
If path is not a string, path will be returned without modifications.
This method is meaningful only on Windows system.
On POSIX systems, the method is non-operational and always returns path without modifications.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[path.d.ts:143](https://github.com/valgaze/bun-types/blob/6f8dbf8/path.d.ts#L143)

▸ **toNamespacedPath**(`path`): `string`

On Windows systems only, returns an equivalent namespace-prefixed path for the given path.
If path is not a string, path will be returned without modifications.
This method is meaningful only on Windows system.
On POSIX systems, the method is non-operational and always returns path without modifications.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:10705](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10705)
