import Shopska from './shopska.jpeg';
import Musaka from './musaka.jpeg';
import Sarmi from './sarmi.jpeg';
import Shkembe from './shkembe.jpeg';

const ImageTextMap = new Map();

const shopska = "Delicious salad made from cucumber, tomatoes, red onion, pepers, olives and cottage cheese.";
const musaka = "Filling and nutritious meal made out of potatoes, onion, garlic, tomatoes, lamb mince, as well as plenty of fresh spices.";
const sarmi  = "Cabbage or vine leaves stuffed with a mixture of rice, minced meat and spices make up one of the most beloved Bulgarian meals.";
const shkembe = "Shkembe chorba is a soup which leaves no person indifferent. It is said to be an acquired taste, but certainly worth trying out!";

(function () {
    ImageTextMap.set(Shopska, shopska);
    ImageTextMap.set(Musaka, musaka);
    ImageTextMap.set(Sarmi, sarmi);
    ImageTextMap.set(Shkembe, shkembe);
})();

const addItemImage = (item) => {
    const itemImage = new Image();
    itemImage.classList.add("item-image");
    itemImage.src = item;

    return itemImage;
}

const addItemDescription = (text) => {
    const itemDesc = document.createElement("p");
    itemDesc.classList.add("item-desc");
    itemDesc.textContent = text;

    return itemDesc;
}

const addMenu =() => {
    const divMenu = document.createElement("div");
    divMenu.classList.add("inner-div");

    for (const [key, value] of ImageTextMap.entries()) {
        divMenu.appendChild(addItemImage(key));
        divMenu.appendChild(addItemDescription(value));
    }

    return divMenu;
}

export default function initMenu() {
    const menu = document.createElement("div");

    menu.classList.add("tab-content", "hidden");

    menu.setAttribute("id", "menu");

    menu.appendChild(addMenu());

    return menu;
}