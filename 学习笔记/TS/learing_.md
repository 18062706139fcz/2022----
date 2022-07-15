### 字面量类型

+ 比原始值更加精确

```ts
const str: "linbudu" = "linbudu";
```

### 联合类型

+ 代表了一组类型的可用集合，只要最终赋值的类型属于联合类型的成员之一，就可以认为符合这个联合类型。

```ts
interface Tmp {
    mixed: true | string | 599 | (() => {}) | (1 | 2)
}
```

> 1. 对于联合类型中的函数类型，需要使用括号()包裹起来
> 2. 函数类型并不存在字面量类型，因此这里的 (() => {}) 就是一个合法的函数类型
> 3. 你可以在联合类型中进一步嵌套联合类型，但这些嵌套的联合类型最终都会被展平到第一级中

```ts
interface Tmp {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}

declare var tmp: Tmp;
```

+ 如果你使用了延迟求值，那么没有使用延迟求值的枚举成员必须放在使用常量枚举值声明的成员之后（如上例），或者放在第一位：

```ts
/*
放在常量枚举值声明的成员之后
*/
const returnNum = () => 100 + 499;

enum Items {
    Foo = returnNum(),
    Bar = 599,
    Baz
}
```

```ts
/*
或者放在第一位
*/
const returnNum = () => 100 + 499;

enum Items {
    Baz
    Foo = returnNum(),
    Bar = 599,
}
```

+ 枚举和对象的重要差异在于，对象是单向映射的，我们只能从键映射到键值。而枚举是双向映射的，即你可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员：

```ts
enum Items {
    Foo,
    Bar,
    Baz
}

const fooValue = Items.Foo; // 0
const fooKey = Items[0] // "Foo"
```

+ 但需要注意的是，仅有值为数字的枚举成员才能够进行这样的双向枚举，字符串枚举成员仍然只会进行单次映射：

+ 常量枚举和普通枚举的差异主要在访问性与编译产物。对于常量枚举，你只能通过枚举成员访问枚举值（而不能通过值访问成员）。

```ts
const enum Items {
    Foo,
    Baz,
    Bar
}

const fooValue = Items.Foo; // 0
// x const idx = Items[0]
```

