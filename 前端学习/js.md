## this指向案例
```js
function a(){
	function b(){
		console.log(this);
		function c() {
			"use strict";
			console.log(this);
		}
		c();
	}
	b();
}
a();
//输出为 Winodw和undefined;
//执行顺序是首先调用a()方法，然后嵌套着调用b()方法，此时console.log(this)为全局--> Window
//调用b()方法的时候又会调用c()方法，在function c()中使用了严格模式，在严格模式中默认this为undefined
```

```js
var name = '小白';

function special() {
	console.log('姓名：'+this.name);
}

var girl = {
	name:'zzk',
	detail: function () {
		console.log('姓名：'+this.name);
	},
	woman: {
		name:'cxz',
		detail: function(){
			console.log('姓名：'+this.name);
		},
	},
	special:special,
}

girl.detail();
//ans:zzk
//这是对象.方法的情况
//this指向这个对象
girl.woman.detail();
//ans:cxz
//看后面两个，还是对象.方法的情况，this指向这个对象
girl.special();
//ans:zzk
//这是对象.方法的情况
//this指向这个对象
```
