export default function openSpecifiedTab(e, content) {
    const tabContents = Array.from(document.querySelectorAll(".tab-content"));
    tabContents.forEach(tab => tab.classList.add("hidden"));

    const btnsTab = Array.from(document.querySelectorAll(".btn-tab"));
    btnsTab.forEach(btn => btn.classList.remove("btn-active"));

    document.querySelector(`#${content}`).classList.remove("hidden");
    e.target.classList.add("btn-active");
}