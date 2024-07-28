// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  // write your code here
let money = prompt ('How much money do you have to spend?')
let price = prompt ('How much is the item normally?')
let discount = prompt ('And what is the discount percentage?')

money = Number(money)
price = Number(price)
discount = Number(discount)

let finPrice = (price/100) * (100 - discount)


if (money >= finPrice){
  alert ('You have enough money.')
} else {
  alert("You don't have enough money. You have $" + money + " to spend, but even with " + discount +"% off, $" + price + " only comes down to $" + finPrice + ".")
}

}
