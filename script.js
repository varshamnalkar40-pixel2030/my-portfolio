console.log("Welcome to my Portfolio!");

// Contact button
const contactBtn = document.querySelector("#home button");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        const contact = document.querySelector("#contact");

        if (contact) {
            contact.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// Navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} Varsham Nalakar. All Rights Reserved.`;
}