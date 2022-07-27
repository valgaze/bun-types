[bun-types](../README.md) / [Exports](../modules.md) / "test"

# Namespace: "test"

## Table of contents

### Interfaces

- [Expect](../interfaces/test_.Expect.md)

### Functions

- [describe](test_.md#describe)
- [expect](test_.md#expect)
- [it](test_.md#it)
- [test](test_.md#test)

## Functions

### describe

▸ **describe**(`label`, `body`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `body` | () => `void` |

#### Returns

`any`

#### Defined in

[bun-test.d.ts:21](https://github.com/valgaze/bun-types/blob/5e53f27/bun-test.d.ts#L21)

▸ **describe**(`label`, `body`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `body` | () => `void` |

#### Returns

`any`

#### Defined in

[dist/types.d.ts:10790](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10790)

___

### expect

▸ **expect**(`value`): [`Expect`](../interfaces/bun_test_.Expect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Expect`](../interfaces/bun_test_.Expect.md)

#### Defined in

[bun-test.d.ts:25](https://github.com/valgaze/bun-types/blob/5e53f27/bun-test.d.ts#L25)

▸ **expect**(`value`): [`Expect`](../interfaces/bun_test_.Expect.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Expect`](../interfaces/bun_test_.Expect.md)

#### Defined in

[dist/types.d.ts:10794](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10794)

___

### it

▸ **it**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

#### Defined in

[bun-test.d.ts:22](https://github.com/valgaze/bun-types/blob/5e53f27/bun-test.d.ts#L22)

▸ **it**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

#### Defined in

[dist/types.d.ts:10791](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10791)

___

### test

▸ **test**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

#### Defined in

[bun-test.d.ts:23](https://github.com/valgaze/bun-types/blob/5e53f27/bun-test.d.ts#L23)

▸ **test**(`label`, `test`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `test` | () => `void` \| `Promise`<`any`\> |

#### Returns

`any`

#### Defined in

[dist/types.d.ts:10792](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10792)
