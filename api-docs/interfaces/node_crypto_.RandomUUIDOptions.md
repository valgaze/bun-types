[bun-types](../README.md) / [Exports](../modules.md) / ["node:crypto"](../modules/node_crypto_.md) / RandomUUIDOptions

# Interface: RandomUUIDOptions

["node:crypto"](../modules/node_crypto_.md).RandomUUIDOptions

## Table of contents

### Properties

- [disableEntropyCache](node_crypto_.RandomUUIDOptions.md#disableentropycache)

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

[crypto.d.ts:3617](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3617)

[dist/types.d.ts:19636](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19636)
