const isCardHere = true;
const moneyOnCard = 1000;
let inputMoney = prompt();
if ((isCardHere) && (inputMoney <= moneyOnCard)) {
    console.log("Операция выполняется");
} else {
    console.log("Операция отклонена");
}