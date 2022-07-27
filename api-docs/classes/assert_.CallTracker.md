[bun-types](../README.md) / [Exports](../modules.md) / ["assert"](../modules/assert_.md) / CallTracker

# Class: CallTracker

["assert"](../modules/assert_.md).CallTracker

This feature is currently experimental and behavior might still change.

## Table of contents

### Constructors

- [constructor](assert_.CallTracker.md#constructor)

### Methods

- [calls](assert_.CallTracker.md#calls)
- [report](assert_.CallTracker.md#report)
- [verify](assert_.CallTracker.md#verify)

## Constructors

### constructor

• **new CallTracker**()

## Methods

### calls

▸ **calls**(`exact?`): () => `void`

The wrapper function is expected to be called exactly `exact` times. If the
function has not been called exactly `exact` times when `tracker.verify()` is called, then `tracker.verify()` will throw an
error.

```js
import assert from 'assert';

// Creates call tracker.
const tracker = new assert.CallTracker();

function func() {}

// Returns a function that wraps func() that must be called exact times
// before tracker.verify().
const callsfunc = tracker.calls(func);
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `exact?` | `number` |

#### Returns

`fn`

that wraps `fn`.

▸ (): `void`

The wrapper function is expected to be called exactly `exact` times. If the
function has not been called exactly `exact` times when `tracker.verify()` is called, then `tracker.verify()` will throw an
error.

```js
import assert from 'assert';

// Creates call tracker.
const tracker = new assert.CallTracker();

function func() {}

// Returns a function that wraps func() that must be called exact times
// before tracker.verify().
const callsfunc = tracker.calls(func);
```

##### Returns

`void`

that wraps `fn`.

#### Defined in

[assert.d.ts:63](https://github.com/valgaze/bun-types/blob/5e53f27/assert.d.ts#L63)

▸ **calls**<`Func`\>(`fn?`, `exact?`): `Func`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Func` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn?` | `Func` |
| `exact?` | `number` |

#### Returns

`Func`

#### Defined in

[assert.d.ts:64](https://github.com/valgaze/bun-types/blob/5e53f27/assert.d.ts#L64)

___

### report

▸ **report**(): [`CallTrackerReportInformation`](../interfaces/assert_.CallTrackerReportInformation.md)[]

The arrays contains information about the expected and actual number of calls of
the functions that have not been called the expected number of times.

```js
import assert from 'assert';

// Creates call tracker.
const tracker = new assert.CallTracker();

function func() {}

function foo() {}

// Returns a function that wraps func() that must be called exact times
// before tracker.verify().
const callsfunc = tracker.calls(func, 2);

// Returns an array containing information on callsfunc()
tracker.report();
// [
//  {
//    message: 'Expected the func function to be executed 2 time(s) but was
//    executed 0 time(s).',
//    actual: 0,
//    expected: 2,
//    operator: 'func',
//    stack: stack trace
//  }
// ]
```

#### Returns

[`CallTrackerReportInformation`](../interfaces/assert_.CallTrackerReportInformation.md)[]

of objects containing information about the wrapper functions returned by `calls`.

#### Defined in

[assert.d.ts:101](https://github.com/valgaze/bun-types/blob/5e53f27/assert.d.ts#L101)

___

### verify

▸ **verify**(): `void`

Iterates through the list of functions passed to `tracker.calls()` and will throw an error for functions that
have not been called the expected number of times.

```js
import assert from 'assert';

// Creates call tracker.
const tracker = new assert.CallTracker();

function func() {}

// Returns a function that wraps func() that must be called exact times
// before tracker.verify().
const callsfunc = tracker.calls(func, 2);

callsfunc();

// Will throw an error since callsfunc() was only called once.
tracker.verify();
```

#### Returns

`void`

#### Defined in

[assert.d.ts:124](https://github.com/valgaze/bun-types/blob/5e53f27/assert.d.ts#L124)
