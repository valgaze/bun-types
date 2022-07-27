[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / ECDH

# Class: ECDH

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).ECDH

The `ECDH` class is a utility for creating Elliptic Curve Diffie-Hellman (ECDH)
key exchanges.

Instances of the `ECDH` class can be created using the [createECDH](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#createecdh) function.

```js
import assert from 'assert';

const {
  createECDH
} = await import('crypto');

// Generate Alice's keys...
const alice = createECDH('secp521r1');
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = createECDH('secp521r1');
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
// OK
```

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md#constructor)

### Methods

- [computeSecret](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md#computesecret)
- [generateKeys](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md#generatekeys)
- [getPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md#getprivatekey)
- [getPublicKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md#getpublickey)
- [setPrivateKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md#setprivatekey)
- [convertKey](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/crypto_.ECDH.md#convertkey)

## Constructors

### constructor

• `Private` **new ECDH**()

#### Defined in

[crypto.d.ts:2304](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2304)

## Methods

### computeSecret

▸ **computeSecret**(`otherPublicKey`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Computes the shared secret using `otherPublicKey` as the other
party's public key and returns the computed shared secret. The supplied
key is interpreted using specified `inputEncoding`, and the returned secret
is encoded using the specified `outputEncoding`.
If the `inputEncoding` is not
provided, `otherPublicKey` is expected to be a `Buffer`, `TypedArray`, or`DataView`.

If `outputEncoding` is given a string will be returned; otherwise a `Buffer` is returned.

`ecdh.computeSecret` will throw an`ERR_CRYPTO_ECDH_INVALID_PUBLIC_KEY` error when `otherPublicKey`lies outside of the elliptic curve. Since `otherPublicKey` is
usually supplied from a remote user over an insecure network,
be sure to handle this exception accordingly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherPublicKey` | `ArrayBufferView` |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2385](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2385)

▸ **computeSecret**(`otherPublicKey`, `inputEncoding`): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherPublicKey` | `string` |
| `inputEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2386](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2386)

▸ **computeSecret**(`otherPublicKey`, `outputEncoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherPublicKey` | `ArrayBufferView` |
| `outputEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:2390](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2390)

▸ **computeSecret**(`otherPublicKey`, `inputEncoding`, `outputEncoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherPublicKey` | `string` |
| `inputEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |
| `outputEncoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:2394](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2394)

___

### generateKeys

▸ **generateKeys**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Generates private and public EC Diffie-Hellman key values, and returns
the public key in the specified `format` and `encoding`. This key should be
transferred to the other party.

The `format` argument specifies point encoding and can be `'compressed'` or`'uncompressed'`. If `format` is not specified, the point will be returned in`'uncompressed'` format.

If `encoding` is provided a string is returned; otherwise a `Buffer` is returned.

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2364](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2364)

▸ **generateKeys**(`encoding`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |
| `format?` | [`ECDHKeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ecdhkeyformat) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:2365](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2365)

___

### getPrivateKey

▸ **getPrivateKey**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

If `encoding` is specified, a string is returned; otherwise a `Buffer` is
returned.

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

The EC Diffie-Hellman in the specified `encoding`.

#### Defined in

[crypto.d.ts:2405](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2405)

▸ **getPrivateKey**(`encoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:2406](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2406)

___

### getPublicKey

▸ **getPublicKey**(): [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

The `format` argument specifies point encoding and can be `'compressed'` or`'uncompressed'`. If `format` is not specified the point will be returned in`'uncompressed'` format.

If `encoding` is specified, a string is returned; otherwise a `Buffer` is
returned.

#### Returns

[`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

The EC Diffie-Hellman public key in the specified `encoding` and `format`.

#### Defined in

[crypto.d.ts:2416](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2416)

▸ **getPublicKey**(`encoding`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |
| `format?` | [`ECDHKeyFormat`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#ecdhkeyformat) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:2417](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2417)

___

### setPrivateKey

▸ **setPrivateKey**(`privateKey`): `void`

Sets the EC Diffie-Hellman private key.
If `encoding` is provided, `privateKey` is expected
to be a string; otherwise `privateKey` is expected to be a `Buffer`,`TypedArray`, or `DataView`.

If `privateKey` is not valid for the curve specified when the `ECDH` object was
created, an error is thrown. Upon setting the private key, the associated
public point (key) is also generated and set in the `ECDH` object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `ArrayBufferView` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2431](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2431)

▸ **setPrivateKey**(`privateKey`, `encoding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `encoding` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) |

#### Returns

`void`

#### Defined in

[crypto.d.ts:2432](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2432)

___

### convertKey

▸ `Static` **convertKey**(`key`, `curve`, `inputEncoding?`, `outputEncoding?`, `format?`): `string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

Converts the EC Diffie-Hellman public key specified by `key` and `curve` to the
format specified by `format`. The `format` argument specifies point encoding
and can be `'compressed'`, `'uncompressed'` or `'hybrid'`. The supplied key is
interpreted using the specified `inputEncoding`, and the returned key is encoded
using the specified `outputEncoding`.

Use [getCurves](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#getcurves) to obtain a list of available curve names.
On recent OpenSSL releases, `openssl ecparam -list_curves` will also display
the name and description of each available elliptic curve.

If `format` is not specified the point will be returned in `'uncompressed'`format.

If the `inputEncoding` is not provided, `key` is expected to be a `Buffer`,`TypedArray`, or `DataView`.

Example (uncompressing a key):

```js
const {
  createECDH,
  ECDH
} = await import('crypto');

const ecdh = createECDH('secp256k1');
ecdh.generateKeys();

const compressedKey = ecdh.getPublicKey('hex', 'compressed');

const uncompressedKey = ECDH.convertKey(compressedKey,
                                        'secp256k1',
                                        'hex',
                                        'hex',
                                        'uncompressed');

// The converted key and the uncompressed public key should be the same
console.log(uncompressedKey === ecdh.getPublicKey('hex'));
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`BinaryLike`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarylike) | - |
| `curve` | `string` | - |
| `inputEncoding?` | [`BinaryToTextEncoding`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md#binarytotextencoding) | The `encoding` of the `key` string. |
| `outputEncoding?` | ``"latin1"`` \| ``"hex"`` \| ``"base64"`` \| ``"base64url"`` | The `encoding` of the return value. |
| `format?` | ``"uncompressed"`` \| ``"compressed"`` \| ``"hybrid"`` |  |

#### Returns

`string` \| [`Buffer`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:2346](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L2346)
