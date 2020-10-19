let doOrder = document.querySelector('#order');
let fillOutForm = document.querySelector('#fill-out-form');
let cancelOrder = document.querySelector('#cancel');
let massageCancel = document.querySelector('#massageCancel');
let confirmOrder = document.querySelector('#confirm');
let cooking = document.querySelector('#cooking');
export let body = document.querySelector('body');
let service = document.querySelector('#service');
let like = document.querySelector('#like');
let dislike = document.querySelector('#dislike');
let checkboxElements = document.querySelectorAll('.checkbox');
let errorMassage = document.querySelector('#alert');
let radioValue = fillOutForm.elements.size.value;
let cheese = document.querySelector('#cheese');
let tomato = document.querySelector('#tomato');
let chicken = document.querySelector('#chicken');
let mushrooms = document.querySelector('#mushrooms');
let sausage = document.querySelector('#sausage');

doOrder.onclick = function () {
    if (!validateCheckbox(checkboxElements)) {
        errorMassage.hidden = false;
        fillOutForm.style.marginBottom = '0px';
        doOrder.removeAttribute('data-toggle')
        return false;
    } else {
        errorMassage.hidden = true;
        fillOutForm.style.marginBottom = '30px';
        doOrder.setAttribute('data-toggle', "modal");
    };

}

cancelOrder.onclick = function () {

    fillOutForm.hidden = true;
    doOrder.hidden = true;
    massageCancel.hidden = false;
    setTimeout(hideCancelOrderShowMassage, 2000)
}

confirmOrder.onclick = function () {

    Order.describeOrder({
        small: radioValue == 'small',
        midle: radioValue == 'midle',
        big: radioValue == 'big',
        cheese: cheese.checked == true,
        tomato: tomato.checked == true,
        chicken: chicken.checked == true,
        mushrooms: mushrooms.checked == true,
        sausage: sausage.checked == true
    })

    fillOutForm.hidden = true;
    doOrder.hidden = true;
    body.classList.add('center')
    setTimeout(cookingShowMassage, 1000);
    setTimeout(travelShowMassage, 3000);
    setTimeout(delivereShowMassage, 6000);
    setTimeout(serviceShowMassage, 9000);

}
like.onclick = function () {

    setTimeout(thankShowMassage, 500);
}
dislike.onclick = function () {
    setTimeout(thankShowMassage, 500);
}

import {Order} from './module/order.js'

function validateCheckbox(checkboxElements) {
    let valid = true;
    let sum = 0;
    for (let elem of checkboxElements) {
        if (elem.checked == true) {
            sum = sum + 1;
        }
    }
    if (sum < 3) {
        valid = false;
    }
    return valid
}
//import validateCheckbox from './module/validate.js'
import { 
    cookingShowMassage, hideCancelOrderShowMassage,
    travelShowMassage, delivereShowMassage,
    serviceShowMassage, thankShowMassage 
} from './module/messages.js'