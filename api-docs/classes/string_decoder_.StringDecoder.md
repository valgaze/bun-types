[bun-types](../README.md) / [Exports](../modules.md) / ["string\_decoder"](../modules/string_decoder_.md) / StringDecoder

# Class: StringDecoder

["string_decoder"](../modules/string_decoder_.md).StringDecoder

## Table of contents

### Constructors

- [constructor](string_decoder_.StringDecoder.md#constructor)

### Methods

- [end](string_decoder_.StringDecoder.md#end)
- [write](string_decoder_.StringDecoder.md#write)

## Constructors

### constructor

• **new StringDecoder**(`encoding?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | `BufferEncoding` |

#### Defined in

[string_decoder.d.ts:43](https://github.com/valgaze/bun-types/blob/5e53f27/string_decoder.d.ts#L43)

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
| `buffer?` | [`Buffer`](../modules/buffer_.md#buffer) | A `Buffer`, or `TypedArray`, or `DataView` containing the bytes to decode. |

#### Returns

`string`

#### Defined in

[string_decoder.d.ts:60](https://github.com/valgaze/bun-types/blob/5e53f27/string_decoder.d.ts#L60)

___

### write

▸ **write**(`buffer`): `string`

Returns a decoded string, ensuring that any incomplete multibyte characters at
the end of the `Buffer`, or `TypedArray`, or `DataView` are omitted from the
returned string and stored in an internal buffer for the next call to`stringDecoder.write()` or `stringDecoder.end()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | [`Buffer`](../modules/buffer_.md#buffer) | A `Buffer`, or `TypedArray`, or `DataView` containing the bytes to decode. |

#### Returns

`string`

#### Defined in

[string_decoder.d.ts:50](https://github.com/valgaze/bun-types/blob/5e53f27/string_decoder.d.ts#L50)
