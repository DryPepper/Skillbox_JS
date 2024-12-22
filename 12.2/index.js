const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
};


function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    for (let cookie of cookieArr) {
        const [key, value] = cookie.trim().split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}


function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

document.addEventListener("DOMContentLoaded", () => {
    const promoInput = document.querySelector('.promo-input')
    const promoButton = document.querySelector('.button')
    const message = document.querySelector('.message')


    const savedPromo = getCookie("promocode");
    if (savedPromo === promocodeObj.promocode) {
        promoInput.value = promocodeObj.promocode;
        message.textContent = `Промокод применён: ${promocodeObj.gift}`;
        message.className = "message success";
    }


    promoButton.addEventListener("click", () => {
        const enteredCode = promoInput.value.trim().toUpperCase();

        if (enteredCode === promocodeObj.promocode) {
            setCookie("promocode", enteredCode, 30);
            message.textContent = `Промокод применён: ${promocodeObj.gift}`;
            message.className = "message success";
        } else {
            message.textContent = "Неверный промокод.";
            message.className = "message error";
        }
    });
});