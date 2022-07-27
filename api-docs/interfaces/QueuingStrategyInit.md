[bun-types](../README.md) / [Exports](../modules.md) / QueuingStrategyInit

# Interface: QueuingStrategyInit

## Table of contents

### Properties

- [highWaterMark](QueuingStrategyInit.md#highwatermark)

## Properties

### highWaterMark

• **highWaterMark**: `number`

Creates a new ByteLengthQueuingStrategy with the provided high water mark.

Note that the provided high water mark will not be validated ahead of time. Instead, if it is negative, NaN, or not a number, the resulting ByteLengthQueuingStrategy will cause the corresponding stream constructor to throw.

#### Defined in

[globals.d.ts:1711](https://github.com/valgaze/bun-types/blob/5e53f27/globals.d.ts#L1711)

[dist/types.d.ts:10281](https://github.com/valgaze/bun-types/blob/5e53f27/dist/types.d.ts#L10281)
