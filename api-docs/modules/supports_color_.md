[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "supports-color"

# Namespace: "supports-color"

## Table of contents

### References

- [default](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#default)

### Interfaces

- [ColorSupport](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/supports_color_.ColorSupport.md)
- [Options](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/supports_color_.Options.md)

### Type Aliases

- [ColorInfo](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo)
- [ColorSupportLevel](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorsupportlevel)

### Variables

- [stderr](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#stderr)
- [stdout](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#stdout)
- [supportsColor](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#supportscolor)

## References

### default

Renames and re-exports [supportsColor](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#supportscolor)

## Type Aliases

### ColorInfo

Ƭ **ColorInfo**: [`ColorSupport`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/supports_color_.ColorSupport.md) \| ``false``

#### Defined in

[supports-color.d.ts:44](https://github.com/valgaze/bun-types/blob/6f8dbf8/supports-color.d.ts#L44)

___

### ColorSupportLevel

Ƭ **ColorSupportLevel**: ``0`` \| ``1`` \| ``2`` \| ``3``

Levels:
- `0` - All colors disabled.
- `1` - Basic 16 colors support.
- `2` - ANSI 256 colors support.
- `3` - Truecolor 16 million colors support.

#### Defined in

[supports-color.d.ts:17](https://github.com/valgaze/bun-types/blob/6f8dbf8/supports-color.d.ts#L17)

## Variables

### stderr

• `Const` **stderr**: [`ColorInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo)

#### Defined in

[supports-color.d.ts:52](https://github.com/valgaze/bun-types/blob/6f8dbf8/supports-color.d.ts#L52)

___

### stdout

• `Const` **stdout**: [`ColorInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo)

#### Defined in

[supports-color.d.ts:51](https://github.com/valgaze/bun-types/blob/6f8dbf8/supports-color.d.ts#L51)

___

### supportsColor

• `Const` **supportsColor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `stderr` | [`ColorInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo) |
| `stdout` | [`ColorInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/supports_color_.md#colorinfo) |

#### Defined in

[supports-color.d.ts:46](https://github.com/valgaze/bun-types/blob/6f8dbf8/supports-color.d.ts#L46)
