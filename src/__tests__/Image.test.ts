import Image from "../Image";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('test image', () => {
  expect(Image.of('wangzhen', 'https://cdn.sspai.com/attachment/origin/2014/04/15/69493.jpg'))
    .toBe('![wangzhen](https://cdn.sspai.com/attachment/origin/2014/04/15/69493.jpg)')

  expect(Image.of(null, null)).toBe('![]()')
  expect(Image.of('', null)).toBe('![]()')
})
