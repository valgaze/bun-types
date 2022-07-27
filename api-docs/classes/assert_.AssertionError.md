[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["assert"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/assert_.md) / AssertionError

# Class: AssertionError

["assert"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/assert_.md).AssertionError

Indicates the failure of an assertion. All errors thrown by the `assert` module
will be instances of the `AssertionError` class.

## Hierarchy

- `Error`

  ↳ **`AssertionError`**

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/assert_.AssertionError.md#constructor)

### Properties

- [actual](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/assert_.AssertionError.md#actual)
- [code](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/assert_.AssertionError.md#code)
- [expected](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/assert_.AssertionError.md#expected)
- [generatedMessage](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/assert_.AssertionError.md#generatedmessage)
- [operator](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/assert_.AssertionError.md#operator)

## Constructors

### constructor

• **new AssertionError**(`options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.actual?` | `unknown` | The `actual` property on the error instance. |
| `options.expected?` | `unknown` | The `expected` property on the error instance. |
| `options.message?` | `string` | If provided, the error message is set to this value. |
| `options.operator?` | `string` | The `operator` property on the error instance. |
| `options.stackStartFn?` | `Function` | If provided, the generated stack trace omits frames before this function. |

#### Overrides

Error.constructor

#### Defined in

[assert.d.ts:23](https://github.com/valgaze/bun-types/blob/6f8dbf8/assert.d.ts#L23)

## Properties

### actual

• **actual**: `unknown`

#### Defined in

[assert.d.ts:18](https://github.com/valgaze/bun-types/blob/6f8dbf8/assert.d.ts#L18)

___

### code

• **code**: ``"ERR_ASSERTION"``

#### Defined in

[assert.d.ts:22](https://github.com/valgaze/bun-types/blob/6f8dbf8/assert.d.ts#L22)

___

### expected

• **expected**: `unknown`

#### Defined in

[assert.d.ts:19](https://github.com/valgaze/bun-types/blob/6f8dbf8/assert.d.ts#L19)

___

### generatedMessage

• **generatedMessage**: `boolean`

#### Defined in

[assert.d.ts:21](https://github.com/valgaze/bun-types/blob/6f8dbf8/assert.d.ts#L21)

___

### operator

• **operator**: `string`

#### Defined in

[assert.d.ts:20](https://github.com/valgaze/bun-types/blob/6f8dbf8/assert.d.ts#L20)
