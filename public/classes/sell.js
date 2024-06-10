export class Sell {
    constructor(seller, details, amount) {
        this.seller = seller;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.seller} sold ${this.details} for $${this.amount}.`;
    }
}
