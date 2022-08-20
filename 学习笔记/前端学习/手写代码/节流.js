/*
 * @Author: 18062706139 2279549769@qq.com
 * @Date: 2022-07-21 11:50:53
 * @LastEditors: 18062706139 2279549769@qq.com
 * @LastEditTime: 2022-08-19 02:31:54
 * @FilePath: /2022----/学习笔记/前端学习/手写代码/节流.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 一个按钮，在一定时间内
// 只会产生一次有效点击

function thorttle(fn, wait) {
    let timer;
    return function() {
        let _this = this;
        let args = arguments;

        if(!timer) {
            timer = setTimeout(function() {
                timer = null;
                fn.apply(_this, args);
            }, wait)
        }
    }
}

function throttle(fn, wait) {
    let timer;
    return function() {
        let _this = this;
        let args = arguments;
        if(!timer){
            timer = setTimeout(() => {
                timer = null;
                fn.apply(_this, args)
            }, wait)
        }
    }
}
// 避免登录按钮多次点击的重复提交
function throttle(fn, wait) {
    let timer;
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


function thr(fn, wait) {
    let tiemr = null;
    return function() {
        let _this = this;
        let args = arguments;
        if(!tiemr) {
            tiemr = setTimeout(() => {
                tiemr = null;
                fn.apply(_this, args)
            })
        }
    }
}

function th(fn, wait) {
    let timer = null;
    return function() {
        let _this = this;
        let args = arguments;
        if(!timer) {
            timer = setTimeout(function(){
                timer = null;
                fn.apply(_this, args)
            }, wait)
        }
    }
}