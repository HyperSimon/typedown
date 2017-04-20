import Bold from "../Bold";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('test bold', () => {
  expect(Bold.of('wangzhen')).toBe('**wangzhen**')

  expect(Bold.of(null)).toBe('')
  expect(Bold.of('')).toBe('****')
})
