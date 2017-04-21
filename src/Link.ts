import MarkDownElement from "./MarkDownElement";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

export default class Link implements MarkDownElement {

  private desc: string
  private url: string

  constructor(desc: string, url: string) {
    this.desc = desc
    this.url = url
  }

  generate(): string {
    return `[${this.desc ? this.desc : ''}](${this.url ? this.url : ''})`
  }

  static of(desc: string, url: string): string {
    return new Link(desc, url).generate()
  }
}
