/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-07 12:44:20
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-10 15:08:29
 */
import http from '../utils/request'

let mixin = {
  beforeCreate() {
    // 开启与否｜开发者自己添加
    let shouldcompute = this.$options.computeTime
    if (!shouldcompute) return
    this.createTime = new Date().getTime()
  },
  mounted() {
    // ？
    let shouldcompute = this.$options.computeTime
    if (!shouldcompute) return
    this.endTime = new Date().getTime()
    let mountTime = this.endTime - this.createTime
    // 通过节点拿到了node
    let componentNameArr = this.$vnode.tag.split('-')
    let componentName = componentNameArr[componentNameArr.length - 1]
    http.post('plugin/mount', {
      kind: 'stability',
      type: 'ComponentMountTime',
      componentName,
      mountTime,
      timeStamp: Date.now(),
    })
  },
}

export default {
  install(Vue, options) {
    const oldRevue = Vue.prototype.$revue
    Vue.prototype.$revue = Object.assign({}, oldRevue, {
      compnentMount: mixin
    })
    // Vue.mixin(mixin)
  },
  immediate: {
    install(Vue, options) {
      Vue.mixin(mixin)
    },
  },
  m: mixin
}
