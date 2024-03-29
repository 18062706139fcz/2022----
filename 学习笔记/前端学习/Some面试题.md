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

## 异步编程

1. 异步编程的实现方式

+ 回调函数

> 使用回调函数的方式有一个缺点是，多个回调函数的时候会造成回调函数地狱，上下两层的回调函数间代码耦合度太高，不利于代码的维护。

+ Promise

> 使用Promise的方式可以将嵌套的回调函数作为链式调用，但是使用这种方法，有时会造成多个then的链式调用，可能会造成代码的语义不够明确。

+ generator

> 它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部还可以将执行权转移回来，当遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕时再将执行权转移回来。因此在generator内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式需要考虑的问题是何时将函数的控制权转移回来，因此需要有一个自动执行generator的机制，比如说co模块等方式来实现generator的自动执行。

### use strict是什么意思？使用它的区别是什么

`use strict`是一种 ES5 添加的运行模式，这种模式使得JavaScript在更严格的条件下运行。设立严格模式的目的如下。

+ 消除 Js 语法的不合理、不严谨之处，减少怪异行为；

+ 消除代码运行的不安全之处，保证代码运行的安全；

+ 提高编译器效率，增加运行速度；

+ 为未来新版本的 Js 做好铺垫。

#### 区别

+ 禁止使用with语句

+ 禁止 this 关键字指向全局对象

+ 对象不能有重名的属性。

### 如何判断一个对象是否属于某个类

+ 第一种方式，使用instanceof运算符来判断构造函数的prototype属性是否出现在对象的原型链中的任何位置。

+ 第二种方式，通过对象的constructor属性来判断，对象的constructor属性指向该对象的构建函数，但是这样的方式不是很安全，因为constructor可以被改写。

+ 第三种方式，如果需要判断的是某个内置的引用类型的话，可以使用Object.prototype.toString()方法来打印对象的[[Class]]属性来进行判断。


### 强类型语言与弱类型语言的区别

+ 强类型语言：强类型语言也称为强类型定义语言，是一种总是潜质类型定义的语言，要求变量的使用要养个符合定义，所有变量都必须先定义后使用。Java和C++等语言都是强制类型定义的，也就是说，一旦一个变量被指定了某个数据类型，如果不经过强制转换，那么它就永远是这个数据结构了。例如你有一个整数，如果不显示的进行转换，你就不能将其视为一个字符串。

+ 弱类型语言：弱类型语言也称为弱类型定义语言，与强类型定义相反，JS语言就属于弱类型语言。简单理解就是一种变量类型可以被忽略的语言。比如JS是弱类型定义的，在JS中就可以将字符串‘12’和整数3得到字符串‘123’，在相加的时候会进行强制类型转换。

### 解释性语言和编译型语言的区别

+ 解释性语言：使用专门的解释器对源程序逐行解释称特定平台的机器码并立即执行。是代码在执行时才被解释器一行行动态翻译和执行，而不是在执行之前就完成翻译。解释型语言不需要事先编译，其直接将源代码解释称机器码并立即执行，所以只要某一平台提供了相应的解释器即可运该程序。

1. 解释型语言每次运行都需要将源代码解释成机器码并执行，效率较低；

2. 只要平台提供相应的解释器，就可以运行源代码，所以方便源程序移植；

3. JavaScript和Python属于解释型语言。

+ 编译型语言：使用专门的编译器，针对特定的平台，将高级语言源代码一次性的编译成可被该平台硬件执行的机器码，并包装成该平台所能识别的可执行性程序的格式。在编译型语言写的程序执行之前，需要一个专门的编译过程，把源代码编译成机器语言的文件，如exe格式的文件，以后要再运行时，直接使用编译结果即可，如直接运行exe文件。因为只需编译一次，以后运行时不需要编译，所以编译型语言执行效率高。

1. 一次性的编译成平台相关的机器语言文件，运行时脱离开发环境，运行效率高；

2. 与特定平台有关，一般无法移植到其他平台；

3. C、C++属于编译型语言。

+ 两者的主要区别在于：编译型语言是编译后即可在该平台运行，后者是在运行期间才编译。所以前者运行速度快，后者跨平台性好。

### for...in 和 for...of的区别

for...of 是ES6新增的遍历方式，运行遍历一个含有iterator接口的数据结构（数组、对象）并且返回各项的值，和ES3中的for...in的区别如下

+ for..of遍历的对象的值，for...in获取的是对象的键名

+ for...in会遍历对象的整个原型链，性能非常差，不推荐使用，而for...of只遍历当前对象，不会遍历原型链；

+ 对于数组的遍历，for...in会返回数组中所有可枚举属性（包括原型链上可枚举的属性），for...of只返回数组的下标对应的属性值；

> 总结：for...in循环主要是为了遍历对象而生，不适用于遍历数组；for...of循环可以用来遍历数组、类数组对象，字符串，Set，Map以及Genrator对象。

### 如何使用for...of遍历对象

for...of是作为ES6新增的遍历方式，允许遍历一个含有iterator接口的数据结构（数组、对象等）并且返回各项的值，普通的对象用for...of遍历是会报错的。

+ 如果遍历是类数组对象，用Array.from()转化成数组即可

```js
var obj = {
    0: 'one',
    1: 'two',
    length: 2
};
obj = Array.from(obj);
for(var k of obj) {
    console.log(k);
}
```

+ 如果不是类数组对象，就给对象添加一个[Symbol.iterator]属性，并指向一个迭代器即可。

```js
// Way One
var obj = {
    a:1,
    b:2,
    c:3
};
obj[Symbol.iterator] = function() {
    var keys = Object.keys(this);
    var count = 0;
    return {
        next() {
            if(count < keys.length) {
                return {
                    value: obj[keys[count++]],
                    done:false
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        }
    }
}
```

```js
// Way Two
var obj = {
    a:1,
    b:2,
    c:3
};
obj[Symbol.iterator] = function *() {
    var keys = Object.keys(obj);
    for(var k of keys) {
        yield [k, obj[k]]
    }
};

```

### ajax，axios，fetch的区别

+ AJAX 是指一种创建交互网页应用的网页开发技术。它是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在后台与服务器进行少量数据交换，Ajax可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不适用Ajax）如果需要更新内容，必须重新加载整个网页页面。

缺点：

1. 本身是针对MVC编程，不符合前端MVVM的浪潮
2. 基于原生XHR开发，XHR本身的架构不清晰
3. 不符合关注分离的原则
4. 配置和调用方式非常混乱，而且基于事件的异步模型不友好


+ Axios 是一种基于Promise封装的HTTP客户端，其特点如下：

1. 浏览器端发起XMLHttpRequests请求
2. node端发起http请求
3. 支持Promise API
4. 监听请求和返回
5. 对请求和返回进行转化
6. 取消请求
7. 自动转化json数据
8. 客户端支持抵御XSRF攻击


### 防抖与节流

+ 防抖：防止抖动，单位时间内事件触发会被重置，避免事件被误伤触发多次。代码实现重在清零`clearTimeout`。
防抖可以比作等电梯，只要有一个人进来，就要再等一会儿。业务场景有避免登陆按钮多次点击的重复提交。

+ 节流：控制流量，单位时间内事件只能触发一次，与服务器端的限流类似，代码实现重在开锁关锁。节流可以比作过红绿灯，每等一个红灯时间就可以过一批。


### this指向问题

+ 函数调用模式

> 当一个函数不是一个对象的属性时，作为函数来调用，this指向全局对象。

+ 方法调用模式

> 如果一个函数作为一个对象的方法来调用时，this指向这个对象。

+ 构造器调用模式

> 如果一个函数用new调用时，函数执行前会新创建一个对象，this指向这个新创建的对象。

+ apply | call | bind

> apply方法接收两个参数：一个是this绑定的对象，一个是参数数组
> call方法接收的参数，第一个是this绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用call()方法时，传递给函数的参数必须逐个列举出来。bind方法是通过传入一个对象，返回一个this绑定了传入对象的新函数。这个函数的this指向除了使用new时会被改变，其他情况下都不会改变，

### difference between call and apply

+ apply接受两个参数，第一个参数指定了函数体内this对象的指向，第二个 参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply方法把这个集合中的元素作为参数传递给被调用的函数。

+ call传入的参数数量不固定，根apply相同的是，第一个参数也是代表函数体内的this指向，从第二个参数往后，每个参数被依次传入函数。


### 实现call、apply、bind函数

#### 实现call

+ 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用call等方式调用的情况
+ 判断上下文对象是否存在，如果不存在，设置为window
+ 判断传入的参数，截取第一个参数后的所有参数。
+ 将函数作为上下文对象中的一个属性，
+ 使用上下文对象来调用这个方法，并保存返回结果。
+ 删除刚才新增的属性。
+ 返回结果

```js
function debounce(fn, wait) {
    let tiemr;
    return function () {
        let _this = this;
        let args = arguments;
        if(timer) {
            clearTimeout(timer);
        }
        setTimeout(() => {
            fn.apply(_this, args);
        }, wait);
    }
}
```

```js
Function.prototype.myCall = function(context) {
    if(typeof this != 'function') {
        console.error("type error");
    }
    let args = [...arguments].slice(1),
        result = null;
    context = context || window;
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}
```

### eventLoop

#### 前置概念

+ heap（堆）：对象被分配在堆中，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。
+ stack（栈）：函数调用组成了一个由若干帧组成的栈。
+ WebAPIS:囊括Web强大脚本能力的每个API参考资料，包括DOM，所有相关的APIs及可以用来构建Web的相关接口。
+ 队列：一个JavaScript运行时包含了一个待处理消息的消息队列。每一个消息都关联着一个用以处理这个消息的回调函数。


+ 因为JS是单线程的，单线程就意味着，所以任务需要排队，前一个任务结束，才会执行后一个任务。
+ 为了解决排除等待问题，JS的任务分为同步任务和异步任务。所有的同步任务都会在主线程上执行。异步任务（如果是WebAPI则会进入WebAPI，例如ajax，setTimeout）不进入主线程，而是进入另一个Callback Queue。
+ 同步任务顺序执行，只有执行栈中的同步任务执行完了，系统才会读取任务队列中可以执行的异步任务，才会把此异步任务从事件队列中放入执行栈执行，如此循环，知道把所有任务执行完毕。


### forEach和map方法有什么区别

+ forEach() 会改变数组
+ map() 不会改变数组

### 原型和原型链

+ 什么是原型

> 我们新创建的对象中有有一个属性叫 prototype ,其实它是一个指针，
> 指向构造函数，可以访问到构造函数中的属性和方法。

+ 什么是原型链

> 当我们需要找到一个属性时，如果在当前对象内部没有这个属性，
> 那么我们就可以继续在他的原型上找，然后不断的去找，直到找到，
> 一般原型最后会遍历到Object.prototype，这也是新建对象能够使用toString()的原因

+ JavaScript中对象并没有一个属于自己的原型脚本，是通过引用来传递的。
+ 当修改原型时，与之相关的对象也会继承这一改变。

```js
// 原型｜修改｜重写
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {}
var p = new Person('Hello')
// p.__proto__ === Person.prototype true
// p.__proto__ === p.constructor.prototype true

// __proto__的值就等于父类的prototype,
```


### HTML行内标签

span|a|input|img|picture|label|textarea|select

### 如何实现一个元素的垂直居中

1. flex
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

```css
.container {
    display: grid;
    justify-content: center;
    align-items: center;
}
```

```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
```

### 如何实现一个bind

+ bind也是改变this指向的，返回的是一个函数，必须要调用之后，才会执行。

```js
Function.prototype.fakeBind = function (obj, ...args) {
    return (...rest) => this.call(obj, ...args, ...rest);
}
```

### 隐藏CSS的几种方法

1. display
2. opcity
3. font-size
4. position
5. visibility
6. content-visibility


### 盒模型

1. box-sizing: border-box|content-box

### ES6中比较新的
+ Array.inclues

+++++++++++++++++++++++++++++++++
+ ?? ==> 只判断undefined和null ?.
+++++++++++++++++++++++++++++++++

+ Object.keys() | Object.getOwnPropertyNames()

+ Object.defineProperty

+ 跨域 + options请求「非简单请求」

+ vue-loader
    + AST 「抽象语法树」

+ nextTick()

+ vue响应式原理

+ event loop JS是单线程的 ==> 异步会放到任务队列里去，同步任务执行完了才会执行异步任务

### v-if v-show v-html原理

+ v-if会调用addIfCondition方法，生成vnode的时候会忽略对应节点，render的时候就不会渲染
+ v-show会生成vnode，render的时候也会渲染成真实节点，只是在render过程中会在节点的属性中修改show属性值，也就是常说的display；
+ v-html会先移除节点下的所有节点，调用html，通过addProp添加innerHTML属性，归根结底还是设置innerHTML为v-html的值

### v-model是如何实现的，语法糖实际是什么？

1. 作用在表单元素上
```ts
<input v-mode="sth" />
// 等同于
<input 
    v-bind:value="message"
    v-on:input="message=$event.target.value"
/>
```

2. 作用在组件上
```ts
<aa-input v-model="aa"></aa-input>
// 等价于
<aa-input v-bind:value="aa" v-on:input="aa=$event.target.valu"></aa-input>
// 子组件
<aa-input v-bind:value="aa" v-on:input="onmessage"></aa-input>
props: {value:aa,}
methods: {
    onmessage(e) {
        $emit('input', e.target.value)
    }
}
```

+ DNS域名解析过程：

1. 检查浏览器缓存
2. 检查操作系统缓存，常见的如hosts文件
3. 检查路由器缓存
4. 如果前几步都没找到，会想ISP（网络服务供应商）的LDNS服务器查询
5. 如果LDNS服务器没找到，会向根域名服务器请求解析

+ 什么是JSONP

> 浏览器通过<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用，这种请求数据的方式叫做JSONP
> 1. JSONP不属于真正的ajax请求
> 2. 仅支持GET

```js
app.get('/api/jsonp', (req, res) => {
    const funcName = req.query.callback;
    const data = {name: 'zs', age: 22}
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    res.send(scriptStr)
})
```

### Vue相关面试题

#### 父子组件传值

1. 父组件通过props向子组件传递数据，子组件通过`$emit`向父组件通信。
2. eventBus事件总线（$emit/$on）
3. ref/$refs 在父组件中可以通过this.$refs.name.方法或属性拿到这些属性或方法。
4. $parent,$children分别访问父组件中的实例以及子组件中的实例，但是，$children并不能保证顺序，并且访问的数据也不是响应式的。

#### 生命周期

+ created ：实例创建完成，实例上配置的options包括data、computed、watch、methods都已经配置完成了。但是渲染节点还未挂载DOM，所以不能访问到$el属性。

+ mounted：在el被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html 页面中。此过程中进行ajax交互。

### 手写防抖节流
```js
function thor(fn, wait) {
    let tiemr = null;
    return function() {
        let _this = this;
        let args = arguments;
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            fn.apply(_this, args)
        }, wait)
    }
}
function thor(fn, wait) {
    let tiemr = null;
    return function() {
        let _this = this;
        let args = arguments;
        if(!timer) {
            tiemr = setTimeout(function() {
                tiemr = null;
                fn.apply(_this, args)
            }, wait)
        }
    }
}
```
### 手写bind，apply，call

```js
// call
Function.prototype.call = function (context, ...args) {
    context = context || window;

    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;

    context[fnSymbol](...args);
    delete context[fnSymbol];
} 


Function.prototype.apply = function (context, argsArr) {
    context = context || window;

    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;

    context[fnSymbol](...argsArr);
    delete context[fnSymbol];
}
```

```js
Function.prototype.call = function(context, argsArr) {
    context = context || window;

    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;

    context[fnSymbol](...argsArr);
    delete context[fnSymbol];
}
```


```js
Function.prototyoe.apply = function(context, argsArr) {
    context = context || window;

    const fnSymbol = Symbol("fn");
    context[fnSymbol] = this;

    context[fnSymbol](...argsArr);
    delete context[fnSymbol]
}
```

```js
// 1. A B 
// D
// C E D A B
setTimeout(()=>{
    console.log('A');
},0);
var obj={
    func:function () {
        setTimeout(function () {
            console.log('B')
        },0);
        return new Promise(function (resolve) {
            console.log('C');
            resolve();
        })
    }
};
obj.func().then(function () {
    console.log('D')
});
console.log('E');
```