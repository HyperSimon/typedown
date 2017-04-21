/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

import TextWrapper from "./TextWrapper";
import Pair from "./kit/Pair";

export default class Inline extends TextWrapper {

  ensureWrapper(): Pair<string, string> {
    return new Pair('`', '`');
  }

  static of(value: string) {
    return new Inline(value).generate()
  }
}
