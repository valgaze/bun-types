[bun-types](../README.md) / [Exports](../modules.md) / ["fs"](fs_.md) / constants

# Namespace: constants

["fs"](fs_.md).constants

## Table of contents

### Variables

- [COPYFILE\_EXCL](fs_.constants.md#copyfile_excl)
- [COPYFILE\_FICLONE](fs_.constants.md#copyfile_ficlone)
- [COPYFILE\_FICLONE\_FORCE](fs_.constants.md#copyfile_ficlone_force)
- [F\_OK](fs_.constants.md#f_ok)
- [O\_APPEND](fs_.constants.md#o_append)
- [O\_CREAT](fs_.constants.md#o_creat)
- [O\_DIRECT](fs_.constants.md#o_direct)
- [O\_DIRECTORY](fs_.constants.md#o_directory)
- [O\_DSYNC](fs_.constants.md#o_dsync)
- [O\_EXCL](fs_.constants.md#o_excl)
- [O\_NOATIME](fs_.constants.md#o_noatime)
- [O\_NOCTTY](fs_.constants.md#o_noctty)
- [O\_NOFOLLOW](fs_.constants.md#o_nofollow)
- [O\_NONBLOCK](fs_.constants.md#o_nonblock)
- [O\_RDONLY](fs_.constants.md#o_rdonly)
- [O\_RDWR](fs_.constants.md#o_rdwr)
- [O\_SYMLINK](fs_.constants.md#o_symlink)
- [O\_SYNC](fs_.constants.md#o_sync)
- [O\_TRUNC](fs_.constants.md#o_trunc)
- [O\_WRONLY](fs_.constants.md#o_wronly)
- [R\_OK](fs_.constants.md#r_ok)
- [S\_IFBLK](fs_.constants.md#s_ifblk)
- [S\_IFCHR](fs_.constants.md#s_ifchr)
- [S\_IFDIR](fs_.constants.md#s_ifdir)
- [S\_IFIFO](fs_.constants.md#s_ififo)
- [S\_IFLNK](fs_.constants.md#s_iflnk)
- [S\_IFMT](fs_.constants.md#s_ifmt)
- [S\_IFREG](fs_.constants.md#s_ifreg)
- [S\_IFSOCK](fs_.constants.md#s_ifsock)
- [S\_IRGRP](fs_.constants.md#s_irgrp)
- [S\_IROTH](fs_.constants.md#s_iroth)
- [S\_IRUSR](fs_.constants.md#s_irusr)
- [S\_IRWXG](fs_.constants.md#s_irwxg)
- [S\_IRWXO](fs_.constants.md#s_irwxo)
- [S\_IRWXU](fs_.constants.md#s_irwxu)
- [S\_IWGRP](fs_.constants.md#s_iwgrp)
- [S\_IWOTH](fs_.constants.md#s_iwoth)
- [S\_IWUSR](fs_.constants.md#s_iwusr)
- [S\_IXGRP](fs_.constants.md#s_ixgrp)
- [S\_IXOTH](fs_.constants.md#s_ixoth)
- [S\_IXUSR](fs_.constants.md#s_ixusr)
- [UV\_FS\_O\_FILEMAP](fs_.constants.md#uv_fs_o_filemap)
- [W\_OK](fs_.constants.md#w_ok)
- [X\_OK](fs_.constants.md#x_ok)

## Variables

### COPYFILE\_EXCL

• **COPYFILE\_EXCL**: `number`

Constant for fs.copyFile. Flag indicating the destination file should not be overwritten if it already exists.

#### Defined in

[fs.d.ts:2993](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2993)

[dist/types.d.ts:7847](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7847)

___

### COPYFILE\_FICLONE

• **COPYFILE\_FICLONE**: `number`

Constant for fs.copyFile. copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then a fallback copy mechanism is used.

#### Defined in

[fs.d.ts:2998](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2998)

[dist/types.d.ts:7852](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7852)

___

### COPYFILE\_FICLONE\_FORCE

• **COPYFILE\_FICLONE\_FORCE**: `number`

Constant for fs.copyFile. Copy operation will attempt to create a copy-on-write reflink.
If the underlying platform does not support copy-on-write, then the operation will fail with an error.

#### Defined in

[fs.d.ts:3003](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3003)

[dist/types.d.ts:7857](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7857)

___

### F\_OK

• **F\_OK**: `number`

Constant for fs.access(). File is visible to the calling process.

#### Defined in

[fs.d.ts:2984](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2984)

[dist/types.d.ts:7838](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7838)

___

### O\_APPEND

• **O\_APPEND**: `number`

Constant for fs.open(). Flag indicating that data will be appended to the end of the file.

#### Defined in

[fs.d.ts:3024](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3024)

[dist/types.d.ts:7878](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7878)

___

### O\_CREAT

• **O\_CREAT**: `number`

Constant for fs.open(). Flag indicating to create the file if it does not already exist.

#### Defined in

[fs.d.ts:3012](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3012)

[dist/types.d.ts:7866](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7866)

___

### O\_DIRECT

• **O\_DIRECT**: `number`

Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O.

#### Defined in

[fs.d.ts:3043](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3043)

[dist/types.d.ts:7897](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7897)

___

### O\_DIRECTORY

• **O\_DIRECTORY**: `number`

Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory.

#### Defined in

[fs.d.ts:3026](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3026)

[dist/types.d.ts:7880](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7880)

___

### O\_DSYNC

• **O\_DSYNC**: `number`

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O with write operations waiting for data integrity.

#### Defined in

[fs.d.ts:3039](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3039)

[dist/types.d.ts:7893](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7893)

___

### O\_EXCL

• **O\_EXCL**: `number`

Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists.

#### Defined in

[fs.d.ts:3014](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3014)

[dist/types.d.ts:7868](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7868)

___

### O\_NOATIME

• **O\_NOATIME**: `number`

constant for fs.open().
Flag indicating reading accesses to the file system will no longer result in
an update to the atime information associated with the file.
This flag is available on Linux operating systems only.

#### Defined in

[fs.d.ts:3033](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3033)

[dist/types.d.ts:7887](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7887)

___

### O\_NOCTTY

• **O\_NOCTTY**: `number`

Constant for fs.open(). Flag indicating that if path identifies a terminal device,
opening the path shall not cause that terminal to become the controlling terminal for the process
(if the process does not already have one).

#### Defined in

[fs.d.ts:3020](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3020)

[dist/types.d.ts:7874](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7874)

___

### O\_NOFOLLOW

• **O\_NOFOLLOW**: `number`

Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link.

#### Defined in

[fs.d.ts:3035](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3035)

[dist/types.d.ts:7889](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7889)

___

### O\_NONBLOCK

• **O\_NONBLOCK**: `number`

Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible.

#### Defined in

[fs.d.ts:3045](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3045)

[dist/types.d.ts:7899](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7899)

___

### O\_RDONLY

• **O\_RDONLY**: `number`

Constant for fs.open(). Flag indicating to open a file for read-only access.

#### Defined in

[fs.d.ts:3006](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3006)

[dist/types.d.ts:7860](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7860)

___

### O\_RDWR

• **O\_RDWR**: `number`

Constant for fs.open(). Flag indicating to open a file for read-write access.

#### Defined in

[fs.d.ts:3010](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3010)

[dist/types.d.ts:7864](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7864)

___

### O\_SYMLINK

• **O\_SYMLINK**: `number`

Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to.

#### Defined in

[fs.d.ts:3041](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3041)

[dist/types.d.ts:7895](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7895)

___

### O\_SYNC

• **O\_SYNC**: `number`

Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O.

#### Defined in

[fs.d.ts:3037](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3037)

[dist/types.d.ts:7891](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7891)

___

### O\_TRUNC

• **O\_TRUNC**: `number`

Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero.

#### Defined in

[fs.d.ts:3022](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3022)

[dist/types.d.ts:7876](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7876)

___

### O\_WRONLY

• **O\_WRONLY**: `number`

Constant for fs.open(). Flag indicating to open a file for write-only access.

#### Defined in

[fs.d.ts:3008](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3008)

[dist/types.d.ts:7862](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7862)

___

### R\_OK

• **R\_OK**: `number`

Constant for fs.access(). File can be read by the calling process.

#### Defined in

[fs.d.ts:2986](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2986)

[dist/types.d.ts:7840](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7840)

___

### S\_IFBLK

• **S\_IFBLK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file.

#### Defined in

[fs.d.ts:3056](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3056)

[dist/types.d.ts:7910](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7910)

___

### S\_IFCHR

• **S\_IFCHR**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file.

#### Defined in

[fs.d.ts:3054](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3054)

[dist/types.d.ts:7908](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7908)

___

### S\_IFDIR

• **S\_IFDIR**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a directory.

#### Defined in

[fs.d.ts:3052](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3052)

[dist/types.d.ts:7906](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7906)

___

### S\_IFIFO

• **S\_IFIFO**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe.

#### Defined in

[fs.d.ts:3058](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3058)

[dist/types.d.ts:7912](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7912)

___

### S\_IFLNK

• **S\_IFLNK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link.

#### Defined in

[fs.d.ts:3060](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3060)

[dist/types.d.ts:7914](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7914)

___

### S\_IFMT

• **S\_IFMT**: `number`

Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code.

#### Defined in

[fs.d.ts:3048](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3048)

[dist/types.d.ts:7902](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7902)

___

### S\_IFREG

• **S\_IFREG**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file.

#### Defined in

[fs.d.ts:3050](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3050)

[dist/types.d.ts:7904](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7904)

___

### S\_IFSOCK

• **S\_IFSOCK**: `number`

Constant for fs.Stats mode property for determining a file's type. File type constant for a socket.

#### Defined in

[fs.d.ts:3062](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3062)

[dist/types.d.ts:7916](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7916)

___

### S\_IRGRP

• **S\_IRGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group.

#### Defined in

[fs.d.ts:3075](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3075)

[dist/types.d.ts:7929](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7929)

___

### S\_IROTH

• **S\_IROTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others.

#### Defined in

[fs.d.ts:3083](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3083)

[dist/types.d.ts:7937](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7937)

___

### S\_IRUSR

• **S\_IRUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner.

#### Defined in

[fs.d.ts:3067](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3067)

[dist/types.d.ts:7921](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7921)

___

### S\_IRWXG

• **S\_IRWXG**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group.

#### Defined in

[fs.d.ts:3073](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3073)

[dist/types.d.ts:7927](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7927)

___

### S\_IRWXO

• **S\_IRWXO**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others.

#### Defined in

[fs.d.ts:3081](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3081)

[dist/types.d.ts:7935](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7935)

___

### S\_IRWXU

• **S\_IRWXU**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner.

#### Defined in

[fs.d.ts:3065](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3065)

[dist/types.d.ts:7919](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7919)

___

### S\_IWGRP

• **S\_IWGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group.

#### Defined in

[fs.d.ts:3077](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3077)

[dist/types.d.ts:7931](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7931)

___

### S\_IWOTH

• **S\_IWOTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others.

#### Defined in

[fs.d.ts:3085](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3085)

[dist/types.d.ts:7939](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7939)

___

### S\_IWUSR

• **S\_IWUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner.

#### Defined in

[fs.d.ts:3069](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3069)

[dist/types.d.ts:7923](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7923)

___

### S\_IXGRP

• **S\_IXGRP**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group.

#### Defined in

[fs.d.ts:3079](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3079)

[dist/types.d.ts:7933](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7933)

___

### S\_IXOTH

• **S\_IXOTH**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others.

#### Defined in

[fs.d.ts:3087](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3087)

[dist/types.d.ts:7941](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7941)

___

### S\_IXUSR

• **S\_IXUSR**: `number`

Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner.

#### Defined in

[fs.d.ts:3071](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3071)

[dist/types.d.ts:7925](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7925)

___

### UV\_FS\_O\_FILEMAP

• **UV\_FS\_O\_FILEMAP**: `number`

When set, a memory file mapping is used to access the file. This flag
is available on Windows operating systems only. On other operating systems,
this flag is ignored.

#### Defined in

[fs.d.ts:3093](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L3093)

[dist/types.d.ts:7947](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7947)

___

### W\_OK

• **W\_OK**: `number`

Constant for fs.access(). File can be written by the calling process.

#### Defined in

[fs.d.ts:2988](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2988)

[dist/types.d.ts:7842](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7842)

___

### X\_OK

• **X\_OK**: `number`

Constant for fs.access(). File can be executed by the calling process.

#### Defined in

[fs.d.ts:2990](https://github.com/valgaze/bun-types/blob/5e53f27/fs.d.ts#L2990)

[dist/types.d.ts:7844](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L7844)
