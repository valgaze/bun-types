[bun-types](https://github.com/oven-sh/bun-types/blob/master/api-docs/README.md) / [Exports](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md) / ReadableWritablePair

# Interface: ReadableWritablePair<R, W\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |
| `W` | `any` |

## Table of contents

### Properties

- [readable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md#readable)
- [writable](https://github.com/oven-sh/bun-types/blob/master/api-docs/interfaces/ReadableWritablePair.md#writable)

## Properties

### readable

• **readable**: [`ReadableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#readablestream)<`R`\>

#### Defined in

[globals.d.ts:1772](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1772)

[dist/types.d.ts:10342](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10342)

___

### writable

• **writable**: [`WritableStream`](https://github.com/oven-sh/bun-types/blob/master/api-docs/modules.md#writablestream)<`W`\>

Provides a convenient, chainable way of piping this readable stream through a transform stream (or any other { writable, readable } pair). It simply pipes the stream into the writable side of the supplied pair, and returns the readable side for further use.

Piping a stream will lock it for the duration of the pipe, preventing any other consumer from acquiring a reader.

#### Defined in

[globals.d.ts:1778](https://github.com/valgaze/bun-types/blob/6f8dbf8/globals.d.ts#L1778)

[dist/types.d.ts:10348](https://github.com/valgaze/bun-types/blob/6f8dbf8/dist/types.d.ts#L10348)