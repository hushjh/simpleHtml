function getCount {
  suffixStr=""
  case $1 in
    "hotfix")
      suffixStr="release"
      ;;
    "release")
    suffixStr="release"
    ;;
    "test")
      suffixStr="utest"
      ;;
    "dev")
      suffixStr="dev"
      ;;
    esac
  today=$(date '+%Y%m%d')
  result=$(git tag -l | grep -o "TRAVEL\.${today}\.[0-9]\+${suffixStr}")
  if [[ $result ]]; then
    tagArr=(${result//\\s/ })
    maxNum=0
    for((i=0;i<${#tagArr[*]};i++));
    do
      array=(${tagArr[$i]//./ })
      len=${#array[*]}
      index=$[$len - 1]
      count=${array[$index]//$suffixStr/ }
      if [[ $[$count - $maxNum] -gt 0 ]]; then
        maxNum=$count 
      fi
    done
    countAdd=$[$maxNum + 1]
    echo $countAdd
  else
    echo 1
  fi
}
envirnoment="test"
count=$(getCount $envirnoment)
echo "count: $count"
sleep 5s
exit 0