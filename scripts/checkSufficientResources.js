const report = require("../scripts/reports");

function checkSufficientResources(action, resourcesObject) {
    if (action === "espresso") {
        return  resourcesObject.enoughResourcesForEspresso();
    } else if (action === "latte") {
        return resourcesObject.enoughResourcesForLatte();
    } else if (action === "cappuccino") {
        return  resourcesObject.enoughResourcesForCappuccino();
    } else if (action === "report") {
        report.generateReport(resourcesObject);
        return false;
    } else if (action === "off") {
        process.exit(0);
    } else {
        console.log("invalid command");
        return false;
    }
}

module.exports = checkSufficientResources;