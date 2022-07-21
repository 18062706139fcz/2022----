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
    let timer;
    return function() {
        let _this = this;
        let args = arguments;
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            fn.apply(_this, args);
        },wait)
    }
}






























