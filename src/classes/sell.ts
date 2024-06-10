import { HasFormatter } from "../interfaces/HasFormatter.js";


// exporting sell class
export class Sell implements HasFormatter {

    constructor(
        public seller: string,
        private details: string,
        readonly amount: number
    ) { }
    format() {
        return `${this.seller} sold ${this.details} for $${this.amount}.`
    }

}

