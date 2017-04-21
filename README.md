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


### Bold
```typescript
Bold.of('wangzhen').generate() // output -> **wangzhen**
```

### Emphasize 

```typescript
Emphasize.of('wangzhen') // output -> *wangzhen*
```

### Header

```typescript

H1.of('wangzhen') // output => # wangzhen
H2.of('wangzhen') // output => ## wangzhen
H3.of('wangzhen') // output => ### wangzhen
H4.of('wangzhen') // output => #### wangzhen
H5.of('wangzhen') // output => ##### wangzhen
H6.of('wangzhen') // output => ###### wangzhen

```

[wangzhen](https://cdn.sspai.com/attachment/origin/2014/04/15/69493.jpg)

# 当前进度

| 标签 | 是否支持 |
|:--:|:--:|
| table | Y |
| Bold |Y|
| Emphasize |Y|
| Strike-through	 |N|
| Inline Code	 |Y|
| Image |N|
| List |Y|
| Blockquote |N|
| H1 |Y|
| H2 |Y|
| H3 |Y|
| H4 |Y|
| H5 |Y|
| H6 |Y|
