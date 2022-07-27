[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["string\_decoder"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/string_decoder_.md) / StringDecoder

# Class: StringDecoder

["string_decoder"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/string_decoder_.md).StringDecoder

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/string_decoder_.StringDecoder.md#constructor)

### Methods

- [end](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/string_decoder_.StringDecoder.md#end)
- [write](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/string_decoder_.StringDecoder.md#write)

## Constructors

### constructor

• **new StringDecoder**(`encoding?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | `BufferEncoding` |

#### Defined in

[string_decoder.d.ts:43](https://github.com/valgaze/bun-types/blob/6f8dbf8/string_decoder.d.ts#L43)

## Methods

### end

▸ **end**(`buffer?`): `string`

Returns any remaining input stored in the internal buffer as a string. Bytes
representing incomplete UTF-8 and UTF-16 characters will be replaced with
substitution characters appropriate for the character encoding.

If the `buffer` argument is provided, one final call to `stringDecoder.write()`is performed before returning the remaining input.
After `end()` is called, the `stringDecoder` object can be reused for new input.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer?` | [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) | A `Buffer`, or `TypedArray`, or `DataView` containing the bytes to decode. |

#### Returns

`string`

#### Defined in

[string_decoder.d.ts:60](https://github.com/valgaze/bun-types/blob/6f8dbf8/string_decoder.d.ts#L60)

___

### write

▸ **write**(`buffer`): `string`

Returns a decoded string, ensuring that any incomplete multibyte characters at
the end of the `Buffer`, or `TypedArray`, or `DataView` are omitted from the
returned string and stored in an internal buffer for the next call to`stringDecoder.write()` or `stringDecoder.end()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer) | A `Buffer`, or `TypedArray`, or `DataView` containing the bytes to decode. |

#### Returns

`string`

#### Defined in

[string_decoder.d.ts:50](https://github.com/valgaze/bun-types/blob/6f8dbf8/string_decoder.d.ts#L50)
