[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md) / RandomUUIDOptions

# Interface: RandomUUIDOptions

["node:crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_crypto_.md).RandomUUIDOptions

## Table of contents

### Properties

- [disableEntropyCache](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_crypto_.RandomUUIDOptions.md#disableentropycache)

## Properties

### disableEntropyCache

• `Optional` **disableEntropyCache**: `boolean`

By default, to improve performance,
Node.js will pre-emptively generate and persistently cache enough
random data to generate up to 128 random UUIDs. To generate a UUID
without using the cache, set `disableEntropyCache` to `true`.

**`Default`**

`false`

#### Defined in

[crypto.d.ts:3617](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L3617)

[dist/types.d.ts:19636](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L19636)
