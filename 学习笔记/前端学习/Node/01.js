/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-10 15:55:55
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-10 15:59:39
 * @FilePath: /2022----/学习笔记/前端学习/Node/01.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 前置要的
const fs = require('fs')
// fs.readFile(path[, option], callback)
// fs.writeFile(path[, option], data, callback)
// 处理数据
let dataStr
const oldArr = dataStr.split(' ')
const newArr = []
oldArr.forEach((item) => {
    newArr.push(item.replcae('=','：'))
})
return newArr.join('\r\n')