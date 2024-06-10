export class Buy {
    constructor(buyer, details, amount) {
        this.buyer = buyer;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.buyer} bought ${this.details} for $${this.amount}.`;
    }
}
