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