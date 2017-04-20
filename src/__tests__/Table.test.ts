import Table, { HeaderStyle } from "../Table";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('generate header', () => {
  const table = new Table()
  table.addHeader('name', HeaderStyle.LEFT)
  table.addHeader('age', HeaderStyle.CENTER)
  table.addHeader('school', HeaderStyle.RIGHT)

  const exception =
    `|name|age|school|
|:--|:--:|--:|
`

  expect(table.generate()).toBe(exception)
})

test('generate row', () => {
  const table = new Table()

  table.addRow('wangzhen', '21', '郑州市回民中学')
  table.addRow('liupei', '20', '郑州市第四中学')

  const exception =
    `|wangzhen|21|郑州市回民中学|
|liupei|20|郑州市第四中学|`

  expect(table.generate()).toBe(exception)
})

test('generate table', () => {
  const table = new Table()

  table.addHeader('name', HeaderStyle.LEFT)
  table.addHeader('age', HeaderStyle.CENTER)
  table.addHeader('school', HeaderStyle.RIGHT)

  table.addRow('wangzhen', '21', '郑州市回民中学')
  table.addRow('liupei', '20', '郑州市第四中学')

  const exception =
    `|name|age|school|
|:--|:--:|--:|
|wangzhen|21|郑州市回民中学|
|liupei|20|郑州市第四中学|`

  expect(table.generate()).toBe(exception)
})

