// 1. 首先创建一个新对象。
// 2. 设置原型，将对象的原型「__proto__」设置为函数的prototype对象。
// 3. 让函数的this指向这个对象，执行构造函数的代码（为这个对象添加新属性）
// 4. 判断函数的返回值类型，如果是值类型，返回创建的对象；如果是引用类型，就返回引用类型的对象。

function objectFactory() {
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    if(typeof constructor !== 'function') {
        console.log("Type error");
        return;
    }
    // 新建一个空对象，对象的原型为构造函数的 prototype 对象。
    newObject = Object.create(constructor.prototype);
    // 将this指向新建对象，并执行函数。
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    let flag = result && (typeof result == 'function' || typeof result == 'object')
    // 判断返回结果
    return flag ? result : newObject;
}

objectFactory()