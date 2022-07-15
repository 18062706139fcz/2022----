### 实现一个框高自适应的正方形

+ 使用`vw`来实现

```css
.squre {
    width: 10%;
    height: 10vw;
    background: gold;
}
```

+ 使用`.squre`来实现

> 利用元素的`margin`/`padding`百分比是相对父元素width的性质来实现的

```css
.squre {
    width: 20%;
    height: 0;
    padding-top: 20%;
    background: tomato;
}
```

+ 利用子元素的`margin-top`的值来实现

```css
.squre {
    width: 30%;
    overflow: hidden;
    background: yellow;
}

.squre::after {
    content: '';
    display: block;
    margin-top: 100%;
}
```