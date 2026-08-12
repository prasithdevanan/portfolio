
//------------------------------------------Re-Load Screen scroll into Top-------------------//



// window.addEventListener("load", () => {
//     window.scrollTo(0,0)
// })




/*-----------------Menu icon --------------*/

const navMobile = document.getElementById("nav-mobile");
const menuIcon = document.querySelector(".menuIcon");
const navMobileBackdrop = document.getElementById("nav-mobile-backdrop");

navMobile.classList.remove("show")

menuIcon.addEventListener("click", function () {
    if (window.innerWidth <= 819) {
        navMobile.classList.toggle("show");
        document.body.classList.toggle("freeze-scroll");
        navMobileBackdrop.classList.toggle("backdrop");
    }

    else {
        navMobile.classList.remove("show");
        document.body.classList.remove("freeze-scroll");
        navMobileBackdrop.classList.remove("backdrop");
    }
})

window.addEventListener("resize", function () {
    if (this.window.innerWidth > 820) {
        navMobile.classList.remove("show");
        document.body.classList.remove("freeze-scroll");
        navMobileBackdrop.classList.remove("backdrop");
    }
})

window.addEventListener("click", function (event) {
    if (!navMobile.contains(event.target) && !menuIcon.contains(event.target) && navMobile.classList.contains("show") &&
        document.body.classList.contains("freeze-scroll") && navMobileBackdrop.classList.contains("backdrop")) {
        navMobile.classList.remove("show");
        document.body.classList.remove("freeze-scroll");
        navMobileBackdrop.classList.remove("backdrop");
    }
})


function Myfunction() {
    navMobile.classList.remove("show");
    document.body.classList.remove("freeze-scroll");
    navMobileBackdrop.classList.remove("backdrop");
}


// ------------------------photoshopLogo Animation----------------------//


function initHeroTools() {
    const container = document.getElementById("hero-tools");
    if (!container) return;

    const logos = Array.from(container.querySelectorAll(".tool"));

    // Wait for all images to load
    Promise.all(
        logos.map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => img.onload = resolve);
        })
    ).then(() => startAnimation(container, logos));
}

function startAnimation(container, logos) {
    const directions = [];
    const rotations = [];
    const rotationSpeeds = [];
    const positions = [];

    function isOverlapping(pos1, w1, h1, pos2, w2, h2) {
        return !(
            pos1.x + w1 < pos2.x ||
            pos1.x > pos2.x + w2 ||
            pos1.y + h1 < pos2.y ||
            pos1.y > pos2.y + h2
        );
    }

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    logos.forEach((logo, i) => {
        const logoWidth = logo.offsetWidth;
        const logoHeight = logo.offsetHeight;

        let position;
        let attempts = 0;

        do {
            position = {
                x: Math.random() * (containerWidth - logoWidth),
                y: Math.random() * (containerHeight - logoHeight)
            };

            let overlap = false;

            for (let j = 0; j < i; j++) {
                if (isOverlapping(
                    position, logoWidth, logoHeight,
                    positions[j],
                    logos[j].offsetWidth,
                    logos[j].offsetHeight
                )) {
                    overlap = true;
                    break;
                }
            }

            if (!overlap) break;
            attempts++;
        } while (attempts < 100);

        positions[i] = position;

        directions[i] = {
            x: (Math.random() - 0.5) * 0.8,
            y: (Math.random() - 0.5) * 0.8
        };

        rotations[i] = Math.random() * 360;
        rotationSpeeds[i] = (Math.random() - 0.5) * 0.8;

        logo.style.transform =
            `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotations[i]}deg)`;
    });

    function animate() {
        logos.forEach((logo, i) => {
            const w = logo.offsetWidth;
            const h = logo.offsetHeight;

            positions[i].x += directions[i].x;
            positions[i].y += directions[i].y;

            if (positions[i].x < 0 || positions[i].x > containerWidth - w) {
                directions[i].x *= -1;
            }

            if (positions[i].y < 0 || positions[i].y > containerHeight - h) {
                directions[i].y *= -1;
            }

            rotations[i] += rotationSpeeds[i];

            logo.style.transform =
                `translate3d(${positions[i].x}px, ${positions[i].y}px, 0) rotate(${rotations[i]}deg)`;
        });

        requestAnimationFrame(() => {
            requestAnimationFrame(animate);
        });
    }

    animate();
}






// const emailInput = document.getElementById("email-input");

// emailInput.addEventListener("input", function () {
//     emailInput.value = emailInput.value.toLowerCase();
// });


// const areaText = document.getElementById("autoExpand");


// areaText.addEventListener("input", function () {
//     this.style.height = "auto";
//     this.style.height = (this.scrollHeight) + "px";
//     this.style.resize = "none";
// })



// -----------------------------------------footer-------------------------------------//

const footer = document.getElementById("footer-message");



window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;

    const newFontSize = Math.max(windowWidth * 0.08, 20);

    footer.style.fontSize = `${newFontSize}px`
})

const windowWidth = window.innerWidth;
const newFontSize = Math.max(windowWidth * 0.08, 20);
footer.style.fontSize = `${newFontSize}px`


const fixed = document.getElementById("fixedElement");


// ---------------------------------------top Symbol-------------------------------------------//
// window.addEventListener("scroll", () => {
//     const scrollTop = window.scrollY;
//     const windowHeight = window.innerHeight;
//     const docHeight = document.documentElement.scrollHeight;

//     if (scrollTop + windowHeight >= 1200) {
//         fixed.style.display = "none";
//     }
//     else {
//         fixed.style.display = "flex";
//     }

// })


// ---------------------------cursor change--------------//

const cursor = document.querySelector(".cursor-circle");

document.addEventListener('mousemove', (event) => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});



///---------------------image loading ---------------------//
function initImageLoading() {
    const container = document.getElementById("hero-tools");
    console.log(container);
    const images = container.querySelectorAll("img");
    let loadedCound = 0;

    images.forEach(img => {
        if (img.complete) {
            loadedCound++;
        } else {
            img.addEventListener("load", () => {
                loadedCound++;
                if (loadedCound === images.length) {
                    container.classList.remove("hidden");
                    container.classList.add("show");
                }
            })
        }
    });

    if (loadedCound === images.length) {
        container.classList.remove("hidden");
        container.classList.add("show");
    }
};

function initCustomCursor() {

    // Don't run on mobile/touch devices
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
        return;
    }

    // Create cursor
    const cursor = document.createElement("div");

    cursor.className = "custom-cursor";

    cursor.innerHTML = `
        <i class="bi bi-cursor"></i>
    `;

    document.body.appendChild(cursor);


    // Move cursor
    document.addEventListener("mousemove", (e) => {

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        cursor.classList.remove("hidden");

    });


    // Hide when leaving window
    document.addEventListener("mouseleave", () => {
        cursor.classList.add("hidden");
    });


    document.addEventListener("mouseenter", () => {
        cursor.classList.remove("hidden");
    });


    // Hover elements
    const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, select"
    );


    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });

        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });

    });

}


