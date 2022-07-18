### map和Object的区别

1. 有无意外的键
2. 是不是可迭代的，Object不可以迭代
3. size
4. 键的顺序
5. 键的类型
6. 性能

### JSON

+ JSON是一种基于文本的轻量级的数据交换方式，他可以被任何的编程语言读取和作为数据格式来传递

```js
json.stringify()
```

1. JSON是前后端交互的一种方式
2. JSON比JS中对对象的要求更严格
3. JSON.stringify()
4. JSON.parse

### JavaScript的原生方法

+ 数组和字符串的转换方法：toString(),toLocalString(),join(),其中join()方法可以指定转换为字符串时的分隔符。

+ 数组尾部操作的方法pop()和push()方法，push方法可以传递多个参数

+ 数组首部操作的方法shift()和unshift()重排序的方法reverse()和sort(),sort()方法可以传入一个函数俩进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置「从小到大」

+ 数组链接的方法concat()，返回拼接好的数组，不影响原数组。

+ 数组截取办法slice()，用于截取数组中的一部分返回，

+ 数组插入方法splice()｜
+ 影响远数组查找特定索引的方法,indexOf()和lastIndexOf()
+ 迭代方法every(),some(),filter(),map()和forEach()方法
+ 数组归并方法 reduce(),reduceRight()


### JavaScript中的类数组对象

> 一个拥有length属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。常见的类数组对象有`arguments`和`DOM`方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有length属性值，代表可接收的参数个数。

#### 转换方法

1. 通过call调用数组的slice方法来实现转换

```js
Array.prototype.slice.call(arrayLike);
```

2. 通过call调用数组的splice方法来实现转换

```js
Array.prototype.splice.call(arrayLike, 0);
```

3. 通过apply调用数组的concat方法来实现转换
```js
Array.prototype.concat.apply([], arrayLike)
```

4. 通过Array.from方法来实现转化
```js
Array.from(arraylike);
```

### JavaScript脚本延迟加载的方式有哪些

+ defer 属性：给JS脚本添加defer属性，这个属性会让脚本与文档的解析同步进行，然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。多个设置了defer属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。

+ async 属性：给js脚本添加async属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，但是当脚本加载完成后立即执行js脚本，这个时候如果文档没有解析完成同样会阻塞。多个async属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。

+ 动态创建DOM方式：动态创建DOM标签的方式，可以对文档的加载时间进行监听，当问到加载完成后再动态的创建script标签来引入js脚本文件。

+ 让JS最后加载：将js脚本放在文档的地步，来使js脚本尽可能的在最后来加载执行。

+ 使用setTimeout延迟方式：设置一个定时器来延迟加载js脚本文件

### 常见的正则表达式

```js
// 匹配 16 进制的颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;

// 匹配日期 如 yyyy-mm-dd格式
var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

// 匹配 qq 号 介于4-10之间
var regex = /^[1-9][0-9]{4,10}$/g;

// 手机号码正则 十一位
var regex = /^1[345678]\d{9}$/g;

// 用户名正则
var regex = /^[a-zA-z\$][a-zA-Z0-9_\$]{4,16}$/
```