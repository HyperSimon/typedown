import TextWrapper from "./TextWrapper";
import Pair from "./kit/Pair";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */
export default class Bold extends TextWrapper {
    ensureWrapper(): Pair<string, string>;
    static of(value: string): string;
}
