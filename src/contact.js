import Location from './location.png';

const number = "+359 88 888-88-88";
const address = "Musala Peak, Rila Mountain, Bulgaria";

const addLocationImage = () => {
    const loc = new Image();
    loc.classList.add("loc-image");
    loc.src = Location;

    return loc;
}

const addContactInfo = (info) => {
    const parInfo = document.createElement("p");
    parInfo.classList.add("contact-info");
    parInfo.textContent = info;

    return parInfo;
}

const addContactDiv = () => {
    const divContact = document.createElement("div");
    divContact.classList.add("inner-div");
    
    divContact.appendChild(addContactInfo(number));

    divContact.appendChild(addContactInfo(address));

    divContact.appendChild(addLocationImage());

    return divContact;

}

export default function initContact() {
    const contact = document.createElement("div");

    contact.classList.add("tab-content", "hidden");

    contact.setAttribute("id", "contact");

    contact.appendChild(addContactDiv());

    return contact;
}