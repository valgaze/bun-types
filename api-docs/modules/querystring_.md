[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "querystring"

# Namespace: "querystring"

The `querystring` module provides utilities for parsing and formatting URL
query strings. It can be accessed using:

```js
const querystring = require('querystring');
```

The `querystring` API is considered Legacy. While it is still maintained,
new code should use the `URLSearchParams` API instead.

**`Deprecated`**

Legacy

**`See`**

[source](https://github.com/nodejs/node/blob/v18.0.0/lib/querystring.js)

## Table of contents

### Interfaces

- [ParseOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParseOptions.md)
- [ParsedUrlQuery](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)
- [ParsedUrlQueryInput](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQueryInput.md)
- [StringifyOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.StringifyOptions.md)

### Functions

- [decode](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/querystring_.md#decode)
- [encode](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/querystring_.md#encode)
- [parse](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/querystring_.md#parse)
- [stringify](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/querystring_.md#stringify)

## Functions

### decode

▸ **decode**(`str`, `sep?`, `eq?`, `options?`): [`ParsedUrlQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)

The `querystring.parse()` method parses a URL query string (`str`) into a
collection of key and value pairs.

For example, the query string `'foo=bar&#x26;abc=xyz&#x26;abc=123'` is parsed into:

```js
{
  foo: 'bar',
  abc: ['xyz', '123']
}
```

The object returned by the `querystring.parse()` method _does not_prototypically inherit from the JavaScript `Object`. This means that typical`Object` methods such as `obj.toString()`,
`obj.hasOwnProperty()`, and others
are not defined and _will not work_.

By default, percent-encoded characters within the query string will be assumed
to use UTF-8 encoding. If an alternative character encoding is used, then an
alternative `decodeURIComponent` option will need to be specified:

```js
// Assuming gbkDecodeURIComponent function already exists...

querystring.parse('w=%D6%D0%CE%C4&#x26;foo=bar', null, null,
                  { decodeURIComponent: gbkDecodeURIComponent });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The URL query string to parse |
| `sep?` | `string` | The substring used to delimit key and value pairs in the query string. |
| `eq?` | `string` | . The substring used to delimit keys and values in the query string. |
| `options?` | [`ParseOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParseOptions.md) | - |

#### Returns

[`ParsedUrlQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)

#### Defined in

[querystring.d.ts:105](https://github.com/valgaze/bun-types/blob/6f8dbf8/querystring.d.ts#L105)

▸ **decode**(`str`, `sep?`, `eq?`, `options?`): [`ParsedUrlQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)

The `querystring.parse()` method parses a URL query string (`str`) into a
collection of key and value pairs.

For example, the query string `'foo=bar&#x26;abc=xyz&#x26;abc=123'` is parsed into:

```js
{
  foo: 'bar',
  abc: ['xyz', '123']
}
```

The object returned by the `querystring.parse()` method _does not_prototypically inherit from the JavaScript `Object`. This means that typical`Object` methods such as `obj.toString()`,
`obj.hasOwnProperty()`, and others
are not defined and _will not work_.

By default, percent-encoded characters within the query string will be assumed
to use UTF-8 encoding. If an alternative character encoding is used, then an
alternative `decodeURIComponent` option will need to be specified:

```js
// Assuming gbkDecodeURIComponent function already exists...

querystring.parse('w=%D6%D0%CE%C4&#x26;foo=bar', null, null,
                  { decodeURIComponent: gbkDecodeURIComponent });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The URL query string to parse |
| `sep?` | `string` | The substring used to delimit key and value pairs in the query string. |
| `eq?` | `string` | . The substring used to delimit keys and values in the query string. |
| `options?` | [`ParseOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParseOptions.md) | - |

#### Returns

[`ParsedUrlQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)

#### Defined in

[dist/types.d.ts:14396](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L14396)

___

### encode

▸ **encode**(`obj?`, `sep?`, `eq?`, `options?`): `string`

The `querystring.stringify()` method produces a URL query string from a
given `obj` by iterating through the object's "own properties".

It serializes the following types of values passed in `obj`:[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) |
[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |
[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) |
[string\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) |
[number\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
[bigint\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |
[boolean\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) The numeric values must be finite. Any other input values will be coerced to
empty strings.

```js
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// Returns 'foo=bar&#x26;baz=qux&#x26;baz=quux&#x26;corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// Returns 'foo:bar;baz:qux'
```

By default, characters requiring percent-encoding within the query string will
be encoded as UTF-8\. If an alternative encoding is required, then an alternative`encodeURIComponent` option will need to be specified:

```js
// Assuming gbkEncodeURIComponent function already exists,

querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
                      { encodeURIComponent: gbkEncodeURIComponent });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj?` | [`ParsedUrlQueryInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQueryInput.md) | The object to serialize into a URL query string |
| `sep?` | `string` | The substring used to delimit key and value pairs in the query string. |
| `eq?` | `string` | . The substring used to delimit keys and values in the query string. |
| `options?` | [`StringifyOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.StringifyOptions.md) | - |

#### Returns

`string`

#### Defined in

[querystring.d.ts:68](https://github.com/valgaze/bun-types/blob/6f8dbf8/querystring.d.ts#L68)

▸ **encode**(`obj?`, `sep?`, `eq?`, `options?`): `string`

The `querystring.stringify()` method produces a URL query string from a
given `obj` by iterating through the object's "own properties".

It serializes the following types of values passed in `obj`:[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) |
[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |
[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) |
[string\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) |
[number\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
[bigint\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |
[boolean\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) The numeric values must be finite. Any other input values will be coerced to
empty strings.

```js
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// Returns 'foo=bar&#x26;baz=qux&#x26;baz=quux&#x26;corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// Returns 'foo:bar;baz:qux'
```

By default, characters requiring percent-encoding within the query string will
be encoded as UTF-8\. If an alternative encoding is required, then an alternative`encodeURIComponent` option will need to be specified:

```js
// Assuming gbkEncodeURIComponent function already exists,

querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
                      { encodeURIComponent: gbkEncodeURIComponent });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj?` | [`ParsedUrlQueryInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQueryInput.md) | The object to serialize into a URL query string |
| `sep?` | `string` | The substring used to delimit key and value pairs in the query string. |
| `eq?` | `string` | . The substring used to delimit keys and values in the query string. |
| `options?` | [`StringifyOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.StringifyOptions.md) | - |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:14359](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L14359)

___

### parse

▸ **parse**(`str`, `sep?`, `eq?`, `options?`): [`ParsedUrlQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)

The `querystring.parse()` method parses a URL query string (`str`) into a
collection of key and value pairs.

For example, the query string `'foo=bar&#x26;abc=xyz&#x26;abc=123'` is parsed into:

```js
{
  foo: 'bar',
  abc: ['xyz', '123']
}
```

The object returned by the `querystring.parse()` method _does not_prototypically inherit from the JavaScript `Object`. This means that typical`Object` methods such as `obj.toString()`,
`obj.hasOwnProperty()`, and others
are not defined and _will not work_.

By default, percent-encoded characters within the query string will be assumed
to use UTF-8 encoding. If an alternative character encoding is used, then an
alternative `decodeURIComponent` option will need to be specified:

```js
// Assuming gbkDecodeURIComponent function already exists...

querystring.parse('w=%D6%D0%CE%C4&#x26;foo=bar', null, null,
                  { decodeURIComponent: gbkDecodeURIComponent });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The URL query string to parse |
| `sep?` | `string` | The substring used to delimit key and value pairs in the query string. |
| `eq?` | `string` | . The substring used to delimit keys and values in the query string. |
| `options?` | [`ParseOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParseOptions.md) | - |

#### Returns

[`ParsedUrlQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)

#### Defined in

[querystring.d.ts:105](https://github.com/valgaze/bun-types/blob/6f8dbf8/querystring.d.ts#L105)

▸ **parse**(`str`, `sep?`, `eq?`, `options?`): [`ParsedUrlQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)

The `querystring.parse()` method parses a URL query string (`str`) into a
collection of key and value pairs.

For example, the query string `'foo=bar&#x26;abc=xyz&#x26;abc=123'` is parsed into:

```js
{
  foo: 'bar',
  abc: ['xyz', '123']
}
```

The object returned by the `querystring.parse()` method _does not_prototypically inherit from the JavaScript `Object`. This means that typical`Object` methods such as `obj.toString()`,
`obj.hasOwnProperty()`, and others
are not defined and _will not work_.

By default, percent-encoded characters within the query string will be assumed
to use UTF-8 encoding. If an alternative character encoding is used, then an
alternative `decodeURIComponent` option will need to be specified:

```js
// Assuming gbkDecodeURIComponent function already exists...

querystring.parse('w=%D6%D0%CE%C4&#x26;foo=bar', null, null,
                  { decodeURIComponent: gbkDecodeURIComponent });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The URL query string to parse |
| `sep?` | `string` | The substring used to delimit key and value pairs in the query string. |
| `eq?` | `string` | . The substring used to delimit keys and values in the query string. |
| `options?` | [`ParseOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParseOptions.md) | - |

#### Returns

[`ParsedUrlQuery`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQuery.md)

#### Defined in

[dist/types.d.ts:14396](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L14396)

___

### stringify

▸ **stringify**(`obj?`, `sep?`, `eq?`, `options?`): `string`

The `querystring.stringify()` method produces a URL query string from a
given `obj` by iterating through the object's "own properties".

It serializes the following types of values passed in `obj`:[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) |
[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |
[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) |
[string\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) |
[number\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
[bigint\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |
[boolean\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) The numeric values must be finite. Any other input values will be coerced to
empty strings.

```js
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// Returns 'foo=bar&#x26;baz=qux&#x26;baz=quux&#x26;corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// Returns 'foo:bar;baz:qux'
```

By default, characters requiring percent-encoding within the query string will
be encoded as UTF-8\. If an alternative encoding is required, then an alternative`encodeURIComponent` option will need to be specified:

```js
// Assuming gbkEncodeURIComponent function already exists,

querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
                      { encodeURIComponent: gbkEncodeURIComponent });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj?` | [`ParsedUrlQueryInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQueryInput.md) | The object to serialize into a URL query string |
| `sep?` | `string` | The substring used to delimit key and value pairs in the query string. |
| `eq?` | `string` | . The substring used to delimit keys and values in the query string. |
| `options?` | [`StringifyOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.StringifyOptions.md) | - |

#### Returns

`string`

#### Defined in

[querystring.d.ts:68](https://github.com/valgaze/bun-types/blob/6f8dbf8/querystring.d.ts#L68)

▸ **stringify**(`obj?`, `sep?`, `eq?`, `options?`): `string`

The `querystring.stringify()` method produces a URL query string from a
given `obj` by iterating through the object's "own properties".

It serializes the following types of values passed in `obj`:[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) |
[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
[bigint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |
[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) |
[string\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) |
[number\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) |
[bigint\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |
[boolean\[\]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) The numeric values must be finite. Any other input values will be coerced to
empty strings.

```js
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// Returns 'foo=bar&#x26;baz=qux&#x26;baz=quux&#x26;corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// Returns 'foo:bar;baz:qux'
```

By default, characters requiring percent-encoding within the query string will
be encoded as UTF-8\. If an alternative encoding is required, then an alternative`encodeURIComponent` option will need to be specified:

```js
// Assuming gbkEncodeURIComponent function already exists,

querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
                      { encodeURIComponent: gbkEncodeURIComponent });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj?` | [`ParsedUrlQueryInput`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.ParsedUrlQueryInput.md) | The object to serialize into a URL query string |
| `sep?` | `string` | The substring used to delimit key and value pairs in the query string. |
| `eq?` | `string` | . The substring used to delimit keys and values in the query string. |
| `options?` | [`StringifyOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/querystring_.StringifyOptions.md) | - |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:14359](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L14359)
