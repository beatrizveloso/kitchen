const btn = document.getElementById("mobile_btn");
const menu = document.getElementById("mobile_menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});