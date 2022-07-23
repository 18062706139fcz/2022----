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

/**
 * 手写 new 操作符
 * （1）创建一个空对象
 * （2）设置原型，将对象的原型设置为函数的prototype
 * （3）让函数的this指向这个对象，并且执行函数的代码
 * （4）判断函数的返回值类型，如果是值类型，
 *      返回创建的对象，如果是引用类型，就返回这个引用类型的对象
*/

function objectFactory () {
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    // 判断参数是否是一个函数
    if(typeof constructor !== "function") {
        console.error('type error');
        return;
    }
    // 新建一个对象，对象的类型为构造函数的 prototype 对象
    newObject = Object.create(constructor.prototype);
    // 将 this 指向这个新建对象，并执行函数
    result = constructor.apply(newObject, arguments)
    // 判断返回对象
    let flag = result && (typeof result == 'object' || typeof result == 'function') 
    // 判断返回结果
    return flag ? result : newObject;
}

objectFactory(构造函数, 初始化参数);

// 622202 3202056937385
/**
 * 手写 promise
*/

const PENDING = "pengding";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
    // 保存初始状态
    var self = this;
    // 初始化状态
    this.state = PNEDING;
    // 用于保存 revolve or rejected 传入的值
    this.value = null;
    // 用于保存 resolve 的回调函数
    this.resolvedCallbacks = []
    // 用于保存 reject 的回调函数
    this.rejectedCallbacks = []
    // 状态转变为 resolved 方法
    function resolve(value) {
        // 判断传入的元素是否是 Promise 值，如果是
        // 则状态改变必须等待前一个状态改变后再进行改变
        if(value instanceof MyPromise) {
            return value.then(resolve, reject);
        }

        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            // 只有状态为 pending 的时候才能转变
            if (self.state === PENDING) {
                // 改变状态
                self.state = RESOLVED;

                // 设置传入的值
                self.value = value;

                // 执行回调函数
                self.resolvedCallbacks.forEach(calllback => {
                    calllback(value);
                });
            }
        }, 0);
    }
    function reject(value) {
        setTimeout(() => {
            // 只有状态为 pending 的时候才能转变
            if(self.state === PENDING) {
                // 改变状态
                self.state = REJECTED;

                // 设置传入的值
                self.value = value;

                // 执行回调函数
                self.rejectedCallbacks.forEach(calllback => {
                    calllback(value);
                });

            }
        });
    }
    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

MyPromise.prototype.then = function(onResolved, onRejected) {
    // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
    onResolved = typeof onResolved == 'function' ? onResolved : function(value){return value;}
    onRejected = typeof onRejected == 'function' ? onRejected : function(value){return value;}
    if(this.state === PENDING) {
        this.resolvedCallbacks.push(onResolved);
        this.rejectedCallbacks.push(onRejected);
    }
    // 如果状态已经凝固了，则直接执行对应状态的函数
    if(this.state === RESOLVED) {
        onResolved(this.value)
    }

    if(this.state === REJECTED) {
        onRejected(this.value)
    }
}