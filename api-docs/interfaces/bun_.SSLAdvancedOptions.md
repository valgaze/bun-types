[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / SSLAdvancedOptions

# Interface: SSLAdvancedOptions

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).SSLAdvancedOptions

## Table of contents

### Properties

- [caFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md#cafile)
- [dhParamsFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md#dhparamsfile)
- [lowMemoryMode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md#lowmemorymode)
- [passphrase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.SSLAdvancedOptions.md#passphrase)

## Properties

### caFile

• `Optional` **caFile**: `string`

#### Defined in

[bun.d.ts:732](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L732)

[dist/types.d.ts:742](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L742)

___

### dhParamsFile

• `Optional` **dhParamsFile**: `string`

#### Defined in

[bun.d.ts:733](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L733)

[dist/types.d.ts:743](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L743)

___

### lowMemoryMode

• `Optional` **lowMemoryMode**: `boolean`

This sets `OPENSSL_RELEASE_BUFFERS` to 1.
It reduces overall performance but saves some memory.

**`Default`**

false

#### Defined in

[bun.d.ts:740](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L740)

[dist/types.d.ts:750](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L750)

___

### passphrase

• `Optional` **passphrase**: `string`

#### Defined in

[bun.d.ts:731](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L731)

[dist/types.d.ts:741](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L741)
