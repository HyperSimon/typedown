import Link from "../Link";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */



test('test link', () => {
  expect(Link.of('wangzhen', 'https://cdn.sspai.com/attachment/origin/2014/04/15/69493.jpg'))
    .toBe('[wangzhen](https://cdn.sspai.com/attachment/origin/2014/04/15/69493.jpg)')

  expect(Link.of(null, null)).toBe('[]()')
  expect(Link.of('', null)).toBe('[]()')
})
