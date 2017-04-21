import Del from "../Del";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('test del', () => {
  expect(Del.of('wangzhen')).toBe('~~wangzhen~~')

  expect(Del.of(null)).toBe('')
  expect(Del.of('')).toBe('~~~~')
})
