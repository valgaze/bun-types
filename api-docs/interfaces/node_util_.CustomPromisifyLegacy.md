[bun-types](../README.md) / [Exports](../modules.md) / ["node:util"](../modules/node_util_.md) / CustomPromisifyLegacy

# Interface: CustomPromisifyLegacy<TCustom\>

["node:util"](../modules/node_util_.md).CustomPromisifyLegacy

## Type parameters

| Name | Type |
| :------ | :------ |
| `TCustom` | extends `Function` |

## Hierarchy

- `Function`

  ↳ **`CustomPromisifyLegacy`**

## Table of contents

### Properties

- [\_\_promisify\_\_](node_util_.CustomPromisifyLegacy.md#__promisify__)
- [arguments](node_util_.CustomPromisifyLegacy.md#arguments)
- [caller](node_util_.CustomPromisifyLegacy.md#caller)
- [length](node_util_.CustomPromisifyLegacy.md#length)
- [name](node_util_.CustomPromisifyLegacy.md#name)
- [prototype](node_util_.CustomPromisifyLegacy.md#prototype)

### Methods

- [[hasInstance]](node_util_.CustomPromisifyLegacy.md#[hasinstance])
- [apply](node_util_.CustomPromisifyLegacy.md#apply)
- [bind](node_util_.CustomPromisifyLegacy.md#bind)
- [call](node_util_.CustomPromisifyLegacy.md#call)
- [toString](node_util_.CustomPromisifyLegacy.md#tostring)

## Properties

### \_\_promisify\_\_

• **\_\_promisify\_\_**: `TCustom`

#### Defined in

[util.d.ts:1008](https://github.com/valgaze/bun-types/blob/5e53f27/util.d.ts#L1008)

[dist/types.d.ts:14113](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L14113)

___

### arguments

• **arguments**: `any`

#### Inherited from

Function.arguments

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:310

___

### caller

• **caller**: `Function`

#### Inherited from

Function.caller

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:311

___

### length

• `Readonly` **length**: `number`

#### Inherited from

Function.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:307

___

### name

• `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

#### Inherited from

Function.name

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:97

___

### prototype

• **prototype**: `any`

#### Inherited from

Function.prototype

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:306

## Methods

### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

Function.\_\_@hasInstance@692

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:162

___

### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the this object. |
| `argArray?` | `any` | A set of arguments to be passed to the function. |

#### Returns

`any`

#### Inherited from

Function.apply

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:286

___

### bind

▸ **bind**(`this`, `thisArg`, ...`argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[] | A list of arguments to be passed to the new function. |

#### Returns

`any`

#### Inherited from

Function.bind

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:301

___

### call

▸ **call**(`this`, `thisArg`, ...`argArray`): `any`

Calls a method of an object, substituting another object for the current object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Function` | - |
| `thisArg` | `any` | The object to be used as the current object. |
| `...argArray` | `any`[] | A list of arguments to be passed to the method. |

#### Returns

`any`

#### Inherited from

Function.call

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:293

___

### toString

▸ **toString**(): `string`

Returns a string representation of a function.

#### Returns

`string`

#### Inherited from

Function.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:304
