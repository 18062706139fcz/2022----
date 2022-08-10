/*
 * @Descripttion: 
 * @Author: Wang Dejiang(aei)
 * @Date: 2022-08-07 12:43:36
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-10 15:12:42
 */
// fetch的一个特性 ｜ 只有网络断掉才出现错误 ｜ 所以我需要使用response来进行分析
import onload from '../utils/onload'
import http from '../utils/request'

let timing = () => {
  let FMP, LCP
  // 内置
  if (PerformanceObserver) {
    // 增加一个性能条目的观察者
    new PerformanceObserver((entryList, observer) => {
      let perfEntries = entryList.getEntries()
      FMP = perfEntries[0] //startTime 2000以后
      observer.disconnect() //不再观察了
    }).observe({ entryTypes: ['element'] }) //观察页面中的意义的元素

    new PerformanceObserver((entryList, observer) => {
      let perfEntries = entryList.getEntries()
      LCP = perfEntries[0]
      observer.disconnect() //不再观察了
    }).observe({ entryTypes: ['largest-contentful-paint'] }) //观察页面中的意义的元素
  }

  //用户的第一次交互 点击页面
  onload(function () {
    setTimeout(() => {
      const { fetchStart, loadEventStart } = performance.timing
      // performance 本身存在？
      let FP = performance.getEntriesByName('first-paint')[0]
      let FCP = performance.getEntriesByName('first-contentful-paint')[0]
      let loadTime = loadEventStart - fetchStart
      //开始发送性能指标
      // FP(First Paint): 页面在导航后首次呈现出不同于导航前内容的时间点。
      console.log('FP', FP)
      // FCP(First Contentful Paint): 首次绘制任何文本，图像，非空白canvas或SVG的时间点。
      console.log('FCP', FCP)
      // FMP(First Meaningful Paint): 首次绘制页面“主要内容”的时间点。
      console.log('FMP', FMP)
      // LCP(Largest Contentful Paint): 可视区域“内容”最大的可见元素开始出现在页面上的时间点。
      console.log('LCP', LCP)
      http.post('/plugin/paint', {
        kind: 'experience', //用户体验指标
        type: 'paint', //统计每个阶段的时间
        firstPaint: FP.startTime,
        firstContentfulPaint: FCP.startTime,
        // 加个问号是为啥？？？
        firstMeaningfulPaint: FMP?.startTime || -1,
        largestContentfulPaint: LCP?.startTime || -1,
        timeStamp: Date.now(),
      })
      http.post('/plugin/load', {
        kind: 'experience', //用户体验指标
        type: 'load', //统计每个阶段的时间
        loadTime,
        timeStamp: Date.now(),
      })
    }, 3000)
  })
}

export default {
  install(Vue, options) {
    const oldRevue = Vue.prototype.$revue
    Vue.prototype.$revue = Object.assign({}, oldRevue, {
      timing
    })
  },
  immediate: {
    install(Vue, options) {
      timing(Vue, options)
      const oldRevue = Vue.prototype.$revue
      Vue.prototype.$revue = Object.assign({}, oldRevue, {
        timing
      })
    },
  },
  t: timing
}
