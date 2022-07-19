/**
 * 单例模式
 * 实现方式一般是
 * 先判断实例是否存在，如果存在就直接返回，
 * 否则就创建了再返回
 * 单例模式的好处就是避免了重复实例化带来的内存开销
*/

// 实例
function Singleton() {
    this.data = "Singleton";
}

Singleton.getInstance = (function() {
    var instance;
    return function() {
        if(instance) {
            return instance;
        } else {
            instance = new Singleton();
            return instance;
        }
    }
})();


/**
 * 私有属性
*/

function getGeneratorFunc () {
    var _name = "John";
    var _age = 22;

    return function() {
        return {
            getName: function() {return _name},
            getAge: function() {return _age},
        };
    };
}

/**
 * 可以通过
 * var obj = getGeneratorFunc()
 * obj.getName() | obj.getAge()
 * 来获取年龄和名字，但是你无法去修改
*/