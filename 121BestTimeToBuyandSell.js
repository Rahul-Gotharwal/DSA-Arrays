function maxProfit(arr) {
    let maxPro = 0;
    let minPrice = Infinity;

    for (let i = 0; i < arr.length; i++) {
        // we have to buy the stock at the minimum price
        minPrice = Math.min(minPrice, arr[i]);
        // we sell it at the maximum and we get the max like buy at 1 and sell it at 5 profit is 4
        maxPro = Math.max(maxPro, arr[i] - minPrice);
    }

    return maxPro;
}

// Example usage:
let arr = [7, 1, 5, 3, 6, 4];
let maxPro = maxProfit(arr);
console.log("Max profit is:", maxPro); // Output should be 5
