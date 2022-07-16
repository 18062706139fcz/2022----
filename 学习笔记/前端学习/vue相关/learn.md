### event

+ 原生DOM可以绑定系统事件
+ 自定义组件「不是原生的DOM节点，不能够绑定原生事件（like DOM）」｜但是通过加`.native`绑定

> `@click.native,可以把自定义事件变为原生的DOM事件`<br>
> 当前原生的DOM click事件，其实是给DOM组件的根节点绑定了点击事件，实现了事件的委派。

+ 原生DOM绑定自定义事件是毫无意义的，因为无法触发`$emit`函数。

### v-model

+ v-model它是Vue框架中指令，它主要结合表单元素一起使用（文本框，复选，单选等等）它主要的作用是收集表单数据

+ v-model实现原理

> Vue2中可以通过`input`与`value`实现`v-model`

```html
<input type="text" :value="msg" @input="msg = $event.target.value"/>
```

+ 使用v-model实现组件通信

```children
<input value="value" @input="$emit('input',$event.target.value)" />
```

```parent
<!-- 
    customSize是子组件
    value是props
    input是自定义事件
 -->
<customSize :value="msg" @input="msg = $event" />
<customSize v-model="msg" />
```

### $attrs && $listener

+ `$attrs`属于组件的一个属性，可以获取父组件传递过来的props数据

+ `v-bind`可以接收所有的属性，不能够使用"`:`"

+ `$listeners`也是组件实例的一个属性，能够拿到父组件给子组件绑定的事件

+ `v-on`可以接受所有的事件，不能使用"`@`“

### $children && $parent

+ `this.$refs`可以获取到真实的DOM节点，可以操作子组件的数据。

+ 组件实例自己拥有一个可以拿到所有子组件的值`$children`

+ 子组件获取父组件的值，可以通过`$parent`来获取这个组件的父组件，从而操作父组件

### miXin 

+ 混入的使用

### 插槽

+ 可以实现父子组件通信

> 具名插槽<br>
> 作用域插槽：子组件的数据来自于父组件，子组件决定不了自身的结构和外观<br>
> 默认插槽