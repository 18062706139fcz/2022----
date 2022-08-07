/*
 * @Descripttion:
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-07 17:42:40
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-08-07 17:44:54
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