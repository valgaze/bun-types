[bun-types](../README.md) / [Exports](../modules.md) / ["node:crypto"](node_crypto_.md) / generateKeyPair

# Namespace: generateKeyPair

["node:crypto"](node_crypto_.md).generateKeyPair

## Table of contents

### Functions

- [\_\_promisify\_\_](node_crypto_.generateKeyPair.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3142](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3142)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3149](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3149)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3156](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3156)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3163](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3163)

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](../interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[crypto.d.ts:3170](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3170)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3174](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3174)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3181](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3181)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3188](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3188)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3195](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3195)

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](../interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[crypto.d.ts:3202](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3202)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3206](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3206)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3213](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3213)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3220](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3220)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3227](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3227)

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](../interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[crypto.d.ts:3234](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3234)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3238](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3238)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3245](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3245)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3252](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3252)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3259](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3259)

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](../interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[crypto.d.ts:3266](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3266)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3270](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3270)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3277](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3277)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3284](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3284)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3291](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3291)

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](../interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[crypto.d.ts:3298](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3298)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3302](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3302)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3309](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3309)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3316](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3316)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3323](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3323)

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](../interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[crypto.d.ts:3330](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3330)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3334](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3334)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3341](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3341)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3348](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3348)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3355](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3355)

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](../interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[crypto.d.ts:3362](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3362)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3366](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3366)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[crypto.d.ts:3373](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3373)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3380](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3380)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[crypto.d.ts:3387](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3387)

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](../interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[crypto.d.ts:3394](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L3394)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19161](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19161)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto_.RSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19168](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19168)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19175](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19175)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairOptions`](../interfaces/crypto_.RSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19182](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19182)

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa"`` |
| `options` | [`RSAKeyPairKeyObjectOptions`](../interfaces/crypto_.RSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[dist/types.d.ts:19189](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19189)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19193](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19193)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19200](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19200)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19207](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19207)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairOptions`](../interfaces/crypto_.RSAPSSKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19214](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19214)

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"rsa-pss"`` |
| `options` | [`RSAPSSKeyPairKeyObjectOptions`](../interfaces/crypto_.RSAPSSKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[dist/types.d.ts:19221](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19221)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19225](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19225)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto_.DSAKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19232](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19232)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19239](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19239)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairOptions`](../interfaces/crypto_.DSAKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19246](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19246)

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"dsa"`` |
| `options` | [`DSAKeyPairKeyObjectOptions`](../interfaces/crypto_.DSAKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[dist/types.d.ts:19253](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19253)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19257](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19257)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto_.ECKeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19264](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19264)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19271](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19271)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairOptions`](../interfaces/crypto_.ECKeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19278](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19278)

▸ **__promisify__**(`type`, `options`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ec"`` |
| `options` | [`ECKeyPairKeyObjectOptions`](../interfaces/crypto_.ECKeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[dist/types.d.ts:19285](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19285)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19289](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19289)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto_.ED25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19296](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19296)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19303](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19303)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options` | [`ED25519KeyPairOptions`](../interfaces/crypto_.ED25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19310](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19310)

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed25519"`` |
| `options?` | [`ED25519KeyPairKeyObjectOptions`](../interfaces/crypto_.ED25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[dist/types.d.ts:19317](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19317)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19321](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19321)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto_.ED448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19328](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19328)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19335](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19335)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options` | [`ED448KeyPairOptions`](../interfaces/crypto_.ED448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19342](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19342)

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"ed448"`` |
| `options?` | [`ED448KeyPairKeyObjectOptions`](../interfaces/crypto_.ED448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[dist/types.d.ts:19349](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19349)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19353](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19353)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto_.X25519KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19360](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19360)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19367](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19367)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options` | [`X25519KeyPairOptions`](../interfaces/crypto_.X25519KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19374](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19374)

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x25519"`` |
| `options?` | [`X25519KeyPairKeyObjectOptions`](../interfaces/crypto_.X25519KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[dist/types.d.ts:19381](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19381)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19385](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19385)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto_.X448KeyPairOptions.md)<``"pem"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: `string`  }\>

#### Defined in

[dist/types.d.ts:19392](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19392)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"pem"``\> |

#### Returns

`Promise`<{ `privateKey`: `string` ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19399](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19399)

▸ **__promisify__**(`type`, `options`): `Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options` | [`X448KeyPairOptions`](../interfaces/crypto_.X448KeyPairOptions.md)<``"der"``, ``"der"``\> |

#### Returns

`Promise`<{ `privateKey`: [`Buffer`](buffer_.md#buffer) ; `publicKey`: [`Buffer`](buffer_.md#buffer)  }\>

#### Defined in

[dist/types.d.ts:19406](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19406)

▸ **__promisify__**(`type`, `options?`): `Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"x448"`` |
| `options?` | [`X448KeyPairKeyObjectOptions`](../interfaces/crypto_.X448KeyPairKeyObjectOptions.md) |

#### Returns

`Promise`<[`KeyPairKeyObjectResult`](../interfaces/crypto_.KeyPairKeyObjectResult.md)\>

#### Defined in

[dist/types.d.ts:19413](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L19413)
