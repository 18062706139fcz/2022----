// demo1
// 注册一个对象
let eventEmitter = {};

// 缓存列表，存放event 及 fn
eventEmitter.list = {};

// 订阅
eventEmitter.on = function(event, fn) {
    let _this = this;
    if(_this.list[event] == undefined) {
        _this.list[event] = []
    }
    _this.list[event].push(fn);
}

// 发布
eventEmitter.emit = function() {
    let _this = this;
    // 第一个参数是event，直接用数组的shift方法弹出
    let event = [].shift.call(arguments),
        fns = [..._this.list[event]];
    // 缓存列表里无fn，就返回false
    if(!fn || fn.length === 0) {
        return false;
    }
    // 遍历 event 值对应的存储列表，依次执行fn;
    fns.forEach((item) => {
        fn.apply(_this, arguments);
    })
    return _this;
}