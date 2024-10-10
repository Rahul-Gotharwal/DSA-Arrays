function maxProfit(prices) {
    let firstBuy = -Infinity, firstSell = 0;
    let secondBuy = -Infinity, secondSell = 0;

    for (let price of prices) {
        firstBuy = Math.max(firstBuy,-price);  // Max profit after first buy
        firstSell = Math.max(firstSell, firstBuy + price);  // Max profit after first sell
        secondBuy = Math.max(secondBuy, firstSell - price);  // Max profit after second buy
        secondSell = Math.max(secondSell, secondBuy + price);  // Max profit after second sell
    }

    return secondSell;
}

// Example usage:
let prices = [3, 3, 5, 0, 0, 3, 1, 4];
console.log(maxProfit(prices));  // Output: 6
/*
To solve the problem of finding the maximum profit with at most two transactions, we can use dynamic programming. The idea is to maintain four variables to track the maximum profit up to the current day with one transaction and two transactions.

Here's how we can break down the solution:

1. **firstBuy**: The maximum profit after the first buy.
2. **firstSell**: The maximum profit after the first sell.
3. **secondBuy**: The maximum profit after the second buy.
4. **secondSell**: The maximum profit after the second sell.

The steps are as follows:
- For each price, update the variables in the order `firstBuy`, `firstSell`, `secondBuy`, and `secondSell` to ensure that each step depends on the previous step's state.
### Explanation

1. **firstBuy**: Keeps track of the maximum profit after the first buy. Initially set to negative infinity to ensure it gets updated on the first iteration.
2. **firstSell**: Keeps track of the maximum profit after the first sell. Initially set to 0 as no profit has been made yet.
3. **secondBuy**: Keeps track of the maximum profit after the second buy. Initially set to negative infinity.
4. **secondSell**: Keeps track of the maximum profit after the second sell. Initially set to 0.

### Dry Run with `prices = [3, 3, 5, 0, 0, 3, 1, 4]`

1. **Initialization**:
   - `firstBuy = -Infinity`, `firstSell = 0`
   - `secondBuy = -Infinity`, `secondSell = 0`

2. **Iteration 1** (`price = 3`):
   - `firstBuy = max(-Infinity, -3) = -3`
   - `firstSell = max(0, -3 + 3) = 0`
   - `secondBuy = max(-Infinity, 0 - 3) = -3`
   - `secondSell = max(0, -3 + 3) = 0`

3. **Iteration 2** (`price = 3`):
   - `firstBuy = max(-3, -3) = -3`
   - `firstSell = max(0, -3 + 3) = 0`
   - `secondBuy = max(-3, 0 - 3) = -3`
   - `secondSell = max(0, -3 + 3) = 0`

4. **Iteration 3** (`price = 5`):
   - `firstBuy = max(-3, -5) = -3`
   - `firstSell = max(0, -3 + 5) = 2`
   - `secondBuy = max(-3, 2 - 5) = -3`
   - `secondSell = max(0, -3 + 5) = 2`

5. **Iteration 4** (`price = 0`):
   - `firstBuy = max(-3, -0) = 0`
   - `firstSell = max(2, 0 + 0) = 2`
   - `secondBuy = max(-3, 2 - 0) = 2`
   - `secondSell = max(2, 2 + 0) = 2`

6. **Iteration 5** (`price = 0`):
   - `firstBuy = max(0, -0) = 0`
   - `firstSell = max(2, 0 + 0) = 2`
   - `secondBuy = max(2, 2 - 0) = 2`
   - `secondSell = max(2, 2 + 0) = 2`

7. **Iteration 6** (`price = 3`):
   - `firstBuy = max(0, -3) = 0`
   - `firstSell = max(2, 0 + 3) = 3`
   - `secondBuy = max(2, 3 - 3) = 2`
   - `secondSell = max(2, 2 + 3) = 5`

8. **Iteration 7** (`price = 1`):
   - `firstBuy = max(0, -1) = 0`
   - `firstSell = max(3, 0 + 1) = 3`
   - `secondBuy = max(2, 3 - 1) = 2`
   - `secondSell = max(5, 2 + 1) = 5`

9. **Iteration 8** (`price = 4`):
   - `firstBuy = max(0, -4) = 0`
   - `firstSell = max(3, 0 + 4) = 4`
   - `secondBuy = max(2, 4 - 4) = 2`
   - `secondSell = max(5, 2 + 4) = 6`

**Final State**:
- `firstBuy = 0`
- `firstSell = 4`
- `secondBuy = 2`
- `secondSell = 6`

The maximum profit is `6`, achieved by buying at day 4 and selling at day 6, and then buying at day 7 and selling at day 8.
*/ 