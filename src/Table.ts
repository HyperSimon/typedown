/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

export default class Table {
  private headers: Array<Header> = []
  private rows: Array<Row> = []

  /**
   * 向文本当中添加一行
   * @param value
   */
  public addRow(...value: string[]) {
    const temp: Array<string> = []
    value.forEach(v => temp.push(v))
    this.rows.push(new Row(temp))
  }

  /**
   * 添加一个表头
   * @param value
   */
  public addHeader(value: string, style?: HeaderStyle) {
    this.headers.push(new Header(style ? style : HeaderStyle.LEFT, value))
  }

  public generate() {
    const header = this.generateHeader()
    const rows = this.generateRow()
    return header + rows
  }

  private generateHeader(): string {
    let headerLine = ''
    let dividerLine = ''
    this.headers
      .forEach((header, index) => {
        headerLine += `${index === 0 ? '|' : ''}${this.toGrid(header.content)}`
        dividerLine += `${index === 0 ? '|' : ''}${this.toGrid(this.styleLine(header.style))}`
      })

    return (headerLine && headerLine.length > 0 ? headerLine + '\n' : '' ) +
      (dividerLine && dividerLine.length > 0 ? dividerLine + '\n' : '' )
  }

  public generateRow(): string {
    console.info(this.rows)
    return this.rows.map(row => {
      return row.values
          .map((value, index) => `${index === 0 ? '|' : ''}${this.toGrid(value)}`)
          .join('') + '\n'
    }).join('')
  }

  private toGrid(value: string): string {
    return `${value + '|'}`
  }


  private styleLine(header: HeaderStyle) {
    switch (header) {
      case HeaderStyle.LEFT:
        return ':--'

      case HeaderStyle.CENTER:
        return ':--:'

      case HeaderStyle.RIGHT:
        return '--:'
    }
  }
}

export const enum HeaderStyle{
  LEFT,
  CENTER,
  RIGHT
}

class Header {
  private _style: HeaderStyle
  private _content: string

  constructor(style: HeaderStyle, content: string) {
    this._style = style;
    this._content = content;
  }

  get style(): HeaderStyle {
    return this._style;
  }

  set style(value: HeaderStyle) {
    this._style = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }
}


class Row {
  private _values: Array<string>

  constructor(values: Array<string>) {
    this._values = values;
  }

  get values(): Array<string> {
    return this._values;
  }
}


