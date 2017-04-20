import MarkDownElement from "./MarkDownElement";
import * as _ from 'lodash'
import TextWrapper from "./TextWrapper";
import Pair from "./kit/Pair";

/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */

export default class Bold extends TextWrapper {
  ensureWrapper(): Pair<string, string> {
    return new Pair('**', '**');
  }

  static of(value: string) {
    return new Bold(value).generate()
  }
}
