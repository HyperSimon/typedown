# markdown-js
代码生成Markdown文本 - The code generates markdown text


## Example


### Table

```typescript
const table = new Table()

table.addHeader('name', HeaderStyle.LEFT)
table.addHeader('age', HeaderStyle.CENTER)
table.addHeader('school', HeaderStyle.RIGHT)

table.addRow('wangzhen', '21', '郑州市回民中学')
table.addRow('liupei', '20', '郑州市第四中学')
table.generate() // 
```
output:

|name|age|school|
|:--|:--:|--:|
|wangzhen|21|郑州市回民中学|
|liupei|20|郑州市第四中学|
