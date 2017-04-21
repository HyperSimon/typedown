import Inline from "../Inline";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('test emphasize', () => {
  expect(Inline.of('wangzhen')).toBe('`wangzhen`')

  expect(Inline.of(null)).toBe('')
  expect(Inline.of('')).toBe('``')
})
