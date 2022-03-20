[两数之和](https://leetcode-cn.com/problems/two-sum/submissions/)

1.暴力做法
```JavaScript
var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
    return [];
};
```

2.用Hash来维护

```JavaScript
var twoSum = function(nums, target) {
    let box = {};
    for(let i = 0;i < nums.length; i++)
    {
        if( box[ target - nums[i] ] >= 0){
             return [box[target-nums[i]],i];
        }
        else {
            box[nums[i]] = i;
        }
    }
};
```

3.利用数据结构Map
```JavaScript
var twoSum = function(nums, target) {
    let myMap = new Map();
    for(let i=0;i<nums.length;i++)
    {
        if(myMap.get(target-nums[i])>=0){
            return [i,myMap.get(target-nums[i])];
        }else{
            myMap.set(nums[i],i);
        }
    }
};
```

## 笔记，Map数据结构
> What's map?<br>
> Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。<br>
> attention:需要构造函数
```JavaScript
//example:
let myMap = new Map();

let keyObj = {};
let keyFunc = function() {};
let keyString = 'a string';

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

myMap.size; // 3

// 读取值
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get(keyObj);       // "和键keyObj关联的值"
myMap.get(keyFunc);      // "和键keyFunc关联的值"

myMap.get('a string');   // "和键'a string'关联的值"
                         // 因为keyString === 'a string'
myMap.get({});           // undefined, 因为keyObj !== {}
myMap.get(function() {}); // undefined, 因为keyFunc !== function () {}
```
