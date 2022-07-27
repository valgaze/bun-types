[bun-types](../README.md) / [Exports](../modules.md) / ["node:crypto"](../modules/node_crypto_.md) / DiffieHellman

# Class: DiffieHellman

["node:crypto"](../modules/node_crypto_.md).DiffieHellman

The `DiffieHellman` class is a utility for creating Diffie-Hellman key
exchanges.

Instances of the `DiffieHellman` class can be created using the [createDiffieHellman](../modules/node_crypto_.md#creatediffiehellman) function.

```js
import assert from 'assert';

const {
  createDiffieHellman
} = await import('crypto');

// Generate Alice's keys...
const alice = createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

// OK
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
```

## Table of contents

### Constructors

- [constructor](node_crypto_.DiffieHellman.md#constructor)

### Properties

- [verifyError](node_crypto_.DiffieHellman.md#verifyerror)

### Methods

- [computeSecret](node_crypto_.DiffieHellman.md#computesecret)
- [generateKeys](node_crypto_.DiffieHellman.md#generatekeys)
- [getGenerator](node_crypto_.DiffieHellman.md#getgenerator)
- [getPrime](node_crypto_.DiffieHellman.md#getprime)
- [getPrivateKey](node_crypto_.DiffieHellman.md#getprivatekey)
- [getPublicKey](node_crypto_.DiffieHellman.md#getpublickey)
- [setPrivateKey](node_crypto_.DiffieHellman.md#setprivatekey)
- [setPublicKey](node_crypto_.DiffieHellman.md#setpublickey)

## Constructors

### constructor

• `Private` **new DiffieHellman**()

#### Defined in

[crypto.d.ts:1600](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1600)

## Properties

### verifyError

• **verifyError**: `number`

A bit field containing any warnings and/or errors resulting from a check
performed during initialization of the `DiffieHellman` object.

The following values are valid for this property (as defined in `constants`module):

* `DH_CHECK_P_NOT_SAFE_PRIME`
* `DH_CHECK_P_NOT_PRIME`
* `DH_UNABLE_TO_CHECK_GENERATOR`
* `DH_NOT_SUITABLE_GENERATOR`

#### Defined in

[crypto.d.ts:1695](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1695)

## Methods

### computeSecret

▸ **computeSecret**(`otherPublicKey`): [`Buffer`](../modules/buffer_.md#buffer)

Computes the shared secret using `otherPublicKey` as the other
party's public key and returns the computed shared secret. The supplied
key is interpreted using the specified `inputEncoding`, and secret is
encoded using specified `outputEncoding`.
If the `inputEncoding` is not
provided, `otherPublicKey` is expected to be a `Buffer`,`TypedArray`, or `DataView`.

If `outputEncoding` is given a string is returned; otherwise, a `Buffer` is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherPublicKey` | `ArrayBufferView` |

#### Returns

[`Buffer`](../modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1622](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1622)

▸ **computeSecret**(`otherPublicKey`, `inputEncoding`): [`Buffer`](../modules/buffer_.md#buffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherPublicKey` | `string` |
| `inputEncoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |

#### Returns

[`Buffer`](../modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1623](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1623)

▸ **computeSecret**(`otherPublicKey`, `outputEncoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherPublicKey` | `ArrayBufferView` |
| `outputEncoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:1627](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1627)

▸ **computeSecret**(`otherPublicKey`, `inputEncoding`, `outputEncoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherPublicKey` | `string` |
| `inputEncoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |
| `outputEncoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:1631](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1631)

___

### generateKeys

▸ **generateKeys**(): [`Buffer`](../modules/buffer_.md#buffer)

Generates private and public Diffie-Hellman key values, and returns
the public key in the specified `encoding`. This key should be
transferred to the other party.
If `encoding` is provided a string is returned; otherwise a `Buffer` is returned.

#### Returns

[`Buffer`](../modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1608](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1608)

▸ **generateKeys**(`encoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:1609](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1609)

___

### getGenerator

▸ **getGenerator**(): [`Buffer`](../modules/buffer_.md#buffer)

Returns the Diffie-Hellman generator in the specified `encoding`.
If `encoding` is provided a string is
returned; otherwise a `Buffer` is returned.

#### Returns

[`Buffer`](../modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1650](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1650)

▸ **getGenerator**(`encoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:1651](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1651)

___

### getPrime

▸ **getPrime**(): [`Buffer`](../modules/buffer_.md#buffer)

Returns the Diffie-Hellman prime in the specified `encoding`.
If `encoding` is provided a string is
returned; otherwise a `Buffer` is returned.

#### Returns

[`Buffer`](../modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1642](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1642)

▸ **getPrime**(`encoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:1643](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1643)

___

### getPrivateKey

▸ **getPrivateKey**(): [`Buffer`](../modules/buffer_.md#buffer)

Returns the Diffie-Hellman private key in the specified `encoding`.
If `encoding` is provided a
string is returned; otherwise a `Buffer` is returned.

#### Returns

[`Buffer`](../modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1666](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1666)

▸ **getPrivateKey**(`encoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:1667](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1667)

___

### getPublicKey

▸ **getPublicKey**(): [`Buffer`](../modules/buffer_.md#buffer)

Returns the Diffie-Hellman public key in the specified `encoding`.
If `encoding` is provided a
string is returned; otherwise a `Buffer` is returned.

#### Returns

[`Buffer`](../modules/buffer_.md#buffer)

#### Defined in

[crypto.d.ts:1658](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1658)

▸ **getPublicKey**(`encoding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | [`BinaryToTextEncoding`](../modules/crypto_.md#binarytotextencoding) |

#### Returns

`string`

#### Defined in

[crypto.d.ts:1659](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1659)

___

### setPrivateKey

▸ **setPrivateKey**(`privateKey`): `void`

Sets the Diffie-Hellman private key. If the `encoding` argument is provided,`privateKey` is expected
to be a string. If no `encoding` is provided, `privateKey` is expected
to be a `Buffer`, `TypedArray`, or `DataView`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `ArrayBufferView` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1682](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1682)

▸ **setPrivateKey**(`privateKey`, `encoding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |
| `encoding` | `BufferEncoding` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1683](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1683)

___

### setPublicKey

▸ **setPublicKey**(`publicKey`): `void`

Sets the Diffie-Hellman public key. If the `encoding` argument is provided,`publicKey` is expected
to be a string. If no `encoding` is provided, `publicKey` is expected
to be a `Buffer`, `TypedArray`, or `DataView`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `ArrayBufferView` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1674](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1674)

▸ **setPublicKey**(`publicKey`, `encoding`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `encoding` | `BufferEncoding` |

#### Returns

`void`

#### Defined in

[crypto.d.ts:1675](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L1675)
