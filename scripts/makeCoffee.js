const formatCurrency = require("./formatCurrency");

function makeCoffee(action, resources, wallet) {
    let enoughMoney = false;
    let refund = wallet.calcTotal();
    console.log(`Total Change: $${formatCurrency(wallet.calcTotal())}`);
    if (action === "espresso" && wallet.calcTotal() > 1.50) {
        enoughMoney = true;
        refund = wallet.calcTotal() - 1.50;
        resources.makeEspresso();
    } else if (action === "latte" && wallet.calcTotal() > 2.50) {
        enoughMoney = true;
        refund = wallet.calcTotal() - 2.50;
        resources.makeLatte();
    } else if (action === "cappuccino" && wallet.calcTotal() > 3.00) {
        enoughMoney = true;
        refund = wallet.calcTotal() - 3.00;
        resources.makeCappuccino();
    } else {
        console.log("Sorry that's not enough money.");
        console.log(`Money refunded: $${formatCurrency(refund)}`);
    }
    if (enoughMoney) {
        console.log(`Here is your ${action}. Enjoy!`);
        console.log(`Don't forget your change! $${formatCurrency(refund)}`);
    }
}

module.exports = makeCoffee;