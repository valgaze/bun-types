[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["node:fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_fs_.md) / Stats

# Class: Stats

["node:fs"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_fs_.md).Stats

A `fs.Stats` object provides information about a file.

Objects returned from [stat](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_fs_.md#stat), [lstat](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_fs_.md#lstat) and [fstat](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_fs_.md#fstat) and
their synchronous counterparts are of this type.
If `bigint` in the `options` passed to those methods is true, the numeric values
will be `bigint` instead of `number`, and the object will contain additional
nanosecond-precision properties suffixed with `Ns`.

```console
Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

`bigint` version:

```console
BigIntStats {
  dev: 2114n,
  ino: 48064969n,
  mode: 33188n,
  nlink: 1n,
  uid: 85n,
  gid: 100n,
  rdev: 0n,
  size: 527n,
  blksize: 4096n,
  blocks: 8n,
  atimeMs: 1318289051000n,
  mtimeMs: 1318289051000n,
  ctimeMs: 1318289051000n,
  birthtimeMs: 1318289051000n,
  atimeNs: 1318289051000000000n,
  mtimeNs: 1318289051000000000n,
  ctimeNs: 1318289051000000000n,
  birthtimeNs: 1318289051000000000n,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
```

**`Since`**

v0.0.67

## Hierarchy

- [`StatsBase`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md)<`number`\>

  ↳ **`Stats`**

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#constructor)

### Properties

- [atime](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#atime)
- [atimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#atimems)
- [birthtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#birthtime)
- [birthtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#birthtimems)
- [blksize](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#blksize)
- [blocks](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#blocks)
- [ctime](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#ctime)
- [ctimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#ctimems)
- [dev](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#dev)
- [gid](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#gid)
- [ino](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#ino)
- [mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#mode)
- [mtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#mtime)
- [mtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#mtimems)
- [nlink](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#nlink)
- [rdev](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#rdev)
- [size](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#size)
- [uid](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#uid)

### Methods

- [isBlockDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#isblockdevice)
- [isCharacterDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#ischaracterdevice)
- [isDirectory](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#isdirectory)
- [isFIFO](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#isfifo)
- [isFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#isfile)
- [isSocket](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#issocket)
- [isSymbolicLink](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/node_fs_.Stats.md#issymboliclink)

## Constructors

### constructor

• **new Stats**()

#### Inherited from

StatsBase<number\>.constructor

## Properties

### atime

• **atime**: `Date`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[atime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#atime)

#### Defined in

[fs.d.ts:47](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L47)

[dist/types.d.ts:4901](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4901)

___

### atimeMs

• **atimeMs**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[atimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#atimems)

#### Defined in

[fs.d.ts:43](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L43)

[dist/types.d.ts:4897](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4897)

___

### birthtime

• **birthtime**: `Date`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[birthtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#birthtime)

#### Defined in

[fs.d.ts:50](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L50)

[dist/types.d.ts:4904](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4904)

___

### birthtimeMs

• **birthtimeMs**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[birthtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#birthtimems)

#### Defined in

[fs.d.ts:46](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L46)

[dist/types.d.ts:4900](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4900)

___

### blksize

• **blksize**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[blksize](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#blksize)

#### Defined in

[fs.d.ts:41](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L41)

[dist/types.d.ts:4895](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4895)

___

### blocks

• **blocks**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[blocks](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#blocks)

#### Defined in

[fs.d.ts:42](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L42)

[dist/types.d.ts:4896](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4896)

___

### ctime

• **ctime**: `Date`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[ctime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ctime)

#### Defined in

[fs.d.ts:49](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L49)

[dist/types.d.ts:4903](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4903)

___

### ctimeMs

• **ctimeMs**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[ctimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ctimems)

#### Defined in

[fs.d.ts:45](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L45)

[dist/types.d.ts:4899](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4899)

___

### dev

• **dev**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[dev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#dev)

#### Defined in

[fs.d.ts:33](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L33)

[dist/types.d.ts:4887](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4887)

___

### gid

• **gid**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[gid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#gid)

#### Defined in

[fs.d.ts:38](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L38)

[dist/types.d.ts:4892](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4892)

___

### ino

• **ino**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[ino](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ino)

#### Defined in

[fs.d.ts:34](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L34)

[dist/types.d.ts:4888](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4888)

___

### mode

• **mode**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[mode](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mode)

#### Defined in

[fs.d.ts:35](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L35)

[dist/types.d.ts:4889](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4889)

___

### mtime

• **mtime**: `Date`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[mtime](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mtime)

#### Defined in

[fs.d.ts:48](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L48)

[dist/types.d.ts:4902](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4902)

___

### mtimeMs

• **mtimeMs**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[mtimeMs](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#mtimems)

#### Defined in

[fs.d.ts:44](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L44)

[dist/types.d.ts:4898](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4898)

___

### nlink

• **nlink**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[nlink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#nlink)

#### Defined in

[fs.d.ts:36](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L36)

[dist/types.d.ts:4890](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4890)

___

### rdev

• **rdev**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[rdev](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#rdev)

#### Defined in

[fs.d.ts:39](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L39)

[dist/types.d.ts:4893](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4893)

___

### size

• **size**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[size](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#size)

#### Defined in

[fs.d.ts:40](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L40)

[dist/types.d.ts:4894](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4894)

___

### uid

• **uid**: `number`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[uid](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#uid)

#### Defined in

[fs.d.ts:37](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L37)

[dist/types.d.ts:4891](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4891)

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isBlockDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isblockdevice)

#### Defined in

[fs.d.ts:28](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L28)

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isBlockDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isblockdevice)

#### Defined in

[dist/types.d.ts:4882](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4882)

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isCharacterDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ischaracterdevice)

#### Defined in

[fs.d.ts:29](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L29)

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isCharacterDevice](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#ischaracterdevice)

#### Defined in

[dist/types.d.ts:4883](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4883)

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isDirectory](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isdirectory)

#### Defined in

[fs.d.ts:27](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L27)

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isDirectory](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isdirectory)

#### Defined in

[dist/types.d.ts:4881](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4881)

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isFIFO](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfifo)

#### Defined in

[fs.d.ts:31](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L31)

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isFIFO](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfifo)

#### Defined in

[dist/types.d.ts:4885](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4885)

___

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfile)

#### Defined in

[fs.d.ts:26](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L26)

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isFile](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#isfile)

#### Defined in

[dist/types.d.ts:4880](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4880)

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isSocket](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issocket)

#### Defined in

[fs.d.ts:32](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L32)

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isSocket](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issocket)

#### Defined in

[dist/types.d.ts:4886](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4886)

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isSymbolicLink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issymboliclink)

#### Defined in

[fs.d.ts:30](https://github.com/valgaze/bun-types/blob/6f8dbf8/fs.d.ts#L30)

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md).[isSymbolicLink](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/fs_.StatsBase.md#issymboliclink)

#### Defined in

[dist/types.d.ts:4884](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L4884)
