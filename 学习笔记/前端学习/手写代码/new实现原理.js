/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-07-18 10:46:31
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-09-03 17:22:34
 * @FilePath: /2022----/学习笔记/前端学习/手写代码/new实现原理.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function objectFactory () {
    let newObject = null;
    let constrcutor = Array.prototype.shift.call(arguments)
    let result = null
    if(typeof constrcutor != 'object') {
        console.error('type error');
        return;
    }
    // 新建一个对象，并将原型指向这个对象
    newObject = Object.create(constrcutor.prototype)
    // 将this指向这个函数，并执行其中的代码
    result = constrcutor.apply(newObject, arguments)
    // 如果是引用数据类型就直接返回，如果是基础数据类型就返回newObject
    let flag = result && (typeof result == 'object' || typeof result == 'function')
    return flag ? result : newObject
}

let newObject = Object.create(constrcutor.prototype)
result = constrcutor.apply(newObject, arguments)


function myNew() {
    // 首先初始化 newObject
    let newObject = null;
    // 初始化 constructor
    let result = null;
    const constructor = Array.prototype.shift.call(arguments)
    if(typeof constructor !== 'object') {
        console.error('type error!')
        return
    }
    // 创建新对象，将原型指过去
    newObject = Object.create(constructor.prototype)
    // this指向变更
    result = constructor.apply(newObject, arguments)
    // result = constructor.apply(newObject, arguments)
    const flag = result && (result === 'function' || result === 'object')
    return flag ? result : newObject
}