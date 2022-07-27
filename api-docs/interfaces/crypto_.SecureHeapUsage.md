[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / SecureHeapUsage

# Interface: SecureHeapUsage

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).SecureHeapUsage

## Table of contents

### Properties

- [min](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md#min)
- [total](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md#total)
- [used](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md#used)
- [utilization](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.SecureHeapUsage.md#utilization)

## Properties

### min

• **min**: `number`

The minimum allocation from the secure heap as specified using the `--secure-heap-min` command-line flag.

#### Defined in

[crypto.d.ts:3595](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3595)

[dist/types.d.ts:19614](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19614)

___

### total

• **total**: `number`

The total allocated secure heap size as specified using the `--secure-heap=n` command-line flag.

#### Defined in

[crypto.d.ts:3591](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3591)

[dist/types.d.ts:19610](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19610)

___

### used

• **used**: `number`

The total number of bytes currently allocated from the secure heap.

#### Defined in

[crypto.d.ts:3599](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3599)

[dist/types.d.ts:19618](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19618)

___

### utilization

• **utilization**: `number`

The calculated ratio of `used` to `total` allocated bytes.

#### Defined in

[crypto.d.ts:3603](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3603)

[dist/types.d.ts:19622](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19622)
