[bun-types](../README.md) / [Exports](../modules.md) / "tty"

# Namespace: "tty"

## Table of contents

### Variables

- [ReadStream](tty_.md#readstream)
- [WriteStream](tty_.md#writestream)

### Functions

- [isatty](tty_.md#isatty)

## Variables

### ReadStream

• **ReadStream**: `Function`

#### Defined in

[tty.d.ts:12](https://github.com/valgaze/bun-types/blob/5e53f27/tty.d.ts#L12)

[dist/types.d.ts:20192](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20192)

___

### WriteStream

• **WriteStream**: `Function`

#### Defined in

[tty.d.ts:13](https://github.com/valgaze/bun-types/blob/5e53f27/tty.d.ts#L13)

[dist/types.d.ts:20193](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20193)

## Functions

### isatty

▸ **isatty**(`fd`): `boolean`

The `tty.isatty()` method returns `true` if the given `fd` is associated with
a TTY and `false` if it is not, including whenever `fd` is not a non-negative
integer.

**`Since`**

v0.5.8

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A numeric file descriptor |

#### Returns

`boolean`

#### Defined in

[tty.d.ts:9](https://github.com/valgaze/bun-types/blob/5e53f27/tty.d.ts#L9)

▸ **isatty**(`fd`): `boolean`

The `tty.isatty()` method returns `true` if the given `fd` is associated with
a TTY and `false` if it is not, including whenever `fd` is not a non-negative
integer.

**`Since`**

v0.5.8

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A numeric file descriptor |

#### Returns

`boolean`

#### Defined in

[dist/types.d.ts:20189](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L20189)
