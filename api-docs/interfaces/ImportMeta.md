[bun-types](../README.md) / [Exports](../modules.md) / ImportMeta

# Interface: ImportMeta

The type of `import.meta`.

If you need to declare that a given property exists on `import.meta`,
this type may be augmented via interface merging.

## Table of contents

### Properties

- [dir](ImportMeta.md#dir)
- [file](ImportMeta.md#file)
- [path](ImportMeta.md#path)
- [url](ImportMeta.md#url)

### Methods

- [resolve](ImportMeta.md#resolve)

## Properties

### dir

• **dir**: `string`

Absolute path to the directory containing the source file.

Does not have a trailing slash

#### Defined in

[globals.d.ts:155](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L155)

[dist/types.d.ts:8725](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8725)

___

### file

• **file**: `string`

Filename of the source file

#### Defined in

[globals.d.ts:159](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L159)

[dist/types.d.ts:8729](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8729)

___

### path

• **path**: `string`

Absolute path to the source file

#### Defined in

[globals.d.ts:149](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L149)

[dist/types.d.ts:8719](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8719)

___

### url

• **url**: `string`

`file://` url string for the current module.

**`Example`**

```ts
console.log(import.meta.url);
"file:///Users/me/projects/my-app/src/my-app.ts"
```

#### Defined in

[globals.d.ts:145](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L145)

[dist/types.d.ts:8715](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8715)

## Methods

### resolve

▸ **resolve**(`moduleId`): `Promise`<`string`\>

Resolve a module ID the same as if you imported it

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[globals.d.ts:165](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L165)

▸ **resolve**(`moduleId`, `parent`): `Promise`<`string`\>

Resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[globals.d.ts:172](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L172)

▸ **resolve**(`moduleId`): `Promise`<`string`\>

Resolve a module ID the same as if you imported it

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[dist/types.d.ts:8735](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8735)

▸ **resolve**(`moduleId`, `parent`): `Promise`<`string`\>

Resolve a `moduleId` as though it were imported from `parent`

On failure, throws a `ResolveError`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |
| `parent` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[dist/types.d.ts:8742](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L8742)
