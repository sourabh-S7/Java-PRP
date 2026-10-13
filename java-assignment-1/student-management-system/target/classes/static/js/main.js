// Small progressive enhancement: mobile navigation and current year in the footer.
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (toggle && navigation) {
        toggle.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.textContent = isOpen ? "×" : "☰";
        });
    }

    document.querySelectorAll(".year").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
});
