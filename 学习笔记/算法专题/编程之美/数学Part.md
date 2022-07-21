### Q1 操作系统什么时候闲下来

+ 这些程序在等待用户的输入，或者在等待某些事件的发生，或者主动进入休眠状态。

### 如何判断一个数的二进制中1的个数

```c
// Way1
// 如果它为奇，除一次消掉了。
// 偶数又是一次｜但是不算｜只算奇数
int Count(BYTE v)
{
    int num = 0;
    while(v) {
        if(v % 2 == 1) {
            num ++;
        }
        v = v / 2
    }
    return num;
}
```

```c
// Way2 位运算
int Count(BYTE v)
{
    int num = 0;
    while(v) {
        num += v & 0x01;
        v >>= 1;
    }
    return num
}
```


```c
// Way2 Byte
int Count(BYTE v) 
{
    int num = 0;
    while(v) {
        v &= (v-1)
        num ++;
    }
}
```