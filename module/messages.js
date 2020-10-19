export function cookingShowMassage() {
    cooking.hidden = false;
}
export function hideCancelOrderShowMassage(){
    massageCancel.hidden=true;
    fillOutForm.hidden = false;
    doOrder.hidden = false;
}
export function travelShowMassage() {
    cooking.innerHTML = 'курьер забрал пиццу';
    cooking.style.background = 'orange'
}
export function delivereShowMassage() {
    cooking.innerHTML = 'заказ доставлен';
    cooking.style.background = 'green'
}
export function serviceShowMassage() {
    cooking.hidden = true;
    service.hidden = false;

}
export function thankShowMassage() {
    service.hidden = true;
    body.innerHTML = '<b>Cпасибо за ваш ответ<b>!'
    body.style.color = 'white'
    body.style.fontSize = '28px'
    body.style.fontStyle = 'italic'
}

import {body} from '../main.js'