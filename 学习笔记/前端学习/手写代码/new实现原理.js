function objectFactory () {
    let newObject = null;
    let constrcutor = Array.prototype.shift.call(arguments)
    let result = null
    if(typeof constrcutor != 'object') {
        console.error('type error');
        return;
    }
    // 新建一个对象
    newObject = Object.create(constrcutor.prototype)
    // 将this指向这个函数，并执行其中的代码
    result = constrcutor.apply(newObject, arguments)
    let flag = result && (typeof result == 'object' || typeof result == 'function')
    return flag ? result : newObject
}