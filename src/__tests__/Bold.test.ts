import Bold from "../Bold";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('test bold', () => {
  expect(Bold.of('wangzhen').generate()).toBe('**wangzhen**')

  expect(Bold.of(null).generate()).toBe('')
  expect(Bold.of('').generate()).toBe('****')
})
