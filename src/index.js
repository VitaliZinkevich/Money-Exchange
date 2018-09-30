// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var totalval = {};

    
    if (currency>10000)    {
      return {error :"You are rich, my friend! We don't have so much coins for exchange"};
}
    if (currency<=0)  {
      /*NOTHING */
        return totalval;
    }

    if (currency>50) {
       totalval.H = parseInt(currency/50);
        currency = currency-totalval.H*50;
    }

    if (currency>25)  {
      totalval.Q = parseInt(currency/25);
        currency = currency-totalval.Q*25;
    }

   if  (currency>10) {
      totalval.D = parseInt(currency/10);
        currency = currency-totalval.D*10;
    }

   if (currency>5) {
      totalval.N = parseInt(currency/5);
        currency = currency-totalval.N*5;
    }

   if (currency>1)  {
      totalval.P = parseInt(currency/1);
        currency = currency-totalval.P*1;
    }

    return totalval;

  }

  /* 
  Money Exchange
Description

Write a method makeExchange that will determine the minimum number of coins needed to make change for a given amount in American currency. Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the strings H, Q, D, N and P.

The argument passed in will be an integer representing the value in cents. The return value should be an object with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the object.
IMPORTANT NOTES

If the argument passed in is 0 or less, then the method should return an empty object. If the currency that you would like to exchange more than 10000 please return next object:

   {error: "You are rich, my friend! We don't have so much coins for exchange"}

For example:

  makeExchange(0)  --> {}
  makeExchange(1)  --> {"P":1}
  makeExchange(43) --> {"Q":1,"D":1,"N":1,"P":3}
  makeExchange(91) --> {"H":1,"Q":1,"D":1,"N":1,"P":1}
  makeExchange(9999999)  --> {error: "You are rich, my friend! We don't have so much coins for exchange"} 
  */