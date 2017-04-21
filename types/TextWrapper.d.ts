import MarkDownElement from "./MarkDownElement";
import Pair from "./kit/Pair";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */
declare abstract class TextWrapper implements MarkDownElement {
    protected value: string;
    constructor(value: string);
    generate(): string;
    abstract ensureWrapper(): Pair<string, string>;
}
export default TextWrapper;
