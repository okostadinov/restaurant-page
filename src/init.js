import initHome from "./home";
import initMenu from "./menu";
import initContact from "./contact";
import openSpecifiedTab from "./open-tab";
import "./style.css";
import Rila from './rila.jpg';


const addHeading = () => {
    const heading = document.createElement("h1");
    heading.textContent = "Taste of Bulgaria";

    return heading;
};

const addBackgroundImage = () => {
    const imgBackground = new Image();
    imgBackground.src = Rila;
    imgBackground.classList.add("img-background");

    return imgBackground;
}

const addTabContent = () => {
    const tabContentContainer = document.createElement("div");
    tabContentContainer.classList.add("tab-container");

    tabContentContainer.appendChild(initHome());

    tabContentContainer.appendChild(initMenu());

    tabContentContainer.appendChild(initContact());

    return tabContentContainer;
};

const addTabBar = () => {
    const tab = document.createElement("div");
    tab.classList.add("tab");

    tab.appendChild(addBtnToTab("home"));

    tab.appendChild(addBtnToTab("menu"));
    
    tab.appendChild(addBtnToTab("contact"));

    return tab;
};

const addBtnToTab = content => {
    const btn = document.createElement("button");

    btn.classList.add("btn-tab");

    btn.textContent = `${content[0].toUpperCase() + content.slice(1)}`;

    btn.addEventListener("click", (e) => openSpecifiedTab(e, content));

    return btn;
};

export default function init() {
    const htmlBody = document.querySelector("body");

    const container = document.createElement("div");

    container.setAttribute("id", "container");

    container.appendChild(addHeading());

    container.appendChild(addTabBar());

    container.appendChild(addTabContent());

    htmlBody.appendChild(container);
}