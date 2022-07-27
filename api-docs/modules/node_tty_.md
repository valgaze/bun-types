[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "node:tty"

# Namespace: "node:tty"

## Table of contents

### Variables

- [ReadStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_tty_.md#readstream)
- [WriteStream](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_tty_.md#writestream)

### Functions

- [isatty](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_tty_.md#isatty)

## Variables

### ReadStream

• **ReadStream**: `Function`

#### Defined in

[tty.d.ts:12](https://github.com/valgaze/bun-types/blob/6f8dbf8/tty.d.ts#L12)

[dist/types.d.ts:20192](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L20192)

___

### WriteStream

• **WriteStream**: `Function`

#### Defined in

[tty.d.ts:13](https://github.com/valgaze/bun-types/blob/6f8dbf8/tty.d.ts#L13)

[dist/types.d.ts:20193](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L20193)

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

[tty.d.ts:9](https://github.com/valgaze/bun-types/blob/6f8dbf8/tty.d.ts#L9)

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

[dist/types.d.ts:20189](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L20189)
