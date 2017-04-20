import Emphasize from "../Emphasize";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('test emphasize', () => {
  expect(Emphasize.of('wangzhen')).toBe('*wangzhen*')

  expect(Emphasize.of(null)).toBe('')
  expect(Emphasize.of('')).toBe('**')
})
