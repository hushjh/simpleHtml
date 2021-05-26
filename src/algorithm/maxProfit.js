function maxProfit(prices) {
  let maxPf = 0
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) { // 明天开始上涨
      maxPf += prices[i + 1] - prices[i];
    }
  }
  return maxPf
}