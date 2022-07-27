[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["sys"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.md) / InspectOptionsStylized

# Interface: InspectOptionsStylized

["sys"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/sys_.md).InspectOptionsStylized

## Hierarchy

- [`InspectOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md)

  ↳ **`InspectOptionsStylized`**

## Table of contents

### Properties

- [breakLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#breaklength)
- [colors](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#colors)
- [compact](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#compact)
- [customInspect](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#custominspect)
- [depth](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#depth)
- [getters](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#getters)
- [maxArrayLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#maxarraylength)
- [maxStringLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#maxstringlength)
- [showHidden](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#showhidden)
- [showProxy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#showproxy)
- [sorted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#sorted)

### Methods

- [stylize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/sys_.InspectOptionsStylized.md#stylize)

## Properties

### breakLength

• `Optional` **breakLength**: `number`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[breakLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#breaklength)

#### Defined in

[util.d.ts:38](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L38)

[dist/types.d.ts:13143](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13143)

___

### colors

• `Optional` **colors**: `boolean`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[colors](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#colors)

#### Defined in

[util.d.ts:27](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L27)

[dist/types.d.ts:13132](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13132)

___

### compact

• `Optional` **compact**: `number` \| `boolean`

Setting this to `false` causes each object key
to be displayed on a new line. It will also add new lines to text that is
longer than `breakLength`. If set to a number, the most `n` inner elements
are united on a single line as long as all properties fit into
`breakLength`. Short array elements are also grouped together. Note that no
text will be reduced below 16 characters, no matter the `breakLength` size.
For more information, see the example below.

**`Default`**

`true`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[compact](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#compact)

#### Defined in

[util.d.ts:49](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L49)

[dist/types.d.ts:13154](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13154)

___

### customInspect

• `Optional` **customInspect**: `boolean`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[customInspect](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#custominspect)

#### Defined in

[util.d.ts:28](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L28)

[dist/types.d.ts:13133](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13133)

___

### depth

• `Optional` **depth**: `number`

**`Default`**

2

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[depth](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#depth)

#### Defined in

[util.d.ts:26](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L26)

[dist/types.d.ts:13131](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13131)

___

### getters

• `Optional` **getters**: `boolean` \| ``"get"`` \| ``"set"``

If set to `true`, getters are going to be
inspected as well. If set to `'get'` only getters without setter are going
to be inspected. If set to `'set'` only getters having a corresponding
setter are going to be inspected. This might cause side effects depending on
the getter function.

**`Default`**

`false`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[getters](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#getters)

#### Defined in

[util.d.ts:21](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L21)

[dist/types.d.ts:13126](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13126)

___

### maxArrayLength

• `Optional` **maxArrayLength**: `number`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[maxArrayLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#maxarraylength)

#### Defined in

[util.d.ts:30](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L30)

[dist/types.d.ts:13135](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13135)

___

### maxStringLength

• `Optional` **maxStringLength**: `number`

Specifies the maximum number of characters to
include when formatting. Set to `null` or `Infinity` to show all elements.
Set to `0` or negative to show no characters.

**`Default`**

10000

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[maxStringLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#maxstringlength)

#### Defined in

[util.d.ts:37](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L37)

[dist/types.d.ts:13142](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13142)

___

### showHidden

• `Optional` **showHidden**: `boolean`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[showHidden](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#showhidden)

#### Defined in

[util.d.ts:22](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L22)

[dist/types.d.ts:13127](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13127)

___

### showProxy

• `Optional` **showProxy**: `boolean`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[showProxy](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#showproxy)

#### Defined in

[util.d.ts:29](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L29)

[dist/types.d.ts:13134](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13134)

___

### sorted

• `Optional` **sorted**: `boolean` \| (`a`: `string`, `b`: `string`) => `number`

#### Inherited from

[InspectOptions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md).[sorted](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/util_.InspectOptions.md#sorted)

#### Defined in

[util.d.ts:50](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L50)

[dist/types.d.ts:13155](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13155)

## Methods

### stylize

▸ **stylize**(`text`, `styleType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `styleType` | [`Style`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#style) |

#### Returns

`string`

#### Defined in

[util.d.ts:69](https://github.com/valgaze/bun-types/blob/6f8dbf8/util.d.ts#L69)

▸ **stylize**(`text`, `styleType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `styleType` | [`Style`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/util_.md#style) |

#### Returns

`string`

#### Defined in

[dist/types.d.ts:13174](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L13174)
