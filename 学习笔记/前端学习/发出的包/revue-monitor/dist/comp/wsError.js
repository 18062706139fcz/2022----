/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-08-07 20:35:56
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-07 21:24:58
 * @FilePath: /2022----/学习笔记/前端学习/发出的包/revue-monitor/dist/comp/wsError.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const xhr___ = new XMLHttpRequest()
const monitor = () => {
  WebSocket.prototype.flag_ = false
  WebSocket.prototype.oldsend = WebSocket.prototype.send
  WebSocket.prototype.send = function (data) {
    WebSocket.prototype.flag_ = false
    WebSocket.prototype.startTime = new Date()
    WebSocket.prototype.oldsend.call(this, data)
  }
  WebSocket.prototype.oldclose = WebSocket.prototype.close
  WebSocket.prototype.close = function (err) {
    if (!WebSocket.prototype.flag_) {
      xhr___.open(
        'POST',
        'https://koa-monitorrver-koa-dxsjkmwnnu.cn-hangzhou.fcapp.run/api/mp/plugin/postSocket'
      )
      xhr___.setRequestHeader('Content-Type', 'application/json')
      xhr___.send(
        JSON.stringify({
          title: document.title,
          url: location.href,
          timeStamp: new Date().getTime(),
          userAgent: navigator.userAgent,
          kind: 'stability',
          type: 'WebSocket',
          eventType: 'WebSocketClose',
          pathName: location.pathname,
          duration: new Date() - WebSocket.prototype.startTime,
          statusCode: 1011,
          method: 'WebSocket',
        })
      )
      WebSocket.prototype.oldclose.call(this)
    }
    WebSocket.prototype.flag_ = true
  }
}

export default monitor