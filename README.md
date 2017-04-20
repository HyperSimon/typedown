# markdown-js
代码生成Markdown文本 - The code generates markdown text


## 使用


### Table

```typescript
const table = new Table()

table.addHeader('name', HeaderStyle.LEFT)
table.addHeader('age', HeaderStyle.CENTER)
table.addHeader('school', HeaderStyle.RIGHT)

table.addRow('wangzhen', '21', '郑州市回民中学')
table.addRow('liupei', '20', '郑州市第四中学')
table.generate() 

// output 
/**
|name|age|school|
|:--|:--:|--:|
|wangzhen|21|郑州市回民中学|
|liupei|20|郑州市第四中学|
*/
```
渲染

|name|age|school|
|:--|:--:|--:|
|wangzhen|21|郑州市回民中学|
|liupei|20|郑州市第四中学|


### Bold
```typescript
Bold.of('wangzhen').generate() // output -> **wangzhen**
```
渲染
> **wangzhen**


# 当前进度

| 标签 | 是否支持 | 
|:--:|:--:|
| table | Y |
| Bold |Y|
| Emphasize |N|
| Strike-through	 |N|
| Inline Code	 |N|
| Image |N|
| List |N|
| Blockquote |N|
| H1 |N|
| H2 |N|
| H3 |N|
| H4 |N|
| H5 |N|
| H6 |N|
