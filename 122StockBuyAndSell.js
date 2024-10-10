var maxProfit = function(prices) {
    let Profit = 0 ;
    for(let i = 0 ; i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            Profit+=(prices[i]-prices[i-1])
        }
    }
    return Profit
};
let prices = [5,2,7,3,6,1,2,4]
console.log(maxProfit(prices))