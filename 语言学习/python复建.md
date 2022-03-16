```python
python实现和对象续火
#!/usr/bin/env python3

#
#需要有什么？
#两个QQ账号密码
#几个下好可以用的库
#操作方法：
#控制鼠标-->然后写登陆函数-->两种情况-->自己的/别人的-->将手动化成了程序run

import time #用于延时（库）

import os #用于开关程序的库

import pyautogui as pg #控制鼠标移动的库

import pyperclip as pp #复制粘贴的库

import win32com.client  #用于检查程序是否已经存在的库
# 判断程序是否在后台运行



def proc_exist(process_name):
	"""
	判断程序是否运行
	"""
	is_exist = 0
	application1 = win32com.client.GetObject('winmgmts:')
	processCodeCov = application1.ExecQuery('select * from Win32_Process where name=\"%s\"' % (process_name))
	if len(processCodeCov) > 0:
		is_exist = 1
	return is_exist
	

def main(flag):
	"""
	打开qq
	"""
	os.startfile(r'D:\qq\Bin\QQ.exe') #修改成QQ的路径，进行打开
	
	pg.moveTo(1310, 819, duration=0.5) #这里是账号输入的坐标
	
	pg.click() #单机输入框
	
	if flag == 0:
		path = 'D:\desktop\lsd.txt'
		text_sending(text2, text3, path, flag)
	elif flag == 1:
		path = 'D:\desktop\ldy.txt'
		text_sending(text3, text2, path, flag)
		

def text_sending(a, b, jubu_path, flag):
	"""
	实现发送消息
	"""
	pg.typewrite(a) #输入qq账号
	
	pg.moveTo(1311, 863, duration=0.5)
	pg.click()
	pg.keyDown('backspace')
	pg.keyUp('backspace')
	with open(jubu_path, 'r') as a_txt:
		password = a_txt.read()
		a_txt.close()
	pg.typewrite(password, 0.1)
	pg.keyDown('enter')
	pg.keyUp('enter')
	time.sleep(5)
	pg.typewrite(b)
	time.sleep(5)  # 这里要等待qq搜索
	
	pg.keyDown('enter')
	pg.keyUp('enter')
	for i in range(10):
		pg.typewrite('nihao woshi zidong xuhuo ')
		pg.keyDown('enter')
		pg.keyUp('enter')
	os.system('taskkill /f /t /im qq.exe')
	
pg.PAUSE = 1 #设置时间间隔
flag = 0 # 判断程序的进程
text2 = '1936588711'
text3 = '737630259'
while flag < 2:
	if proc_exist('qq.exe'):  # 判断qq是否运行 如果运行 需要退出
		
		os.system('taskkill /f /t /im qq.exe')
	main(flag)
	flag = flag + 1
```

## python中的math的常见函数

![image](https://img-blog.csdnimg.cn/2019011919390711.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDA3NjM4NA==,size_16,color_FFFFFF,t_70)

> math.float()，转化成小于等于这个数的最大整数「用的少」，因为用int就可以

```python
引入的三种方法：
import math
math.sqrt()

import matplotlib as plt
plt.plot()

from math import sin,pi
sin()
cos()
```

## python中的列表
```python
Python中列表可以存储任何类型的数据，同一个列表中的__数据类型还可以不同__；
列表是序列结构，可以进行序列结构的基本操作：索引、切片、加、乘、检查成员。
1.mkdir 
l = [1024,0.5,'python']
2.cd 
l = [1024,0.5,'python']
print('l[0] --> ',l[0])
print('l[1:] --> ',l[1:])

列表中的函数
1.append()「向列表中添加新元素」
l = [1024, 0.5, 'Python']
# 修改列表中第二个元素
l[1] = 5
# 向列表中添加新元素
l.append('Hello')
print('l[1] -->', l[1])
print('l -->', l)
result：
l[1] --> 5
l --> [1024, 5, 'Python', 'Hello']

2.del()「删除列表中元素」
l = [1024,0.5,'python']
#删除第二个元素
del l[1]
print('l --> ',l)
#输出结果
l -->  [1024, 'Python']

3.常用方法：
1.count()
统计列表中某个元素出现的次数
l = ['a','b','v','c','b']
print('l.count(b) --> ',l.count('b'))
#输出结果
l.count(b) -->  2

2.index()
查找某个元素在列表中首次出现的位置（即索引）
l = ['a','b','v','c','b']
print("l.index('b') --> ",l.index('b'))
#输出
l.index('b') -->  1
「只找第一个哦」

3.remove（）
l = ['a','b','v','c','b']
l.remove('b')
print('l --> ',l)
#输出
l -->  ['a', 'v', 'c', 'b']「只有第一个删除」

4.sort()
l = ['a','b','v','c','b']
l.sort()
print('l --> ',l)
#输出
l -->  ['a', 'b', 'b', 'c', 'v']

5.copy()
复制列表
l = ['a','b','v','c','b']
lc = l.copy()
print('lc --> ',lc)
#输出
lc -->  ['a', 'b', 'v', 'c', 'b']
```

## Python中的元组
```python
元组（tuple）与列表类似，但元组是不可变的，可简单将其看作是不可变的列表，元组常用于保存不可修改的内容。
1.mkdir
t = (1024, 0.5, 'Python')
print('t[0] -->', t[0])
print('t[1:] -->', t[1:])
#输出结果：
t[0] --> 1024
t[1:] --> (0.5, 'Python')

2.修改「元组中元素不能被修改，我们要用重新赋值的方式操作」
t = (1024, 0.5, 'Python')
t = (1024, 0.5, 'Python', 'Hello')
print('t -->', t)
#输出结果：
t --> (1024, 0.5, 'Python', 'Hello')

3.删除「元组中的元素不能被删除，我们只能删除整个元组」
t = (1024, 0.5, 'Python')
del t
print('t --> ',t)
#输出结果
NameError: name 't' is not defined

常用方法 len()
1.len
t = (1024, 0.5, 'Python')
lens = len(t)
print('lens --> ',lens)
#输出结果
lens -->  3

2.max()和min()
t = ('d', 'b', 'a', 'f', 'd')
print('max(t) -->', max(t))
print('min(t) -->', min(t))
输出结果
max(t) --> f
min(t) --> a

3.tuple()「将列表转换为元组」
t = ['d', 'b', 'a', 'f', 'd']
l = tuple(t)
print('l --> ',l)
#输出结果
l -->  ('d', 'b', 'a', 'f', 'd')
```

## Python画个正方形
```python
import turtle as t

t.fd(100)
t.left(90)
t.fd(100)
t.left(90)
t.fd(100)
t.left(90)
t.fd(100)
```
