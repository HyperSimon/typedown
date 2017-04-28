import MarkDownElement from "./MarkDownElement";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

export default class Quote implements MarkDownElement {
  value: string = null

  constructor(value: string) {
    this.value = value
  }

  generate(): string {
    return `>${this.value}`;
  }

  static of(value: string): string {
    return new Quote(value).generate()
  }
}
