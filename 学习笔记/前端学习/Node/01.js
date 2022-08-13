/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-10 15:55:55
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-12 10:28:10
 * @FilePath: /2022----/学习笔记/前端学习/Node/01.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 前置要的
// const fs = require('fs')
// const path = require('path')
// fs.readFile(path[, option], callback)
// fs.writeFile(path[, option], data, callback)
// 处理数据
// let dataStr
// const oldArr = dataStr.split(' ')
// const newArr = []
// oldArr.forEach((item) => {
//     newArr.push(item.replcae('=','：'))
// })
// return newArr.join('\r\n')

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

// const regStyle = /<style>[\s\S]*<\/style>/
// const regScript = /<script>[\s\S]*<\/script>/

// function resolveCSS(htmlStr) {
//     const r1 = regStyle.exec(path.join(__dirname, '../CSS/实现一个宽高自适应的正方形/01.html'))
//     const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
//     fs.writeFile(path.join(__dirname, './clock/index.css'), newCSS, function(err) {
//         if(err) return console.log('失败了'+err.message)
//         console.log('存放路径成功了！')
//     })
// }

// function resolveJS(htmlStr) {
//     const r1 = regScript.exec(path.join(__dirname, '../素材/index.html'))
//     const newJS = r1[0].replace('<script>', '').replace('</script>', '')
//     fs.writeFile(path.join(__dirname, './clock/index.js'), newJS, function(err) {
//         if(err) return console.log('出现错误'+err.message)
//         console.log('成功写入')
//     })
// }

// function resolveHTML(htmlStr) {
//     const newHTML = htmlStr
//         .replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
//         .replace(regScript, '<script src="./index.js"></script>')
//     fs.writeFile(path.join(__dirname, './clock/index.html'), newHTML, function(err) {
//         if(err) return console.log('出现错误' + err.message)
//         console.log('成功写入')
//     })
// }

// const http = require('http')

// const server = http.createServer()

// server.on('request', (req, res) => {
//     // req是请求对象
//     // req.url是请求的地址
//     // req.method是客户端的method请求类型
//     const method = req.method
//     const url = req.url
//     // res 是事件响应结果
//     const str = `您的请求地址是${method}, 您的url地址是${url}`
//     res.setHeader('Content-Type', 'text/html; charset=utf-8')
//     res.end(str)// 就是响应然后返回结果，结束进程
// })
// server.listen(80,() => {
//     console.log('您的代码运行在http://127.0.0.1')
// })

// const http = require('http')
// const server = http.createServer()
// server.on('request',(req, res) => {
//     const url = req.url;
//     let content = '<h1>404 Not Found</h1>'
//     if(url === '/' || url === '/index.html') {
//         content = '<h1>First Page</h1>'
//     } else if(url === '/about.html') {
//         content = '<h1>About Page</h1>'
//     }
//     res.setHeader('Content-Type','text/html; charset=utf-8')
//     res.end(content)
// })

// server.listen(80, () => {
//     console.log('您的服务器运行在http://127.0.0.1')
// })

// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer()
// server.on('request', (req, res) => {
//     const url = req.url
//     let fpath = ''
//     if(url === '/') {
//         fpath = path.join(__dirname, './clock/index.html')
//     } else {
//         fpath = path.join(__dirname, './clock', url)
//     }
//     fs.readFile(fpath, 'utf-8', (err, dataStr) => {
//         if(err) return res.end('404 Not Found')
//         res.end(dataStr)
//     })
// })

function padZero(n) {
    // 补0
    return parseInt(n) > 9 ? n : '0' + n
}