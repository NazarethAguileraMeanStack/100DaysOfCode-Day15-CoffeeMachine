class Wallet {
    constructor(quarters = 0, dimes = 0, nickels = 0, pennies = 0) {
        this._quarters = quarters;
        this._dimes = dimes;
        this._nickels = nickels;
        this._pennies = pennies;
    }

    set Quarters(val) {
        this._quarters = val;
    }

    get Quarters() {
        return this._quarters;
    }

    set Dimes(val) {
        this._dimes = val;
    } 

    get Dimes() {
        return this._dimes;
    }

    set Nickels(val) {
        this._nickels = val;
    }

    get Nickels() {
        return this._nickels;
    }

    set Pennies(val) {
        this._pennies = val;
    } 

    get Pennies() {
        return this._pennies;
    }

    calcTotal() {
        let quarterTotal = this.Quarters * 0.25;
        let dimeTotal = this.Dimes * 0.10;
        let nickelTotal = this.Nickels * 0.05;
        let pennyTotal = this.Pennies * 0.01;
        return quarterTotal + dimeTotal + nickelTotal + pennyTotal;
    }
}

module.exports = Wallet;