/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

import Quote from "../Quote";

describe('test quote', () => {
  test('test generate', () => {
    expect(Quote.of('wangzhen')).toBe(`>wangzhen`)

    const expectString: string =
      `wangzhen
       line2
    `
    expect(Quote.of(expectString)).toBe(
      `>wangzhen
       line2
    `)
  })
})
