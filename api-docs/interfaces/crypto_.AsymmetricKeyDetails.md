[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md) / AsymmetricKeyDetails

# Interface: AsymmetricKeyDetails

["crypto"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/crypto_.md).AsymmetricKeyDetails

## Table of contents

### Properties

- [divisorLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.AsymmetricKeyDetails.md#divisorlength)
- [hashAlgorithm](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.AsymmetricKeyDetails.md#hashalgorithm)
- [mgf1HashAlgorithm](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.AsymmetricKeyDetails.md#mgf1hashalgorithm)
- [modulusLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.AsymmetricKeyDetails.md#moduluslength)
- [namedCurve](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.AsymmetricKeyDetails.md#namedcurve)
- [publicExponent](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.AsymmetricKeyDetails.md#publicexponent)
- [saltLength](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/crypto_.AsymmetricKeyDetails.md#saltlength)

## Properties

### divisorLength

• `Optional` **divisorLength**: `number`

Size of q in bits (DSA).

#### Defined in

[crypto.d.ts:546](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L546)

[dist/types.d.ts:16565](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L16565)

___

### hashAlgorithm

• `Optional` **hashAlgorithm**: `string`

Name of the message digest (RSA-PSS).

#### Defined in

[crypto.d.ts:534](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L534)

[dist/types.d.ts:16553](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L16553)

___

### mgf1HashAlgorithm

• `Optional` **mgf1HashAlgorithm**: `string`

Name of the message digest used by MGF1 (RSA-PSS).

#### Defined in

[crypto.d.ts:538](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L538)

[dist/types.d.ts:16557](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L16557)

___

### modulusLength

• `Optional` **modulusLength**: `number`

Key size in bits (RSA, DSA).

#### Defined in

[crypto.d.ts:526](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L526)

[dist/types.d.ts:16545](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L16545)

___

### namedCurve

• `Optional` **namedCurve**: `string`

Name of the curve (EC).

#### Defined in

[crypto.d.ts:550](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L550)

[dist/types.d.ts:16569](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L16569)

___

### publicExponent

• `Optional` **publicExponent**: `bigint`

Public exponent (RSA).

#### Defined in

[crypto.d.ts:530](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L530)

[dist/types.d.ts:16549](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L16549)

___

### saltLength

• `Optional` **saltLength**: `number`

Minimal salt length in bytes (RSA-PSS).

#### Defined in

[crypto.d.ts:542](https://github.com/valgaze/bun-types/blob/6f8dbf8/crypto.d.ts#L542)

[dist/types.d.ts:16561](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L16561)