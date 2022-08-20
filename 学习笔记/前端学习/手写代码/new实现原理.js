/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-07-18 10:46:31
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-19 02:33:23
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
    // 新建一个对象
    newObject = Object.create(constrcutor.prototype)
    // 将this指向这个函数，并执行其中的代码
    result = constrcutor.apply(newObject, arguments)
    let flag = result && (typeof result == 'object' || typeof result == 'function')
    return flag ? result : newObject
}

let newObject = Object.create(constrcutor.prototype)
result = constrcutor.apply(newObject, arguments)

