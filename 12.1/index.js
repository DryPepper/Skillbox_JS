const giftArr = [{
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "img/gift.png"
    },
    {
    title: "Скидка 10% на всё!",
    icon: "img/gift.png"
    },
    {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "img/gift.png"
    },
    {
    title: "Бесплатная доставка для вас!",
    icon: "img/gift.png"
    },
    {
    title: "Сегодня день больших скидок!",
    icon: "img/gift.png"
}]

function showPopup() {
    const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];

    const popup = document.createElement("div");
    popup.classList.add("popup");

    const popupText = document.createElement("div");

    const icon = document.createElement("img");
    icon.src = randomGift.icon;

    const title = document.createElement("p");
    title.textContent = randomGift.title;

    const button = document.createElement("button");
    button.textContent = "Отлично!";
    button.addEventListener("click", () => {
        popup.remove();
    });

    popup.append(icon);
    popup.append(popupText)
    popupText.append(title);
    popupText.append(button);

    document.body.append(popup);
}

setTimeout(showPopup, 3000);