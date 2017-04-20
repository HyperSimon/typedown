import MarkDownElement from "./MarkDownElement";
import * as _ from "lodash";
import Pair from "./kit/Pair";

/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

abstract class TextWrapper implements MarkDownElement {
  protected value: string

  constructor(value: string) {
    this.value = value;
  }

  public generate(): string {
    if (_.isNil(this.value)) return ''
    const decorator = this.ensureWrapper()
    return `${decorator.key}${this.value}${decorator.value}`
  }

  abstract ensureWrapper(): Pair<string, string>
}

export default TextWrapper
