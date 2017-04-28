import Table, { HeaderStyle } from "../Table";
import H1 from "../H1";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

test('readme', () => {

  H1.of('typedown')


  const table2 = new Table()

  table2.addHeader('标签', HeaderStyle.LEFT)
  table2.addHeader('对应元素', HeaderStyle.CENTER)
  table2.addHeader('是否支持', HeaderStyle.RIGHT)

  table2.addRow('table', 'Table', 'Y')
  table2.addRow('Bold', 'Bold', 'Y')
  table2.addRow('Emphasize', 'Emphasize', 'Y')
  table2.addRow(' Strike-through ', 'Del', 'Y')
  table2.addRow('Inline Code', 'Inline', 'Y')
  table2.addRow('Image', 'Image', 'Y')
  table2.addRow('List', 'working on', 'Y')
  table2.addRow('Blockquote', 'working on', 'Y')
  table2.addRow('H1', 'H1', 'Y')
  table2.addRow('H2', 'H2', 'Y')
  table2.addRow('H3', 'H3', 'Y')
  table2.addRow('H4', 'H4', 'Y')
  table2.addRow('H5', 'H5', 'Y')
  table2.addRow('H6', 'H6', 'Y')
  expect(table2.generate()).toBe('')

})
