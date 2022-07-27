[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md) / Transpiler

# Class: Transpiler

["bun"](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md).Transpiler

Quickly transpile TypeScript, JSX, or JS to modern JavaScript.

**`Example`**

```js
const transpiler = new Bun.Transpiler();
transpiler.transformSync(`
  const App = () => <div>Hello World</div>;
export default App;
`);
// This outputs:
const output = `
const App = () => jsx("div", {
  children: "Hello World"
}, undefined, false, undefined, this);
export default App;
`
```

## Table of contents

### Constructors

- [constructor](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.Transpiler.md#constructor)

### Methods

- [scan](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.Transpiler.md#scan)
- [scanImports](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.Transpiler.md#scanimports)
- [transform](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.Transpiler.md#transform)
- [transformSync](https://github.com/oven-sh/bun-types/blob/master/api-docs/classes/bun_.Transpiler.md#transformsync)

## Constructors

### constructor

• **new Transpiler**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TranspilerOptions`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.TranspilerOptions.md) |

#### Defined in

[bun.d.ts:564](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L564)

## Methods

### scan

▸ **scan**(`code`): `Object`

Get a list of import paths and paths from a TypeScript, JSX, TSX, or JavaScript file.

**`Example`**

```js
const {imports, exports} = transpiler.scan(`
import {foo} from "baz";
const hello = "hi!";
`);

console.log(imports); // ["baz"]
console.log(exports); // ["hello"]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to scan |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exports` | `string`[] |
| `imports` | [`Import`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Import.md)[] |

#### Defined in

[bun.d.ts:614](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L614)

___

### scanImports

▸ **scanImports**(`code`): [`Import`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Import.md)[]

Get a list of import paths from a TypeScript, JSX, TSX, or JavaScript file.

**`Example`**

```js
const imports = transpiler.scanImports(`
import {foo} from "baz";
import type {FooType} from "bar";
import type {DogeType} from "wolf";
`);

console.log(imports); // ["baz"]
```
This is a fast path which performs less work than `scan`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to scan |

#### Returns

[`Import`](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/bun_.Import.md)[]

#### Defined in

[bun.d.ts:631](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L631)

___

### transform

▸ **transform**(`code`, `loader?`): `Promise`<`string`\>

Transpile code from TypeScript or JSX into valid JavaScript.
This function does not resolve imports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to transpile |
| `loader?` | [`JavaScriptLoader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#javascriptloader) | - |

#### Returns

`Promise`<`string`\>

#### Defined in

[bun.d.ts:571](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L571)

___

### transformSync

▸ **transformSync**(`code`, `loader`, `ctx`): `string`

Transpile code from TypeScript or JSX into valid JavaScript.
This function does not resolve imports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to transpile |
| `loader` | [`JavaScriptLoader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#javascriptloader) | - |
| `ctx` | `object` | - |

#### Returns

`string`

#### Defined in

[bun.d.ts:578](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L578)

▸ **transformSync**(`code`, `ctx`): `string`

Transpile code from TypeScript or JSX into valid JavaScript.
This function does not resolve imports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to transpile |
| `ctx` | `object` | An object to pass to macros |

#### Returns

`string`

#### Defined in

[bun.d.ts:590](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L590)

▸ **transformSync**(`code`, `loader`): `string`

Transpile code from TypeScript or JSX into valid JavaScript.
This function does not resolve imports.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `StringOrBuffer` | The code to transpile |
| `loader` | [`JavaScriptLoader`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules/bun_.md#javascriptloader) | - |

#### Returns

`string`

#### Defined in

[bun.d.ts:598](https://github.com/valgaze/bun-types/blob/6f8dbf8/bun.d.ts#L598)
