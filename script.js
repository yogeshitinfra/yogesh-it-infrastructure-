function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

// Smooth scrolling + menu close
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        // Mobile menu close
        document.getElementById("navbar").classList.remove("active");
    });
});

// Header shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});
