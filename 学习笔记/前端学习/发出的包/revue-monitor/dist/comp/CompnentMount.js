/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-07 12:44:20
 * @LastEditors: Wang Dejiang(aei)
 * @LastEditTime: 2022-08-07 16:53:58
 */
import http from '../utils/request'

let mixin = {
  beforeCreate() {
    let shouldcompute = this.$options.computeTime
    if (!shouldcompute) return
    this.createTime = new Date().getTime()
  },
  mounted() {
    let shouldcompute = this.$options.computeTime
    if (!shouldcompute) return
    this.endTime = new Date().getTime()
    let mountTime = this.endTime - this.createTime
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
