import MarkDownElement from "./MarkDownElement";
/**
 * Copyright (c) 2017-present, Youchai, Inc.
 * All rights reserved.
 */
export default class Table implements MarkDownElement {
    private headers;
    private rows;
    /**
     * 向文本当中添加一行
     * @param value
     */
    addRow(...value: string[]): void;
    /**
     * 添加一个表头
     * @param value
     */
    addHeader(value: string, style?: HeaderStyle): void;
    generate(): string;
    private generateHeader();
    generateRow(): string;
    private toGrid(value);
    private styleLine(header);
}
export declare const enum HeaderStyle {
    LEFT = 0,
    CENTER = 1,
    RIGHT = 2,
}
