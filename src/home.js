const infoText = "The Bulgarian cuisine, similar to the country's history, culture and nature, is very old and centered in the taste of tradition.\nTaste of Bulgaria aims to expose its visitors to this richness by offering hallmark Bulgarian meals made with local organic products. The restaurant's location at the highest peak on the Balkans - Musala - further enhances the sense of immersion into the Bulgarian domain. We hope you enjoy our meals as much as we enjoy preparing them!";

const addInfo = () => {
    const divInfo = document.createElement("div");
    divInfo.classList.add("inner-div");

    const parInfo = document.createElement("p");
    parInfo.textContent = infoText;
    parInfo.classList.add("info-text");

    divInfo.appendChild(parInfo);

    return divInfo;
}

export default function initHome() {
    const home = document.createElement("div");

    home.classList.add("tab-content"); // display home by default

    home.setAttribute("id", "home");

    home.appendChild(addInfo());

    return home;
}

