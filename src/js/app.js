import { creditCardValidator }  from './validator';
import { numberCardMajorBrands } from './pay';

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('card_number');
    const cardNumber = document.getElementById('card_number').value;
    const result = creditCardValidator(cardNumber);
    console.log(cardNumber);
    if (result) {
        console.log(numberCardMajorBrands(cardNumber));
        alert(`Карта прошла валидацию.\nПлатежная система: ${numberCardMajorBrands(cardNumber)}`);
        // input.setCustomValidity('Карта прошла валидацию');
        // input.reportValidity();
    }    
    if (!result) {
        alert('Неверный номер карты, повторите попытку');
        // input.setCustomValidity('Неверный номер, повторите попытку');
        // input.reportValidity();
        input.value = '';
    }
});
