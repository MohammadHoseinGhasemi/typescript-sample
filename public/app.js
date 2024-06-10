import { Sell } from "./classes/sell.js";
import { Buy } from "./classes/buy.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const Name = document.querySelector('#Name');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [Name.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'Sell') {
        doc = new Sell(...values);
    }
    else {
        doc = new Buy(...values);
    }
    list.render(doc, type.value, 'end');
});
