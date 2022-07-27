[bun-types](../README.md) / [Exports](../modules.md) / ["node:os"](node_os_.md) / [constants](node_os_.constants.md) / errno

# Namespace: errno

["node:os"](node_os_.md).[constants](node_os_.constants.md).errno

## Table of contents

### Variables

- [E2BIG](node_os_.constants.errno.md#e2big)
- [EACCES](node_os_.constants.errno.md#eacces)
- [EADDRINUSE](node_os_.constants.errno.md#eaddrinuse)
- [EADDRNOTAVAIL](node_os_.constants.errno.md#eaddrnotavail)
- [EAFNOSUPPORT](node_os_.constants.errno.md#eafnosupport)
- [EAGAIN](node_os_.constants.errno.md#eagain)
- [EALREADY](node_os_.constants.errno.md#ealready)
- [EBADF](node_os_.constants.errno.md#ebadf)
- [EBADMSG](node_os_.constants.errno.md#ebadmsg)
- [EBUSY](node_os_.constants.errno.md#ebusy)
- [ECANCELED](node_os_.constants.errno.md#ecanceled)
- [ECHILD](node_os_.constants.errno.md#echild)
- [ECONNABORTED](node_os_.constants.errno.md#econnaborted)
- [ECONNREFUSED](node_os_.constants.errno.md#econnrefused)
- [ECONNRESET](node_os_.constants.errno.md#econnreset)
- [EDEADLK](node_os_.constants.errno.md#edeadlk)
- [EDESTADDRREQ](node_os_.constants.errno.md#edestaddrreq)
- [EDOM](node_os_.constants.errno.md#edom)
- [EDQUOT](node_os_.constants.errno.md#edquot)
- [EEXIST](node_os_.constants.errno.md#eexist)
- [EFAULT](node_os_.constants.errno.md#efault)
- [EFBIG](node_os_.constants.errno.md#efbig)
- [EHOSTUNREACH](node_os_.constants.errno.md#ehostunreach)
- [EIDRM](node_os_.constants.errno.md#eidrm)
- [EILSEQ](node_os_.constants.errno.md#eilseq)
- [EINPROGRESS](node_os_.constants.errno.md#einprogress)
- [EINTR](node_os_.constants.errno.md#eintr)
- [EINVAL](node_os_.constants.errno.md#einval)
- [EIO](node_os_.constants.errno.md#eio)
- [EISCONN](node_os_.constants.errno.md#eisconn)
- [EISDIR](node_os_.constants.errno.md#eisdir)
- [ELOOP](node_os_.constants.errno.md#eloop)
- [EMFILE](node_os_.constants.errno.md#emfile)
- [EMLINK](node_os_.constants.errno.md#emlink)
- [EMSGSIZE](node_os_.constants.errno.md#emsgsize)
- [EMULTIHOP](node_os_.constants.errno.md#emultihop)
- [ENAMETOOLONG](node_os_.constants.errno.md#enametoolong)
- [ENETDOWN](node_os_.constants.errno.md#enetdown)
- [ENETRESET](node_os_.constants.errno.md#enetreset)
- [ENETUNREACH](node_os_.constants.errno.md#enetunreach)
- [ENFILE](node_os_.constants.errno.md#enfile)
- [ENOBUFS](node_os_.constants.errno.md#enobufs)
- [ENODATA](node_os_.constants.errno.md#enodata)
- [ENODEV](node_os_.constants.errno.md#enodev)
- [ENOENT](node_os_.constants.errno.md#enoent)
- [ENOEXEC](node_os_.constants.errno.md#enoexec)
- [ENOLCK](node_os_.constants.errno.md#enolck)
- [ENOLINK](node_os_.constants.errno.md#enolink)
- [ENOMEM](node_os_.constants.errno.md#enomem)
- [ENOMSG](node_os_.constants.errno.md#enomsg)
- [ENOPROTOOPT](node_os_.constants.errno.md#enoprotoopt)
- [ENOSPC](node_os_.constants.errno.md#enospc)
- [ENOSR](node_os_.constants.errno.md#enosr)
- [ENOSTR](node_os_.constants.errno.md#enostr)
- [ENOSYS](node_os_.constants.errno.md#enosys)
- [ENOTCONN](node_os_.constants.errno.md#enotconn)
- [ENOTDIR](node_os_.constants.errno.md#enotdir)
- [ENOTEMPTY](node_os_.constants.errno.md#enotempty)
- [ENOTSOCK](node_os_.constants.errno.md#enotsock)
- [ENOTSUP](node_os_.constants.errno.md#enotsup)
- [ENOTTY](node_os_.constants.errno.md#enotty)
- [ENXIO](node_os_.constants.errno.md#enxio)
- [EOPNOTSUPP](node_os_.constants.errno.md#eopnotsupp)
- [EOVERFLOW](node_os_.constants.errno.md#eoverflow)
- [EPERM](node_os_.constants.errno.md#eperm)
- [EPIPE](node_os_.constants.errno.md#epipe)
- [EPROTO](node_os_.constants.errno.md#eproto)
- [EPROTONOSUPPORT](node_os_.constants.errno.md#eprotonosupport)
- [EPROTOTYPE](node_os_.constants.errno.md#eprototype)
- [ERANGE](node_os_.constants.errno.md#erange)
- [EROFS](node_os_.constants.errno.md#erofs)
- [ESPIPE](node_os_.constants.errno.md#espipe)
- [ESRCH](node_os_.constants.errno.md#esrch)
- [ESTALE](node_os_.constants.errno.md#estale)
- [ETIME](node_os_.constants.errno.md#etime)
- [ETIMEDOUT](node_os_.constants.errno.md#etimedout)
- [ETXTBSY](node_os_.constants.errno.md#etxtbsy)
- [EWOULDBLOCK](node_os_.constants.errno.md#ewouldblock)
- [EXDEV](node_os_.constants.errno.md#exdev)
- [WSAEACCES](node_os_.constants.errno.md#wsaeacces)
- [WSAEADDRINUSE](node_os_.constants.errno.md#wsaeaddrinuse)
- [WSAEADDRNOTAVAIL](node_os_.constants.errno.md#wsaeaddrnotavail)
- [WSAEAFNOSUPPORT](node_os_.constants.errno.md#wsaeafnosupport)
- [WSAEALREADY](node_os_.constants.errno.md#wsaealready)
- [WSAEBADF](node_os_.constants.errno.md#wsaebadf)
- [WSAECANCELLED](node_os_.constants.errno.md#wsaecancelled)
- [WSAECONNABORTED](node_os_.constants.errno.md#wsaeconnaborted)
- [WSAECONNREFUSED](node_os_.constants.errno.md#wsaeconnrefused)
- [WSAECONNRESET](node_os_.constants.errno.md#wsaeconnreset)
- [WSAEDESTADDRREQ](node_os_.constants.errno.md#wsaedestaddrreq)
- [WSAEDISCON](node_os_.constants.errno.md#wsaediscon)
- [WSAEDQUOT](node_os_.constants.errno.md#wsaedquot)
- [WSAEFAULT](node_os_.constants.errno.md#wsaefault)
- [WSAEHOSTDOWN](node_os_.constants.errno.md#wsaehostdown)
- [WSAEHOSTUNREACH](node_os_.constants.errno.md#wsaehostunreach)
- [WSAEINPROGRESS](node_os_.constants.errno.md#wsaeinprogress)
- [WSAEINTR](node_os_.constants.errno.md#wsaeintr)
- [WSAEINVAL](node_os_.constants.errno.md#wsaeinval)
- [WSAEINVALIDPROCTABLE](node_os_.constants.errno.md#wsaeinvalidproctable)
- [WSAEINVALIDPROVIDER](node_os_.constants.errno.md#wsaeinvalidprovider)
- [WSAEISCONN](node_os_.constants.errno.md#wsaeisconn)
- [WSAELOOP](node_os_.constants.errno.md#wsaeloop)
- [WSAEMFILE](node_os_.constants.errno.md#wsaemfile)
- [WSAEMSGSIZE](node_os_.constants.errno.md#wsaemsgsize)
- [WSAENAMETOOLONG](node_os_.constants.errno.md#wsaenametoolong)
- [WSAENETDOWN](node_os_.constants.errno.md#wsaenetdown)
- [WSAENETRESET](node_os_.constants.errno.md#wsaenetreset)
- [WSAENETUNREACH](node_os_.constants.errno.md#wsaenetunreach)
- [WSAENOBUFS](node_os_.constants.errno.md#wsaenobufs)
- [WSAENOMORE](node_os_.constants.errno.md#wsaenomore)
- [WSAENOPROTOOPT](node_os_.constants.errno.md#wsaenoprotoopt)
- [WSAENOTCONN](node_os_.constants.errno.md#wsaenotconn)
- [WSAENOTEMPTY](node_os_.constants.errno.md#wsaenotempty)
- [WSAENOTSOCK](node_os_.constants.errno.md#wsaenotsock)
- [WSAEOPNOTSUPP](node_os_.constants.errno.md#wsaeopnotsupp)
- [WSAEPFNOSUPPORT](node_os_.constants.errno.md#wsaepfnosupport)
- [WSAEPROCLIM](node_os_.constants.errno.md#wsaeproclim)
- [WSAEPROTONOSUPPORT](node_os_.constants.errno.md#wsaeprotonosupport)
- [WSAEPROTOTYPE](node_os_.constants.errno.md#wsaeprototype)
- [WSAEPROVIDERFAILEDINIT](node_os_.constants.errno.md#wsaeproviderfailedinit)
- [WSAEREFUSED](node_os_.constants.errno.md#wsaerefused)
- [WSAEREMOTE](node_os_.constants.errno.md#wsaeremote)
- [WSAESHUTDOWN](node_os_.constants.errno.md#wsaeshutdown)
- [WSAESOCKTNOSUPPORT](node_os_.constants.errno.md#wsaesocktnosupport)
- [WSAESTALE](node_os_.constants.errno.md#wsaestale)
- [WSAETIMEDOUT](node_os_.constants.errno.md#wsaetimedout)
- [WSAETOOMANYREFS](node_os_.constants.errno.md#wsaetoomanyrefs)
- [WSAEUSERS](node_os_.constants.errno.md#wsaeusers)
- [WSAEWOULDBLOCK](node_os_.constants.errno.md#wsaewouldblock)
- [WSANOTINITIALISED](node_os_.constants.errno.md#wsanotinitialised)
- [WSASERVICE\_NOT\_FOUND](node_os_.constants.errno.md#wsaservice_not_found)
- [WSASYSCALLFAILURE](node_os_.constants.errno.md#wsasyscallfailure)
- [WSASYSNOTREADY](node_os_.constants.errno.md#wsasysnotready)
- [WSATYPE\_NOT\_FOUND](node_os_.constants.errno.md#wsatype_not_found)
- [WSAVERNOTSUPPORTED](node_os_.constants.errno.md#wsavernotsupported)
- [WSA\_E\_CANCELLED](node_os_.constants.errno.md#wsa_e_cancelled)
- [WSA\_E\_NO\_MORE](node_os_.constants.errno.md#wsa_e_no_more)

## Variables

### E2BIG

• `Const` **E2BIG**: `number`

#### Defined in

[os.d.ts:230](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L230)

___

### EACCES

• `Const` **EACCES**: `number`

#### Defined in

[os.d.ts:231](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L231)

___

### EADDRINUSE

• `Const` **EADDRINUSE**: `number`

#### Defined in

[os.d.ts:232](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L232)

___

### EADDRNOTAVAIL

• `Const` **EADDRNOTAVAIL**: `number`

#### Defined in

[os.d.ts:233](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L233)

___

### EAFNOSUPPORT

• `Const` **EAFNOSUPPORT**: `number`

#### Defined in

[os.d.ts:234](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L234)

___

### EAGAIN

• `Const` **EAGAIN**: `number`

#### Defined in

[os.d.ts:235](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L235)

___

### EALREADY

• `Const` **EALREADY**: `number`

#### Defined in

[os.d.ts:236](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L236)

___

### EBADF

• `Const` **EBADF**: `number`

#### Defined in

[os.d.ts:237](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L237)

___

### EBADMSG

• `Const` **EBADMSG**: `number`

#### Defined in

[os.d.ts:238](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L238)

___

### EBUSY

• `Const` **EBUSY**: `number`

#### Defined in

[os.d.ts:239](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L239)

___

### ECANCELED

• `Const` **ECANCELED**: `number`

#### Defined in

[os.d.ts:240](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L240)

___

### ECHILD

• `Const` **ECHILD**: `number`

#### Defined in

[os.d.ts:241](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L241)

___

### ECONNABORTED

• `Const` **ECONNABORTED**: `number`

#### Defined in

[os.d.ts:242](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L242)

___

### ECONNREFUSED

• `Const` **ECONNREFUSED**: `number`

#### Defined in

[os.d.ts:243](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L243)

___

### ECONNRESET

• `Const` **ECONNRESET**: `number`

#### Defined in

[os.d.ts:244](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L244)

___

### EDEADLK

• `Const` **EDEADLK**: `number`

#### Defined in

[os.d.ts:245](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L245)

___

### EDESTADDRREQ

• `Const` **EDESTADDRREQ**: `number`

#### Defined in

[os.d.ts:246](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L246)

___

### EDOM

• `Const` **EDOM**: `number`

#### Defined in

[os.d.ts:247](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L247)

___

### EDQUOT

• `Const` **EDQUOT**: `number`

#### Defined in

[os.d.ts:248](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L248)

___

### EEXIST

• `Const` **EEXIST**: `number`

#### Defined in

[os.d.ts:249](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L249)

___

### EFAULT

• `Const` **EFAULT**: `number`

#### Defined in

[os.d.ts:250](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L250)

___

### EFBIG

• `Const` **EFBIG**: `number`

#### Defined in

[os.d.ts:251](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L251)

___

### EHOSTUNREACH

• `Const` **EHOSTUNREACH**: `number`

#### Defined in

[os.d.ts:252](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L252)

___

### EIDRM

• `Const` **EIDRM**: `number`

#### Defined in

[os.d.ts:253](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L253)

___

### EILSEQ

• `Const` **EILSEQ**: `number`

#### Defined in

[os.d.ts:254](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L254)

___

### EINPROGRESS

• `Const` **EINPROGRESS**: `number`

#### Defined in

[os.d.ts:255](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L255)

___

### EINTR

• `Const` **EINTR**: `number`

#### Defined in

[os.d.ts:256](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L256)

___

### EINVAL

• `Const` **EINVAL**: `number`

#### Defined in

[os.d.ts:257](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L257)

___

### EIO

• `Const` **EIO**: `number`

#### Defined in

[os.d.ts:258](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L258)

___

### EISCONN

• `Const` **EISCONN**: `number`

#### Defined in

[os.d.ts:259](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L259)

___

### EISDIR

• `Const` **EISDIR**: `number`

#### Defined in

[os.d.ts:260](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L260)

___

### ELOOP

• `Const` **ELOOP**: `number`

#### Defined in

[os.d.ts:261](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L261)

___

### EMFILE

• `Const` **EMFILE**: `number`

#### Defined in

[os.d.ts:262](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L262)

___

### EMLINK

• `Const` **EMLINK**: `number`

#### Defined in

[os.d.ts:263](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L263)

___

### EMSGSIZE

• `Const` **EMSGSIZE**: `number`

#### Defined in

[os.d.ts:264](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L264)

___

### EMULTIHOP

• `Const` **EMULTIHOP**: `number`

#### Defined in

[os.d.ts:265](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L265)

___

### ENAMETOOLONG

• `Const` **ENAMETOOLONG**: `number`

#### Defined in

[os.d.ts:266](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L266)

___

### ENETDOWN

• `Const` **ENETDOWN**: `number`

#### Defined in

[os.d.ts:267](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L267)

___

### ENETRESET

• `Const` **ENETRESET**: `number`

#### Defined in

[os.d.ts:268](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L268)

___

### ENETUNREACH

• `Const` **ENETUNREACH**: `number`

#### Defined in

[os.d.ts:269](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L269)

___

### ENFILE

• `Const` **ENFILE**: `number`

#### Defined in

[os.d.ts:270](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L270)

___

### ENOBUFS

• `Const` **ENOBUFS**: `number`

#### Defined in

[os.d.ts:271](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L271)

___

### ENODATA

• `Const` **ENODATA**: `number`

#### Defined in

[os.d.ts:272](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L272)

___

### ENODEV

• `Const` **ENODEV**: `number`

#### Defined in

[os.d.ts:273](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L273)

___

### ENOENT

• `Const` **ENOENT**: `number`

#### Defined in

[os.d.ts:274](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L274)

___

### ENOEXEC

• `Const` **ENOEXEC**: `number`

#### Defined in

[os.d.ts:275](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L275)

___

### ENOLCK

• `Const` **ENOLCK**: `number`

#### Defined in

[os.d.ts:276](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L276)

___

### ENOLINK

• `Const` **ENOLINK**: `number`

#### Defined in

[os.d.ts:277](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L277)

___

### ENOMEM

• `Const` **ENOMEM**: `number`

#### Defined in

[os.d.ts:278](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L278)

___

### ENOMSG

• `Const` **ENOMSG**: `number`

#### Defined in

[os.d.ts:279](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L279)

___

### ENOPROTOOPT

• `Const` **ENOPROTOOPT**: `number`

#### Defined in

[os.d.ts:280](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L280)

___

### ENOSPC

• `Const` **ENOSPC**: `number`

#### Defined in

[os.d.ts:281](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L281)

___

### ENOSR

• `Const` **ENOSR**: `number`

#### Defined in

[os.d.ts:282](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L282)

___

### ENOSTR

• `Const` **ENOSTR**: `number`

#### Defined in

[os.d.ts:283](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L283)

___

### ENOSYS

• `Const` **ENOSYS**: `number`

#### Defined in

[os.d.ts:284](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L284)

___

### ENOTCONN

• `Const` **ENOTCONN**: `number`

#### Defined in

[os.d.ts:285](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L285)

___

### ENOTDIR

• `Const` **ENOTDIR**: `number`

#### Defined in

[os.d.ts:286](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L286)

___

### ENOTEMPTY

• `Const` **ENOTEMPTY**: `number`

#### Defined in

[os.d.ts:287](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L287)

___

### ENOTSOCK

• `Const` **ENOTSOCK**: `number`

#### Defined in

[os.d.ts:288](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L288)

___

### ENOTSUP

• `Const` **ENOTSUP**: `number`

#### Defined in

[os.d.ts:289](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L289)

___

### ENOTTY

• `Const` **ENOTTY**: `number`

#### Defined in

[os.d.ts:290](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L290)

___

### ENXIO

• `Const` **ENXIO**: `number`

#### Defined in

[os.d.ts:291](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L291)

___

### EOPNOTSUPP

• `Const` **EOPNOTSUPP**: `number`

#### Defined in

[os.d.ts:292](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L292)

___

### EOVERFLOW

• `Const` **EOVERFLOW**: `number`

#### Defined in

[os.d.ts:293](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L293)

___

### EPERM

• `Const` **EPERM**: `number`

#### Defined in

[os.d.ts:294](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L294)

___

### EPIPE

• `Const` **EPIPE**: `number`

#### Defined in

[os.d.ts:295](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L295)

___

### EPROTO

• `Const` **EPROTO**: `number`

#### Defined in

[os.d.ts:296](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L296)

___

### EPROTONOSUPPORT

• `Const` **EPROTONOSUPPORT**: `number`

#### Defined in

[os.d.ts:297](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L297)

___

### EPROTOTYPE

• `Const` **EPROTOTYPE**: `number`

#### Defined in

[os.d.ts:298](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L298)

___

### ERANGE

• `Const` **ERANGE**: `number`

#### Defined in

[os.d.ts:299](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L299)

___

### EROFS

• `Const` **EROFS**: `number`

#### Defined in

[os.d.ts:300](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L300)

___

### ESPIPE

• `Const` **ESPIPE**: `number`

#### Defined in

[os.d.ts:301](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L301)

___

### ESRCH

• `Const` **ESRCH**: `number`

#### Defined in

[os.d.ts:302](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L302)

___

### ESTALE

• `Const` **ESTALE**: `number`

#### Defined in

[os.d.ts:303](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L303)

___

### ETIME

• `Const` **ETIME**: `number`

#### Defined in

[os.d.ts:304](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L304)

___

### ETIMEDOUT

• `Const` **ETIMEDOUT**: `number`

#### Defined in

[os.d.ts:305](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L305)

___

### ETXTBSY

• `Const` **ETXTBSY**: `number`

#### Defined in

[os.d.ts:306](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L306)

___

### EWOULDBLOCK

• `Const` **EWOULDBLOCK**: `number`

#### Defined in

[os.d.ts:307](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L307)

___

### EXDEV

• `Const` **EXDEV**: `number`

#### Defined in

[os.d.ts:308](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L308)

___

### WSAEACCES

• `Const` **WSAEACCES**: `number`

#### Defined in

[os.d.ts:311](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L311)

___

### WSAEADDRINUSE

• `Const` **WSAEADDRINUSE**: `number`

#### Defined in

[os.d.ts:328](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L328)

___

### WSAEADDRNOTAVAIL

• `Const` **WSAEADDRNOTAVAIL**: `number`

#### Defined in

[os.d.ts:329](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L329)

___

### WSAEAFNOSUPPORT

• `Const` **WSAEAFNOSUPPORT**: `number`

#### Defined in

[os.d.ts:327](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L327)

___

### WSAEALREADY

• `Const` **WSAEALREADY**: `number`

#### Defined in

[os.d.ts:317](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L317)

___

### WSAEBADF

• `Const` **WSAEBADF**: `number`

#### Defined in

[os.d.ts:310](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L310)

___

### WSAECANCELLED

• `Const` **WSAECANCELLED**: `number`

#### Defined in

[os.d.ts:357](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L357)

___

### WSAECONNABORTED

• `Const` **WSAECONNABORTED**: `number`

#### Defined in

[os.d.ts:333](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L333)

___

### WSAECONNREFUSED

• `Const` **WSAECONNREFUSED**: `number`

#### Defined in

[os.d.ts:341](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L341)

___

### WSAECONNRESET

• `Const` **WSAECONNRESET**: `number`

#### Defined in

[os.d.ts:334](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L334)

___

### WSAEDESTADDRREQ

• `Const` **WSAEDESTADDRREQ**: `number`

#### Defined in

[os.d.ts:319](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L319)

___

### WSAEDISCON

• `Const` **WSAEDISCON**: `number`

#### Defined in

[os.d.ts:355](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L355)

___

### WSAEDQUOT

• `Const` **WSAEDQUOT**: `number`

#### Defined in

[os.d.ts:349](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L349)

___

### WSAEFAULT

• `Const` **WSAEFAULT**: `number`

#### Defined in

[os.d.ts:312](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L312)

___

### WSAEHOSTDOWN

• `Const` **WSAEHOSTDOWN**: `number`

#### Defined in

[os.d.ts:344](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L344)

___

### WSAEHOSTUNREACH

• `Const` **WSAEHOSTUNREACH**: `number`

#### Defined in

[os.d.ts:345](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L345)

___

### WSAEINPROGRESS

• `Const` **WSAEINPROGRESS**: `number`

#### Defined in

[os.d.ts:316](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L316)

___

### WSAEINTR

• `Const` **WSAEINTR**: `number`

#### Defined in

[os.d.ts:309](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L309)

___

### WSAEINVAL

• `Const` **WSAEINVAL**: `number`

#### Defined in

[os.d.ts:313](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L313)

___

### WSAEINVALIDPROCTABLE

• `Const` **WSAEINVALIDPROCTABLE**: `number`

#### Defined in

[os.d.ts:358](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L358)

___

### WSAEINVALIDPROVIDER

• `Const` **WSAEINVALIDPROVIDER**: `number`

#### Defined in

[os.d.ts:359](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L359)

___

### WSAEISCONN

• `Const` **WSAEISCONN**: `number`

#### Defined in

[os.d.ts:336](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L336)

___

### WSAELOOP

• `Const` **WSAELOOP**: `number`

#### Defined in

[os.d.ts:342](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L342)

___

### WSAEMFILE

• `Const` **WSAEMFILE**: `number`

#### Defined in

[os.d.ts:314](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L314)

___

### WSAEMSGSIZE

• `Const` **WSAEMSGSIZE**: `number`

#### Defined in

[os.d.ts:320](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L320)

___

### WSAENAMETOOLONG

• `Const` **WSAENAMETOOLONG**: `number`

#### Defined in

[os.d.ts:343](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L343)

___

### WSAENETDOWN

• `Const` **WSAENETDOWN**: `number`

#### Defined in

[os.d.ts:330](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L330)

___

### WSAENETRESET

• `Const` **WSAENETRESET**: `number`

#### Defined in

[os.d.ts:332](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L332)

___

### WSAENETUNREACH

• `Const` **WSAENETUNREACH**: `number`

#### Defined in

[os.d.ts:331](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L331)

___

### WSAENOBUFS

• `Const` **WSAENOBUFS**: `number`

#### Defined in

[os.d.ts:335](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L335)

___

### WSAENOMORE

• `Const` **WSAENOMORE**: `number`

#### Defined in

[os.d.ts:356](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L356)

___

### WSAENOPROTOOPT

• `Const` **WSAENOPROTOOPT**: `number`

#### Defined in

[os.d.ts:322](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L322)

___

### WSAENOTCONN

• `Const` **WSAENOTCONN**: `number`

#### Defined in

[os.d.ts:337](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L337)

___

### WSAENOTEMPTY

• `Const` **WSAENOTEMPTY**: `number`

#### Defined in

[os.d.ts:346](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L346)

___

### WSAENOTSOCK

• `Const` **WSAENOTSOCK**: `number`

#### Defined in

[os.d.ts:318](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L318)

___

### WSAEOPNOTSUPP

• `Const` **WSAEOPNOTSUPP**: `number`

#### Defined in

[os.d.ts:325](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L325)

___

### WSAEPFNOSUPPORT

• `Const` **WSAEPFNOSUPPORT**: `number`

#### Defined in

[os.d.ts:326](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L326)

___

### WSAEPROCLIM

• `Const` **WSAEPROCLIM**: `number`

#### Defined in

[os.d.ts:347](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L347)

___

### WSAEPROTONOSUPPORT

• `Const` **WSAEPROTONOSUPPORT**: `number`

#### Defined in

[os.d.ts:323](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L323)

___

### WSAEPROTOTYPE

• `Const` **WSAEPROTOTYPE**: `number`

#### Defined in

[os.d.ts:321](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L321)

___

### WSAEPROVIDERFAILEDINIT

• `Const` **WSAEPROVIDERFAILEDINIT**: `number`

#### Defined in

[os.d.ts:360](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L360)

___

### WSAEREFUSED

• `Const` **WSAEREFUSED**: `number`

#### Defined in

[os.d.ts:366](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L366)

___

### WSAEREMOTE

• `Const` **WSAEREMOTE**: `number`

#### Defined in

[os.d.ts:351](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L351)

___

### WSAESHUTDOWN

• `Const` **WSAESHUTDOWN**: `number`

#### Defined in

[os.d.ts:338](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L338)

___

### WSAESOCKTNOSUPPORT

• `Const` **WSAESOCKTNOSUPPORT**: `number`

#### Defined in

[os.d.ts:324](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L324)

___

### WSAESTALE

• `Const` **WSAESTALE**: `number`

#### Defined in

[os.d.ts:350](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L350)

___

### WSAETIMEDOUT

• `Const` **WSAETIMEDOUT**: `number`

#### Defined in

[os.d.ts:340](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L340)

___

### WSAETOOMANYREFS

• `Const` **WSAETOOMANYREFS**: `number`

#### Defined in

[os.d.ts:339](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L339)

___

### WSAEUSERS

• `Const` **WSAEUSERS**: `number`

#### Defined in

[os.d.ts:348](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L348)

___

### WSAEWOULDBLOCK

• `Const` **WSAEWOULDBLOCK**: `number`

#### Defined in

[os.d.ts:315](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L315)

___

### WSANOTINITIALISED

• `Const` **WSANOTINITIALISED**: `number`

#### Defined in

[os.d.ts:354](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L354)

___

### WSASERVICE\_NOT\_FOUND

• `Const` **WSASERVICE\_NOT\_FOUND**: `number`

#### Defined in

[os.d.ts:362](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L362)

___

### WSASYSCALLFAILURE

• `Const` **WSASYSCALLFAILURE**: `number`

#### Defined in

[os.d.ts:361](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L361)

___

### WSASYSNOTREADY

• `Const` **WSASYSNOTREADY**: `number`

#### Defined in

[os.d.ts:352](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L352)

___

### WSATYPE\_NOT\_FOUND

• `Const` **WSATYPE\_NOT\_FOUND**: `number`

#### Defined in

[os.d.ts:363](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L363)

___

### WSAVERNOTSUPPORTED

• `Const` **WSAVERNOTSUPPORTED**: `number`

#### Defined in

[os.d.ts:353](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L353)

___

### WSA\_E\_CANCELLED

• `Const` **WSA\_E\_CANCELLED**: `number`

#### Defined in

[os.d.ts:365](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L365)

___

### WSA\_E\_NO\_MORE

• `Const` **WSA\_E\_NO\_MORE**: `number`

#### Defined in

[os.d.ts:364](https://github.com/valgaze/bun-types/blob/5e53f27/os.d.ts#L364)
