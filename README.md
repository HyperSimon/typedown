# typedown
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
Bold.of('wangzhen') // output -> **wangzhen**
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


### Del

```typescript
Del.of('wangzhen') // output => ~~wangzhen~~

```


# 当前进度

|标签|对应元素|是否支持|
|:--:|:--:|:--:|
|table|Table|Y|
|Bold|Bold|Y|
|Emphasize|Emphasize|Y|
| Strike-through |Del|Y|
|Inline Code|Inline|Y|
|Image|Image|Y|
|List|working on|Y|
|Blockquote|working on|Y|
|H1|H1|Y|
|H2|H2|Y|
|H3|H3|Y|
|H4|H4|Y|
|H5|H5|Y|
|H6|H6|Y|



# Excemple