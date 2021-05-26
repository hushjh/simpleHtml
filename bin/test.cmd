:: @echo off
@set name=wsz
@echo %name%
:: dir bin
 @echo off
:: 下面k 值是16个空格
@rem hi hello
rem world
set k =                
echo %k%水光潋滟晴放好,
echo %k%山色空蒙雨一起,
echo %k%欲把西湖比西子,
echo %k%淡妆浓抹总相宜.
:: pause

if exist "bin/test.cmd" (
  echo "exist"
) else (
  echo "not exist"
)
echo %0
echo %~d0
echo %~dp0
setlocal
set /a age = 3*12
echo %age%
set /P tip=请输入姓名
echo %tip%
set name=%name:s=angs%
echo %name%