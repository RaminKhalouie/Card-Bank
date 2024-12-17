// texts
const cardNumberTxt = document.querySelectorAll('h1>strong');
const cardHolderTxt = document.querySelector('h2');
const cardCvvTxt = document.querySelector('.details>h3:last-of-type');
const cardDateTxt = document.querySelectorAll('.details>h3:first-of-type>strong');

// inputs
const cardNumbers = document.querySelectorAll('.card-numbers>input');
const cardHolder = document.getElementById('card-holder');
const cardCvv = document.getElementById('card-cvv2');
const cardYear = document.getElementById('card-year');
const cardMonth = document.getElementById('card-month');

cardNumbers.forEach((el, i) => {
    el.addEventListener('keyup', (e) => {
        if (i != 0 && el.previousElementSibling.value.length != 4) {
            el.value = "";
            el.previousElementSibling.focus();
        } else {
            if (e.key == 'Backspace' && el.value.length == 0) {
                SetValue(cardNumberTxt[i], 'XXXX');
                if (i != 0)
                    el.previousElementSibling.focus();
            } else {
                if (el.value.length > 3) {
                    if (i != 3) {
                        el.nextElementSibling.focus();
                    } else {
                        cardHolder.focus();
                    }
                }

                const val = el.value.slice(0, 4);
                SetValue(cardNumberTxt[i], val);
                el.value = val;
            }

        }
    });
});

cardHolder.addEventListener('keyup', (e) => {
    if (cardHolder.value.length != 0)
        SetValue(cardHolderTxt, cardHolder.value);
    else
        SetValue(cardHolderTxt, 'XXX');
});

cardCvv.addEventListener('keyup', (e) => {
    if (cardCvv.value.length != 0)
        SetValue(cardCvvTxt, cardCvv.value);
    else
        SetValue(cardCvvTxt, 'XXX');
});

cardYear.addEventListener('input', (e) => {
    SetValue(cardDateTxt[0], cardYear.value);
});
cardMonth.addEventListener('input', (e) => {
    SetValue(cardDateTxt[1], cardMonth.value);
});

function SetValue(el, value) {
    el.textContent = value;
}