import H1 from "../H1";
import H2 from "../H2";
import H3 from "../H3";
import H4 from "../H4";
import H5 from "../H5";
import H6 from "../H6";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('test header', () => {
  expect(H1.of('wangzhen')).toBe('# wangzhen')
  expect(H2.of('wangzhen')).toBe('## wangzhen')
  expect(H3.of('wangzhen')).toBe('### wangzhen')
  expect(H4.of('wangzhen')).toBe('#### wangzhen')
  expect(H5.of('wangzhen')).toBe('##### wangzhen')
  expect(H6.of('wangzhen')).toBe('###### wangzhen')
})












