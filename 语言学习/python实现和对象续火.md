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