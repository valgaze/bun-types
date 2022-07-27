[bun-types](../README.md) / [Exports](../modules.md) / FetchEvent

# Interface: FetchEvent

## Hierarchy

- [`Event`](../modules.md#event)

  ↳ **`FetchEvent`**

## Table of contents

### Properties

- [AT\_TARGET](FetchEvent.md#at_target)
- [BUBBLING\_PHASE](FetchEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](FetchEvent.md#capturing_phase)
- [NONE](FetchEvent.md#none)
- [bubbles](FetchEvent.md#bubbles)
- [cancelBubble](FetchEvent.md#cancelbubble)
- [cancelable](FetchEvent.md#cancelable)
- [composed](FetchEvent.md#composed)
- [currentTarget](FetchEvent.md#currenttarget)
- [defaultPrevented](FetchEvent.md#defaultprevented)
- [eventPhase](FetchEvent.md#eventphase)
- [isTrusted](FetchEvent.md#istrusted)
- [request](FetchEvent.md#request)
- [returnValue](FetchEvent.md#returnvalue)
- [srcElement](FetchEvent.md#srcelement)
- [target](FetchEvent.md#target)
- [timeStamp](FetchEvent.md#timestamp)
- [type](FetchEvent.md#type)
- [url](FetchEvent.md#url)

### Methods

- [composedPath](FetchEvent.md#composedpath)
- [initEvent](FetchEvent.md#initevent)
- [preventDefault](FetchEvent.md#preventdefault)
- [respondWith](FetchEvent.md#respondwith)
- [stopImmediatePropagation](FetchEvent.md#stopimmediatepropagation)
- [stopPropagation](FetchEvent.md#stoppropagation)
- [waitUntil](FetchEvent.md#waituntil)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

Event.AT\_TARGET

#### Defined in

[globals.d.ts:1269](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1269)

[dist/types.d.ts:9839](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9839)

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

Event.BUBBLING\_PHASE

#### Defined in

[globals.d.ts:1270](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1270)

[dist/types.d.ts:9840](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9840)

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

Event.CAPTURING\_PHASE

#### Defined in

[globals.d.ts:1271](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1271)

[dist/types.d.ts:9841](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9841)

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

Event.NONE

#### Defined in

[globals.d.ts:1272](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1272)

[dist/types.d.ts:9842](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9842)

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True
if event goes through its target's ancestors in reverse tree order,
and false otherwise.

#### Inherited from

Event.bubbles

#### Defined in

[globals.d.ts:1183](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1183)

[dist/types.d.ts:9753](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9753)

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

Event.cancelBubble

#### Defined in

[globals.d.ts:1184](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1184)

[dist/types.d.ts:9754](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9754)

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its
return value does not always carry meaning, but true can indicate
that part of the operation during which event was dispatched, can be
canceled by invoking the preventDefault() method.

#### Inherited from

Event.cancelable

#### Defined in

[globals.d.ts:1191](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1191)

[dist/types.d.ts:9761](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9761)

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True
if event invokes listeners past a ShadowRoot node that is the root of
its target, and false otherwise.

#### Inherited from

Event.composed

#### Defined in

[globals.d.ts:1197](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1197)

[dist/types.d.ts:9767](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9767)

___

### currentTarget

• `Readonly` **currentTarget**: [`EventTarget`](../modules.md#eventtarget)

Returns the object whose event listener's callback is currently
being invoked.

#### Inherited from

Event.currentTarget

#### Defined in

[globals.d.ts:1202](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1202)

[dist/types.d.ts:9772](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9772)

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to
indicate cancelation, and false otherwise.

#### Inherited from

Event.defaultPrevented

#### Defined in

[globals.d.ts:1207](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1207)

[dist/types.d.ts:9777](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9777)

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE,
AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

Event.eventPhase

#### Defined in

[globals.d.ts:1212](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1212)

[dist/types.d.ts:9782](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9782)

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false
otherwise.

#### Inherited from

Event.isTrusted

#### Defined in

[globals.d.ts:1217](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1217)

[dist/types.d.ts:9787](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9787)

___

### request

• `Readonly` **request**: `Request`

#### Defined in

[globals.d.ts:1497](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1497)

[dist/types.d.ts:10067](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10067)

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

Event.returnValue

#### Defined in

[globals.d.ts:1221](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1221)

[dist/types.d.ts:9791](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9791)

___

### srcElement

• `Readonly` **srcElement**: [`EventTarget`](../modules.md#eventtarget)

**`Deprecated`**

#### Inherited from

Event.srcElement

#### Defined in

[globals.d.ts:1225](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1225)

[dist/types.d.ts:9795](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9795)

___

### target

• `Readonly` **target**: [`EventTarget`](../modules.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

Event.target

#### Defined in

[globals.d.ts:1229](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1229)

[dist/types.d.ts:9799](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9799)

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured
relative to the time origin.

#### Inherited from

Event.timeStamp

#### Defined in

[globals.d.ts:1234](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1234)

[dist/types.d.ts:9804](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9804)

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

Event.type

#### Defined in

[globals.d.ts:1238](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1238)

[dist/types.d.ts:9808](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9808)

___

### url

• `Readonly` **url**: `string`

#### Defined in

[globals.d.ts:1498](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1498)

[dist/types.d.ts:10068](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10068)

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules.md#eventtarget)[]

#### Inherited from

Event.composedPath

#### Defined in

[globals.d.ts:1245](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1245)

▸ **composedPath**(): [`EventTarget`](../modules.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on
which listeners will be invoked), except for any nodes in shadow
trees of which the shadow root's mode is "closed" that are not
reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules.md#eventtarget)[]

#### Inherited from

Event.composedPath

#### Defined in

[dist/types.d.ts:9815](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9815)

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

#### Defined in

[globals.d.ts:1249](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1249)

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

#### Defined in

[dist/types.d.ts:9819](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9819)

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while
executing a listener for the event with passive set to false, signals
to the operation that caused event to be dispatched that it needs to
be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

#### Defined in

[globals.d.ts:1256](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1256)

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while
executing a listener for the event with passive set to false, signals
to the operation that caused event to be dispatched that it needs to
be canceled.

#### Returns

`void`

#### Inherited from

Event.preventDefault

#### Defined in

[dist/types.d.ts:9826](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9826)

___

### respondWith

▸ **respondWith**(`response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` \| `Promise`<`Response`\> |

#### Returns

`void`

#### Defined in

[globals.d.ts:1501](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1501)

▸ **respondWith**(`response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` \| `Promise`<`Response`\> |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10071](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10071)

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered
event listeners after the current one finishes running and, when
dispatched in a tree, also prevents event from reaching any other
objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

#### Defined in

[globals.d.ts:1263](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1263)

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered
event listeners after the current one finishes running and, when
dispatched in a tree, also prevents event from reaching any other
objects.

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

#### Defined in

[dist/types.d.ts:9833](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9833)

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from
reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation

#### Defined in

[globals.d.ts:1268](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1268)

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from
reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

Event.stopPropagation

#### Defined in

[dist/types.d.ts:9838](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L9838)

___

### waitUntil

▸ **waitUntil**(`promise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`any`\> |

#### Returns

`void`

#### Defined in

[globals.d.ts:1500](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1500)

▸ **waitUntil**(`promise`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`any`\> |

#### Returns

`void`

#### Defined in

[dist/types.d.ts:10070](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10070)
