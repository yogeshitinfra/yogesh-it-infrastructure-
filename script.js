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
// Hero Image Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}, 4000);
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

fades.forEach(section => {
    observer.observe(section);
});
// Counter Animation
const counters = document.querySelectorAll("#stats h3");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            counters.forEach(counter => {

                const target = parseInt(counter.innerText);
                let count = 0;

                const update = () => {
                    count += Math.ceil(target / 50);

                    if (count >= target) {
                        counter.innerText = target + "+";
                    } else {
                        counter.innerText = count;
                        requestAnimationFrame(update);
                    }
                };

                update();
            });

            counterObserver.disconnect();
        }
    });
});

document.querySelector("#stats") && counterObserver.observe(document.querySelector("#stats"));
