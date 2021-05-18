// 上滑下滑
export const scroll = option => {
  const {
    scrollCallback,
    topCallback,
    bottomCallback,
    bottomDistance,
    topDistance
  } = option;
  let {
    scrollTopPrev = 0,
    clientHeightPrev = 0,
    bottomTriggered = false,
    topTriggered = false
  } = {};
  return function handScroll(e) {
    const scrollTop = e.target.scrollTop;
    const clientHeight = e.target.clientHeight;
    const diff = scrollTop + clientHeight - (scrollTopPrev + clientHeightPrev);
    scrollTopPrev = scrollTop;
    clientHeightPrev = clientHeight;
    const bottom =
      e.target.scrollHeight -
      e.target.offsetHeight -
      (Number(bottomDistance) || 0);
    const top = Number(topDistance) || 0;
    // diff>0 往下滑动；diff<0往上滑动
    scrollCallback &&
      scrollCallback({ e, scrollTop, diff, bottom: bottom - scrollTop });
    if (diff < 0 && !topTriggered && scrollTop <= top) {
      topTriggered = true;
      // 到达顶部
      topCallback && topCallback({ e, scrollTop });
    } else if (diff > 0 && scrollTop > top) {
      topTriggered = false;
    }
    if (diff > 0 && !bottomTriggered && scrollTop >= bottom) {
      bottomTriggered = true;
      bottomCallback && bottomCallback({ e, scrollTop });
      // 到达底部
    } else if (diff < 0 && scrollTop >= bottom) {
      bottomTriggered = false;
    } else if (diff > 0 && scrollTop < bottom) {
      bottomTriggered = false;
    }
  };
};