[bun-types](../README.md) / [Exports](../modules.md) / ["fs"](../modules/fs_.md) / Dirent

# Class: Dirent

["fs"](../modules/fs_.md).Dirent

A representation of a directory entry, which can be a file or a subdirectory
within the directory, as returned by reading from an `fs.Dir`. The
directory entry is a combination of the file name and file type pairs.

Additionally, when [readdir](../modules/fs_.md#readdir) or [readdirSync](../modules/fs_.md#readdirsync) is called with
the `withFileTypes` option set to `true`, the resulting array is filled with `fs.Dirent` objects, rather than strings or `Buffer` s.

**`Since`**

v0.0.67

## Table of contents

### Constructors

- [constructor](fs_.Dirent.md#constructor)

### Properties

- [name](fs_.Dirent.md#name)

### Methods

- [isBlockDevice](fs_.Dirent.md#isblockdevice)
- [isCharacterDevice](fs_.Dirent.md#ischaracterdevice)
- [isDirectory](fs_.Dirent.md#isdirectory)
- [isFIFO](fs_.Dirent.md#isfifo)
- [isFile](fs_.Dirent.md#isfile)
- [isSocket](fs_.Dirent.md#issocket)
- [isSymbolicLink](fs_.Dirent.md#issymboliclink)

## Constructors

### constructor

• **new Dirent**()

## Properties

### name

• **name**: `string`

The file name that this `fs.Dirent` object refers to. The type of this
value is determined by the `options.encoding` passed to [readdir](../modules/fs_.md#readdir) or [readdirSync](../modules/fs_.md#readdirsync).

**`Since`**

v0.0.67

#### Defined in

[fs.d.ts:166](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L166)

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a block device.

**`Since`**

v0.0.67

#### Returns

`boolean`

#### Defined in

[fs.d.ts:139](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L139)

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a character device.

**`Since`**

v0.0.67

#### Returns

`boolean`

#### Defined in

[fs.d.ts:144](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L144)

___

### isDirectory

▸ **isDirectory**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a file system
directory.

**`Since`**

v0.0.67

#### Returns

`boolean`

#### Defined in

[fs.d.ts:134](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L134)

___

### isFIFO

▸ **isFIFO**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a first-in-first-out
(FIFO) pipe.

**`Since`**

v0.0.67

#### Returns

`boolean`

#### Defined in

[fs.d.ts:155](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L155)

___

### isFile

▸ **isFile**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a regular file.

**`Since`**

v0.0.67

#### Returns

`boolean`

#### Defined in

[fs.d.ts:128](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L128)

___

### isSocket

▸ **isSocket**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a socket.

**`Since`**

v0.0.67

#### Returns

`boolean`

#### Defined in

[fs.d.ts:160](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L160)

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

Returns `true` if the `fs.Dirent` object describes a symbolic link.

**`Since`**

v0.0.67

#### Returns

`boolean`

#### Defined in

[fs.d.ts:149](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L149)
