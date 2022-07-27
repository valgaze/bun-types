[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / [HTMLRewriterTypes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/HTMLRewriterTypes.md) / Element

# Interface: Element

[HTMLRewriterTypes](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/HTMLRewriterTypes.md).Element

## Table of contents

### Properties

- [attributes](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#attributes)
- [namespaceURI](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#namespaceuri)
- [removed](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#removed)
- [tagName](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#tagname)

### Methods

- [after](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#after)
- [append](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#append)
- [before](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#before)
- [getAttribute](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#getattribute)
- [hasAttribute](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#hasattribute)
- [onEndTag](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#onendtag)
- [prepend](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#prepend)
- [remove](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#remove)
- [removeAndKeepContent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#removeandkeepcontent)
- [removeAttribute](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#removeattribute)
- [replace](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#replace)
- [setAttribute](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#setattribute)
- [setInnerContent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md#setinnercontent)

## Properties

### attributes

• `Readonly` **attributes**: `IterableIterator`<`string`[]\>

#### Defined in

[html-rewriter.d.ts:51](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L51)

[dist/types.d.ts:8505](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8505)

___

### namespaceURI

• `Readonly` **namespaceURI**: `string`

#### Defined in

[html-rewriter.d.ts:53](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L53)

[dist/types.d.ts:8507](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8507)

___

### removed

• `Readonly` **removed**: `boolean`

#### Defined in

[html-rewriter.d.ts:52](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L52)

[dist/types.d.ts:8506](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8506)

___

### tagName

• **tagName**: `string`

#### Defined in

[html-rewriter.d.ts:50](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L50)

[dist/types.d.ts:8504](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8504)

## Methods

### after

▸ **after**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:59](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L59)

▸ **after**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8513](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8513)

___

### append

▸ **append**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:61](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L61)

▸ **append**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8515](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8515)

___

### before

▸ **before**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:58](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L58)

▸ **before**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8512](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8512)

___

### getAttribute

▸ **getAttribute**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[html-rewriter.d.ts:54](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L54)

▸ **getAttribute**(`name`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:8508](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8508)

___

### hasAttribute

▸ **hasAttribute**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[html-rewriter.d.ts:55](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L55)

▸ **hasAttribute**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[dist/types.d.ts:8509](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8509)

___

### onEndTag

▸ **onEndTag**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`tag`: [`EndTag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.EndTag.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[html-rewriter.d.ts:66](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L66)

▸ **onEndTag**(`handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`tag`: [`EndTag`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.EndTag.md)) => `void` \| `Promise`<`void`\> |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8520](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8520)

___

### prepend

▸ **prepend**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:60](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L60)

▸ **prepend**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8514](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8514)

___

### remove

▸ **remove**(): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:63](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L63)

▸ **remove**(): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8517](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8517)

___

### removeAndKeepContent

▸ **removeAndKeepContent**(): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:64](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L64)

▸ **removeAndKeepContent**(): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8518](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8518)

___

### removeAttribute

▸ **removeAttribute**(`name`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:57](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L57)

▸ **removeAttribute**(`name`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8511](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8511)

___

### replace

▸ **replace**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:62](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L62)

▸ **replace**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8516](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8516)

___

### setAttribute

▸ **setAttribute**(`name`, `value`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:56](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L56)

▸ **setAttribute**(`name`, `value`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8510](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8510)

___

### setInnerContent

▸ **setInnerContent**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[html-rewriter.d.ts:65](https://github.com/valgaze/bun-types/blob/6f8dbf8/html-rewriter.d.ts#L65)

▸ **setInnerContent**(`content`, `options?`): [`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |
| `options?` | [`ContentOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.ContentOptions.md) |

#### Returns

[`Element`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/HTMLRewriterTypes.Element.md)

#### Defined in

[dist/types.d.ts:8519](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8519)
