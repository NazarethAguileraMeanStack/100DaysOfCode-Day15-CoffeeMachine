const prompt = require("prompt-sync")({ sigint: true });
const formatCurrency = require("./formatCurrency");

function generateReport(resourcesObject) {
    console.log("\n");
    console.log(`Water: ${resourcesObject.Water}ml`);
    console.log(`Coffee: ${resourcesObject.Coffee}g`);
    console.log(`Milk: ${resourcesObject.Milk}ml`);
    console.log(`Money: $${formatCurrency(resourcesObject.Money)}`);
}

exports.generateReport = generateReport;