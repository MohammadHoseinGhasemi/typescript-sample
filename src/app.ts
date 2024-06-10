// imported ts files
import { Sell } from "./classes/sell.js";
import { Buy } from "./classes/buy.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";


// select html tags
const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const Name = document.querySelector('#Name') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// form event listener 
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [Name.value, details.value, amount.valueAsNumber];



    let doc: HasFormatter;
    if (type.value === 'Sell') {
        doc = new Sell(...values);
    } else {
        doc = new Buy(...values);
    }

    list.render(doc, type.value, 'end');
})