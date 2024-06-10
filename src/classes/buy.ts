import { HasFormatter } from "../interfaces/HasFormatter.js"

// exporting buy class
export class Buy implements HasFormatter {
    constructor(
        public buyer : String,
        private details : String,
        readonly amount:Number
    ){}
    format(){
        return `${this.buyer} bought ${this.details} for $${this.amount}.`
    }
}