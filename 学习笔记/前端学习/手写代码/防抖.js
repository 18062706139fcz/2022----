/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-07-21 11:43:42
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-18 10:25:11
 * @FilePath: /2022----/学习笔记/前端学习/手写代码/防抖.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 例子：图标跟随鼠标移动

// 触发高频时间后 n 秒函数只会执行一次
// 如果n秒内高频事件再次被触发，则重新计算时间

function debounce(fn, wait) {
    let timer;
    return function () {
        let _this = this;
        let args = arguments;
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            fn.apply(_this, args);
        },wait)
    }
}
// Use
window.onresize = debounce(function() {
    console.log("resize");
},500)





function debounce(fn, wait) {
    let timer = null;
    return function() {
        let _this = this;
        let args = arguments;
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(_this, args)
        }, wait)
    }
}



// 节流
function tor(fn, wait) {
    let timer = null;
    return function() {
        let _this = this;
        let args = arguments;
        if(!timer) {
            timer = setTimeout(() => {
                timer = null;
                fn.apply(_this, args)
            }, wait)
        }
    }
}
// 防抖
function debounce(fn, wait) {
    let timer = null;
    return function() {
        let _this = this;
        let args = arguments;
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(_this, args)
        }, wait)
    }
}