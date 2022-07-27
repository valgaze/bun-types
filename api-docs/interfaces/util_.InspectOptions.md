[bun-types](../README.md) / [Exports](../modules.md) / ["util"](../modules/util_.md) / InspectOptions

# Interface: InspectOptions

["util"](../modules/util_.md).InspectOptions

## Hierarchy

- **`InspectOptions`**

  ↳ [`InspectOptionsStylized`](util_.InspectOptionsStylized.md)

  ↳ [`InspectOptionsStylized`](node_util_.InspectOptionsStylized.md)

  ↳ [`InspectOptionsStylized`](sys_.InspectOptionsStylized.md)

  ↳ [`InspectOptionsStylized`](node_sys_.InspectOptionsStylized.md)

## Table of contents

### Properties

- [breakLength](util_.InspectOptions.md#breaklength)
- [colors](util_.InspectOptions.md#colors)
- [compact](util_.InspectOptions.md#compact)
- [customInspect](util_.InspectOptions.md#custominspect)
- [depth](util_.InspectOptions.md#depth)
- [getters](util_.InspectOptions.md#getters)
- [maxArrayLength](util_.InspectOptions.md#maxarraylength)
- [maxStringLength](util_.InspectOptions.md#maxstringlength)
- [showHidden](util_.InspectOptions.md#showhidden)
- [showProxy](util_.InspectOptions.md#showproxy)
- [sorted](util_.InspectOptions.md#sorted)

## Properties

### breakLength

• `Optional` **breakLength**: `number`

#### Defined in

[util.d.ts:38](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L38)

[dist/types.d.ts:13143](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13143)

___

### colors

• `Optional` **colors**: `boolean`

#### Defined in

[util.d.ts:27](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L27)

[dist/types.d.ts:13132](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13132)

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

#### Defined in

[util.d.ts:49](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L49)

[dist/types.d.ts:13154](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13154)

___

### customInspect

• `Optional` **customInspect**: `boolean`

#### Defined in

[util.d.ts:28](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L28)

[dist/types.d.ts:13133](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13133)

___

### depth

• `Optional` **depth**: `number`

**`Default`**

2

#### Defined in

[util.d.ts:26](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L26)

[dist/types.d.ts:13131](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13131)

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

#### Defined in

[util.d.ts:21](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L21)

[dist/types.d.ts:13126](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13126)

___

### maxArrayLength

• `Optional` **maxArrayLength**: `number`

#### Defined in

[util.d.ts:30](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L30)

[dist/types.d.ts:13135](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13135)

___

### maxStringLength

• `Optional` **maxStringLength**: `number`

Specifies the maximum number of characters to
include when formatting. Set to `null` or `Infinity` to show all elements.
Set to `0` or negative to show no characters.

**`Default`**

10000

#### Defined in

[util.d.ts:37](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L37)

[dist/types.d.ts:13142](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13142)

___

### showHidden

• `Optional` **showHidden**: `boolean`

#### Defined in

[util.d.ts:22](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L22)

[dist/types.d.ts:13127](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13127)

___

### showProxy

• `Optional` **showProxy**: `boolean`

#### Defined in

[util.d.ts:29](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L29)

[dist/types.d.ts:13134](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13134)

___

### sorted

• `Optional` **sorted**: `boolean` \| (`a`: `string`, `b`: `string`) => `number`

#### Defined in

[util.d.ts:50](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L50)

[dist/types.d.ts:13155](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L13155)
