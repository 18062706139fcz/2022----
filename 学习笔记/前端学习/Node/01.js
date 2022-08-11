/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-10 15:55:55
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-10 21:31:15
 * @FilePath: /2022----/学习笔记/前端学习/Node/01.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 前置要的
const fs = require('fs')
const path = require('path')
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

/**
 * 可以通过对文件 右键 + 选中路径得到绝对路径
 * 问题：1. 移植性很差，不利于维护 
 * __dirname 代表当前文件所处路径
 * 
 * path.join() ../会回退
 * /a/b/c/index.html
 * path.basename()  index.html
 * path.extname()        .html
*/

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(path.join(__dirname, '../CSS/实现一个宽高自适应的正方形/01.html'))
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
        if(err) return console.log('失败了'+err.message)
        console.log('存放路径成功了！')
    })
}

function resolveJS(htmlStr) {
    const r1 = regScript.exec(path.join(__dirname, '../素材/index.html'))
    const newJS = r1[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
        if(err) return console.log('出现错误'+err.message)
        console.log('成功写入')
    })
}

function resolveHTML(htmlStr) {
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
        .replace(regScript, '<script src="./index.js"></script>')
    fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
        if(err) return console.log('出现错误' + err.message)
        console.log('成功写入')
    })
}

const http = require('http')

const server = http.createServer()

server.on('request', (req) => {
    // req是请求对象
    // req.url是请求的地址
    // req.method是客户端的method请求类型
    const method = req.method
    const url = req.url
})