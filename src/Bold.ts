import MarkDownElement from "./MarkDownElement";
import * as _ from 'lodash'

/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

export default class Bold implements MarkDownElement {

  static of(value: string) {
    return new Bold(value)
  }

  private value: string

  constructor(value: string) {
    this.value = value;
  }

  generate(): string {
    if (_.isNil(this.value)) return ''
    return `**${this.value}**`
  }
}
