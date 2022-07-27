[bun-types](../README.md) / [Exports](../modules.md) / ["bun:ffi"](../modules/bun_ffi_.md) / CString

# Class: CString

["bun:ffi"](../modules/bun_ffi_.md).CString

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

- [constructor](bun_ffi_.CString.md#constructor)

### Properties

- [byteLength](bun_ffi_.CString.md#bytelength)
- [byteOffset](bun_ffi_.CString.md#byteoffset)
- [length](bun_ffi_.CString.md#length)
- [ptr](bun_ffi_.CString.md#ptr)

### Accessors

- [arrayBuffer](bun_ffi_.CString.md#arraybuffer)

### Methods

- [[iterator]](bun_ffi_.CString.md#[iterator])
- [anchor](bun_ffi_.CString.md#anchor)
- [at](bun_ffi_.CString.md#at)
- [big](bun_ffi_.CString.md#big)
- [blink](bun_ffi_.CString.md#blink)
- [bold](bun_ffi_.CString.md#bold)
- [charAt](bun_ffi_.CString.md#charat)
- [charCodeAt](bun_ffi_.CString.md#charcodeat)
- [codePointAt](bun_ffi_.CString.md#codepointat)
- [concat](bun_ffi_.CString.md#concat)
- [endsWith](bun_ffi_.CString.md#endswith)
- [fixed](bun_ffi_.CString.md#fixed)
- [fontcolor](bun_ffi_.CString.md#fontcolor)
- [fontsize](bun_ffi_.CString.md#fontsize)
- [includes](bun_ffi_.CString.md#includes)
- [indexOf](bun_ffi_.CString.md#indexof)
- [italics](bun_ffi_.CString.md#italics)
- [lastIndexOf](bun_ffi_.CString.md#lastindexof)
- [link](bun_ffi_.CString.md#link)
- [localeCompare](bun_ffi_.CString.md#localecompare)
- [match](bun_ffi_.CString.md#match)
- [matchAll](bun_ffi_.CString.md#matchall)
- [normalize](bun_ffi_.CString.md#normalize)
- [padEnd](bun_ffi_.CString.md#padend)
- [padStart](bun_ffi_.CString.md#padstart)
- [repeat](bun_ffi_.CString.md#repeat)
- [replace](bun_ffi_.CString.md#replace)
- [replaceAll](bun_ffi_.CString.md#replaceall)
- [search](bun_ffi_.CString.md#search)
- [slice](bun_ffi_.CString.md#slice)
- [small](bun_ffi_.CString.md#small)
- [split](bun_ffi_.CString.md#split)
- [startsWith](bun_ffi_.CString.md#startswith)
- [strike](bun_ffi_.CString.md#strike)
- [sub](bun_ffi_.CString.md#sub)
- [substr](bun_ffi_.CString.md#substr)
- [substring](bun_ffi_.CString.md#substring)
- [sup](bun_ffi_.CString.md#sup)
- [toLocaleLowerCase](bun_ffi_.CString.md#tolocalelowercase)
- [toLocaleUpperCase](bun_ffi_.CString.md#tolocaleuppercase)
- [toLowerCase](bun_ffi_.CString.md#tolowercase)
- [toString](bun_ffi_.CString.md#tostring)
- [toUpperCase](bun_ffi_.CString.md#touppercase)
- [trim](bun_ffi_.CString.md#trim)
- [trimEnd](bun_ffi_.CString.md#trimend)
- [trimLeft](bun_ffi_.CString.md#trimleft)
- [trimRight](bun_ffi_.CString.md#trimright)
- [trimStart](bun_ffi_.CString.md#trimstart)
- [valueOf](bun_ffi_.CString.md#valueof)
- [fromCharCode](bun_ffi_.CString.md#fromcharcode)
- [fromCodePoint](bun_ffi_.CString.md#fromcodepoint)
- [raw](bun_ffi_.CString.md#raw)

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

[ffi.d.ts:717](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L717)

## Properties

### byteLength

• `Optional` **byteLength**: `number`

#### Defined in

[ffi.d.ts:728](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L728)

___

### byteOffset

• `Optional` **byteOffset**: `number`

#### Defined in

[ffi.d.ts:727](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L727)

___

### length

• `Readonly` **length**: `number`

Returns the length of a String object.

#### Inherited from

String.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:509

___

### ptr

• **ptr**: `number`

The ptr to the C string

This `CString` instance is a clone of the string, so it
is safe to continue using this instance after the `ptr` has been
freed.

#### Defined in

[ffi.d.ts:726](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L726)

## Accessors

### arrayBuffer

• `get` **arrayBuffer**(): `ArrayBuffer`

Get the [ptr](../modules/bun_ffi_.md#ptr) as an `ArrayBuffer`

`null` or empty ptrs returns an `ArrayBuffer` with `byteLength` 0

#### Returns

`ArrayBuffer`

#### Defined in

[ffi.d.ts:735](https://github.com/valgaze/bun-types/blob/5e53f27/ffi.d.ts#L735)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`string`\>

Iterator

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

String.\_\_@iterator@708

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:240

___

### anchor

▸ **anchor**(`name`): `string`

Returns an `<a>` HTML anchor element and sets the name attribute to the text value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Inherited from

String.anchor

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:461

___

### at

▸ **at**(`index`): `string`

Returns a new String consisting of the single UTF-16 code unit located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`string`

#### Inherited from

String.at

#### Defined in

node_modules/typescript/lib/lib.es2022.string.d.ts:26

___

### big

▸ **big**(): `string`

Returns a `<big>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.big

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:467

___

### blink

▸ **blink**(): `string`

Returns a `<blink>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.blink

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:473

___

### bold

▸ **bold**(): `string`

Returns a `<b>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.bold

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:479

___

### charAt

▸ **charAt**(`pos`): `string`

Returns the character at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `number` | The zero-based index of the desired character. |

#### Returns

`string`

#### Inherited from

String.charAt

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:410

___

### charCodeAt

▸ **charCodeAt**(`index`): `number`

Returns the Unicode value of the character at the specified location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

#### Returns

`number`

#### Inherited from

String.charCodeAt

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:416

___

### codePointAt

▸ **codePointAt**(`pos`): `number`

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `number` |

#### Returns

`number`

#### Inherited from

String.codePointAt

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:408

___

### concat

▸ **concat**(...`strings`): `string`

Returns a string that contains the concatenation of two or more strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...strings` | `string`[] | The strings to append to the end of the string. |

#### Returns

`string`

#### Inherited from

String.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:422

___

### endsWith

▸ **endsWith**(`searchString`, `endPosition?`): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |
| `endPosition?` | `number` |

#### Returns

`boolean`

#### Inherited from

String.endsWith

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:424

___

### fixed

▸ **fixed**(): `string`

Returns a `<tt>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.fixed

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:485

___

### fontcolor

▸ **fontcolor**(`color`): `string`

Returns a `<font>` HTML element and sets the color attribute value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `string` |

#### Returns

`string`

#### Inherited from

String.fontcolor

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:491

___

### fontsize

▸ **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`string`

#### Inherited from

String.fontsize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:497

▸ **fontsize**(`size`): `string`

Returns a `<font>` HTML element and sets the size attribute value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `string` |

#### Returns

`string`

#### Inherited from

String.fontsize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:503

___

### includes

▸ **includes**(`searchString`, `position?`): `boolean`

Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | search string |
| `position?` | `number` | If position is undefined, 0 is assumed, so as to search all of the String. |

#### Returns

`boolean`

#### Inherited from

String.includes

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:417

___

### indexOf

▸ **indexOf**(`searchString`, `position?`): `number`

Returns the position of the first occurrence of a substring.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for in the string |
| `position?` | `number` | The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

#### Returns

`number`

#### Inherited from

String.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:429

___

### italics

▸ **italics**(): `string`

Returns an `<i>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.italics

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:509

___

### lastIndexOf

▸ **lastIndexOf**(`searchString`, `position?`): `number`

Returns the last occurrence of a substring in the string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchString` | `string` | The substring to search for. |
| `position?` | `number` | The index at which to begin searching. If omitted, the search begins at the end of the string. |

#### Returns

`number`

#### Inherited from

String.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:436

___

### link

▸ **link**(`url`): `string`

Returns an `<a>` HTML element and sets the href attribute value

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`string`

#### Inherited from

String.link

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:515

___

### localeCompare

▸ **localeCompare**(`that`): `number`

Determines whether two strings are equivalent in the current locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |

#### Returns

`number`

#### Inherited from

String.localeCompare

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:442

▸ **localeCompare**(`that`, `locales?`, `options?`): `number`

Determines whether two strings are equivalent in the current or specified locale.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `that` | `string` | String to compare to target string |
| `locales?` | `string` \| `string`[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details. |
| `options?` | `CollatorOptions` | An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details. |

#### Returns

`number`

#### Inherited from

String.localeCompare

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:4469

___

### match

▸ **match**(`regexp`): `RegExpMatchArray`

Matches a string with a regular expression, and returns an array containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| `RegExp` | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

`RegExpMatchArray`

#### Inherited from

String.match

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:448

▸ **match**(`matcher`): `RegExpMatchArray`

Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matcher` | `Object` | An object that supports being matched against. |
| `matcher.[match]` | (`string`: `string`) => `RegExpMatchArray` | - |

#### Returns

`RegExpMatchArray`

#### Inherited from

String.match

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:239

___

### matchAll

▸ **matchAll**(`regexp`): `IterableIterator`<`RegExpMatchArray`\>

Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `RegExp` | A variable name or string literal containing the regular expression pattern and flags. |

#### Returns

`IterableIterator`<`RegExpMatchArray`\>

#### Inherited from

String.matchAll

#### Defined in

node_modules/typescript/lib/lib.es2020.string.d.ts:29

___

### normalize

▸ **normalize**(`form`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | ``"NFC"`` \| ``"NFD"`` \| ``"NFKC"`` \| ``"NFKD"`` | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default  is "NFC" |

#### Returns

`string`

#### Inherited from

String.normalize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:432

▸ **normalize**(`form?`): `string`

Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form?` | `string` | Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default  is "NFC" |

#### Returns

`string`

#### Inherited from

String.normalize

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:440

___

### padEnd

▸ **padEnd**(`maxLength`, `fillString?`): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxLength` | `number` | The length of the resulting string once the current string has been padded.         If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `fillString?` | `string` | The string to pad the current string with.         If this string is too long, it will be truncated and the left-most part will be applied.         The default value for this parameter is " " (U+0020). |

#### Returns

`string`

#### Inherited from

String.padEnd

#### Defined in

node_modules/typescript/lib/lib.es2017.string.d.ts:46

___

### padStart

▸ **padStart**(`maxLength`, `fillString?`): `string`

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxLength` | `number` | The length of the resulting string once the current string has been padded.         If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `fillString?` | `string` | The string to pad the current string with.         If this string is too long, it will be truncated and the left-most part will be applied.         The default value for this parameter is " " (U+0020). |

#### Returns

`string`

#### Inherited from

String.padStart

#### Defined in

node_modules/typescript/lib/lib.es2017.string.d.ts:33

___

### repeat

▸ **repeat**(`count`): `string`

Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `count` | `number` | number of copies to append |

#### Returns

`string`

#### Inherited from

String.repeat

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:447

___

### replace

▸ **replace**(`searchValue`, `replaceValue`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replaceValue` | `string` | A string containing the text to replace for every successful match of searchValue in this string. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:455

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:462

▸ **replace**(`searchValue`, `replaceValue`): `string`

Replaces first match with string or all matches with RegExp.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `Object` | A string or RegExp search value. |
| `searchValue.[replace]` | (`string`: `string`, `replaceValue`: `string`) => `string` | - |
| `replaceValue` | `string` | A string containing the text to replace for match. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:246

▸ **replace**(`searchValue`, `replacer`): `string`

Replaces text in a string, using an object that supports replacement within a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `Object` | A object can search for and replace matches within a string. |
| `searchValue.[replace]` | (`string`: `string`, `replacer`: (`substring`: `string`, ...`args`: `any`[]) => `string`) => `string` | - |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

String.replace

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:253

___

### replaceAll

▸ **replaceAll**(`searchValue`, `replaceValue`): `string`

Replace all instances of a substring in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replaceValue` | `string` | A string containing the text to replace for every successful match of searchValue in this string. |

#### Returns

`string`

#### Inherited from

String.replaceAll

#### Defined in

node_modules/typescript/lib/lib.es2021.string.d.ts:27

▸ **replaceAll**(`searchValue`, `replacer`): `string`

Replace all instances of a substring in a string, using a regular expression or search string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchValue` | `string` \| `RegExp` | A string to search for. |
| `replacer` | (`substring`: `string`, ...`args`: `any`[]) => `string` | A function that returns the replacement text. |

#### Returns

`string`

#### Inherited from

String.replaceAll

#### Defined in

node_modules/typescript/lib/lib.es2021.string.d.ts:34

___

### search

▸ **search**(`regexp`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `regexp` | `string` \| `RegExp` | The regular expression pattern and applicable flags. |

#### Returns

`number`

#### Inherited from

String.search

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:468

▸ **search**(`searcher`): `number`

Finds the first substring match in a regular expression search.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searcher` | `Object` | An object which supports searching within a string. |
| `searcher.[search]` | (`string`: `string`) => `number` | - |

#### Returns

`number`

#### Inherited from

String.search

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:259

___

### slice

▸ **slice**(`start?`, `end?`): `string`

Returns a section of a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The index to the beginning of the specified portion of stringObj. |
| `end?` | `number` | The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.  If this value is not specified, the substring continues to the end of stringObj. |

#### Returns

`string`

#### Inherited from

String.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:476

___

### small

▸ **small**(): `string`

Returns a `<small>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.small

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:521

___

### split

▸ **split**(`separator`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator` | `string` \| `RegExp` | A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Inherited from

String.split

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:483

▸ **split**(`splitter`, `limit?`): `string`[]

Split a string into substrings using the specified separator and return them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `splitter` | `Object` | An object that can split a string. |
| `splitter.[split]` | (`string`: `string`, `limit?`: `number`) => `string`[] | - |
| `limit?` | `number` | A value used to limit the number of elements returned in the array. |

#### Returns

`string`[]

#### Inherited from

String.split

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:266

___

### startsWith

▸ **startsWith**(`searchString`, `position?`): `boolean`

Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchString` | `string` |
| `position?` | `number` |

#### Returns

`boolean`

#### Inherited from

String.startsWith

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:454

___

### strike

▸ **strike**(): `string`

Returns a `<strike>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.strike

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:527

___

### sub

▸ **sub**(): `string`

Returns a `<sub>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.sub

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:533

___

### substr

▸ **substr**(`from`, `length?`): `string`

Gets a substring beginning at the specified location and having the specified length.

**`Deprecated`**

A legacy feature for browser compatibility

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `from` | `number` | The starting position of the desired substring. The index of the first character in the string is zero. |
| `length?` | `number` | The number of characters to include in the returned substring. |

#### Returns

`string`

#### Inherited from

String.substr

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:518

___

### substring

▸ **substring**(`start`, `end?`): `string`

Returns the substring at the specified location within a String object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based index number indicating the beginning of the substring. |
| `end?` | `number` | Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.  If end is omitted, the characters from start through the end of the original string are returned. |

#### Returns

`string`

#### Inherited from

String.substring

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:491

___

### sup

▸ **sup**(): `string`

Returns a `<sup>` HTML element

**`Deprecated`**

A legacy feature for browser compatibility

#### Returns

`string`

#### Inherited from

String.sup

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:539

___

### toLocaleLowerCase

▸ **toLocaleLowerCase**(`locales?`): `string`

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Inherited from

String.toLocaleLowerCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:497

___

### toLocaleUpperCase

▸ **toLocaleUpperCase**(`locales?`): `string`

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `locales?` | `string` \| `string`[] |

#### Returns

`string`

#### Inherited from

String.toLocaleUpperCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:503

___

### toLowerCase

▸ **toLowerCase**(): `string`

Converts all the alphabetic characters in a string to lowercase.

#### Returns

`string`

#### Inherited from

String.toLowerCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:494

___

### toString

▸ **toString**(): `string`

Returns a string representation of a string.

#### Returns

`string`

#### Inherited from

String.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:404

___

### toUpperCase

▸ **toUpperCase**(): `string`

Converts all the alphabetic characters in a string to uppercase.

#### Returns

`string`

#### Inherited from

String.toUpperCase

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:500

___

### trim

▸ **trim**(): `string`

Removes the leading and trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trim

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:506

___

### trimEnd

▸ **trimEnd**(): `string`

Removes the trailing white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trimEnd

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:23

___

### trimLeft

▸ **trimLeft**(): `string`

Removes the leading white space and line terminator characters from a string.

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimStart` instead

#### Returns

`string`

#### Inherited from

String.trimLeft

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:32

___

### trimRight

▸ **trimRight**(): `string`

Removes the trailing white space and line terminator characters from a string.

**`Deprecated`**

A legacy feature for browser compatibility. Use `trimEnd` instead

#### Returns

`string`

#### Inherited from

String.trimRight

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:38

___

### trimStart

▸ **trimStart**(): `string`

Removes the leading white space and line terminator characters from a string.

#### Returns

`string`

#### Inherited from

String.trimStart

#### Defined in

node_modules/typescript/lib/lib.es2019.string.d.ts:26

___

### valueOf

▸ **valueOf**(): `string`

Returns the primitive value of the specified object.

#### Returns

`string`

#### Inherited from

String.valueOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:521

___

### fromCharCode

▸ `Static` **fromCharCode**(...`codes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...codes` | `number`[] |

#### Returns

`string`

#### Inherited from

String.fromCharCode

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:530

___

### fromCodePoint

▸ `Static` **fromCodePoint**(...`codePoints`): `string`

Return the String value whose elements are, in order, the elements in the List elements.
If length is 0, the empty string is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...codePoints` | `number`[] |

#### Returns

`string`

#### Inherited from

String.fromCodePoint

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:547

___

### raw

▸ `Static` **raw**(`template`, ...`substitutions`): `string`

String.raw is usually used as a tag function of a Tagged Template String. When called as
such, the first argument will be a well formed template call site object and the rest
parameter will contain the substitution values. It can also be called directly, for example,
to interleave strings and values from your own tag function, and in this case the only thing
it needs from the first argument is the raw property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `template` | `Object` | A well-formed template string call site representation. |
| `template.raw` | readonly `string`[] \| `ArrayLike`<`string`\> | - |
| `...substitutions` | `any`[] | A set of substitution values. |

#### Returns

`string`

#### Inherited from

String.raw

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:558
