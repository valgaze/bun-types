[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md) / StatSyncFn

# Interface: StatSyncFn

["fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/fs_.md).StatSyncFn

## Hierarchy

- `Function`

  ↳ **`StatSyncFn`**

## Callable

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | `undefined` |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Defined in

[fs.d.ts:674](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L674)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint?`: ``false`` ; `throwIfNoEntry`: ``false``  } |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Defined in

[fs.d.ts:675](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L675)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint`: ``true`` ; `throwIfNoEntry`: ``false``  } |

#### Returns

[`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:682](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L682)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint?`: ``false``  } |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Defined in

[fs.d.ts:690](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L690)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:697](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L697)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md) \| [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint`: `boolean` ; `throwIfNoEntry?`: ``false``  } |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md) \| [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:703](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L703)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md) \| [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md) \| [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Defined in

[fs.d.ts:710](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L710)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | `undefined` |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Defined in

[dist/types.d.ts:5528](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L5528)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint?`: ``false`` ; `throwIfNoEntry`: ``false``  } |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Defined in

[dist/types.d.ts:5529](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L5529)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint`: ``true`` ; `throwIfNoEntry`: ``false``  } |

#### Returns

[`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Defined in

[dist/types.d.ts:5536](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L5536)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint?`: ``false``  } |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md)

#### Defined in

[dist/types.d.ts:5544](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L5544)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Defined in

[dist/types.d.ts:5551](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L5551)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md) \| [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) & { `bigint`: `boolean` ; `throwIfNoEntry?`: ``false``  } |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md) \| [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Defined in

[dist/types.d.ts:5557](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L5557)

### StatSyncFn

▸ **StatSyncFn**(`path`, `options?`): [`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md) \| [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `PathLike` |
| `options?` | [`StatSyncOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatSyncOptions.md) |

#### Returns

[`Stats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/fs_.Stats.md) \| [`BigIntStats`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.BigIntStats.md)

#### Defined in

[dist/types.d.ts:5564](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L5564)
