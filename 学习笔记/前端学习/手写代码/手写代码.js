/**
 * JavaScript基础
 * */ 

// 1. 手写 Object.create
/**
 * Object.create()方法创建一个新对象，
 * 使用现有的对象来提供新创建的
 * 对象的__proto__。
 * 手写思路：将传入的对象作为原型
*/
function create(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}

// 手写 instanceof 方法
/**
 * instanceof 运算符
 * 用于判断构造函数的prototype
 * 是否出现在原型链中的任何位置
 * 
 * 实现步骤：
 * （1）首先获取类型的原型
 * （2）然后获取对象的原型
 * （3）然后一直循环判断对象的原型是否等于类型的原型，
 *     直到对象原型为null，因为原型链最终为null
 * 
 * left 是对象的原型
 * right 是类型的原型
*/

function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left),
        prototype = right.prototype;
    while(true) {
        if(!proto) return false
        if(proto === prototype) return true
        // 继续往原型链上面遍历
        proto = Object.getPrototypeOf(proto)
    }
}