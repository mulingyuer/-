最近看群友搞了个灯笼效果，加上接近新年，所以我也来搞一个，在原来的基础上，我改用一个js文件搞定，省的总是粘贴html，css，太麻烦了。

## 效果图

[![s1pwzq.jpg](https://s3.ax1x.com/2021/01/10/s1pwzq.jpg)](https://imgchr.com/i/s1pwzq)

## 文件说明

1. 源码文件夹里是源码，有修改需求可以改动这个文件
2. es5里面是已经babel转换好的文件，其中有一个压缩和未压缩的，看自己需要引入任意一个文件即可。


## 使用说明

我们需要在</body>的前面，添加这段代码

```html
<script id="denglong" type="text/javascript" src="https://cdn.jsdelivr.net/gh/mulingyuer/web-denglong/es5%E7%89%88%E6%9C%AC/denglong-min.js"></script>
```

src的地址，可以是本地的，或者是这个cdn地址。

### 属性

script 有一些属性设置

| 属性名      | 值（类型）    |  说明 |
| :---------: | :-------- | :----- |
| id | “denglong”  | string，必须为这个值，元素的id |
| left-text |  string    | 默认：新年；两个字，不要多，不要少，非必填 |
| right-text  | string  |  默认：快乐；两个字，不要多，不要少，非必填|
| mobile | string    | 是一个px的值，例：450px;表示在450px及以下分辨率，灯笼将不显示，非必填 |
| append |  string  | id选择器，表示插入的位置，默认是body尾部插入，如果要自定义插入位置，可以设置这个属性，例：#footer；非必填    |

完整例子：

```html
<script id="denglong" type="text/javascript" src="https://cdn.jsdelivr.net/gh/mulingyuer/web-denglong/es5%E7%89%88%E6%9C%AC/denglong-min.js" left-text="新年" right-text="快乐" mobile="450px" append="#footer"></script>
```


祝你使用愉快！