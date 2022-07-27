[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / Process

# Interface: Process

## Table of contents

### Properties

- [arch](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#arch)
- [argv](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#argv)
- [env](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#env)
- [isBun](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#isbun)
- [pid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#pid)
- [platform](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#platform)
- [ppid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#ppid)
- [version](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#version)
- [versions](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#versions)

### Methods

- [chdir](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#chdir)
- [cwd](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#cwd)
- [exit](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#exit)
- [getgid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#getgid)
- [getuid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#getuid)
- [nextTick](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#nexttick)
- [setgid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#setgid)
- [setuid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Process.md#setuid)

## Properties

### arch

• **arch**: `Architecture`

#### Defined in

[globals.d.ts:212](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L212)

[dist/types.d.ts:8782](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8782)

___

### argv

• **argv**: `string`[]

#### Defined in

[globals.d.ts:214](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L214)

[dist/types.d.ts:8784](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8784)

___

### env

• **env**: `Record`<`string`, `string`\> & { `NODE_ENV`: `string`  }

#### Defined in

[globals.d.ts:216](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L216)

[dist/types.d.ts:8786](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8786)

___

### isBun

• **isBun**: ``1``

Whether you are using Bun

#### Defined in

[globals.d.ts:221](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L221)

[dist/types.d.ts:8791](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8791)

___

### pid

• **pid**: `number`

#### Defined in

[globals.d.ts:211](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L211)

[dist/types.d.ts:8781](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8781)

___

### platform

• **platform**: `Platform`

#### Defined in

[globals.d.ts:213](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L213)

[dist/types.d.ts:8783](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8783)

___

### ppid

• **ppid**: `number`

#### Defined in

[globals.d.ts:210](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L210)

[dist/types.d.ts:8780](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8780)

___

### version

• **version**: `string`

The current version of Bun

#### Defined in

[globals.d.ts:200](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L200)

[dist/types.d.ts:8770](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8770)

___

### versions

• **versions**: `Record`<`string`, `string`\>

#### Defined in

[globals.d.ts:209](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L209)

[dist/types.d.ts:8779](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8779)

## Methods

### chdir

▸ **chdir**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

#### Defined in

[globals.d.ts:224](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L224)

▸ **chdir**(`directory`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `directory` | `string` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8794](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8794)

___

### cwd

▸ **cwd**(): `string`

#### Returns

`string`

#### Defined in

[globals.d.ts:225](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L225)

▸ **cwd**(): `string`

#### Returns

`string`

#### Defined in

[dist/types.d.ts:8795](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8795)

___

### exit

▸ **exit**(`code?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`void`

#### Defined in

[globals.d.ts:226](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L226)

▸ **exit**(`code?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8796](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8796)

___

### getgid

▸ **getgid**(): `number`

#### Returns

`number`

#### Defined in

[globals.d.ts:227](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L227)

▸ **getgid**(): `number`

#### Returns

`number`

#### Defined in

[dist/types.d.ts:8797](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8797)

___

### getuid

▸ **getuid**(): `number`

#### Returns

`number`

#### Defined in

[globals.d.ts:229](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L229)

▸ **getuid**(): `number`

#### Returns

`number`

#### Defined in

[dist/types.d.ts:8799](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8799)

___

### nextTick

▸ **nextTick**(`callback`, ...`args`): `void`

Run a function on the next tick of the event loop

This is the same as [queueMicrotask](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#queuemicrotask)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`args`: `any`) => `any` | The function to run |
| `...args` | `any` | - |

#### Returns

`void`

#### Defined in

[globals.d.ts:208](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L208)

▸ **nextTick**(`callback`, ...`args`): `void`

Run a function on the next tick of the event loop

This is the same as [queueMicrotask](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#queuemicrotask)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`args`: `any`) => `any` | The function to run |
| `...args` | `any` | - |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8778](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8778)

___

### setgid

▸ **setgid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[globals.d.ts:228](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L228)

▸ **setgid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8798](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8798)

___

### setuid

▸ **setuid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[globals.d.ts:230](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L230)

▸ **setuid**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:8800](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L8800)