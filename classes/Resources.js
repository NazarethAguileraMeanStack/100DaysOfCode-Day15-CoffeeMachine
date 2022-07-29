class Resources {
    constructor() {
        this._water = 3000;
        this._coffee = 2500;
        this._milk = 3000;
        this._money = 0;
    }

    set Water(val) {
        this._water = val;
    }

    get Water() {
        return this._water;
    }

    set Coffee(val) {
        this._coffee = val;
    }

    get Coffee() {
        return this._coffee;
    }

    set Milk(val) {
        this._milk = val;
    }

    get Milk() {
        return this._milk;
    }

    set Money(val) {
        this._money = val;
    }

    get Money() {
        return this._money;
    }

    insufficientMessage(resource) {
        console.log(`Sorry not enough ${resource}`);
    }

    enoughWater(num) {
        if (this.Water >= num) return true;
        else {
            this.insufficientMessage("water");
            return false;
        }
    }

    enoughCoffee(num) {
        if (this.Coffee >= num) return true;
        else {
            this.insufficientMessage("coffee");
            return false;
        }
    }

    enoughMilk(num) {
        if (this.Milk >= num) return true;
        else {
            this.insufficientMessage("milk");
            return false;
        }
    }

    enoughResourcesForEspresso() {
        if (this.enoughWater(50) && this.enoughCoffee(18)) return true;
        return false;
    }

    enoughResourcesForLatte() {
        if (this.enoughWater(200) && this.enoughCoffee(24) && this.enoughMilk(150)) return true;
        return false;

    }

    enoughResourcesForCappuccino() {
        if (this.enoughWater(250) && this.enoughCoffee(24) && this.enoughMilk(100)) return true;
        return false;
    }

    makeEspresso() {
        this.Water -= 50;
        this.Coffee -= 18;
        this.Money += 1.50;
    }

    makeLatte() {
        this.Water -= 200;
        this.Coffee -= 24;
        this.Milk -= 150;
        this.Money += 2.50;
    }

    makeCappuccino() {
        this.Water -= 250;
        this.Coffee -= 24;
        this.Milk -= 100;
        this.Money += 3.00;
    }
}

module.exports = Resources;