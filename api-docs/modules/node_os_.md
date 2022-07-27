[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / "node:os"

# Namespace: "node:os"

## Table of contents

### Namespaces

- [constants](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.constants.md)

### Interfaces

- [CpuInfo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_os_.CpuInfo.md)
- [NetworkInterfaceBase](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_os_.NetworkInterfaceBase.md)
- [NetworkInterfaceInfoIPv4](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_os_.NetworkInterfaceInfoIPv4.md)
- [NetworkInterfaceInfoIPv6](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_os_.NetworkInterfaceInfoIPv6.md)
- [UserInfo](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/node_os_.UserInfo.md)

### Type Aliases

- [NetworkInterfaceInfo](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#networkinterfaceinfo)
- [SignalConstants](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#signalconstants)

### Variables

- [EOL](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#eol)
- [devNull](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#devnull)

### Functions

- [arch](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#arch)
- [cpus](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#cpus)
- [endianness](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#endianness)
- [freemem](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#freemem)
- [getPriority](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#getpriority)
- [homedir](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#homedir)
- [hostname](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#hostname)
- [loadavg](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#loadavg)
- [networkInterfaces](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#networkinterfaces)
- [platform](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#platform)
- [release](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#release)
- [setPriority](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#setpriority)
- [tmpdir](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#tmpdir)
- [totalmem](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#totalmem)
- [type](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#type)
- [uptime](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#uptime)
- [userInfo](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#userinfo)
- [version](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/node_os_.md#version)

## Type Aliases

### NetworkInterfaceInfo

Ƭ **NetworkInterfaceInfo**: [`NetworkInterfaceInfoIPv4`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.NetworkInterfaceInfoIPv4.md) \| [`NetworkInterfaceInfoIPv6`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.NetworkInterfaceInfoIPv6.md)

#### Defined in

[os.d.ts:43](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L43)

___

### SignalConstants

Ƭ **SignalConstants**: { [key in Signals]: number }

#### Defined in

[os.d.ts:222](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L222)

## Variables

### EOL

• `Const` **EOL**: `string`

#### Defined in

[os.d.ts:378](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L378)

___

### devNull

• `Const` **devNull**: `string`

#### Defined in

[os.d.ts:377](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L377)

## Functions

### arch

▸ **arch**(): `string`

Returns the operating system CPU architecture for which the Node.js binary was
compiled. Possible values are `'arm'`, `'arm64'`, `'ia32'`, `'mips'`,`'mipsel'`, `'ppc'`, `'ppc64'`, `'s390'`, `'s390x'`, and `'x64'`.

The return value is equivalent to `process.arch`.

#### Returns

`string`

#### Defined in

[os.d.ts:385](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L385)

▸ **arch**(): `string`

Returns the operating system CPU architecture for which the Node.js binary was
compiled. Possible values are `'arm'`, `'arm64'`, `'ia32'`, `'mips'`,`'mipsel'`, `'ppc'`, `'ppc64'`, `'s390'`, `'s390x'`, and `'x64'`.

The return value is equivalent to `process.arch`.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:12877](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12877)

___

### cpus

▸ **cpus**(): [`CpuInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.CpuInfo.md)[]

Returns an array of objects containing information about each logical CPU core.

The properties included on each object include:

```js
[
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 248450,
      nice: 0,
      sys: 21750,
      idle: 1070919370,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 256880,
      nice: 0,
      sys: 19430,
      idle: 1070905480,
      irq: 20
    }
  },
]
```

`nice` values are POSIX-only. On Windows, the `nice` values of all processors
are always 0.

#### Returns

[`CpuInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.CpuInfo.md)[]

#### Defined in

[os.d.ts:129](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L129)

▸ **cpus**(): [`CpuInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.CpuInfo.md)[]

Returns an array of objects containing information about each logical CPU core.

The properties included on each object include:

```js
[
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 248450,
      nice: 0,
      sys: 21750,
      idle: 1070919370,
      irq: 0
    }
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 256880,
      nice: 0,
      sys: 19430,
      idle: 1070905480,
      irq: 20
    }
  },
]
```

`nice` values are POSIX-only. On Windows, the `nice` values of all processors
are always 0.

#### Returns

[`CpuInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.CpuInfo.md)[]

#### Defined in

[dist/types.d.ts:12621](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12621)

___

### endianness

▸ **endianness**(): ``"BE"`` \| ``"LE"``

Returns a string identifying the endianness of the CPU for which the Node.js
binary was compiled.

Possible values are `'BE'` for big endian and `'LE'` for little endian.

#### Returns

``"BE"`` \| ``"LE"``

#### Defined in

[os.d.ts:412](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L412)

▸ **endianness**(): ``"BE"`` \| ``"LE"``

Returns a string identifying the endianness of the CPU for which the Node.js
binary was compiled.

Possible values are `'BE'` for big endian and `'LE'` for little endian.

#### Returns

``"BE"`` \| ``"LE"``

#### Defined in

[dist/types.d.ts:12904](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12904)

___

### freemem

▸ **freemem**(): `number`

Returns the amount of free system memory in bytes as an integer.

#### Returns

`number`

#### Defined in

[os.d.ts:67](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L67)

▸ **freemem**(): `number`

Returns the amount of free system memory in bytes as an integer.

#### Returns

`number`

#### Defined in

[dist/types.d.ts:12559](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12559)

___

### getPriority

▸ **getPriority**(`pid?`): `number`

Returns the scheduling priority for the process specified by `pid`. If `pid` is
not provided or is `0`, the priority of the current process is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pid?` | `number` | The process ID to retrieve scheduling priority for. |

#### Returns

`number`

#### Defined in

[os.d.ts:418](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L418)

▸ **getPriority**(`pid?`): `number`

Returns the scheduling priority for the process specified by `pid`. If `pid` is
not provided or is `0`, the priority of the current process is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pid?` | `number` | The process ID to retrieve scheduling priority for. |

#### Returns

`number`

#### Defined in

[dist/types.d.ts:12910](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12910)

___

### homedir

▸ **homedir**(): `string`

Returns the string path of the current user's home directory.

On POSIX, it uses the `$HOME` environment variable if defined. Otherwise it
uses the [effective UID](https://en.wikipedia.org/wiki/User_identifier#Effective_user_ID) to look up the user's home directory.

On Windows, it uses the `USERPROFILE` environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.

#### Returns

`string`

#### Defined in

[os.d.ts:207](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L207)

▸ **homedir**(): `string`

Returns the string path of the current user's home directory.

On POSIX, it uses the `$HOME` environment variable if defined. Otherwise it
uses the [effective UID](https://en.wikipedia.org/wiki/User_identifier#Effective_user_ID) to look up the user's home directory.

On Windows, it uses the `USERPROFILE` environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:12699](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12699)

___

### hostname

▸ **hostname**(): `string`

Returns the host name of the operating system as a string.

#### Returns

`string`

#### Defined in

[os.d.ts:49](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L49)

▸ **hostname**(): `string`

Returns the host name of the operating system as a string.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:12541](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12541)

___

### loadavg

▸ **loadavg**(): `number`[]

Returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity calculated by the operating
system and expressed as a fractional number.

The load average is a Unix-specific concept. On Windows, the return value is
always `[0, 0, 0]`.

#### Returns

`number`[]

#### Defined in

[os.d.ts:59](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L59)

▸ **loadavg**(): `number`[]

Returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity calculated by the operating
system and expressed as a fractional number.

The load average is a Unix-specific concept. On Windows, the return value is
always `[0, 0, 0]`.

#### Returns

`number`[]

#### Defined in

[dist/types.d.ts:12551](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12551)

___

### networkInterfaces

▸ **networkInterfaces**(): [`Dict`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Dict.md)<[`NetworkInterfaceInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/os_.md#networkinterfaceinfo)[]\>

Returns an object containing network interfaces that have been assigned a
network address.

Each key on the returned object identifies a network interface. The associated
value is an array of objects that each describe an assigned network address.

The properties available on the assigned network address object include:

```js
{
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 0,
      internal: true,
      cidr: '::1/128'
    }
  ],
  eth0: [
    {
      address: '192.168.1.108',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '01:02:03:0a:0b:0c',
      internal: false,
      cidr: '192.168.1.108/24'
    },
    {
      address: 'fe80::a00:27ff:fe4e:66a1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '01:02:03:0a:0b:0c',
      scopeid: 1,
      internal: false,
      cidr: 'fe80::a00:27ff:fe4e:66a1/64'
    }
  ]
}
```

#### Returns

[`Dict`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Dict.md)<[`NetworkInterfaceInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/os_.md#networkinterfaceinfo)[]\>

#### Defined in

[os.d.ts:197](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L197)

▸ **networkInterfaces**(): [`Dict`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Dict.md)<[`NetworkInterfaceInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/os_.md#networkinterfaceinfo)[]\>

Returns an object containing network interfaces that have been assigned a
network address.

Each key on the returned object identifies a network interface. The associated
value is an array of objects that each describe an assigned network address.

The properties available on the assigned network address object include:

```js
{
  lo: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      scopeid: 0,
      internal: true,
      cidr: '::1/128'
    }
  ],
  eth0: [
    {
      address: '192.168.1.108',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '01:02:03:0a:0b:0c',
      internal: false,
      cidr: '192.168.1.108/24'
    },
    {
      address: 'fe80::a00:27ff:fe4e:66a1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '01:02:03:0a:0b:0c',
      scopeid: 1,
      internal: false,
      cidr: 'fe80::a00:27ff:fe4e:66a1/64'
    }
  ]
}
```

#### Returns

[`Dict`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/Dict.md)<[`NetworkInterfaceInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/os_.md#networkinterfaceinfo)[]\>

#### Defined in

[dist/types.d.ts:12689](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12689)

___

### platform

▸ **platform**(): `Platform`

Returns a string identifying the operating system platform for which
the Node.js binary was compiled. The value is set at compile time.
Possible values are `'aix'`, `'darwin'`, `'freebsd'`,`'linux'`,`'openbsd'`, `'sunos'`, and `'win32'`.

The return value is equivalent to `process.platform`.

#### Returns

`Platform`

#### Defined in

[os.d.ts:400](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L400)

▸ **platform**(): `Platform`

Returns a string identifying the operating system platform for which
the Node.js binary was compiled. The value is set at compile time.
Possible values are `'aix'`, `'darwin'`, `'freebsd'`,`'linux'`,`'openbsd'`, `'sunos'`, and `'win32'`.

The return value is equivalent to `process.platform`.

#### Returns

`Platform`

#### Defined in

[dist/types.d.ts:12892](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12892)

___

### release

▸ **release**(): `string`

Returns the operating system as a string.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `GetVersionExW()` is used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

#### Defined in

[os.d.ts:144](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L144)

▸ **release**(): `string`

Returns the operating system as a string.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `GetVersionExW()` is used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:12636](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12636)

___

### setPriority

▸ **setPriority**(`priority`): `void`

Attempts to set the scheduling priority for the process specified by `pid`. If`pid` is not provided or is `0`, the process ID of the current process is used.

The `priority` input must be an integer between `-20` (high priority) and `19`(low priority). Due to differences between Unix priority levels and Windows
priority classes, `priority` is mapped to one of six priority constants in`os.constants.priority`. When retrieving a process priority level, this range
mapping may cause the return value to be slightly different on Windows. To avoid
confusion, set `priority` to one of the priority constants.

On Windows, setting priority to `PRIORITY_HIGHEST` requires elevated user
privileges. Otherwise the set priority will be silently reduced to`PRIORITY_HIGH`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | The scheduling priority to assign to the process. |

#### Returns

`void`

#### Defined in

[os.d.ts:432](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L432)

▸ **setPriority**(`pid`, `priority`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `number` |
| `priority` | `number` |

#### Returns

`void`

#### Defined in

[os.d.ts:433](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L433)

▸ **setPriority**(`priority`): `void`

Attempts to set the scheduling priority for the process specified by `pid`. If`pid` is not provided or is `0`, the process ID of the current process is used.

The `priority` input must be an integer between `-20` (high priority) and `19`(low priority). Due to differences between Unix priority levels and Windows
priority classes, `priority` is mapped to one of six priority constants in`os.constants.priority`. When retrieving a process priority level, this range
mapping may cause the return value to be slightly different on Windows. To avoid
confusion, set `priority` to one of the priority constants.

On Windows, setting priority to `PRIORITY_HIGHEST` requires elevated user
privileges. Otherwise the set priority will be silently reduced to`PRIORITY_HIGH`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `priority` | `number` | The scheduling priority to assign to the process. |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:12924](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12924)

▸ **setPriority**(`pid`, `priority`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pid` | `number` |
| `priority` | `number` |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:12925](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12925)

___

### tmpdir

▸ **tmpdir**(): `string`

Returns the operating system's default directory for temporary files as a
string.

#### Returns

`string`

#### Defined in

[os.d.ts:405](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L405)

▸ **tmpdir**(): `string`

Returns the operating system's default directory for temporary files as a
string.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:12897](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12897)

___

### totalmem

▸ **totalmem**(): `number`

Returns the total amount of system memory in bytes as an integer.

#### Returns

`number`

#### Defined in

[os.d.ts:71](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L71)

▸ **totalmem**(): `number`

Returns the total amount of system memory in bytes as an integer.

#### Returns

`number`

#### Defined in

[dist/types.d.ts:12563](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12563)

___

### type

▸ **type**(): `string`

Returns the operating system name as returned by [`uname(3)`](https://linux.die.net/man/3/uname). For example, it
returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for additional information
about the output of running [`uname(3)`](https://linux.die.net/man/3/uname) on various operating systems.

#### Returns

`string`

#### Defined in

[os.d.ts:137](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L137)

▸ **type**(): `string`

Returns the operating system name as returned by [`uname(3)`](https://linux.die.net/man/3/uname). For example, it
returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for additional information
about the output of running [`uname(3)`](https://linux.die.net/man/3/uname) on various operating systems.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:12629](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12629)

___

### uptime

▸ **uptime**(): `number`

Returns the system uptime in number of seconds.

#### Returns

`number`

#### Defined in

[os.d.ts:63](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L63)

▸ **uptime**(): `number`

Returns the system uptime in number of seconds.

#### Returns

`number`

#### Defined in

[dist/types.d.ts:12555](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12555)

___

### userInfo

▸ **userInfo**(`options`): [`UserInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.UserInfo.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

Returns information about the currently effective user. On POSIX platforms,
this is typically a subset of the password file. The returned object includes
the `username`, `uid`, `gid`, `shell`, and `homedir`. On Windows, the `uid` and`gid` fields are `-1`, and `shell` is `null`.

The value of `homedir` returned by `os.userInfo()` is provided by the operating
system. This differs from the result of `os.homedir()`, which queries
environment variables for the home directory before falling back to the
operating system response.

Throws a `SystemError` if a user has no `username` or `homedir`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encoding` | ``"buffer"`` |

#### Returns

[`UserInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.UserInfo.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Defined in

[os.d.ts:220](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L220)

▸ **userInfo**(`options?`): [`UserInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.UserInfo.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.encoding` | `BufferEncoding` |

#### Returns

[`UserInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.UserInfo.md)<`string`\>

#### Defined in

[os.d.ts:221](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L221)

▸ **userInfo**(`options`): [`UserInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.UserInfo.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

Returns information about the currently effective user. On POSIX platforms,
this is typically a subset of the password file. The returned object includes
the `username`, `uid`, `gid`, `shell`, and `homedir`. On Windows, the `uid` and`gid` fields are `-1`, and `shell` is `null`.

The value of `homedir` returned by `os.userInfo()` is provided by the operating
system. This differs from the result of `os.homedir()`, which queries
environment variables for the home directory before falling back to the
operating system response.

Throws a `SystemError` if a user has no `username` or `homedir`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.encoding` | ``"buffer"`` |

#### Returns

[`UserInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.UserInfo.md)<[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)\>

#### Defined in

[dist/types.d.ts:12712](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12712)

▸ **userInfo**(`options?`): [`UserInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.UserInfo.md)<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.encoding` | `BufferEncoding` |

#### Returns

[`UserInfo`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/os_.UserInfo.md)<`string`\>

#### Defined in

[dist/types.d.ts:12713](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12713)

___

### version

▸ **version**(): `string`

Returns a string identifying the kernel version.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used, and if it is not
available, `GetVersionExW()` will be used. See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

#### Defined in

[os.d.ts:392](https://github.com/valgaze/bun-types/blob/6f8dbf8/os.d.ts#L392)

▸ **version**(): `string`

Returns a string identifying the kernel version.

On POSIX systems, the operating system release is determined by calling [`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used, and if it is not
available, `GetVersionExW()` will be used. See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

#### Returns

`string`

#### Defined in

[dist/types.d.ts:12884](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L12884)
