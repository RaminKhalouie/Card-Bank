// texts
const bankLogo = document.getElementById('bank-logo');
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
                if (val != '') {
                    SetValue(cardNumberTxt[i], val);
                    el.value = val;
                } else {
                    SetValue(cardNumberTxt[i], 'XXXX');
                }

                //Identify bank
                if (i == 1) {
                    const bankID = (el.previousElementSibling.value.trim() + val).slice(0, 6);
                    SetBanckImage(bankID);
                }
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

function SetBanckImage(cardNumber) {
    let imgName = "";
    switch (cardNumber) {
        case '606373':
            imgName = "mehr.jpg";
            break;
        case '603799':
            imgName = "bmilogo.svg";
            break;
        case '603770':
            imgName = "Bank-Keshavarzi-Logo.svg";
            break;
        case '603769':
            imgName = "Bank-Saderat-Iran.svg";
            break;
        case '627353':
            imgName = "Tejarat_Bank_Logo.svg";
            break;
        case '627961':
            imgName = "Bank-of-Industry-and-Mine-Logo.svg";
            break;
        case '610433':
            imgName = "Mellat.svg";
            break;
        case '589463':
            imgName = "Bank-Refah-Kargaran-Logo.svg";
            break;
        case '628023':
            imgName = "Maskan.svg";
            break;
        case '589210':
        case '627381':
        case '606737':
            imgName = "Bank-Sepah-Logo.svg";
            break;
        case '627648':
            imgName = "Export-Development-Bank-of-Iran-Logo.svg";
            break;
        case '627760':
            imgName = "post-bank.png";
            break;
        case '621986':
            imgName = "bank-saman1.svg";
            break;
        case '627488':
            imgName = "Karafarin-Bank-Logo.svg";
            break;
        case '622106':
            imgName = "Parsian-Bank-Logo.svg";
            break;
        case '627419':
            imgName = "enbank.svg";
            break;
        case '639347':
            imgName = "Pasargad-Bank-Logo.svg";
            break;
        case '639346':
            imgName = "bank-sina.png";
            break;
        case '502806':
            imgName = "Bank-shahr.svg";
            break;
        case '639607':
            imgName = "Sarmayeh-Bank-Logo.svg";
            break;
        case '502908':
            imgName = "Tosee-Taavon-Bank-Logo.svg";
            break;
        case '636214':
            imgName = "Bank-Ayandeh-Logo.svg";
            break;
        case '502938':
            imgName = "Bank-Day-logo.svg";
            break;
        case '504172':
            imgName = "resalat-Bank.svg";
            break;
        case '606256':
            imgName = "melal.png";
            break;
        case '639599':
            imgName = "Ghavamin-Bank-Logo.svg";
            break;
        case '636949':
            imgName = "Bank-Hekmat-Iranian-Logo.svg";
            break;
        case '505416':
            imgName = "Tourism-Bank-Logo.svg";
            break;
        default:
            bankLogo.src = 'assets/images/atm-card.png';
            break;
    }

    if (imgName != "") {
        bankLogo.src = 'assets/images/banks/' + imgName;
    }
}