const prompt = require("prompt-sync")({ sigint: true });
const Resources = require("./classes/Resources");
const createWallet = require("./scripts/createWallet");
const checkResources = require("./scripts/checkSufficientResources");
const makeCoffee = require("./scripts/makeCoffee");

function main() {
    let action = "";
    let resources = new Resources();

    while (action !== "off") {
        console.clear();
        console.log("\n");
        action = prompt("What would you like (espresso/latte/cappuccino)?:");
        let enoughResourcesToMakeDrink = checkResources(action, resources);
        if (enoughResourcesToMakeDrink) {
            let wallet = createWallet();
            makeCoffee(action, resources, wallet);
        }
        console.log("\n");
        prompt("press any key to continue...");
    }
}

main();